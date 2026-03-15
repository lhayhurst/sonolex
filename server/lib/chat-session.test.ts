import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { ChatSession } from './chat-session'

// Mock claude-cli
vi.mock('./claude-cli', () => ({
  runClaude: vi.fn(),
}))

import { runClaude } from './claude-cli'

describe('ChatSession', () => {
  let tempDir: string
  let session: ChatSession

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'sonolex-chat-'))
    session = new ChatSession(tempDir)
    vi.clearAllMocks()
  })

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true })
  })

  it('starts with no messages', async () => {
    const history = await session.getHistory()
    expect(history).toEqual([])
  })

  it('sends first message and captures session ID', async () => {
    vi.mocked(runClaude).mockResolvedValue({
      text: 'Hello! I can help with your studio.',
      usage: { inputTokens: 100, outputTokens: 20, costUsd: 0.01, durationMs: 2000 },
      sessionId: 'abc-123',
    })

    const response = await session.send('Hi, I need help', 'You are a studio assistant.')
    expect(response.text).toBe('Hello! I can help with your studio.')
    expect(session.sessionId).toBe('abc-123')

    // Check runClaude was called with system prompt (first message)
    expect(runClaude).toHaveBeenCalledWith(
      expect.stringContaining('Hi, I need help'),
      expect.objectContaining({ systemPrompt: 'You are a studio assistant.' }),
    )
  })

  it('resumes session on subsequent messages', async () => {
    vi.mocked(runClaude)
      .mockResolvedValueOnce({
        text: 'First response',
        usage: { inputTokens: 100, outputTokens: 20, costUsd: 0.01, durationMs: 2000 },
        sessionId: 'abc-123',
      })
      .mockResolvedValueOnce({
        text: 'Second response',
        usage: { inputTokens: 50, outputTokens: 10, costUsd: 0.005, durationMs: 1000 },
        sessionId: 'abc-123',
      })

    await session.send('First message', 'system prompt')
    await session.send('Second message', 'system prompt')

    // Second call should use --resume
    expect(runClaude).toHaveBeenCalledTimes(2)
    expect(vi.mocked(runClaude).mock.calls[1][1]).toEqual(
      expect.objectContaining({ resumeSessionId: 'abc-123' }),
    )
  })

  it('stores message history', async () => {
    vi.mocked(runClaude).mockResolvedValue({
      text: 'I can help!',
      usage: { inputTokens: 100, outputTokens: 20, costUsd: 0.01, durationMs: 2000 },
      sessionId: 'abc-123',
    })

    await session.send('Help me', 'system')

    const history = await session.getHistory()
    expect(history).toHaveLength(2)
    expect(history[0]).toEqual({ role: 'user', content: 'Help me' })
    expect(history[1]).toEqual({ role: 'assistant', content: 'I can help!' })
  })

  it('persists history to disk', async () => {
    vi.mocked(runClaude).mockResolvedValue({
      text: 'Saved!',
      usage: { inputTokens: 100, outputTokens: 20, costUsd: 0.01, durationMs: 2000 },
      sessionId: 'abc-123',
    })

    await session.send('Persist this', 'system')

    const session2 = new ChatSession(tempDir)
    const history = await session2.getHistory()
    expect(history).toHaveLength(2)
    expect(history[0].content).toBe('Persist this')
  })
})
