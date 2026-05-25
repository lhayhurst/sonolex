import { describe, it, expect } from 'vitest'
import { renderTutorialMarkdown } from './tutorial-markdown'
import type { Tutorial } from '../../src/types/index'

function makeTutorial(overrides: Partial<Tutorial> = {}): Tutorial {
  return {
    id: 'oxi-one-saga-tutorial',
    title: 'OXI ONE Saga Tutorial',
    summary: 'Walk through Saga step by step on the OXI ONE MKII.',
    content: '## Step 1\n\nOpen the SEQ menu.',
    status: 'draft',
    chatSessionId: 'chat-abc',
    createdAt: '2026-05-25T00:00:00.000Z',
    updatedAt: '2026-05-25T00:00:00.000Z',
    ...overrides,
  }
}

describe('renderTutorialMarkdown', () => {
  it('renders frontmatter with all fields and body content', () => {
    const md = renderTutorialMarkdown(makeTutorial())

    expect(md).toContain('---\n')
    expect(md).toContain('id: oxi-one-saga-tutorial')
    expect(md).toContain('title: "OXI ONE Saga Tutorial"')
    expect(md).toContain('summary: "Walk through Saga step by step on the OXI ONE MKII."')
    expect(md).toContain('status: draft')
    expect(md).toContain('chatSessionId: chat-abc')
    expect(md).toContain('createdAt: 2026-05-25T00:00:00.000Z')
    expect(md).toContain('updatedAt: 2026-05-25T00:00:00.000Z')
    expect(md).toContain('## Step 1\n\nOpen the SEQ menu.')
  })

  it('omits chatSessionId from frontmatter when not set', () => {
    const md = renderTutorialMarkdown(makeTutorial({ chatSessionId: undefined }))
    expect(md).not.toContain('chatSessionId:')
  })

  it('includes publishedAt when present', () => {
    const md = renderTutorialMarkdown(
      makeTutorial({ status: 'published', publishedAt: '2026-05-25T12:00:00.000Z' }),
    )
    expect(md).toContain('status: published')
    expect(md).toContain('publishedAt: 2026-05-25T12:00:00.000Z')
  })

  it('omits publishedAt when not set', () => {
    const md = renderTutorialMarkdown(makeTutorial())
    expect(md).not.toContain('publishedAt:')
  })

  it('escapes double quotes inside title and summary', () => {
    const md = renderTutorialMarkdown(
      makeTutorial({ title: 'A "quoted" title', summary: 'With "quotes" inside' }),
    )
    expect(md).toContain('title: "A \\"quoted\\" title"')
    expect(md).toContain('summary: "With \\"quotes\\" inside"')
  })

  it('escapes backslashes inside title', () => {
    const md = renderTutorialMarkdown(makeTutorial({ title: 'path\\to\\file' }))
    expect(md).toContain('title: "path\\\\to\\\\file"')
  })

  it('handles empty content gracefully', () => {
    const md = renderTutorialMarkdown(makeTutorial({ content: '' }))
    expect(md).toContain('---')
    expect(md.endsWith('\n')).toBe(true)
  })

  it('trims leading/trailing whitespace from content but preserves internal structure', () => {
    const md = renderTutorialMarkdown(makeTutorial({ content: '\n\n# Header\n\nBody\n\n' }))
    expect(md).toContain('# Header\n\nBody')
    expect(md).not.toMatch(/Body\n{3,}/)
  })
})
