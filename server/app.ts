import express from 'express'
import cors from 'cors'
import multer from 'multer'
import crypto from 'node:crypto'
import { writeFile, readFile, mkdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { Storage } from './lib/storage'
import { extractTextFromPdf } from './lib/pdf-extract'
import { convertToManual } from './lib/manual-converter'
import { isClaudeAvailable } from './lib/claude-cli'
import { ConversionHistory } from './lib/conversion-history'
import { ChatSessionManager } from './lib/chat-session-manager'
import { StudioDoc } from './lib/studio-doc'
import { buildSystemPrompt, findRelevantManuals, buildManualContext, findRelevantCheatSheets, buildCheatSheetContext } from './lib/studio-prompt'
import { crawlDocs, discoverPages } from './lib/web-crawler'
import { extractCheatSheet } from './lib/cheatsheet-extractor'
import { createManual, createCheatSheet } from '../src/types/index'
import type { StudioData, Manual, CheatSheet } from '../src/types/index'
import { multerErrorHandler, errorHandler } from './lib/error-handler'

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 100 * 1024 * 1024 } })

export async function createApp(storage: Storage, dataDir?: string) {
  const resolvedDataDir = resolve(dataDir ?? '.')
  const pdfsDir = dataDir ? join(dataDir, 'pdfs') : undefined
  const history = new ConversionHistory(dataDir ?? '.')
  const sessionManager = new ChatSessionManager(dataDir ?? '.')
  await sessionManager.init()
  const studioDoc = new StudioDoc(dataDir ?? '.')
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

  // --- Cheat Sheets ---

  app.get('/api/cheatsheets', async (_req, res) => {
    const sheets = await storage.listCheatSheets()
    res.json(sheets)
  })

  app.get('/api/cheatsheets/:id', async (req, res) => {
    const sheet = await storage.loadCheatSheet(req.params.id)
    if (!sheet) {
      res.status(404).json({ error: 'Cheat sheet not found' })
      return
    }
    res.json(sheet)
  })

  app.post('/api/cheatsheets', async (req, res) => {
    const sheet = req.body as CheatSheet
    await storage.saveCheatSheet(sheet)
    res.status(201).json(sheet)
  })

  app.put('/api/cheatsheets/:id', async (req, res) => {
    const existing = await storage.loadCheatSheet(req.params.id)
    if (!existing) {
      res.status(404).json({ error: 'Cheat sheet not found' })
      return
    }
    const updated = { ...existing, ...req.body, id: req.params.id, updatedAt: new Date().toISOString() }
    await storage.saveCheatSheet(updated)
    res.json(updated)
  })

  app.delete('/api/cheatsheets/:id', async (req, res) => {
    await storage.deleteCheatSheet(req.params.id)
    res.status(204).send()
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

  // PDF Upload — streams NDJSON progress for large manuals
  app.post('/api/upload-pdf', upload.single('pdf'), async (req, res) => {
    if (!req.file) {
      res.status(400).json({ error: 'No PDF file uploaded' })
      return
    }

    try {
      const { text } = await extractTextFromPdf(req.file.buffer)

      // Set up streaming for progress
      res.setHeader('Content-Type', 'application/x-ndjson')
      res.setHeader('Cache-Control', 'no-cache')
      res.setHeader('Connection', 'keep-alive')

      function send(event: Record<string, unknown>) {
        res.write(JSON.stringify(event) + '\n')
      }

      send({ type: 'extracting', chars: text.length })

      const converted = await convertToManual(text, req.file.originalname, {
        onChunkProgress: (chunk, totalChunks) => {
          send({ type: 'chunk', chunk, totalChunks })
        },
      })

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

      await history.record({
        inputChars: text.length,
        durationMs: converted.usage.durationMs,
      })

      send({ type: 'done', manual: { ...manual, usage: converted.usage } })
      res.end()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      if (res.headersSent) {
        res.write(JSON.stringify({ type: 'error', message }) + '\n')
        res.end()
      } else if (message.includes('claude CLI failed')) {
        res.status(503).json({ error: 'Claude CLI is not available. Install it with: npm install -g @anthropic-ai/claude-code' })
      } else {
        res.status(500).json({ error: message })
      }
    }
  })

  // Preflight: discover pages at a URL
  app.post('/api/import-url/preflight', async (req, res) => {
    const { url } = req.body as { url?: string }
    if (!url) {
      res.status(400).json({ error: 'url is required' })
      return
    }

    try {
      const parsed = new URL(url)
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        res.status(400).json({ error: 'URL must use http or https' })
        return
      }

      const result = await discoverPages(url, { maxPages: 50, delayMs: 100 })
      res.json({ pageCount: result.urls.length, errors: result.errors })
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Discovery failed'
      res.status(500).json({ error: message })
    }
  })

  // Import from URL (web crawl + convert) — streams NDJSON progress
  app.post('/api/import-url', async (req, res) => {
    const { url } = req.body as { url?: string }
    if (!url) {
      res.status(400).json({ error: 'url is required' })
      return
    }

    try {
      // Validate URL
      const parsed = new URL(url)
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        res.status(400).json({ error: 'URL must use http or https' })
        return
      }

      // Stream NDJSON progress
      res.setHeader('Content-Type', 'application/x-ndjson')
      res.setHeader('Cache-Control', 'no-cache')
      res.setHeader('Connection', 'keep-alive')

      function send(event: Record<string, unknown>) {
        res.write(JSON.stringify(event) + '\n')
      }

      // Crawl with progress reporting
      const crawlResult = await crawlDocs(url, {
        maxPages: 50,
        delayMs: 200,
        onProgress: (crawled, total, pageUrl) => {
          send({ type: 'progress', crawled, total, url: pageUrl })
        },
      })

      if (crawlResult.pages.length === 0) {
        const errorDetail = crawlResult.errors.length > 0
          ? `: ${crawlResult.errors[0]}`
          : ''
        send({ type: 'error', message: `No content found at ${url}${errorDetail}` })
        res.end()
        return
      }

      send({ type: 'converting', pagesFound: crawlResult.pages.length })

      // Combine all pages into a single text
      const combinedText = crawlResult.pages
        .map(p => `# ${p.title}\n\n${p.text}`)
        .join('\n\n---\n\n')

      // Convert via Claude (same as PDF flow)
      const converted = await convertToManual(combinedText, url)

      const id = crypto.randomUUID()
      const manual = createManual({
        id,
        title: converted.title,
        summary: converted.summary,
        content: converted.content,
        sections: converted.sections,
        sourceFileName: url,
        convertedAt: new Date().toISOString(),
      })

      await storage.saveManual(manual)

      await history.record({
        inputChars: combinedText.length,
        durationMs: converted.usage.durationMs,
      })

      send({
        type: 'done',
        manual: { ...manual, usage: converted.usage },
        crawlStats: {
          pagesFound: crawlResult.pages.length,
          errors: crawlResult.errors,
        },
      })
      res.end()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      if (res.headersSent) {
        res.write(JSON.stringify({ type: 'error', message }) + '\n')
        res.end()
      } else if (message.includes('claude CLI failed')) {
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

  // --- Chat Sessions ---

  app.get('/api/chat/sessions', async (_req, res) => {
    const sessions = await sessionManager.listSessions()
    res.json(sessions)
  })

  app.post('/api/chat/sessions', async (req, res) => {
    const { name } = req.body as { name?: string }
    const session = await sessionManager.createSession(name)
    res.status(201).json(session)
  })

  app.patch('/api/chat/sessions/:id', async (req, res) => {
    const { name } = req.body as { name?: string }
    if (!name) {
      res.status(400).json({ error: 'name is required' })
      return
    }
    const ok = await sessionManager.renameSession(req.params.id, name)
    if (!ok) {
      res.status(404).json({ error: 'Session not found' })
      return
    }
    res.json({ ok: true })
  })

  app.delete('/api/chat/sessions/:id', async (req, res) => {
    const ok = await sessionManager.deleteSession(req.params.id)
    if (!ok) {
      res.status(404).json({ error: 'Session not found' })
      return
    }
    res.status(204).send()
  })

  app.get('/api/chat/sessions/:id/history', async (req, res) => {
    const session = sessionManager.getSession(req.params.id)
    if (!session) {
      res.status(404).json({ error: 'Session not found' })
      return
    }
    const messages = await session.getHistory()
    res.json(messages)
  })

  // Upload an image for use in chat
  app.post('/api/chat/images', upload.single('image'), async (req, res) => {
    if (!req.file) {
      res.status(400).json({ error: 'No image uploaded' })
      return
    }

    const imagesDir = join(resolvedDataDir, 'chat-images')
    await mkdir(imagesDir, { recursive: true })

    const ext = req.file.mimetype === 'image/png' ? '.png'
      : req.file.mimetype === 'image/jpeg' ? '.jpg'
      : req.file.mimetype === 'image/gif' ? '.gif'
      : req.file.mimetype === 'image/webp' ? '.webp'
      : '.png'
    const filename = `${crypto.randomUUID()}${ext}`
    const filePath = join(imagesDir, filename)
    await writeFile(filePath, req.file.buffer)

    res.status(201).json({ path: filePath, filename, url: `/api/chat/images/${filename}` })
  })

  // Serve chat images
  app.get('/api/chat/images/:filename', async (req, res) => {
    const filePath = join(resolvedDataDir, 'chat-images', req.params.filename)
    try {
      const buffer = await readFile(filePath)
      const ext = req.params.filename.split('.').pop()
      const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg'
        : ext === 'png' ? 'image/png'
        : ext === 'gif' ? 'image/gif'
        : ext === 'webp' ? 'image/webp'
        : 'application/octet-stream'
      res.setHeader('Content-Type', mime)
      res.send(buffer)
    } catch {
      res.status(404).json({ error: 'Image not found' })
    }
  })

  app.post('/api/chat/sessions/:id/messages', async (req, res) => {
    const { message, imagePath, deepThinking } = req.body as { message?: string; imagePath?: string; deepThinking?: boolean }
    if (!message) {
      res.status(400).json({ error: 'message is required' })
      return
    }

    const chatSession = sessionManager.getSession(req.params.id)
    if (!chatSession) {
      res.status(404).json({ error: 'Session not found' })
      return
    }

    try {
      const manuals = await storage.listManuals()
      const cheatsheets = await storage.listCheatSheets()
      const currentStudioDoc = await studioDoc.load()
      const studioFilePath = join(resolvedDataDir, 'studio.md')
      const systemPrompt = buildSystemPrompt(manuals, currentStudioDoc ? studioFilePath : undefined, cheatsheets)

      // Build enriched message with context
      let enrichedMessage = message

      // If user pasted an image, tell Claude where to find it
      if (imagePath) {
        enrichedMessage += `\n\n--- Image ---\nThe user has pasted an image. Read it at: ${imagePath}\nDescribe or analyze the image as part of your response.`
      }

      // Inject relevant manual content if the user mentions a device
      const relevant = findRelevantManuals(message, manuals)
      if (relevant.length > 0) {
        enrichedMessage += '\n\n' + buildManualContext(relevant)
      }

      // Inject relevant cheat sheet content
      const relevantSheets = findRelevantCheatSheets(message, cheatsheets)
      if (relevantSheets.length > 0) {
        enrichedMessage += '\n\n' + buildCheatSheetContext(relevantSheets)
      }

      // If user wants to save a cheat sheet, tell Claude to return it as JSON
      const wantsCheatSheet = /\b(save|create|make)\b.*\b(cheat\s*sheet|quick\s*ref|reference\s*card)\b/i.test(message)
      if (wantsCheatSheet) {
        enrichedMessage += `\n\n--- Cheat Sheet Instructions ---\nTo save a cheat sheet, include a JSON block in your response with this format:\n\`\`\`json\n{"title":"...","content":"<markdown content>","category":"<one of: midi-map, signal-routing, shortcuts, troubleshooting, preset-notes, checklist, quick-reference, other>","tags":["tag1","tag2"]}\n\`\`\`\nThe content field should be markdown with the actual cheat sheet content. The system will automatically save it. Do NOT use the Write tool for cheat sheets.`
      }

      // If user wants to update the studio, tell Claude to edit the file directly
      const wantsStudioUpdate = /\b(update|add|change|modify|integrate|include|remove)\b.*\bstudio\b|\bstudio\b.*\b(update|add|change|modify|integrate|include|remove)\b/i.test(message)
      if (wantsStudioUpdate) {
        enrichedMessage += `\n\n--- Instructions ---\nThe studio document is at: ${studioFilePath}\nRead it, then use the Edit or Write tool to update it directly. Do NOT output the full document in your response — just describe what you changed.`
      }

      // Allow file tools scoped to the data directory (for studio updates)
      // Tools are always enabled with the same config so session resume works consistently
      const chatOptions = {
        allowedTools: ['Read', 'Edit', 'Write'],
        addDirs: [resolvedDataDir],
        ...(deepThinking ? { effort: 'high' as const } : {}),
      }

      // Derive the serving URL for the image so it displays in chat history
      let imageUrl: string | undefined
      if (imagePath) {
        const filename = imagePath.split('/').pop()
        imageUrl = `/api/chat/images/${filename}`
      }

      const { stream } = await chatSession.sendStreaming(enrichedMessage, systemPrompt, message, chatOptions, imageUrl)

      res.setHeader('Content-Type', 'application/x-ndjson')
      res.setHeader('Cache-Control', 'no-cache')
      res.setHeader('Connection', 'keep-alive')
      res.flushHeaders()

      let finalText = ''
      let finalThinking = ''
      let finalUsage = { inputTokens: 0, outputTokens: 0, costUsd: 0, durationMs: 0 }

      for await (const event of stream) {
        if (event.type === 'thinking') {
          finalThinking += event.text
          res.write(JSON.stringify({ type: 'thinking', text: event.text }) + '\n')
        } else if (event.type === 'thinking_complete') {
          // Full thinking from assistant summary — use if no incremental thinking arrived
          if (!finalThinking) finalThinking = event.text
          res.write(JSON.stringify({ type: 'thinking', text: event.text }) + '\n')
        } else if (event.type === 'text') {
          res.write(JSON.stringify({ type: 'text', text: event.text }) + '\n')
        } else if (event.type === 'tool_use') {
          res.write(JSON.stringify({ type: 'tool_use', toolName: event.toolName }) + '\n')
        } else if (event.type === 'result') {
          finalText = event.text
          finalUsage = event.usage
        }
      }
      await sessionManager.updateLastMessageAt(req.params.id)

      const studioUpdated = wantsStudioUpdate && (await studioDoc.load()) !== currentStudioDoc

      // Extract and save cheat sheet if Claude returned one
      let cheatSheetSaved: boolean | undefined
      if (wantsCheatSheet && finalText) {
        const extracted = extractCheatSheet(finalText)
        if (extracted) {
          const now = new Date().toISOString()
          const sheet = createCheatSheet({
            id: crypto.randomUUID(),
            title: extracted.title,
            content: extracted.content,
            category: extracted.category,
            tags: extracted.tags,
            createdAt: now,
            updatedAt: now,
          })
          await storage.saveCheatSheet(sheet)
          cheatSheetSaved = true
        }
      }

      res.write(JSON.stringify({
        type: 'done', text: finalText, usage: finalUsage, studioUpdated,
        thinking: finalThinking || undefined,
        cheatSheetSaved,
      }) + '\n')
      res.end()
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : 'Chat failed'
      if (res.headersSent) {
        res.write(JSON.stringify({ type: 'error', error: errMsg }) + '\n')
        res.end()
      } else {
        res.status(500).json({ error: errMsg })
      }
    }
  })

  // Studio doc
  app.get('/api/studio-doc', async (_req, res) => {
    const content = await studioDoc.load()
    res.json({ content })
  })

  app.put('/api/studio-doc', async (req, res) => {
    const { content } = req.body as { content?: string }
    if (!content) {
      res.status(400).json({ error: 'content is required' })
      return
    }
    await studioDoc.save(content)
    res.json({ ok: true })
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

  // Error handling — must be last
  app.use(multerErrorHandler)
  app.use(errorHandler)

  return app
}
