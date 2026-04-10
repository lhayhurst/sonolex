// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { parseClaudeStreamEvent, type ClaudeStreamEvent } from './claude-stream-parser'

describe('parseClaudeStreamEvent', () => {
  it('returns null for unparseable lines', () => {
    expect(parseClaudeStreamEvent('not json')).toBeNull()
    expect(parseClaudeStreamEvent('')).toBeNull()
  })

  it('parses thinking_delta into a thinking event', () => {
    const line = JSON.stringify({
      type: 'stream_event',
      event: {
        type: 'content_block_delta',
        index: 0,
        delta: { type: 'thinking_delta', thinking: 'Let me consider...' },
      },
    })
    const result = parseClaudeStreamEvent(line)
    expect(result).toEqual({ type: 'thinking', text: 'Let me consider...' })
  })

  it('parses text_delta into a text event', () => {
    const line = JSON.stringify({
      type: 'stream_event',
      event: {
        type: 'content_block_delta',
        index: 1,
        delta: { type: 'text_delta', text: 'MIDI CC messages are' },
      },
    })
    const result = parseClaudeStreamEvent(line)
    expect(result).toEqual({ type: 'text', text: 'MIDI CC messages are' })
  })

  it('parses the final result event', () => {
    const line = JSON.stringify({
      type: 'result',
      subtype: 'success',
      result: 'The full response text.',
      session_id: 'sess-abc',
      total_cost_usd: 0.04,
      duration_ms: 5000,
      usage: {
        input_tokens: 100,
        output_tokens: 50,
      },
    })
    const result = parseClaudeStreamEvent(line)
    expect(result).toEqual({
      type: 'result',
      text: 'The full response text.',
      sessionId: 'sess-abc',
      usage: {
        inputTokens: 100,
        outputTokens: 50,
        costUsd: 0.04,
        durationMs: 5000,
      },
    })
  })

  it('ignores system init events', () => {
    const line = JSON.stringify({ type: 'system', subtype: 'init', session_id: 'x' })
    expect(parseClaudeStreamEvent(line)).toBeNull()
  })

  it('ignores rate_limit_event', () => {
    const line = JSON.stringify({ type: 'rate_limit_event', rate_limit_info: {} })
    expect(parseClaudeStreamEvent(line)).toBeNull()
  })

  it('extracts thinking from assistant message summary', () => {
    const line = JSON.stringify({
      type: 'assistant',
      message: {
        content: [
          { type: 'thinking', thinking: 'Let me consider this carefully.' },
          { type: 'text', text: 'Here is my answer.' },
        ],
      },
    })
    const result = parseClaudeStreamEvent(line)
    expect(result).toEqual({ type: 'thinking_complete', text: 'Let me consider this carefully.' })
  })

  it('ignores assistant message summary with no thinking', () => {
    const line = JSON.stringify({
      type: 'assistant',
      message: { content: [{ type: 'text', text: 'just text' }] },
    })
    expect(parseClaudeStreamEvent(line)).toBeNull()
  })

  it('ignores content_block_start and content_block_stop', () => {
    const start = JSON.stringify({
      type: 'stream_event',
      event: { type: 'content_block_start', index: 0, content_block: { type: 'thinking' } },
    })
    const stop = JSON.stringify({
      type: 'stream_event',
      event: { type: 'content_block_stop', index: 0 },
    })
    expect(parseClaudeStreamEvent(start)).toBeNull()
    expect(parseClaudeStreamEvent(stop)).toBeNull()
  })

  it('parses tool_use content block deltas as tool events', () => {
    const line = JSON.stringify({
      type: 'stream_event',
      event: {
        type: 'content_block_start',
        index: 2,
        content_block: { type: 'tool_use', id: 'tu_1', name: 'Read' },
      },
    })
    const result = parseClaudeStreamEvent(line)
    expect(result).toEqual({ type: 'tool_use', toolName: 'Read' })
  })
})
