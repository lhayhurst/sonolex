import { readFile, writeFile, readdir, mkdir, unlink } from 'node:fs/promises'
import { join } from 'node:path'
import type { Manual, StudioData, CheatSheet, Tutorial } from '../../src/types/index'
import { createStudioData } from '../../src/types/index'
import { renderManualMarkdown } from './manual-markdown'
import { renderCheatSheetMarkdown } from './cheatsheet-markdown'
import { renderTutorialMarkdown } from './tutorial-markdown'
import { slugify, uniqueSlug } from './slugify'

async function unlinkIfExists(path: string): Promise<void> {
  try {
    await unlink(path)
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code !== 'ENOENT') throw err
  }
}

export class Storage {
  private readonly dataDir: string
  private readonly manualsDir: string
  private readonly cheatsheetsDir: string
  private readonly tutorialsDir: string
  private readonly studioPath: string

  constructor(dataDir: string) {
    this.dataDir = dataDir
    this.manualsDir = join(dataDir, 'manuals')
    this.cheatsheetsDir = join(dataDir, 'cheatsheets')
    this.tutorialsDir = join(dataDir, 'tutorials')
    this.studioPath = join(dataDir, 'studio.json')
  }

  async init(): Promise<void> {
    await mkdir(this.manualsDir, { recursive: true })
    await mkdir(this.cheatsheetsDir, { recursive: true })
    await mkdir(this.tutorialsDir, { recursive: true })

    const exists = await this.fileExists(this.studioPath)
    if (!exists) {
      const defaultStudio = createStudioData({ name: 'My Studio' })
      await this.saveStudio(defaultStudio)
    }
  }

  async loadStudio(): Promise<StudioData> {
    const raw = await readFile(this.studioPath, 'utf-8')
    return JSON.parse(raw) as StudioData
  }

  async saveStudio(studio: StudioData): Promise<void> {
    await writeFile(this.studioPath, JSON.stringify(studio, null, 2), 'utf-8')
  }

  // --- Manuals ---

  async loadManual(id: string): Promise<Manual | undefined> {
    const path = join(this.manualsDir, `${id}.json`)
    const exists = await this.fileExists(path)
    if (!exists) return undefined

    const raw = await readFile(path, 'utf-8')
    return JSON.parse(raw) as Manual
  }

  async saveManual(manual: Manual): Promise<void> {
    const jsonPath = join(this.manualsDir, `${manual.id}.json`)
    const mdPath = join(this.manualsDir, `${manual.id}.md`)
    await writeFile(jsonPath, JSON.stringify(manual, null, 2), 'utf-8')
    await writeFile(mdPath, renderManualMarkdown(manual), 'utf-8')
  }

  async deleteManual(id: string): Promise<void> {
    await unlinkIfExists(join(this.manualsDir, `${id}.json`))
    await unlinkIfExists(join(this.manualsDir, `${id}.md`))
  }

  async nextManualSlug(title: string): Promise<string> {
    const existing = new Set((await this.listManuals()).map(m => m.id))
    return uniqueSlug(slugify(title), existing)
  }

  async listManuals(): Promise<Manual[]> {
    const files = await readdir(this.manualsDir)
    const jsonFiles = files.filter(f => f.endsWith('.json'))

    const manuals: Manual[] = []
    for (const file of jsonFiles) {
      const raw = await readFile(join(this.manualsDir, file), 'utf-8')
      manuals.push(JSON.parse(raw) as Manual)
    }
    return manuals
  }

  // --- Cheat Sheets ---

  async loadCheatSheet(id: string): Promise<CheatSheet | undefined> {
    const path = join(this.cheatsheetsDir, `${id}.json`)
    const exists = await this.fileExists(path)
    if (!exists) return undefined

    const raw = await readFile(path, 'utf-8')
    return this.normalizeCheatSheet(JSON.parse(raw), `${id}.json`)
  }

  async saveCheatSheet(cheatsheet: CheatSheet): Promise<void> {
    const jsonPath = join(this.cheatsheetsDir, `${cheatsheet.id}.json`)
    const mdPath = join(this.cheatsheetsDir, `${cheatsheet.id}.md`)
    await writeFile(jsonPath, JSON.stringify(cheatsheet, null, 2), 'utf-8')
    await writeFile(mdPath, renderCheatSheetMarkdown(cheatsheet), 'utf-8')
  }

