import { describe, it, expect } from 'vitest'
import { renderManualMarkdown } from './manual-markdown'
import type { Manual } from '../../src/types/index'

function makeManual(overrides: Partial<Manual> = {}): Manual {
  return {
    id: 'manual-1',
    title: 'Artemis User Guide',
    summary: 'Synth manual',
    content: '# Artemis\n\nA synthesizer.',
    sections: [
      { heading: 'Overview', content: 'A polyphonic synth.', level: 1 },
      { heading: 'MIDI CCs', content: '- 1: Mod\n- 7: Volume', level: 2 },
    ],
    sourceFileName: 'artemis.pdf',
    convertedAt: '2026-01-15T12:00:00.000Z',
    ...overrides,
  }
}

describe('renderManualMarkdown', () => {
  it('renders frontmatter with id, title, source, convertedAt, and summary', () => {
    const md = renderManualMarkdown(makeManual())

    expect(md.startsWith('---\n')).toBe(true)
    expect(md).toContain('id: manual-1')
    expect(md).toContain('title: "Artemis User Guide"')
    expect(md).toContain('source: "artemis.pdf"')
    expect(md).toContain('convertedAt: 2026-01-15T12:00:00.000Z')
    expect(md).toContain('summary: "Synth manual"')
  })

  it('renders sections with heading levels respected', () => {
    const md = renderManualMarkdown(makeManual())

    expect(md).toContain('# Overview')
    expect(md).toContain('A polyphonic synth.')
    expect(md).toContain('## MIDI CCs')
    expect(md).toContain('- 1: Mod')
  })

  it('clamps section heading levels to 1-6', () => {
    const md = renderManualMarkdown(makeManual({
      sections: [
        { heading: 'Too low', content: 'x', level: 0 },
        { heading: 'Too high', content: 'y', level: 9 },
      ],
    }))

    expect(md).toContain('# Too low')
    expect(md).toContain('###### Too high')
  })

  it('omits optional frontmatter fields when absent', () => {
    const md = renderManualMarkdown(makeManual({
      summary: undefined,
      sourceFileName: undefined,
      convertedAt: undefined,
    }))

    expect(md).not.toContain('summary:')
    expect(md).not.toContain('source:')
    expect(md).not.toContain('convertedAt:')
  })

  it('handles a manual with no sections', () => {
    const md = renderManualMarkdown(makeManual({ sections: undefined }))

    expect(md).toContain('---')
    expect(md).toContain('id: manual-1')
  })

  it('escapes quotes in title', () => {
    const md = renderManualMarkdown(makeManual({ title: 'A "quoted" title' }))
    expect(md).toContain('title: "A \\"quoted\\" title"')
  })
})
