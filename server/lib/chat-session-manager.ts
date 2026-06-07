import { readFile, writeFile, mkdir, unlink, rename } from 'node:fs/promises'
import { join } from 'node:path'
import crypto from 'node:crypto'
import { ChatSession } from './chat-session'
import type { ChatSessionInfo } from '../../src/types/index'

export class ChatSessionManager {
  private readonly dataDir: string
  private readonly chatsDir: string
  private readonly indexPath: string
  private readonly sessions: Map<string, ChatSession> = new Map()
  private index: ChatSessionInfo[] = []

  constructor(dataDir: string) {
    this.dataDir = dataDir
    this.chatsDir = join(dataDir, 'chats')
    this.indexPath = join(dataDir, 'chat-sessions.json')
  }

  async init(): Promise<void> {
    await mkdir(this.chatsDir, { recursive: true })
    await this.loadIndex()
    await this.migrateLegacy()
  }

  async listSessions(): Promise<ChatSessionInfo[]> {
    return [...this.index].sort((a, b) => {
      const aTime = a.lastMessageAt ?? a.createdAt
      const bTime = b.lastMessageAt ?? b.createdAt
      return bTime.localeCompare(aTime)
    })
  }

  async createSession(name?: string): Promise<ChatSessionInfo> {
    const info: ChatSessionInfo = {
      id: crypto.randomUUID(),
      name: name ?? 'New Chat',
      createdAt: new Date().toISOString(),
      lastMessageAt: null,
    }
    this.index.push(info)
    await this.saveIndex()
    return info
  }

  getSession(id: string): ChatSession | undefined {
    const info = this.index.find(s => s.id === id)
    if (!info) return undefined

    if (!this.sessions.has(id)) {
      const historyPath = join(this.chatsDir, `${id}.json`)
      this.sessions.set(id, new ChatSession(historyPath))
    }
    return this.sessions.get(id)!
  }

  async renameSession(id: string, name: string): Promise<boolean> {
    const info = this.index.find(s => s.id === id)
    if (!info) return false
    info.name = name
    await this.saveIndex()
    return true
  }

  async deleteSession(id: string): Promise<boolean> {
    const idx = this.index.findIndex(s => s.id === id)
    if (idx === -1) return false

    this.index.splice(idx, 1)
    this.sessions.delete(id)
    await this.saveIndex()

    try {
      await unlink(join(this.chatsDir, `${id}.json`))
    } catch {
      // File may not exist yet
    }
    return true
  }

  async updateLastMessageAt(id: string): Promise<void> {
    const info = this.index.find(s => s.id === id)
    if (info) {
      info.lastMessageAt = new Date().toISOString()
      await this.saveIndex()
    }
  }

  async extendScope(id: string, manualIds: string[]): Promise<boolean> {
    const info = this.index.find(s => s.id === id)
    if (!info) return false
    if (info.userOverrideOfManuals) return true

    const current = info.manualIdsInScope ?? []
    const merged = [...current]
    for (const mid of manualIds) {
      if (!merged.includes(mid)) merged.push(mid)
    }
    if (merged.length === current.length) return true

    info.manualIdsInScope = merged
    await this.saveIndex()
    return true
  }

  async setScope(
    id: string,
    scope: { manualIdsInScope: string[]; userOverrideOfManuals: boolean },
  ): Promise<boolean> {
    const info = this.index.find(s => s.id === id)
    if (!info) return false

    info.manualIdsInScope = [...scope.manualIdsInScope]
    info.userOverrideOfManuals = scope.userOverrideOfManuals
    await this.saveIndex()
    return true
  }

  getInfo(id: string): ChatSessionInfo | undefined {
    return this.index.find(s => s.id === id)
  }

  private async loadIndex(): Promise<void> {
    try {
      const raw = await readFile(this.indexPath, 'utf-8')
      this.index = JSON.parse(raw)
    } catch {
      this.index = []
    }
  }

  private async saveIndex(): Promise<void> {
    await writeFile(this.indexPath, JSON.stringify(this.index, null, 2), 'utf-8')
  }

  private async migrateLegacy(): Promise<void> {
    if (this.index.length > 0) return

    const legacyPath = join(this.dataDir, 'chat-history.json')
    try {
      const raw = await readFile(legacyPath, 'utf-8')
      JSON.parse(raw) // validate it's valid JSON

      const info: ChatSessionInfo = {
        id: crypto.randomUUID(),
        name: 'Migrated Chat',
        createdAt: new Date().toISOString(),
        lastMessageAt: new Date().toISOString(),
      }

      const newPath = join(this.chatsDir, `${info.id}.json`)
      await rename(legacyPath, newPath)

      this.index.push(info)
      await this.saveIndex()
    } catch {
      // No legacy file or invalid — nothing to migrate
    }
  }
}