  async deleteCheatSheet(id: string): Promise<void> {
    await unlinkIfExists(join(this.cheatsheetsDir, `${id}.json`))
    await unlinkIfExists(join(this.cheatsheetsDir, `${id}.md`))
  }

  async nextCheatSheetSlug(title: string): Promise<string> {
    const existing = new Set((await this.listCheatSheets()).map(s => s.id))
    return uniqueSlug(slugify(title), existing)
  }

  async listCheatSheets(): Promise<CheatSheet[]> {
    const files = await readdir(this.cheatsheetsDir)
    const jsonFiles = files.filter(f => f.endsWith('.json'))

    const sheets: CheatSheet[] = []
    for (const file of jsonFiles) {
      const raw = await readFile(join(this.cheatsheetsDir, file), 'utf-8')
      sheets.push(this.normalizeCheatSheet(JSON.parse(raw), file))
    }
    return sheets
  }

  private normalizeCheatSheet(data: Record<string, unknown>, filename?: string): CheatSheet {
    const id = (data.id as string) || filename?.replace('.json', '') || ''
    return {
      id,
      title: (data.title as string) || 'Untitled',
      content: (data.content as string) || JSON.stringify(data, null, 2),
      category: (data.category as CheatSheet['category']) || 'other',
      tags: Array.isArray(data.tags) ? data.tags : [],
      createdAt: (data.createdAt as string) || new Date().toISOString(),
      updatedAt: (data.updatedAt as string) || new Date().toISOString(),
    }
  }

  // --- Tutorials ---

  async loadTutorial(id: string): Promise<Tutorial | undefined> {
    const path = join(this.tutorialsDir, `${id}.json`)
    const exists = await this.fileExists(path)
    if (!exists) return undefined

    const raw = await readFile(path, 'utf-8')
    return this.normalizeTutorial(JSON.parse(raw), `${id}.json`)
  }

  async saveTutorial(tutorial: Tutorial): Promise<void> {
    const jsonPath = join(this.tutorialsDir, `${tutorial.id}.json`)
    const mdPath = join(this.tutorialsDir, `${tutorial.id}.md`)
    await writeFile(jsonPath, JSON.stringify(tutorial, null, 2), 'utf-8')
    await writeFile(mdPath, renderTutorialMarkdown(tutorial), 'utf-8')
  }

  async deleteTutorial(id: string): Promise<void> {
    await unlinkIfExists(join(this.tutorialsDir, `${id}.json`))
    await unlinkIfExists(join(this.tutorialsDir, `${id}.md`))
  }

  async nextTutorialSlug(title: string): Promise<string> {
    const existing = new Set((await this.listTutorials()).map(t => t.id))
    return uniqueSlug(slugify(title), existing)
  }

  async listTutorials(): Promise<Tutorial[]> {
    const files = await readdir(this.tutorialsDir)
    const jsonFiles = files.filter(f => f.endsWith('.json'))

    const tutorials: Tutorial[] = []
    for (const file of jsonFiles) {
      const raw = await readFile(join(this.tutorialsDir, file), 'utf-8')
      tutorials.push(this.normalizeTutorial(JSON.parse(raw), file))
    }
    return tutorials
  }

  private normalizeTutorial(data: Record<string, unknown>, filename?: string): Tutorial {
    const id = (data.id as string) || filename?.replace('.json', '') || ''
    const status = (data.status as Tutorial['status']) === 'published' ? 'published' : 'draft'
    return {
      id,
      title: (data.title as string) || 'Untitled',
      summary: (data.summary as string) || '',
      content: (data.content as string) || '',
      status,
      chatSessionId: (data.chatSessionId as string) || undefined,
      createdAt: (data.createdAt as string) || new Date().toISOString(),
      updatedAt: (data.updatedAt as string) || new Date().toISOString(),
      publishedAt: (data.publishedAt as string) || undefined,
    }
  }

  // --- Export ---

  async exportAll(): Promise<StudioData> {
    const studio = await this.loadStudio()
    const manuals = await this.listManuals()
    return { ...studio, manuals }
  }

  private async fileExists(path: string): Promise<boolean> {
    try {
      await readFile(path)
      return true
    } catch {
      return false
    }
  }
}
