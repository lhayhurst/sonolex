import { describe, it, expect } from 'vitest'
import { mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import request from 'supertest'
import { createApp } from './app'
import { Storage } from './lib/storage'
import { extractTextFromPdf } from './lib/pdf-extract'

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

describe('pdf-extract runtime', () => {
  it('extractTextFromPdf loads pdfjs-dist and extracts text', async () => {
    const result = await extractTextFromPdf(MINIMAL_PDF)
    expect(result.text).toContain('Hello World')
    expect(result.pageCount).toBe(1)
  })
})

describe('server startup', () => {
  it('starts without crashing and responds to health check', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'sonolex-startup-'))
    try {
      const storage = new Storage(tempDir)
      await storage.init()
      const app = await createApp(storage)

      const res = await request(app).get('/api/studio')
      expect(res.status).toBe(200)
    } finally {
      await rm(tempDir, { recursive: true, force: true })
    }
  })
})
