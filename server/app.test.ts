// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import request from 'supertest'
import { createApp } from './app'
import { Storage } from './lib/storage'
import { createDevice, createManual } from '../src/types/index'
import type { Express } from 'express'

// Mock claude-cli so tests don't actually call claude
vi.mock('./lib/claude-cli', () => ({
  runClaude: vi.fn().mockResolvedValue({
    text: JSON.stringify({
      title: 'Test Manual',
      summary: 'A test device for testing.',
      sections: [{ heading: 'Overview', content: 'Test content', level: 1 }],
    }),
    usage: { inputTokens: 100, outputTokens: 50, costUsd: 0.01, durationMs: 5000 },
    sessionId: 'test-session-123',
  }),
  stripMarkdownFences: vi.fn((t: string) => t),
  isClaudeAvailable: vi.fn().mockResolvedValue(true),
}))

import { runClaude } from './lib/claude-cli'

// Mock claude-stream for streaming chat
vi.mock('./lib/claude-stream', () => ({
  runClaudeStream: vi.fn(async function* () {
    yield {
      type: 'thinking',
      text: 'Let me help with that.',
    }
    yield {
      type: 'thinking_complete',
      text: 'Let me help with that.',
    }
    yield {
      type: 'text',
      text: 'Here is my response.',
    }
    yield {
      type: 'result',
      text: 'Here is my response.',
      sessionId: 'test-session-123',
      usage: { inputTokens: 100, outputTokens: 50, costUsd: 0.01, durationMs: 5000 },
    }
  }),
}))

// Mock web-crawler
vi.mock('./lib/web-crawler', () => ({
  crawlDocs: vi.fn(),
  discoverPages: vi.fn(),
}))

import { crawlDocs } from './lib/web-crawler'

