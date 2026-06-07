import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { ChatSessionManager } from './chat-session-manager'

vi.mock('./claude-cli', () => ({
  runClaude: vi.fn(),
}))

import { runClaude } from './claude-cli'

describe('ChatSessionManager', () => {
  let tempDir: string
  let manager: ChatSessionManager

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'sonolex-sessions-'))
    manager = new ChatSessionManager(tempDir)
    await manager.init()
    vi.clearAllMocks()
  })

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true })
  })

  describe('init', () => {
    it('creates the chats directory', async () => {
      const { stat } = await import('node:fs/promises')
      const chatsDir = join(tempDir, 'chats')
      const stats = await stat(chatsDir)
      expect(stats.isDirectory()).toBe(true)
    })
  })

  describe('listSessions', () => {
    it('returns empty list initially', async () => {
      const sessions = await manager.listSessions()
      expect(sessions).toEqual([])
    })

    it('returns sessions sorted by most recent first', async () => {
      await manager.createSession('First chat')
      await manager.createSession('Second chat')

      const sessions = await manager.listSessions()
      expect(sessions).toHaveLength(2)
      expect(sessions[0].name).toBe('Second chat')
      expect(sessions[1].name).toBe('First chat')
    })
  })

  describe('createSession', () => {
    it('creates a session with a name', async () => {
      const session = await manager.createSession('My chat')
      expect(session.name).toBe('My chat')
      expect(session.id).toBeDefined()
      expect(session.createdAt).toBeDefined()
      expect(session.lastMessageAt).toBeNull()
    })

    it('creates a session with default name', async () => {
      const session = await manager.createSession()
      expect(session.name).toBe('New Chat')
    })

    it('persists the session to the index', async () => {
      await manager.createSession('Persisted chat')

      // Load from a fresh manager
      const manager2 = new ChatSessionManager(tempDir)
      await manager2.init()
      const sessions = await manager2.listSessions()
      expect(sessions).toHaveLength(1)
      expect(sessions[0].name).toBe('Persisted chat')
    })
  })

  describe('getSession', () => {
    it('returns a ChatSession instance for a valid ID', async () => {
      const info = await manager.createSession('Test')
      const session = manager.getSession(info.id)
      expect(session).toBeDefined()
    })

    it('returns undefined for an unknown ID', () => {
      const session = manager.getSession('nonexistent')
      expect(session).toBeUndefined()
    })

    it('returns the same instance on repeated calls', async () => {
      const info = await manager.createSession('Test')
      const s1 = manager.getSession(info.id)
      const s2 = manager.getSession(info.id)
      expect(s1).toBe(s2)
    })
  })

  describe('renameSession', () => {
    it('updates the session name', async () => {
      const info = await manager.createSession('Old name')
      await manager.renameSession(info.id, 'New name')

      const sessions = await manager.listSessions()
      expect(sessions[0].name).toBe('New name')
    })

    it('returns false for unknown session', async () => {
      const result = await manager.renameSession('nonexistent', 'Name')
      expect(result).toBe(false)
    })
  })

  describe('deleteSession', () => {
    it('removes the session from the list', async () => {
      const info = await manager.createSession('To delete')
      await manager.deleteSession(info.id)

      const sessions = await manager.listSessions()
      expect(sessions).toHaveLength(0)
    })

    it('removes the history file', async () => {
      const info = await manager.createSession('To delete')

      // Send a message to create the history file
      vi.mocked(runClaude).mockResolvedValueOnce({
        text: 'Hello!',
        usage: { inputTokens: 10, outputTokens: 5, costUsd: 0.001, durationMs: 500 },
        sessionId: 'claude-session-1',
      })
      const session = manager.getSession(info.id)!
      await session.send('Hi', 'system prompt')

      await manager.deleteSession(info.id)

      // Verify file is gone
      const { access } = await import('node:fs/promises')
      const historyFile = join(tempDir, 'chats', `${info.id}.json`)
      await expect(access(historyFile)).rejects.toThrow()
    })

    it('returns false for unknown session', async () => {
      const result = await manager.deleteSession('nonexistent')
      expect(result).toBe(false)
    })
  })

  describe('updateLastMessageAt', () => {
    it('updates the lastMessageAt timestamp', async () => {
      const info = await manager.createSession('Test')
      expect(info.lastMessageAt).toBeNull()

      await manager.updateLastMessageAt(info.id)

      const sessions = await manager.listSessions()
      expect(sessions[0].lastMessageAt).not.toBeNull()
    })
  })

  describe('migration', () => {
    it('migrates legacy chat-history.json on init', async () => {
      const { writeFile } = await import('node:fs/promises')

      // Create a legacy chat history file
      const legacyPath = join(tempDir, 'chat-history.json')
      await writeFile(legacyPath, JSON.stringify({
        sessionId: 'old-claude-session',
        messages: [
          { role: 'user', content: 'Hello' },
          { role: 'assistant', content: 'Hi there!' },
        ],
      }))

      // Create a fresh manager that will discover the legacy file
      const freshManager = new ChatSessionManager(tempDir)
      await freshManager.init()

      const sessions = await freshManager.listSessions()
      expect(sessions).toHaveLength(1)
      expect(sessions[0].name).toBe('Migrated Chat')

      // Verify the migrated session has the history
      const session = freshManager.getSession(sessions[0].id)!
      const history = await session.getHistory()
      expect(history).toHaveLength(2)
      expect(history[0].content).toBe('Hello')

      // Verify legacy file was removed
      const { access } = await import('node:fs/promises')
      await expect(access(legacyPath)).rejects.toThrow()
    })

    it('does not migrate if sessions already exist', async () => {
      const { writeFile } = await import('node:fs/promises')

      // Create a session first
      await manager.createSession('Existing')

      // Now write a legacy file
      const legacyPath = join(tempDir, 'chat-history.json')
      await writeFile(legacyPath, JSON.stringify({
        sessionId: 'old',
        messages: [{ role: 'user', content: 'Old' }],
      }))

      // Re-init — should NOT migrate because sessions already exist
      const freshManager = new ChatSessionManager(tempDir)
      await freshManager.init()

      const sessions = await freshManager.listSessions()
      expect(sessions).toHaveLength(1)
      expect(sessions[0].name).toBe('Existing')
    })
  })

  describe('manual scope tracking', () => {
    it('new sessions start with empty scope and no user override', async () => {
      const session = await manager.createSession('Scope test')
      expect(session.manualIdsInScope ?? []).toEqual([])
      expect(session.userOverrideOfManuals ?? false).toBe(false)
    })

    it('extendScope adds new manual ids to the session scope', async () => {
      const session = await manager.createSession('Scope test')
      await manager.extendScope(session.id, ['oxi-one', 'spitfire-felt'])

      const sessions = await manager.listSessions()
      const updated = sessions.find(s => s.id === session.id)!
      expect(updated.manualIdsInScope).toEqual(['oxi-one', 'spitfire-felt'])
    })

    it('extendScope deduplicates and preserves prior entries', async () => {
      const session = await manager.createSession('Scope test')
      await manager.extendScope(session.id, ['oxi-one'])
      await manager.extendScope(session.id, ['oxi-one', 'spitfire-felt'])

      const updated = (await manager.listSessions()).find(s => s.id === session.id)!
      expect(updated.manualIdsInScope).toEqual(['oxi-one', 'spitfire-felt'])
    })

    it('extendScope is a no-op when the session has user override enabled', async () => {
      const session = await manager.createSession('Scope test')
      await manager.setScope(session.id, { manualIdsInScope: ['oxi-one'], userOverrideOfManuals: true })
      await manager.extendScope(session.id, ['spitfire-felt'])

      const updated = (await manager.listSessions()).find(s => s.id === session.id)!
      expect(updated.manualIdsInScope).toEqual(['oxi-one'])
      expect(updated.userOverrideOfManuals).toBe(true)
    })

    it('setScope replaces the scope and persists across re-init', async () => {
      const session = await manager.createSession('Scope test')
      await manager.setScope(session.id, { manualIdsInScope: ['a', 'b'], userOverrideOfManuals: true })

      const fresh = new ChatSessionManager(tempDir)
      await fresh.init()
      const reloaded = (await fresh.listSessions()).find(s => s.id === session.id)!
      expect(reloaded.manualIdsInScope).toEqual(['a', 'b'])
      expect(reloaded.userOverrideOfManuals).toBe(true)
    })

    it('setScope with userOverrideOfManuals=false clears the override flag', async () => {
      const session = await manager.createSession('Scope test')
      await manager.setScope(session.id, { manualIdsInScope: ['a'], userOverrideOfManuals: true })
      await manager.setScope(session.id, { manualIdsInScope: [], userOverrideOfManuals: false })

      const updated = (await manager.listSessions()).find(s => s.id === session.id)!
      expect(updated.manualIdsInScope).toEqual([])
      expect(updated.userOverrideOfManuals).toBe(false)
    })

    it('returns false from setScope / extendScope for unknown session', async () => {
      expect(await manager.extendScope('nope', ['x'])).toBe(false)
      expect(await manager.setScope('nope', { manualIdsInScope: ['x'], userOverrideOfManuals: false })).toBe(false)
    })
  })
})
