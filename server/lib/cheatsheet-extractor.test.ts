// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { extractCheatSheet } from './cheatsheet-extractor'

describe('extractCheatSheet', () => {
  it('extracts a cheat sheet from a fenced JSON block', () => {
    const response = `Here's your cheat sheet!

\`\`\`json
{"title": "MONOLIT Arp Bank", "content": "## Sliders\\n- CC30: Style", "category": "midi-map", "tags": ["monolit"]}
\`\`\`

I've saved it for you.`

    const result = extractCheatSheet(response)
    expect(result).not.toBeNull()
    expect(result!.title).toBe('MONOLIT Arp Bank')
    expect(result!.content).toBe('## Sliders\n- CC30: Style')
    expect(result!.category).toBe('midi-map')
    expect(result!.tags).toEqual(['monolit'])
  })

  it('extracts from unfenced JSON block', () => {
    const response = `\`\`\`
{"title": "Quick Ref", "content": "Some notes", "category": "quick-reference", "tags": []}
\`\`\``

    const result = extractCheatSheet(response)
    expect(result).not.toBeNull()
    expect(result!.title).toBe('Quick Ref')
  })

  it('returns null when no JSON block is found', () => {
    const response = 'Just a normal response with no cheat sheet.'
    expect(extractCheatSheet(response)).toBeNull()
  })

  it('returns null when JSON block lacks title or content', () => {
    const response = '```json\n{"name": "not a cheat sheet"}\n```'
    expect(extractCheatSheet(response)).toBeNull()
  })

  it('defaults category to other and tags to empty', () => {
    const response = '```json\n{"title": "Minimal", "content": "Just content"}\n```'
    const result = extractCheatSheet(response)
    expect(result).not.toBeNull()
    expect(result!.category).toBe('other')
    expect(result!.tags).toEqual([])
  })

  it('handles multiline content in JSON', () => {
    const response = `\`\`\`json
{
  "title": "Signal Chain",
  "content": "# Routing\\n\\n1. Synth → Interface\\n2. Interface → DAW",
  "category": "signal-routing",
  "tags": ["routing", "setup"]
}
\`\`\``

    const result = extractCheatSheet(response)
    expect(result).not.toBeNull()
    expect(result!.title).toBe('Signal Chain')
    expect(result!.content).toContain('Synth → Interface')
  })

  it('extracts the first valid cheat sheet if multiple JSON blocks exist', () => {
    const response = `Some config:
\`\`\`json
{"debug": true}
\`\`\`

And the cheat sheet:
\`\`\`json
{"title": "Real One", "content": "The actual content", "category": "other"}
\`\`\``

    const result = extractCheatSheet(response)
    expect(result).not.toBeNull()
    expect(result!.title).toBe('Real One')
  })
})
