// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { EventEmitter, Readable } from 'node:stream'

// Mock child_process.spawn
vi.mock('node:child_process', () => ({
  spawn: vi.fn(),
}))

import { spawn } from 'node:child_process'
import { runClaudeStream } from './claude-stream'
import type { ClaudeStreamEvent } from './claude-stream-parser'

function createMockProcess() {
  const proc = new EventEmitter() as ReturnType<typeof spawn>
  const stdout = new Readable({ read() {} })
  const stderr = new Readable({ read() {} })
  const stdin = { write: vi.fn(), end: vi.fn() }
  Object.assign(proc, { stdout, stderr, stdin, pid: 123 })
  return { proc, stdout, stdin }
}

describe('runClaudeStream', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('yields thinking and text events from the stream', async () => {
    const { proc, stdout, stdin } = createMockProcess()
    vi.mocked(spawn).mockReturnValue(proc as ReturnType<typeof spawn>)

    const events: ClaudeStreamEvent[] = []
    const streamPromise = (async () => {
      for await (const event of runClaudeStream('Hello')) {
        events.push(event)
      }
    })()

    // Push data async so the generator has time to set up listeners
    await new Promise(r => setTimeout(r, 5))

    stdout.push(JSON.stringify({ type: 'system', subtype: 'init' }) + '\n')
    stdout.push(JSON.stringify({
      type: 'stream_event',
      event: { type: 'content_block_delta', index: 0, delta: { type: 'thinking_delta', thinking: 'Considering...' } },
    }) + '\n')
    stdout.push(JSON.stringify({
      type: 'stream_event',
      event: { type: 'content_block_delta', index: 1, delta: { type: 'text_delta', text: 'Hello!' } },
    }) + '\n')
    stdout.push(JSON.stringify({
      type: 'result',
      subtype: 'success',
      result: 'Hello!',
      session_id: 'sess-1',
      total_cost_usd: 0.01,
      duration_ms: 1000,
      usage: { input_tokens: 10, output_tokens: 5 },
    }) + '\n')
    stdout.push(null) // end stream
    proc.emit('close', 0)

    await streamPromise

    expect(events).toHaveLength(3)
    expect(events[0]).toEqual({ type: 'thinking', text: 'Considering...' })
    expect(events[1]).toEqual({ type: 'text', text: 'Hello!' })
    expect(events[2]).toEqual({
      type: 'result',
      text: 'Hello!',
      sessionId: 'sess-1',
      usage: { inputTokens: 10, outputTokens: 5, costUsd: 0.01, durationMs: 1000 },
    })

    expect(stdin.write).toHaveBeenCalledWith('Hello')
    expect(stdin.end).toHaveBeenCalled()
  })

  it('passes streaming flags without effort by default', async () => {
    const { proc, stdout } = createMockProcess()
    vi.mocked(spawn).mockReturnValue(proc as ReturnType<typeof spawn>)

    const streamPromise = (async () => {
      for await (const _event of runClaudeStream('Test')) { /* drain */ }
    })()

    stdout.push(null)
    proc.emit('close', 0)
    await streamPromise

    const args = vi.mocked(spawn).mock.calls[0][1] as string[]
    expect(args).toContain('--output-format')
    expect(args).toContain('stream-json')
    expect(args).toContain('--verbose')
    expect(args).toContain('--include-partial-messages')
    expect(args).not.toContain('--effort')
  })

  it('passes --effort high when effort option is set', async () => {
    const { proc, stdout } = createMockProcess()
    vi.mocked(spawn).mockReturnValue(proc as ReturnType<typeof spawn>)

    const streamPromise = (async () => {
      for await (const _event of runClaudeStream('Test', { effort: 'high' })) { /* drain */ }
    })()

    stdout.push(null)
    proc.emit('close', 0)
    await streamPromise

    const args = vi.mocked(spawn).mock.calls[0][1] as string[]
    expect(args).toContain('--effort')
    expect(args).toContain('high')
  })

  it('passes options like resumeSessionId and allowedTools', async () => {
    const { proc, stdout } = createMockProcess()
    vi.mocked(spawn).mockReturnValue(proc as ReturnType<typeof spawn>)

    const streamPromise = (async () => {
      for await (const _event of runClaudeStream('Test', {
        resumeSessionId: 'abc-123',
        allowedTools: ['Read', 'Edit'],
        addDirs: ['/data'],
        systemPrompt: 'Be helpful',
      })) { /* drain */ }
    })()

    stdout.push(null)
    proc.emit('close', 0)
    await streamPromise

    const args = vi.mocked(spawn).mock.calls[0][1] as string[]
    expect(args).toContain('--resume')
    expect(args).toContain('abc-123')
    expect(args).toContain('--allowedTools')
    expect(args).toContain('Read')
    expect(args).toContain('Edit')
    expect(args).toContain('--add-dir')
    expect(args).toContain('/data')
    expect(args).toContain('--append-system-prompt')
    expect(args).toContain('Be helpful')
  })

  it('throws on non-zero exit code', async () => {
    const { proc, stdout } = createMockProcess()
    vi.mocked(spawn).mockReturnValue(proc as ReturnType<typeof spawn>)

    const streamPromise = (async () => {
      const events: ClaudeStreamEvent[] = []
      for await (const event of runClaudeStream('Fail')) {
        events.push(event)
      }
      return events
    })()

    stdout.push(null)
    proc.emit('close', 1)

    await expect(streamPromise).rejects.toThrow('claude CLI exited with code 1')
  })
})
