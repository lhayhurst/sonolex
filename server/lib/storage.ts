import { readFile, writeFile, readdir, mkdir, unlink } from 'node:fs/promises'
import { join } from 'node:path'
import type { Manual, StudioData } from '../../src/types/index'
import { createStudioData } from '../../src/types/index'

export class Storage {
  private readonly dataDir: string
  private readonly manualsDir: string
  private readonly studioPath: string

  constructor(dataDir: string) {
    this.dataDir = dataDir
    this.manualsDir = join(dataDir, 'manuals')
    this.studioPath = join(dataDir, 'studio.json')
  }

  async init(): Promise<void> {
    await mkdir(this.manualsDir, { recursive: true })

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

  async loadManual(id: string): Promise<Manual | undefined> {
    const path = join(this.manualsDir, `${id}.json`)
    const exists = await this.fileExists(path)
    if (!exists) return undefined

    const raw = await readFile(path, 'utf-8')
    return JSON.parse(raw) as Manual
  }

  async saveManual(manual: Manual): Promise<void> {
    const path = join(this.manualsDir, `${manual.id}.json`)
    await writeFile(path, JSON.stringify(manual, null, 2), 'utf-8')
  }

  async deleteManual(id: string): Promise<void> {
    const path = join(this.manualsDir, `${id}.json`)
    try {
      await unlink(path)
    } catch (err: unknown) {
      if ((err as NodeJS.ErrnoException).code !== 'ENOENT') throw err
    }
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
