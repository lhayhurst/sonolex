import { describe, it, expect, vi } from 'vitest'
import { convertToManual, buildConversionPrompt } from './manual-converter'

vi.mock('./claude-cli', () => ({
  runClaude: vi.fn(),
  stripMarkdownFences: vi.fn((t: string) => t),
}))

import { runClaude, stripMarkdownFences } from './claude-cli'

const mockUsage = { inputTokens: 100, outputTokens: 50, costUsd: 0.01, durationMs: 5000 }

describe('buildConversionPrompt', () => {
  it('includes the raw text in the prompt', () => {
    const prompt = buildConversionPrompt('Some raw PDF text here', 'MyDevice Manual.pdf')
    expect(prompt).toContain('Some raw PDF text here')
  })

  it('includes the filename for context', () => {
    const prompt = buildConversionPrompt('text', 'ARTEMIS-DIGITAL-MANUAL.pdf')
    expect(prompt).toContain('ARTEMIS-DIGITAL-MANUAL.pdf')
  })

  it('asks for structured sections with headings', () => {
    const prompt = buildConversionPrompt('text', 'manual.pdf')
    expect(prompt).toMatch(/section/i)
    expect(prompt).toMatch(/heading/i)
  })

  it('asks for a summary', () => {
    const prompt = buildConversionPrompt('text', 'manual.pdf')
    expect(prompt).toMatch(/summary/i)
  })
})

describe('convertToManual', () => {
  it('calls claude CLI and returns structured manual with summary and usage', async () => {
    const mockJson = JSON.stringify({
      title: 'Artemis Digital Manual',
      summary: 'The Artemis is a 6-voice analog polysynth by Dreadbox.',
      sections: [
        { heading: 'Overview', content: 'The Artemis is a polysynth.', level: 1 },
        { heading: 'MIDI', content: 'CC 19: Cutoff', level: 2 },
      ],
    })

    vi.mocked(runClaude).mockResolvedValue({ text: mockJson, usage: mockUsage })
    vi.mocked(stripMarkdownFences).mockReturnValue(mockJson)

    const result = await convertToManual('raw text here', 'ARTEMIS.pdf')

    expect(runClaude).toHaveBeenCalledTimes(1)
    expect(result.title).toBe('Artemis Digital Manual')
    expect(result.summary).toBe('The Artemis is a 6-voice analog polysynth by Dreadbox.')
    expect(result.sections).toHaveLength(2)
    expect(result.content).toBe('raw text here')
    expect(result.usage.costUsd).toBe(0.01)
  })

  it('defaults summary to empty string if not provided', async () => {
    const mockJson = JSON.stringify({
      title: 'Some Manual',
      sections: [],
    })

    vi.mocked(runClaude).mockResolvedValue({ text: mockJson, usage: mockUsage })
    vi.mocked(stripMarkdownFences).mockReturnValue(mockJson)

    const result = await convertToManual('raw text', 'manual.pdf')
    expect(result.summary).toBe('')
  })
})
