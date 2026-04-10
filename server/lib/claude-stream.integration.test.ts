// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { runClaudeStream } from './claude-stream'
import type { ClaudeStreamEvent } from './claude-stream-parser'

describe('runClaudeStream integration', () => {
  it('produces thinking events from the real CLI', async () => {
    const events: ClaudeStreamEvent[] = []

    // Complex prompts reliably trigger extended thinking
    for await (const event of runClaudeStream(
      'What is the best way to route audio from a hardware synthesizer through an effects chain and back into a DAW, considering latency compensation? Keep your answer to 3 sentences.',
    )) {
      events.push(event)
    }

    console.log('Parsed event types:', events.map(e => e.type))

    const thinkingEvents = events.filter(e => e.type === 'thinking' || e.type === 'thinking_complete')
    const textEvents = events.filter(e => e.type === 'text')
    const resultEvents = events.filter(e => e.type === 'result')

    // Must have thinking — either incremental (thinking) or from summary (thinking_complete)
    expect(thinkingEvents.length).toBeGreaterThan(0)
    // Must have text and result
    expect(textEvents.length).toBeGreaterThan(0)
    expect(resultEvents).toHaveLength(1)
  }, 60000)
})
