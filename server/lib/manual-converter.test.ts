import { describe, it, expect, vi } from 'vitest'
import { convertToManual, buildConversionPrompt, splitIntoChunks } from './manual-converter'

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

  it('requires proper GFM table syntax for tabular data', () => {
    // PDF tables (MIDI CC maps, spec sheets, routing matrices) only
    // render correctly if Claude emits leading/trailing pipes and a
    // separator row. "Naked-pipe" tables silently fail in markdown
    // renderers — explicit format guidance prevents this.
    const prompt = buildConversionPrompt('text', 'manual.pdf')
    expect(prompt).toMatch(/\|---\||leading.*pipe|markdown table/i)
  })

  it('instructs to strip stale "(page N)" cross-references from the source', () => {
    // PDF text extraction leaves inline references like "(page 52)"
    // pointing at physical book pagination, useless in the markdown.
    const prompt = buildConversionPrompt('text', 'manual.pdf')
    expect(prompt).toMatch(/page.*reference|page.*N|\(page/i)
    expect(prompt).toMatch(/strip|remove|drop/i)
  })

  it('forbids duplicate headings at the same level within a document', () => {
    // PDF extraction often produces repeating chapter titles when
    // headers/footers leak into the text. Without a heading-uniqueness
    // rule Claude reproduces them faithfully and the resulting TOC
    // is a mess.
    const prompt = buildConversionPrompt('text', 'manual.pdf')
    expect(prompt).toMatch(/duplicate.*heading|same.*heading|do not repeat/i)
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

  it('chunks large text and combines results', async () => {
    // Create text larger than the chunk threshold
    const largeText = 'A'.repeat(60000)

    const mockJson = JSON.stringify({
      title: 'RME Fireface UCX II',
      summary: 'A pro audio interface.',
      sections: [
        { heading: 'Part 1', content: 'Content from chunk.', level: 1 },
      ],
    })

    // Should be called multiple times for chunks
    vi.mocked(runClaude).mockResolvedValue({ text: mockJson, usage: mockUsage })
    vi.mocked(stripMarkdownFences).mockReturnValue(mockJson)

    const result = await convertToManual(largeText, 'rme-fireface.pdf')

    // Should have been called more than once (title/summary + chunks)
    expect(vi.mocked(runClaude).mock.calls.length).toBeGreaterThan(1)
    expect(result.title).toBe('RME Fireface UCX II')
    expect(result.sections.length).toBeGreaterThan(0)
  })

  it('throws clear error when Claude fails on a chunk', async () => {
    const largeText = 'B'.repeat(60000)

    vi.mocked(runClaude).mockResolvedValue({
      text: "I can't process this right now",
      usage: mockUsage,
    })
    vi.mocked(stripMarkdownFences).mockReturnValue("I can't process this right now")

    await expect(convertToManual(largeText, 'huge.pdf')).rejects.toThrow(/invalid response/)
  })
})

describe('splitIntoChunks', () => {
  it('returns a single chunk for small text', () => {
    const chunks = splitIntoChunks('Short text', 50000)
    expect(chunks).toHaveLength(1)
    expect(chunks[0]).toBe('Short text')
  })

  it('splits on double newlines near chunk boundaries', () => {
    const part1 = 'A'.repeat(100)
    const part2 = 'B'.repeat(100)
    const text = `${part1}\n\n${part2}`
    const chunks = splitIntoChunks(text, 150)
    expect(chunks).toHaveLength(2)
    expect(chunks[0]).toContain('A')
    expect(chunks[1]).toContain('B')
  })

  it('forces a split if no good break point found', () => {
    const text = 'A'.repeat(300)
    const chunks = splitIntoChunks(text, 100)
    expect(chunks.length).toBeGreaterThan(1)
    // All content should be preserved
    expect(chunks.join('')).toBe(text)
  })

  it('preserves all content across chunks', () => {
    const part1 = 'Hello world this is part one'
    const part2 = 'And this is part two'
    const text = `${part1}\n\n${part2}`
    const chunks = splitIntoChunks(text, 35)
    expect(chunks).toHaveLength(2)
    // All content should be present across chunks
    const combined = chunks.join(' ')
    expect(combined).toContain('Hello')
    expect(combined).toContain('part two')
  })
})
