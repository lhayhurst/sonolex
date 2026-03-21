import { describe, it, expect, vi } from 'vitest'
import express from 'express'
import request from 'supertest'
import { errorHandler, multerErrorHandler } from './error-handler'
import multer from 'multer'

describe('errorHandler middleware', () => {
  it('catches unhandled route errors and returns 500', async () => {
    const app = express()
    app.get('/boom', () => { throw new Error('kaboom') })
    app.use(errorHandler)

    const res = await request(app).get('/boom')
    expect(res.status).toBe(500)
    expect(res.body.error).toBe('kaboom')
  })

  it('catches async route errors', async () => {
    const app = express()
    app.get('/async-boom', async () => { throw new Error('async kaboom') })
    app.use(errorHandler)

    const res = await request(app).get('/async-boom')
    expect(res.status).toBe(500)
    expect(res.body.error).toBe('async kaboom')
  })

  it('does not leak stack traces', async () => {
    const app = express()
    app.get('/boom', () => { throw new Error('secret') })
    app.use(errorHandler)

    const res = await request(app).get('/boom')
    expect(res.body.stack).toBeUndefined()
  })
})

describe('multerErrorHandler middleware', () => {
  it('returns 413 for file too large', async () => {
    const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 } })
    const app = express()
    app.post('/upload', upload.single('file'), (_req, res) => { res.json({ ok: true }) })
    app.use(multerErrorHandler)

    const res = await request(app)
      .post('/upload')
      .attach('file', Buffer.alloc(100), 'big.pdf')

    expect(res.status).toBe(413)
    expect(res.body.error).toMatch(/too large/i)
  })

  it('passes non-multer errors through', async () => {
    const app = express()
    app.get('/other', () => { throw new Error('not multer') })
    app.use(multerErrorHandler)
    app.use(errorHandler)

    const res = await request(app).get('/other')
    expect(res.status).toBe(500)
    expect(res.body.error).toBe('not multer')
  })
})
