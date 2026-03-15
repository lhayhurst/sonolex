import { describe, it, expect, vi } from 'vitest'
import { runClaude, stripMarkdownFences } from './claude-cli'

describe('stripMarkdownFences', () => {
  it('strips ```json fences', () => {
    const input = '```json\n{"title": "test"}\n```'
    expect(stripMarkdownFences(input)).toBe('{"title": "test"}')
  })

  it('strips ``` fences without language', () => {
    const input = '```\n{"title": "test"}\n```'
    expect(stripMarkdownFences(input)).toBe('{"title": "test"}')
  })

  it('returns plain text unchanged', () => {
    const input = '{"title": "test"}'
    expect(stripMarkdownFences(input)).toBe('{"title": "test"}')
  })

  it('handles extra whitespace', () => {
    const input = '  ```json\n{"title": "test"}\n```  '
    expect(stripMarkdownFences(input)).toBe('{"title": "test"}')
  })
})

describe('runClaude', () => {
  it('calls claude CLI and returns text and usage', async () => {
    // Integration test — only runs if claude is installed
    const result = await runClaude('Reply with exactly: hello')
    expect(result.text.toLowerCase()).toContain('hello')
    expect(result.usage).toBeDefined()
    expect(typeof result.usage.costUsd).toBe('number')
    expect(typeof result.usage.inputTokens).toBe('number')
    expect(typeof result.usage.outputTokens).toBe('number')
    expect(typeof result.usage.durationMs).toBe('number')
  }, 30000)
})
