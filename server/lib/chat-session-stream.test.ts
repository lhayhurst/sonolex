// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { ChatSession } from './chat-session'
import type { ClaudeStreamEvent } from './claude-stream-parser'

// Mock claude-stream (the new streaming module)
vi.mock('./claude-stream', () => ({
  runClaudeStream: vi.fn(),
}))

// Mock claude-cli (needed because chat-session imports it)
vi.mock('./claude-cli', () => ({
  runClaude: vi.fn(),
}))

import { runClaudeStream } from './claude-stream'

describe('ChatSession.sendStreaming', () => {
  let tempDir: string
  let session: ChatSession

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'sonolex-chat-stream-'))
    session = new ChatSession(join(tempDir, 'chat-history.json'))
    vi.clearAllMocks()
  })

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true })
  })

  it('yields streaming events and saves final result to history', async () => {
    const mockEvents: ClaudeStreamEvent[] = [
      { type: 'thinking', text: 'Let me think...' },
      { type: 'text', text: 'Here is ' },
      { type: 'text', text: 'my answer.' },
      {
        type: 'result',
        text: 'Here is my answer.',
        sessionId: 'stream-sess-1',
        usage: { inputTokens: 50, outputTokens: 20, costUsd: 0.01, durationMs: 3000 },
      },
    ]

    vi.mocked(runClaudeStream).mockImplementation(async function* () {
      for (const event of mockEvents) yield event
    })

    const collected: ClaudeStreamEvent[] = []
    const result = await session.sendStreaming(
      'enriched question',
      'system prompt',
      'user question',
    )

    for await (const event of result.stream) {
      collected.push(event)
    }

    // All events should come through
    expect(collected).toEqual(mockEvents)

    // Session ID captured
    expect(session.sessionId).toBe('stream-sess-1')

    // History saved with display message, not enriched
    const history = await session.getHistory()
    expect(history).toHaveLength(2)
    expect(history[0]).toEqual({ role: 'user', content: 'user question' })
    expect(history[1]).toEqual({ role: 'assistant', content: 'Here is my answer.' })
  })

  it('passes system prompt only on first message', async () => {
    vi.mocked(runClaudeStream).mockImplementation(async function* () {
      yield {
        type: 'result' as const,
        text: 'response',
        sessionId: 'sess-1',
        usage: { inputTokens: 10, outputTokens: 5, costUsd: 0.001, durationMs: 500 },
      }
    })

    // First message
    const r1 = await session.sendStreaming('msg1', 'system')
    for await (const _ of r1.stream) { /* drain */ }

    // Second message
    const r2 = await session.sendStreaming('msg2', 'system')
    for await (const _ of r2.stream) { /* drain */ }

    const calls = vi.mocked(runClaudeStream).mock.calls
    expect(calls[0][1]).toEqual(expect.objectContaining({ systemPrompt: 'system' }))
    expect(calls[1][1]?.systemPrompt).toBeUndefined()
    expect(calls[1][1]).toEqual(expect.objectContaining({ resumeSessionId: 'sess-1' }))
  })

  it('saves image URL in history when provided', async () => {
    vi.mocked(runClaudeStream).mockImplementation(async function* () {
      yield {
        type: 'result' as const,
        text: 'I see an image',
        sessionId: 'sess-img',
        usage: { inputTokens: 10, outputTokens: 5, costUsd: 0.001, durationMs: 500 },
      }
    })

    const r = await session.sendStreaming('describe this', 'system', 'describe this', undefined, '/api/chat/images/photo.jpg')
    for await (const _ of r.stream) { /* drain */ }

    const history = await session.getHistory()
    expect(history[0]).toEqual({ role: 'user', content: 'describe this', imageUrl: '/api/chat/images/photo.jpg' })
  })
})
