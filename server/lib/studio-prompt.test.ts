import { describe, it, expect } from 'vitest'
import { buildSystemPrompt } from './studio-prompt'
import type { Manual, CheatSheet } from '../../src/types/index'

const manuals: Manual[] = [
  {
    id: 'chase-bliss-clean-midi-manual',
    title: 'Chase Bliss Clean Manual',
    summary: 'An analog VCA-based compressor with MIDI control.',
    content: 'full text...',
    sections: [
      { heading: 'Overview', content: 'The Clean is a compressor.', level: 1 },
      { heading: 'MIDI CC Map', content: 'CC 14: Dynamics, CC 15: Sensitivity', level: 2 },
    ],
  },
  {
    id: 'monolit-2-0-user-manual',
    title: 'MONOLIT 2.0.0 User Manual',
    summary: 'A versatile 8-slider MIDI controller hub.',
    content: 'full text...',
    sections: [
      { heading: 'MONOLIT', content: 'Central control hub.', level: 1 },
      { heading: 'CTRL Mode', content: 'Standard CC control.', level: 2 },
    ],
  },
]

const cheatsheets: CheatSheet[] = [
  {
    id: 'drop-ableton-live-setup',
    title: 'Drop → Ableton Live Setup',
    content: '...',
    category: 'signal-routing',
    tags: ['drop', 'ableton'],
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
  },
]

describe('buildSystemPrompt — QMD-only mode', () => {
  describe('catalog', () => {
    it('lists manual titles and summaries', () => {
      const prompt = buildSystemPrompt(manuals)
      expect(prompt).toContain('Chase Bliss Clean Manual')
      expect(prompt).toContain('analog VCA-based compressor')
      expect(prompt).toContain('MONOLIT 2.0.0 User Manual')
      expect(prompt).toContain('8-slider MIDI controller')
    })

    it('lists cheatsheet titles and tags', () => {
      const prompt = buildSystemPrompt(manuals, undefined, cheatsheets)
      expect(prompt).toContain('Drop → Ableton Live Setup')
      expect(prompt).toContain('drop, ableton')
    })

    it('does NOT include full section content (catalog only)', () => {
      const prompt = buildSystemPrompt(manuals)
      // The whole point of QMD-only mode: prompt has the menu, not the meal.
      expect(prompt).not.toContain('CC 14: Dynamics')
      expect(prompt).not.toContain('Standard CC control')
    })

    it('does NOT include section headings from the input manuals', () => {
      // Section headings used to be enumerated in the system prompt to
      // give Claude hints of what was inside. In QMD-only mode the catalog
      // is title + summary only; section discovery happens through search.
      // Note: we use a heading name unlikely to appear elsewhere in the
      // prompt template (the citation example does name a section, which
      // is fine as illustration but means we can't blanket-assert).
      const promptedManuals: Manual[] = [{
        ...manuals[0],
        sections: [
          { heading: 'WildlyUniqueHeadingThatWontAppearElsewhere', content: 'x', level: 1 },
        ],
      }]
      const prompt = buildSystemPrompt(promptedManuals)
      expect(prompt).not.toContain('WildlyUniqueHeadingThatWontAppearElsewhere')
    })

    it('handles empty manuals + cheatsheets list', () => {
      const prompt = buildSystemPrompt([])
      expect(prompt).toMatch(/no manuals/i)
    })
  })

  describe('forcing function (tool restriction)', () => {
    it('names mcp__qmd__query as the only retrieval path', () => {
      const prompt = buildSystemPrompt(manuals)
      expect(prompt).toContain('mcp__qmd__query')
      expect(prompt).toContain('mcp__qmd__get')
    })

    it('explicitly states there is no Read/Grep/Glob fallback', () => {
      const prompt = buildSystemPrompt(manuals)
      expect(prompt).toMatch(/no Read.*no Grep.*no Glob/i)
    })

    it('forbids training knowledge as a citation source', () => {
      const prompt = buildSystemPrompt(manuals)
      expect(prompt).toMatch(/training knowledge.*not.*admissible/i)
    })
  })

  describe('citation contract', () => {
    it('requires a citation format on every factual claim', () => {
      const prompt = buildSystemPrompt(manuals)
      expect(prompt).toContain('source:')
      expect(prompt).toMatch(/MUST cite/i)
    })
  })

  describe('layered fallback', () => {
    it('describes the manuals → cheatsheets → studio → no-source procedure', () => {
      const prompt = buildSystemPrompt(manuals)
      // Manuals mentioned, then cheatsheets, then studio, then a refusal
      // phrasing equivalent to "no source available".
      expect(prompt).toMatch(/manuals.*cheatsheets.*studio.*don.t have a source/is)
    })

    it('frames empty search as information, not failure', () => {
      const prompt = buildSystemPrompt(manuals)
      expect(prompt).toMatch(/empty search is information/i)
    })
  })

  describe('conflict surfacing', () => {
    it('instructs Claude to report conflicts rather than silently pick a side', () => {
      const prompt = buildSystemPrompt(manuals)
      expect(prompt).toMatch(/conflict/i)
      expect(prompt).toMatch(/don.t silently pick/i)
    })
  })

  describe('studio doc reference', () => {
    it('includes the studio doc path when provided', () => {
      const prompt = buildSystemPrompt(manuals, '/data/studio.md')
      expect(prompt).toContain('/data/studio.md')
    })

    it('omits the studio doc path when not provided', () => {
      const prompt = buildSystemPrompt(manuals)
      expect(prompt).toMatch(/no studio doc/i)
    })
  })
})
