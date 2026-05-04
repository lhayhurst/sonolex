import { describe, it, expect } from 'vitest'
import { renderCheatSheetMarkdown } from './cheatsheet-markdown'
import type { CheatSheet } from '../../src/types/index'

function makeSheet(overrides: Partial<CheatSheet> = {}): CheatSheet {
  return {
    id: 'sheet-1',
    title: 'Drop Ableton Setup',
    content: 'Connect via USB-C. Set clock source to Ableton.',
    category: 'signal-routing',
    tags: ['drop', 'ableton'],
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-02T00:00:00.000Z',
    ...overrides,
  }
}

describe('renderCheatSheetMarkdown', () => {
  it('renders frontmatter with all fields and body content', () => {
    const md = renderCheatSheetMarkdown(makeSheet())

    expect(md).toContain('---\n')
    expect(md).toContain('id: sheet-1')
    expect(md).toContain('title: "Drop Ableton Setup"')
    expect(md).toContain('category: signal-routing')
    expect(md).toContain('tags: [drop, ableton]')
    expect(md).toContain('createdAt: 2026-01-01T00:00:00.000Z')
    expect(md).toContain('updatedAt: 2026-01-02T00:00:00.000Z')
    expect(md).toContain('Connect via USB-C. Set clock source to Ableton.')
  })

  it('starts and ends frontmatter with --- delimiters', () => {
    const md = renderCheatSheetMarkdown(makeSheet())
    const lines = md.split('\n')

    expect(lines[0]).toBe('---')
    expect(lines.indexOf('---', 1)).toBeGreaterThan(0)
  })

  it('renders empty tags as empty array', () => {
    const md = renderCheatSheetMarkdown(makeSheet({ tags: [] }))
    expect(md).toContain('tags: []')
  })

  it('escapes double quotes inside title', () => {
    const md = renderCheatSheetMarkdown(makeSheet({ title: 'A "quoted" title' }))
    expect(md).toContain('title: "A \\"quoted\\" title"')
  })

  it('escapes backslashes inside title', () => {
    const md = renderCheatSheetMarkdown(makeSheet({ title: 'path\\to\\file' }))
    expect(md).toContain('title: "path\\\\to\\\\file"')
  })

  it('handles empty content gracefully', () => {
    const md = renderCheatSheetMarkdown(makeSheet({ content: '' }))
    expect(md).toContain('---')
    expect(md.endsWith('\n')).toBe(true)
  })

  it('trims leading/trailing whitespace from content but preserves internal structure', () => {
    const md = renderCheatSheetMarkdown(makeSheet({ content: '\n\n# Header\n\nBody\n\n' }))
    expect(md).toContain('# Header\n\nBody')
    expect(md).not.toMatch(/Body\n{3,}/)
  })
})
