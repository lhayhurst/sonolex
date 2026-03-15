import express from 'express'
import cors from 'cors'
import multer from 'multer'
import crypto from 'node:crypto'
import { writeFile, readFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { Storage } from './lib/storage'
import { extractTextFromPdf } from './lib/pdf-extract'
import { convertToManual } from './lib/manual-converter'
import { isClaudeAvailable } from './lib/claude-cli'
import { ConversionHistory } from './lib/conversion-history'
import { createManual } from '../src/types/index'
import type { StudioData, Manual } from '../src/types/index'

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } })

export function createApp(storage: Storage, dataDir?: string) {
  const pdfsDir = dataDir ? join(dataDir, 'pdfs') : undefined
  const history = new ConversionHistory(dataDir ?? '.')
  const app = express()
  app.use(cors())
  app.use(express.json())

  // Studio data
  app.get('/api/studio', async (_req, res) => {
    const studio = await storage.loadStudio()
    res.json(studio)
  })

  app.put('/api/studio', async (req, res) => {
    const studio = req.body as StudioData
    await storage.saveStudio(studio)
    res.json(studio)
  })

  // Manuals
  app.get('/api/manuals', async (_req, res) => {
    const manuals = await storage.listManuals()
    res.json(manuals)
  })

  app.get('/api/manuals/:id', async (req, res) => {
    const manual = await storage.loadManual(req.params.id)
    if (!manual) {
      res.status(404).json({ error: 'Manual not found' })
      return
    }
    res.json(manual)
  })

  app.post('/api/manuals', async (req, res) => {
    const manual = req.body as Manual
    await storage.saveManual(manual)
    res.status(201).json(manual)
  })

  app.delete('/api/manuals/:id', async (req, res) => {
    await storage.deleteManual(req.params.id)
    // Also delete the PDF if it exists
    if (pdfsDir) {
      try {
        const { unlink } = await import('node:fs/promises')
        await unlink(join(pdfsDir, `${req.params.id}.pdf`))
      } catch {
        // PDF may not exist — that's fine
      }
    }
    res.status(204).send()
  })

  app.get('/api/manuals/:id/pdf', async (req, res) => {
    if (!pdfsDir) {
      res.status(404).json({ error: 'PDF storage not configured' })
      return
    }
    try {
      const pdfBuffer = await readFile(join(pdfsDir, `${req.params.id}.pdf`))
      const manual = await storage.loadManual(req.params.id)
      const filename = manual?.sourceFileName ?? `${req.params.id}.pdf`
      res.setHeader('Content-Type', 'application/pdf')
      res.setHeader('Content-Disposition', `inline; filename="${filename}"`)
      res.send(pdfBuffer)
    } catch {
      res.status(404).json({ error: 'PDF not found' })
    }
  })

  // PDF pre-flight: extract text and estimate conversion time
  app.post('/api/extract-text', upload.single('pdf'), async (req, res) => {
    if (!req.file) {
      res.status(400).json({ error: 'No PDF file uploaded' })
      return
    }
    try {
      const { text, pageCount } = await extractTextFromPdf(req.file.buffer)
      const estimatedMs = await history.estimateDuration(text.length)
      res.json({ inputChars: text.length, pageCount, estimatedMs })
    } catch (err: unknown) {
      res.status(500).json({ error: err instanceof Error ? err.message : 'Text extraction failed' })
    }
  })

  // PDF Upload
  app.post('/api/upload-pdf', upload.single('pdf'), async (req, res) => {
    if (!req.file) {
      res.status(400).json({ error: 'No PDF file uploaded' })
      return
    }

    try {
      const { text } = await extractTextFromPdf(req.file.buffer)
      const converted = await convertToManual(text, req.file.originalname)

      const id = crypto.randomUUID()

      // Save original PDF
      if (pdfsDir) {
        await mkdir(pdfsDir, { recursive: true })
        await writeFile(join(pdfsDir, `${id}.pdf`), req.file.buffer)
      }

      const manual = createManual({
        id,
        title: converted.title,
        summary: converted.summary,
        content: converted.content,
        sections: converted.sections,
        sourceFileName: req.file.originalname,
        convertedAt: new Date().toISOString(),
        pdfPath: `/api/manuals/${id}/pdf`,
      })

      await storage.saveManual(manual)

      // Record for future time estimation
      await history.record({
        inputChars: text.length,
        durationMs: converted.usage.durationMs,
      })

      res.status(201).json({ ...manual, usage: converted.usage })
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      if (message.includes('claude CLI failed')) {
        res.status(503).json({ error: 'Claude CLI is not available. Install it with: npm install -g @anthropic-ai/claude-code' })
      } else {
        res.status(500).json({ error: message })
      }
    }
  })

  // Estimation
  app.post('/api/estimate-conversion', async (req, res) => {
    const { inputChars } = req.body as { inputChars?: number }
    const estimatedMs = inputChars ? await history.estimateDuration(inputChars) : null
    res.json({ estimatedMs })
  })

  // Config
  app.get('/api/config/status', async (_req, res) => {
    const available = await isClaudeAvailable()
    res.json({ claudeAvailable: available })
  })

  // Export
  app.get('/api/export', async (_req, res) => {
    const data = await storage.exportAll()
    res.json(data)
  })

  return app
}