describe('API routes', () => {
  let tempDir: string
  let storage: Storage
  let app: Express

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'sonolex-api-test-'))
    storage = new Storage(tempDir)
    await storage.init()
    app = await createApp(storage, tempDir)
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

  describe('GET /api/manuals/:id/markdown', () => {
    it('returns the manual content as a downloadable markdown file', async () => {
      await storage.saveManual(
        createManual({ id: 'm1', title: 'My Manual', content: '# Hello\n\nSome text.' })
      )
      const res = await request(app).get('/api/manuals/m1/markdown')
      expect(res.status).toBe(200)
      expect(res.headers['content-type']).toMatch(/markdown/)
      expect(res.headers['content-disposition']).toMatch(/attachment/)
      expect(res.headers['content-disposition']).toMatch(/\.md/)
      expect(res.text).toBe('# Hello\n\nSome text.')
    })

    it('returns 404 for non-existent manual', async () => {
      const res = await request(app).get('/api/manuals/nope/markdown')
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

  // Helper to extract the 'done' event from NDJSON upload response
  function parseDoneEvent(text: string): any {
    const events = parseNdjson(text)
    return events.find((e: any) => e.type === 'done')
  }

  describe('POST /api/upload-pdf', () => {
    it('extracts text from PDF and converts via Claude CLI', async () => {
      const res = await request(app)
        .post('/api/upload-pdf')
        .attach('pdf', MINIMAL_PDF, 'test-manual.pdf')

      expect(res.status).toBe(200)
      const done = parseDoneEvent(res.text)
      expect(done).toBeDefined()
      expect(done.manual.title).toBe('Test Manual')
      expect(done.manual.sections).toHaveLength(1)
      expect(done.manual.id).toBeDefined()
      expect(done.manual.sourceFileName).toBe('test-manual.pdf')

      const saved = await storage.loadManual(done.manual.id)
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

      expect(res.status).toBe(200)
      const done = parseDoneEvent(res.text)
      expect(done.manual.pdfPath).toBeDefined()

      const { readFile: rf } = await import('node:fs/promises')
      const savedPdf = await rf(join(tempDir, 'pdfs', `${done.manual.id}.pdf`))
      expect(savedPdf.length).toBeGreaterThan(0)
    })

    it('serves the original PDF via GET /api/manuals/:id/pdf', async () => {
      const uploadRes = await request(app)
        .post('/api/upload-pdf')
        .attach('pdf', MINIMAL_PDF, 'test-manual.pdf')

      const done = parseDoneEvent(uploadRes.text)
      const pdfRes = await request(app).get(`/api/manuals/${done.manual.id}/pdf`)
      expect(pdfRes.status).toBe(200)
      expect(pdfRes.headers['content-type']).toMatch(/pdf/)
      expect(pdfRes.body.length).toBe(MINIMAL_PDF.length)
    })

    it('returns 404 for PDF of non-existent manual', async () => {
      const res = await request(app).get('/api/manuals/nope/pdf')
      expect(res.status).toBe(404)
    })

    it('streams error when Claude CLI fails', async () => {
      vi.mocked(runClaude).mockRejectedValueOnce(
        new Error('claude CLI failed: command not found')
      )

      const res = await request(app)
        .post('/api/upload-pdf')
        .attach('pdf', MINIMAL_PDF, 'test.pdf')

      const events = parseNdjson(res.text)
      const errorEvent = events.find((e: any) => e.type === 'error')
      expect(errorEvent).toBeDefined()
      expect((errorEvent as any).message).toMatch(/claude cli/i)
    })

    it('streams all events as valid JSON', async () => {
      const res = await request(app)
        .post('/api/upload-pdf')
        .attach('pdf', MINIMAL_PDF, 'test-manual.pdf')

      const lines = res.text.split('\n').filter(l => l.trim())
      for (const line of lines) {
        expect(() => JSON.parse(line)).not.toThrow()
      }
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

  // --- Chat Sessions ---

  // Helper: create a session and return its ID
  async function createSession(name?: string) {
    const res = await request(app)
      .post('/api/chat/sessions')
      .send({ name })
      .set('Content-Type', 'application/json')
    return res.body
  }

  describe('GET /api/chat/sessions', () => {
    it('returns empty list initially', async () => {
      const res = await request(app).get('/api/chat/sessions')
      expect(res.status).toBe(200)
      expect(res.body).toEqual([])
    })

    it('returns created sessions', async () => {
      await createSession('First')
      await createSession('Second')

      const res = await request(app).get('/api/chat/sessions')
      expect(res.status).toBe(200)
      expect(res.body).toHaveLength(2)
    })
  })

  describe('POST /api/chat/sessions', () => {
    it('creates a session with a name', async () => {
      const res = await request(app)
        .post('/api/chat/sessions')
        .send({ name: 'My Chat' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(201)
      expect(res.body.name).toBe('My Chat')
      expect(res.body.id).toBeDefined()
    })

    it('creates a session with default name', async () => {
      const res = await request(app)
        .post('/api/chat/sessions')
        .send({})
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(201)
      expect(res.body.name).toBe('New Chat')
    })
  })

  describe('PATCH /api/chat/sessions/:id', () => {
    it('renames a session', async () => {
      const session = await createSession('Old Name')

      const res = await request(app)
        .patch(`/api/chat/sessions/${session.id}`)
        .send({ name: 'New Name' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200)

      const listRes = await request(app).get('/api/chat/sessions')
      expect(listRes.body[0].name).toBe('New Name')
    })

    it('returns 404 for unknown session', async () => {
      const res = await request(app)
        .patch('/api/chat/sessions/nonexistent')
        .send({ name: 'Name' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(404)
    })

    it('returns 400 when no name provided', async () => {
      const session = await createSession()

      const res = await request(app)
        .patch(`/api/chat/sessions/${session.id}`)
        .send({})
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(400)
    })
  })

  describe('DELETE /api/chat/sessions/:id', () => {
    it('deletes a session', async () => {
      const session = await createSession('To Delete')

      const res = await request(app).delete(`/api/chat/sessions/${session.id}`)
      expect(res.status).toBe(204)

      const listRes = await request(app).get('/api/chat/sessions')
      expect(listRes.body).toHaveLength(0)
    })

    it('returns 404 for unknown session', async () => {
      const res = await request(app).delete('/api/chat/sessions/nonexistent')
      expect(res.status).toBe(404)
    })
  })

  describe('POST /api/chat/sessions/:id/messages', () => {
    it('streams NDJSON with thinking, text, and done events', async () => {
      const session = await createSession('Test Chat')

      const res = await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Hello, help me with my studio' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200)

      // Parse NDJSON lines
      const lines = res.text.trim().split('\n').map(l => JSON.parse(l))
      const types = lines.map(l => l.type)
      expect(types).toContain('thinking')
      expect(types).toContain('text')
      expect(types).toContain('done')

      const done = lines.find(l => l.type === 'done')
      expect(done.text).toBe('Here is my response.')
      expect(done.usage).toBeDefined()
    })

    it('sets streaming-friendly headers for real-time delivery', async () => {
      const session = await createSession('Stream Headers')

      const res = await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Hello' })
        .set('Content-Type', 'application/json')

      expect(res.headers['content-type']).toContain('application/x-ndjson')
      expect(res.headers['cache-control']).toBe('no-cache')
      expect(res.headers['connection']).toBe('keep-alive')
    })

    it('passes effort high when deepThinking is true', async () => {
      const { runClaudeStream: mockStream } = await import('./lib/claude-stream')

      const session = await createSession('Deep Think')
      await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Hello', deepThinking: true })
        .set('Content-Type', 'application/json')

      expect(vi.mocked(mockStream)).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ effort: 'high' }),
      )
    })

    it('does not pass effort when deepThinking is false', async () => {
      const { runClaudeStream: mockStream } = await import('./lib/claude-stream')

      const session = await createSession('Normal')
      await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Hello', deepThinking: false })
        .set('Content-Type', 'application/json')

      const callOpts = vi.mocked(mockStream).mock.calls[0][1]
      expect(callOpts?.effort).toBeUndefined()
    })

    it('sends error as NDJSON when stream fails mid-response', async () => {
      const { runClaudeStream: mockStream } = await import('./lib/claude-stream')
      vi.mocked(mockStream).mockImplementation(async function* () {
        yield { type: 'text' as const, text: 'partial' }
        throw new Error('CLI crashed')
      })

      const session = await createSession('Error Test')
      const res = await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Hello' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200) // headers already sent as 200
      const lines = res.text.trim().split('\n').map(l => JSON.parse(l))
      const errorLine = lines.find(l => l.type === 'error')
      expect(errorLine).toBeDefined()
      expect(errorLine.error).toContain('CLI crashed')
    })

    it('includes thinking in done event even when only thinking_complete arrives', async () => {
      const { runClaudeStream: mockStream } = await import('./lib/claude-stream')
      vi.mocked(mockStream).mockImplementation(async function* () {
        // No incremental thinking_delta events — only the summary
        yield { type: 'thinking_complete' as const, text: 'Full thinking from summary.' }
        yield { type: 'text' as const, text: 'Response.' }
        yield {
          type: 'result' as const,
          text: 'Response.',
          sessionId: 'sess-tc',
          usage: { inputTokens: 10, outputTokens: 5, costUsd: 0.001, durationMs: 500 },
        }
      })

      const session = await createSession('Thinking Complete Test')
      const res = await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Tell me about MIDI' })
        .set('Content-Type', 'application/json')

      const lines = res.text.trim().split('\n').map(l => JSON.parse(l))
      const done = lines.find(l => l.type === 'done')
      expect(done.thinking).toBe('Full thinking from summary.')
    })

    it('returns 400 when no message provided', async () => {
      const session = await createSession()

      const res = await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({})
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(400)
    })

    it('returns 404 for unknown session', async () => {
      const res = await request(app)
        .post('/api/chat/sessions/nonexistent/messages')
        .send({ message: 'Hello' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(404)
    })
  })

  describe('GET /api/chat/sessions/:id/history', () => {
    it('returns empty history for new session', async () => {
      const session = await createSession()

      const res = await request(app).get(`/api/chat/sessions/${session.id}/history`)
      expect(res.status).toBe(200)
      expect(res.body).toEqual([])
    })

    it('returns messages after chatting', async () => {
      const session = await createSession()

      await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Hello' })
        .set('Content-Type', 'application/json')

      const res = await request(app).get(`/api/chat/sessions/${session.id}/history`)
      expect(res.status).toBe(200)
      expect(res.body).toHaveLength(2)
      expect(res.body[0].role).toBe('user')
      expect(res.body[1].role).toBe('assistant')
    })

    it('returns 404 for unknown session', async () => {
      const res = await request(app).get('/api/chat/sessions/nonexistent/history')
      expect(res.status).toBe(404)
    })
  })

  describe('POST /api/chat/sessions/:id/messages cheat sheet extraction', () => {
    it('saves cheat sheet via API when Claude returns one in a JSON block', async () => {
      const { runClaudeStream: mockStream } = await import('./lib/claude-stream')
      vi.mocked(mockStream).mockImplementation(async function* () {
        yield {
          type: 'text' as const,
          text: 'Here\'s your cheat sheet!\n\n```json\n{"title":"MIDI Map","content":"## CCs\\n- CC1: Mod","category":"midi-map","tags":["midi"]}\n```\n\nSaved!',
        }
        yield {
          type: 'result' as const,
          text: 'Here\'s your cheat sheet!\n\n```json\n{"title":"MIDI Map","content":"## CCs\\n- CC1: Mod","category":"midi-map","tags":["midi"]}\n```\n\nSaved!',
          sessionId: 'sess-cs',
          usage: { inputTokens: 10, outputTokens: 5, costUsd: 0.001, durationMs: 500 },
        }
      })

      const session = await createSession('CS Test')
      const res = await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Save a cheat sheet of my MIDI map' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200)
      const lines = res.text.trim().split('\n').map(l => JSON.parse(l))
      const done = lines.find(l => l.type === 'done')
      expect(done.cheatSheetSaved).toBe(true)

      // Verify it was actually saved
      const sheetsRes = await request(app).get('/api/cheatsheets')
      expect(sheetsRes.body).toHaveLength(1)
      expect(sheetsRes.body[0].title).toBe('MIDI Map')
      expect(sheetsRes.body[0].category).toBe('midi-map')
    })

    it('does not save cheat sheet when response has no JSON block', async () => {
      const session = await createSession('No CS')
      const res = await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Tell me about MIDI' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200)
      const lines = res.text.trim().split('\n').map(l => JSON.parse(l))
      const done = lines.find(l => l.type === 'done')
      expect(done.cheatSheetSaved).toBeUndefined()
    })
  })

  describe('POST /api/chat/sessions/:id/messages with studio update', () => {
    it('enables file tools and passes studio file path when user asks to update studio', async () => {
      const session = await createSession()

      await request(app)
        .put('/api/studio-doc')
        .send({ content: '# My Studio\n\nOld content.' })
        .set('Content-Type', 'application/json')

      const { runClaudeStream: mockStream } = await import('./lib/claude-stream')
      vi.mocked(mockStream).mockImplementation(async function* () {
        yield {
          type: 'result' as const,
          text: 'I\'ve updated your studio doc with the Monolit.',
          sessionId: 'test-session-456',
          usage: { inputTokens: 200, outputTokens: 100, costUsd: 0.02, durationMs: 3000 },
        }
      })

      const res = await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Please update my studio to include the Monolit' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200)

      expect(vi.mocked(mockStream)).toHaveBeenCalledWith(
        expect.stringContaining('studio.md'),
        expect.objectContaining({
          allowedTools: ['Read', 'Edit', 'Write'],
        }),
      )
    })

    it('detects studioUpdated when Claude modifies the file', async () => {
      const session = await createSession()

      await request(app)
        .put('/api/studio-doc')
        .send({ content: '# My Studio\n\nOld content.' })
        .set('Content-Type', 'application/json')

      const { runClaudeStream: mockStream } = await import('./lib/claude-stream')
      vi.mocked(mockStream).mockImplementation(async function* (_prompt, _opts) {
        await request(app)
          .put('/api/studio-doc')
          .send({ content: '# My Studio\n\nUpdated content with Monolit.' })
          .set('Content-Type', 'application/json')

        yield {
          type: 'result' as const,
          text: 'I\'ve added the Monolit to your studio doc.',
          sessionId: 'test-session-456',
          usage: { inputTokens: 200, outputTokens: 100, costUsd: 0.02, durationMs: 3000 },
        }
      })

      const res = await request(app)
        .post(`/api/chat/sessions/${session.id}/messages`)
        .send({ message: 'Please update my studio to include the Monolit' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200)
      const lines = res.text.trim().split('\n').map(l => JSON.parse(l))
      const done = lines.find(l => l.type === 'done')
      expect(done.studioUpdated).toBe(true)
      expect(done.text).toBe('I\'ve added the Monolit to your studio doc.')
    })
  })

  // --- URL Import ---

  function parseNdjson(text: string): unknown[] {
    return text.split('\n').filter(l => l.trim()).map(l => JSON.parse(l))
  }

  describe('POST /api/import-url', () => {
    it('streams NDJSON progress events during crawl', async () => {
      vi.mocked(crawlDocs).mockImplementation(async (_url, options) => {
        // Simulate progress callbacks
        options?.onProgress?.(1, 3, 'https://example.com/docs/')
        options?.onProgress?.(2, 3, 'https://example.com/docs/setup')
        options?.onProgress?.(3, 3, 'https://example.com/docs/midi')
        return {
          pages: [
            { url: 'https://example.com/docs/', title: 'Home', text: 'Welcome.' },
            { url: 'https://example.com/docs/setup', title: 'Setup', text: 'Install.' },
            { url: 'https://example.com/docs/midi', title: 'MIDI', text: 'MIDI info.' },
          ],
          errors: [],
        }
      })

      const res = await request(app)
        .post('/api/import-url')
        .send({ url: 'https://example.com/docs/' })
        .set('Content-Type', 'application/json')

      const events = parseNdjson(res.text)

      // Should have 3 progress events + 1 converting + 1 done
      const progressEvents = events.filter((e: any) => e.type === 'progress')
      expect(progressEvents).toHaveLength(3)
      expect((progressEvents[0] as any).crawled).toBe(1)
      expect((progressEvents[0] as any).total).toBe(3)

      const convertingEvents = events.filter((e: any) => e.type === 'converting')
      expect(convertingEvents).toHaveLength(1)
      expect((convertingEvents[0] as any).pagesFound).toBe(3)

      const doneEvents = events.filter((e: any) => e.type === 'done')
      expect(doneEvents).toHaveLength(1)
      expect((doneEvents[0] as any).manual.title).toBe('Test Manual')
    })

    it('streams error event when Claude returns non-JSON', async () => {
      vi.mocked(crawlDocs).mockResolvedValue({
        pages: [{ url: 'https://example.com/docs/', title: 'Home', text: 'Welcome.' }],
        errors: [],
      })

      // Make Claude return conversational text instead of JSON
      vi.mocked(runClaude).mockResolvedValueOnce({
        text: "I'll work on converting this manual for you...",
        usage: { inputTokens: 100, outputTokens: 50, costUsd: 0.01, durationMs: 5000 },
        sessionId: 'test-session-999',
      })

      const res = await request(app)
        .post('/api/import-url')
        .send({ url: 'https://example.com/docs/' })
        .set('Content-Type', 'application/json')

      const events = parseNdjson(res.text)
      const errorEvents = events.filter((e: any) => e.type === 'error')
      expect(errorEvents).toHaveLength(1)
      // Error should be a clean message, not raw Claude output
      expect((errorEvents[0] as any).message).toBeDefined()
    })

    it('streams error event when crawl finds no pages', async () => {
      vi.mocked(crawlDocs).mockResolvedValue({
        pages: [],
        errors: ['https://example.com/docs/: HTTP 404'],
      })

      const res = await request(app)
        .post('/api/import-url')
        .send({ url: 'https://example.com/docs/' })
        .set('Content-Type', 'application/json')

      const events = parseNdjson(res.text)
      const errorEvents = events.filter((e: any) => e.type === 'error')
      expect(errorEvents).toHaveLength(1)
      expect((errorEvents[0] as any).message).toContain('No content found')
    })

    it('returns 400 for missing url', async () => {
      const res = await request(app)
        .post('/api/import-url')
        .send({})
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(400)
    })

    it('returns 400 for non-http url', async () => {
      const res = await request(app)
        .post('/api/import-url')
        .send({ url: 'ftp://example.com' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(400)
    })

    it('sets content-type to application/x-ndjson', async () => {
      vi.mocked(crawlDocs).mockResolvedValue({
        pages: [{ url: 'https://example.com/docs/', title: 'Home', text: 'Content.' }],
        errors: [],
      })

      const res = await request(app)
        .post('/api/import-url')
        .send({ url: 'https://example.com/docs/' })
        .set('Content-Type', 'application/json')

      expect(res.headers['content-type']).toContain('application/x-ndjson')
    })

    it('all streamed events are valid JSON', async () => {
      vi.mocked(crawlDocs).mockImplementation(async (_url, options) => {
        options?.onProgress?.(1, 2, 'https://example.com/docs/')
        options?.onProgress?.(2, 2, 'https://example.com/docs/page')
        return {
          pages: [
            { url: 'https://example.com/docs/', title: 'Home', text: 'Content.' },
            { url: 'https://example.com/docs/page', title: 'Page', text: 'More.' },
          ],
          errors: [],
        }
      })

      const res = await request(app)
        .post('/api/import-url')
        .send({ url: 'https://example.com/docs/' })
        .set('Content-Type', 'application/json')

      // Every non-empty line must be valid JSON
      const lines = res.text.split('\n').filter(l => l.trim())
      for (const line of lines) {
        expect(() => JSON.parse(line)).not.toThrow()
      }
    })
  })

  describe('GET /api/studio-doc', () => {
    it('returns null when no doc exists', async () => {
      const res = await request(app).get('/api/studio-doc')
      expect(res.status).toBe(200)
      expect(res.body.content).toBeNull()
    })

    it('returns saved doc', async () => {
      await request(app)
        .put('/api/studio-doc')
        .send({ content: '# My Studio' })
        .set('Content-Type', 'application/json')

      const res = await request(app).get('/api/studio-doc')
      expect(res.status).toBe(200)
      expect(res.body.content).toBe('# My Studio')
    })
  })

  describe('PUT /api/studio-doc', () => {
    it('saves studio doc', async () => {
      const res = await request(app)
        .put('/api/studio-doc')
        .send({ content: '# Updated Studio' })
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(200)
    })

    it('returns 400 when no content', async () => {
      const res = await request(app)
        .put('/api/studio-doc')
        .send({})
        .set('Content-Type', 'application/json')

      expect(res.status).toBe(400)
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
