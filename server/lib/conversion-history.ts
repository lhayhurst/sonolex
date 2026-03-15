import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

export interface ConversionEntry {
  inputChars: number
  durationMs: number
}

export class ConversionHistory {
  private readonly filePath: string

  constructor(dataDir: string) {
    this.filePath = join(dataDir, 'conversion-history.json')
  }

  async getEntries(): Promise<ConversionEntry[]> {
    try {
      const raw = await readFile(this.filePath, 'utf-8')
      return JSON.parse(raw) as ConversionEntry[]
    } catch {
      return []
    }
  }

  async record(entry: ConversionEntry): Promise<void> {
    const entries = await this.getEntries()
    entries.push(entry)
    await writeFile(this.filePath, JSON.stringify(entries, null, 2), 'utf-8')
  }

  async estimateDuration(inputChars: number): Promise<number | null> {
    const entries = await this.getEntries()
    if (entries.length === 0) return null

    // Simple linear model: duration = rate * chars + overhead
    // Use average chars-per-ms rate with a small fixed overhead
    const totalChars = entries.reduce((sum, e) => sum + e.inputChars, 0)
    const totalMs = entries.reduce((sum, e) => sum + e.durationMs, 0)
    const msPerChar = totalMs / totalChars

    return Math.round(msPerChar * inputChars)
  }
}
