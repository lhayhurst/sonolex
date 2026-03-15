import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import request from 'supertest'
import { createApp } from './app'
import { Storage } from './lib/storage'
import { createDevice, createManual } from '../src/types/index'

// Mock claude-cli so tests don't actually call claude
vi.mock('./lib/claude-cli', () => ({
  runClaude: vi.fn().mockResolvedValue({
    text: JSON.stringify({
      title: 'Test Manual',
      summary: 'A test device for testing.',
      sections: [{ heading: 'Overview', content: 'Test content', level: 1 }],
    }),
    usage: { inputTokens: 100, outputTokens: 50, costUsd: 0.01, durationMs: 5000 },
  }),
  stripMarkdownFences: vi.fn((t: string) => t),
  isClaudeAvailable: vi.fn().mockResolvedValue(true),
}))

import { runClaude } from './lib/claude-cli'

describe('API routes', () => {
  let tempDir: string
  let storage: Storage
  let app: ReturnType<typeof createApp>

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'sonolex-api-test-'))
    storage = new Storage(tempDir)
    await storage.init()
    app = createApp(storage, tempDir)
    vi.clearAllMocks()
  })

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true })
  })

  describe('GET /api/studio', () => {
    it('returns studio data', async () => {
      const res = await request(app).get('/api/studio')
      expect(res.status).toBe(200)
      expect(res.body.meta.name).toBe('My Studio')
      expect(res.body.devices).toEqual([])
    })
  })

  describe('PUT /api/studio', () => {
    it('saves and returns updated studio data', async () => {
      const device = createDevice({ id: 'test', name: 'Test', category: 'other' })
      const studio = {
        devices: [device],
        connections: [],
        manuals: [],
        meta: { name: 'Updated Studio', lastModified: new Date().toISOString(), version: 1 },
      }

      const res = await request(app)
        .put('/api/studio')
        .send(studio)
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200)
      expect(res.body.meta.name).toBe('Updated Studio')

      const getRes = await request(app).get('/api/studio')
      expect(getRes.body.devices).toHaveLength(1)
    })
  })

  describe('GET /api/manuals', () => {
    it('returns empty list initially', async () => {
      const res = await request(app).get('/api/manuals')
      expect(res.status).toBe(200)
      expect(res.body).toEqual([])
    })

    it('returns all manuals after adding', async () => {
      await storage.saveManual(createManual({ id: 'm1', title: 'Manual 1', content: 'text' }))
      const res = await request(app).get('/api/manuals')
      expect(res.status).toBe(200)
      expect(res.body).toHaveLength(1)
      expect(res.body[0].title).toBe('Manual 1')
    })
  })

  describe('GET /api/manuals/:id', () => {
    it('returns a specific manual', async () => {
      await storage.saveManual(createManual({ id: 'm1', title: 'Manual 1', content: 'text' }))
      const res = await request(app).get('/api/manuals/m1')
      expect(res.status).toBe(200)
      expect(res.body.title).toBe('Manual 1')
    })

    it('returns 404 for non-existent manual', async () => {
      const res = await request(app).get('/api/manuals/nope')
      expect(res.status).toBe(404)
    })
  })

  describe('POST /api/manuals', () => {
    it('creates a new manual', async () => {
      const manual = { id: 'm1', title: 'New Manual', content: 'new text' }
      const res = await request(app)
        .post('/api/manuals')
        .send(manual)
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(201)
      expect(res.body.title).toBe('New Manual')

      const loaded = await storage.loadManual('m1')
      expect(loaded!.content).toBe('new text')
    })
  })

  describe('DELETE /api/manuals/:id', () => {
    it('deletes a manual', async () => {
      await storage.saveManual(createManual({ id: 'm1', title: 'Manual 1', content: 'text' }))
      const res = await request(app).delete('/api/manuals/m1')
      expect(res.status).toBe(204)

      const loaded = await storage.loadManual('m1')
      expect(loaded).toBeUndefined()
    })

    it('returns 204 even for non-existent manual (idempotent)', async () => {
      const res = await request(app).delete('/api/manuals/nope')
      expect(res.status).toBe(204)
    })
  })

  describe('GET /api/export', () => {
    it('exports complete studio data with manuals', async () => {
      await storage.saveManual(createManual({ id: 'm1', title: 'Manual 1', content: 'text' }))
      const res = await request(app).get('/api/export')
      expect(res.status).toBe(200)
      expect(res.body.manuals).toHaveLength(1)
      expect(res.body.meta).toBeDefined()
    })
  })

  // Minimal valid PDF for upload tests
  const MINIMAL_PDF = Buffer.from(
    '%PDF-1.0\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n' +
    '2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n' +
    '3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj\n' +
    '4 0 obj<</Length 44>>stream\nBT /F1 12 Tf 100 700 Td (Hello World) Tj ET\nendstream\nendobj\n' +
    '5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj\n' +
    'xref\n0 6\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n' +
    '0000000115 00000 n \n0000000266 00000 n \n0000000360 00000 n \n' +
    'trailer<</Size 6/Root 1 0 R>>\nstartxref\n431\n%%EOF'
  )

  describe('POST /api/upload-pdf', () => {
    it('extracts text from PDF and converts via Claude CLI', async () => {
      const res = await request(app)
        .post('/api/upload-pdf')
        .attach('pdf', MINIMAL_PDF, 'test-manual.pdf')

      expect(res.status).toBe(201)
      expect(res.body.title).toBe('Test Manual')
      expect(res.body.sections).toHaveLength(1)
      expect(res.body.id).toBeDefined()
      expect(res.body.sourceFileName).toBe('test-manual.pdf')

      const saved = await storage.loadManual(res.body.id)
      expect(saved).toBeDefined()
      expect(saved!.title).toBe('Test Manual')
    })

    it('returns 400 when no file uploaded', async () => {
      const res = await request(app).post('/api/upload-pdf')
      expect(res.status).toBe(400)
    })

    it('saves the original PDF and returns pdfPath', async () => {
      const res = await request(app)
        .post('/api/upload-pdf')
        .attach('pdf', MINIMAL_PDF, 'test-manual.pdf')

      expect(res.status).toBe(201)
      expect(res.body.pdfPath).toBeDefined()

      // Verify PDF file was saved
      const { readFile: rf } = await import('node:fs/promises')
      const savedPdf = await rf(join(tempDir, 'pdfs', `${res.body.id}.pdf`))
      expect(savedPdf.length).toBeGreaterThan(0)
    })

    it('serves the original PDF via GET /api/manuals/:id/pdf', async () => {
      const uploadRes = await request(app)
        .post('/api/upload-pdf')
        .attach('pdf', MINIMAL_PDF, 'test-manual.pdf')

      const pdfRes = await request(app).get(`/api/manuals/${uploadRes.body.id}/pdf`)
      expect(pdfRes.status).toBe(200)
      expect(pdfRes.headers['content-type']).toMatch(/pdf/)
      expect(pdfRes.body.length).toBe(MINIMAL_PDF.length)
    })

    it('returns 404 for PDF of non-existent manual', async () => {
      const res = await request(app).get('/api/manuals/nope/pdf')
      expect(res.status).toBe(404)
    })

    it('returns 503 when Claude CLI fails', async () => {
      vi.mocked(runClaude).mockRejectedValueOnce(
        new Error('claude CLI failed: command not found')
      )

      const res = await request(app)
        .post('/api/upload-pdf')
        .attach('pdf', MINIMAL_PDF, 'test.pdf')

      expect(res.status).toBe(503)
      expect(res.body.error).toMatch(/claude cli/i)
    })
  })

  describe('POST /api/estimate-conversion', () => {
    it('returns null estimate with no history', async () => {
      const res = await request(app)
        .post('/api/estimate-conversion')
        .send({ inputChars: 50000 })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200)
      expect(res.body.estimatedMs).toBeNull()
    })

    it('returns estimate after a conversion has been recorded', async () => {
      // Upload a PDF to create history
      await request(app)
        .post('/api/upload-pdf')
        .attach('pdf', MINIMAL_PDF, 'test.pdf')

      const res = await request(app)
        .post('/api/estimate-conversion')
        .send({ inputChars: 50000 })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200)
      expect(typeof res.body.estimatedMs).toBe('number')
    })
  })

  describe('GET /api/config/status', () => {
    it('returns claude availability', async () => {
      const res = await request(app).get('/api/config/status')
      expect(res.status).toBe(200)
      expect(res.body.claudeAvailable).toBe(true)
    })
  })
})
