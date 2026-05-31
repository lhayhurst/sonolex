import { describe, it, expect } from 'vitest'
import { buildSystemPrompt, findRelevantManuals } from './studio-prompt'
import type { Manual } from '../../src/types/index'

const manuals: Manual[] = [
  {
    id: 'm1',
    title: 'Chase Bliss Clean Manual',
    summary: 'An analog VCA-based compressor with MIDI control.',
    content: 'full text...',
    sections: [
      { heading: 'Overview', content: 'The Clean is a compressor.', level: 1 },
      { heading: 'MIDI CC Map', content: 'CC 14: Dynamics, CC 15: Sensitivity', level: 2 },
    ],
  },
  {
    id: 'm2',
    title: 'MONOLIT 2.0.0 User Manual',
    summary: 'A versatile 8-slider MIDI controller hub.',
    content: 'full text...',
    sections: [
      { heading: 'MONOLIT', content: 'Central control hub.', level: 1 },
      { heading: 'CTRL Mode', content: 'Standard CC control.', level: 2 },
      { heading: 'Sequencer', content: 'Step sequencer.', level: 2 },
    ],
  },
]

describe('buildSystemPrompt', () => {
  it('includes all manual titles and summaries', () => {
    const prompt = buildSystemPrompt(manuals)
    expect(prompt).toContain('Chase Bliss Clean Manual')
    expect(prompt).toContain('analog VCA-based compressor')
    expect(prompt).toContain('MONOLIT 2.0.0 User Manual')
    expect(prompt).toContain('8-slider MIDI controller')
  })

  it('includes section headings for each manual', () => {
    const prompt = buildSystemPrompt(manuals)
    expect(prompt).toContain('MIDI CC Map')
    expect(prompt).toContain('CTRL Mode')
    expect(prompt).toContain('Sequencer')
  })

  it('does not include full section content', () => {
    const prompt = buildSystemPrompt(manuals)
    expect(prompt).not.toContain('CC 14: Dynamics')
    expect(prompt).not.toContain('Standard CC control')
  })

  it('explains the assistant role', () => {
    const prompt = buildSystemPrompt(manuals)
    expect(prompt).toMatch(/studio/i)
    expect(prompt).toMatch(/music/i)
  })

  it('handles empty manuals list', () => {
    const prompt = buildSystemPrompt([])
    expect(prompt).toMatch(/no manuals/i)
  })

  it('includes grounding block with grep instructions when dataDir is provided', () => {
    const prompt = buildSystemPrompt(manuals, undefined, undefined, '/data')
    expect(prompt).toContain('GROUNDING')
    expect(prompt).toContain('/data/manuals/*.md')
    expect(prompt).toContain('/data/cheatsheets/*.md')
    expect(prompt).toMatch(/grep/i)
    expect(prompt).toContain('DO NOT answer from training knowledge alone')
  })

  it('omits grounding block when dataDir is not provided', () => {
    const prompt = buildSystemPrompt(manuals)
    expect(prompt).not.toContain('GROUNDING')
  })

  it('forbids asking the user for permission before checking the manual', () => {
    const prompt = buildSystemPrompt(manuals, undefined, undefined, '/data')
    // Should explicitly forbid permission-asking and "from memory" hedges
    expect(prompt).toMatch(/do not (ask|offer)/i)
    expect(prompt).toMatch(/from memory/i)
  })

  it('forbids creating tutorial or manual files via the Write tool', () => {
    const prompt = buildSystemPrompt(manuals, undefined, undefined, '/data')
    expect(prompt).toMatch(/do not.*write/i)
    expect(prompt).toMatch(/tutorials?/i)
  })
})

describe('findRelevantManuals', () => {
  it('finds manual by title match', () => {
    const found = findRelevantManuals('My Chase Bliss Clean is acting up', manuals)
    expect(found).toHaveLength(1)
    expect(found[0].id).toBe('m1')
  })

  it('finds manual by partial match', () => {
    const found = findRelevantManuals('How do I use the monolit sequencer?', manuals)
    expect(found).toHaveLength(1)
    expect(found[0].id).toBe('m2')
  })

  it('finds multiple manuals if both mentioned', () => {
    const found = findRelevantManuals('Connect the monolit to the clean via MIDI', manuals)
    expect(found).toHaveLength(2)
  })

  it('returns empty when no match', () => {
    const found = findRelevantManuals('What is the weather today?', manuals)
    expect(found).toHaveLength(0)
  })

  it('matches case-insensitively', () => {
    const found = findRelevantManuals('CHASE BLISS clean', manuals)
    expect(found).toHaveLength(1)
  })
})
