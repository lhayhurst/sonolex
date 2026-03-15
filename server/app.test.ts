import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import request from 'supertest'
import { createApp } from './app'
import { Storage } from './lib/storage'
import { createDevice, createManual } from '../src/types/index'

describe('API routes', () => {
  let tempDir: string
  let storage: Storage
  let app: ReturnType<typeof createApp>

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'sonolex-api-test-'))
    storage = new Storage(tempDir)
    await storage.init()
    app = createApp(storage)
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

      // Verify persisted
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
})
