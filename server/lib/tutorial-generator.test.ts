import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  generateTutorial,
  buildTutorialPrompt,
  formatTranscript,
} from './tutorial-generator'
import type { ChatMessage } from './chat-session'

vi.mock('./claude-cli', () => ({
  runClaude: vi.fn(),
  stripMarkdownFences: vi.fn((t: string) => t),
}))

import { runClaude, stripMarkdownFences } from './claude-cli'

const mockUsage = { inputTokens: 100, outputTokens: 50, costUsd: 0.01, durationMs: 5000 }

const sampleMessages: ChatMessage[] = [
  { role: 'user', content: 'walk me through OXI Saga step 1' },
  { role: 'assistant', content: 'Step 1: Open the SEQ menu.' },
  { role: 'user', content: 'and step 2?' },
  { role: 'assistant', content: 'Step 2: Choose Saga from the menu.' },
]

describe('formatTranscript', () => {
  it('renders each turn with role label', () => {
    const out = formatTranscript(sampleMessages)
    expect(out).toContain('USER:')
    expect(out).toContain('ASSISTANT:')
    expect(out).toContain('walk me through OXI Saga step 1')
    expect(out).toContain('Step 2: Choose Saga from the menu.')
  })

  it('preserves the order of turns', () => {
    const out = formatTranscript(sampleMessages)
    expect(out.indexOf('step 1')).toBeLessThan(out.indexOf('step 2'))
  })

  it('returns empty string for no messages', () => {
    expect(formatTranscript([])).toBe('')
  })
})

describe('buildTutorialPrompt', () => {
  it('includes the formatted transcript', () => {
    const prompt = buildTutorialPrompt(sampleMessages, 'oxy one saga tutorial')
    expect(prompt).toContain('walk me through OXI Saga step 1')
    expect(prompt).toContain('Step 2: Choose Saga from the menu.')
  })

  it('asks Claude for JSON with title, summary, and content fields', () => {
    const prompt = buildTutorialPrompt(sampleMessages, 'session name')
    expect(prompt).toMatch(/title/i)
    expect(prompt).toMatch(/summary/i)
    expect(prompt).toMatch(/content/i)
    expect(prompt).toMatch(/JSON/i)
  })

  it('asks for a step-by-step tutorial structure', () => {
    const prompt = buildTutorialPrompt(sampleMessages, 'session name')
    expect(prompt).toMatch(/step/i)
  })

  it('includes the chat session name as context', () => {
    const prompt = buildTutorialPrompt(sampleMessages, 'oxy one saga tutorial')
    expect(prompt).toContain('oxy one saga tutorial')
  })
})

describe('generateTutorial', () => {
  beforeEach(() => {
    vi.mocked(runClaude).mockReset()
    vi.mocked(stripMarkdownFences).mockImplementation((t: string) => t)
  })

  it('parses the JSON response into title, summary, content', async () => {
    const response = JSON.stringify({
      title: 'OXI Saga Tutorial',
      summary: 'A walk through OXI Saga.',
      content: '## Step 1\n\nOpen the SEQ menu.\n\n## Step 2\n\nChoose Saga.',
    })
    vi.mocked(runClaude).mockResolvedValue({ text: response, usage: mockUsage })

    const result = await generateTutorial(sampleMessages, 'oxy one saga tutorial')
    expect(result.title).toBe('OXI Saga Tutorial')
    expect(result.summary).toBe('A walk through OXI Saga.')
    expect(result.content).toContain('## Step 1')
    expect(result.usage).toEqual(mockUsage)
  })

  it('strips markdown fences before parsing', async () => {
    const fenced = '```json\n{"title":"T","summary":"S","content":"C"}\n```'
    vi.mocked(runClaude).mockResolvedValue({ text: fenced, usage: mockUsage })
    vi.mocked(stripMarkdownFences).mockReturnValue('{"title":"T","summary":"S","content":"C"}')

    const result = await generateTutorial(sampleMessages, 'name')
    expect(result.title).toBe('T')
    expect(stripMarkdownFences).toHaveBeenCalledWith(fenced)
  })

  it('throws a helpful error if Claude returns invalid JSON', async () => {
    vi.mocked(runClaude).mockResolvedValue({ text: 'not json at all', usage: mockUsage })

    await expect(generateTutorial(sampleMessages, 'name')).rejects.toThrow(/invalid|JSON|parse/i)
  })

  it('passes a system prompt that asks for a tutorial doc, no tools', async () => {
    vi.mocked(runClaude).mockResolvedValue({
      text: JSON.stringify({ title: 'T', summary: 'S', content: 'C' }),
      usage: mockUsage,
    })
    await generateTutorial(sampleMessages, 'name')

    const callArgs = vi.mocked(runClaude).mock.calls[0]
    const options = callArgs[1]
    expect(options?.disableTools).toBe(true)
  })
})
