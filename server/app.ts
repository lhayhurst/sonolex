import express from 'express'
import cors from 'cors'
import { Storage } from './lib/storage'
import type { StudioData, Manual } from '../src/types/index'

export function createApp(storage: Storage) {
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
    res.status(204).send()
  })

  // Export
  app.get('/api/export', async (_req, res) => {
    const data = await storage.exportAll()
    res.json(data)
  })

  return app
}
