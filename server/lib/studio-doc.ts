import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

export class StudioDoc {
  private readonly filePath: string

  constructor(dataDir: string) {
    this.filePath = join(dataDir, 'studio.md')
  }

  async load(): Promise<string | null> {
    try {
      return await readFile(this.filePath, 'utf-8')
    } catch {
      return null
    }
  }

  async save(content: string): Promise<void> {
    await writeFile(this.filePath, content, 'utf-8')
  }
}
