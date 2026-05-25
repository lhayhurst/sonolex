// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdtemp, rm, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import {
  renderTutorialHtml,
  renderTutorialsIndexHtml,
  publishTutorial,
} from './tutorial-publisher'
import type { Tutorial } from '../../src/types/index'

function makeTutorial(overrides: Partial<Tutorial> = {}): Tutorial {
  return {
    id: 'oxi-saga',
    title: 'OXI Saga Tutorial',
    summary: 'Walk through Saga step by step.',
    content: '## Step 1\n\nOpen the SEQ menu.\n\n## Step 2\n\nChoose Saga.',
    status: 'draft',
    createdAt: '2026-05-25T00:00:00.000Z',
    updatedAt: '2026-05-25T00:00:00.000Z',
    ...overrides,
  }
}

describe('renderTutorialHtml', () => {
  it('produces a full HTML document with doctype and html tag', () => {
    const html = renderTutorialHtml(makeTutorial())
    expect(html).toMatch(/^<!DOCTYPE html>/i)
    expect(html).toContain('<html')
    expect(html).toContain('</html>')
  })

  it('puts the tutorial title in <title> and <h1>', () => {
    const html = renderTutorialHtml(makeTutorial({ title: 'OXI Saga' }))
    expect(html).toContain('<title>OXI Saga')
    expect(html).toMatch(/<h1[^>]*>OXI Saga<\/h1>/)
  })

  it('renders markdown content as HTML', () => {
    const html = renderTutorialHtml(makeTutorial())
    // marked converts ## headings to <h2>
    expect(html).toMatch(/<h2[^>]*>Step 1<\/h2>/)
    expect(html).toMatch(/<h2[^>]*>Step 2<\/h2>/)
    expect(html).toContain('Open the SEQ menu')
  })

  it('renders the summary in the document', () => {
    const html = renderTutorialHtml(makeTutorial({ summary: 'A great summary.' }))
    expect(html).toContain('A great summary.')
  })

  it('escapes HTML in the title to prevent injection via title text', () => {
    const html = renderTutorialHtml(makeTutorial({ title: '<script>alert(1)</script>' }))
    expect(html).not.toMatch(/<title>\s*<script>/i)
    expect(html).toContain('&lt;script&gt;')
  })

  it('includes a link back to the tutorials index', () => {
    const html = renderTutorialHtml(makeTutorial())
    expect(html).toMatch(/href="(\.\.\/|\/tutorials\/?|\.\.\/index\.html|index\.html)"/)
  })
})

describe('renderTutorialsIndexHtml', () => {
  it('produces a full HTML document', () => {
    const html = renderTutorialsIndexHtml([])
    expect(html).toMatch(/^<!DOCTYPE html>/i)
    expect(html).toContain('Tutorials')
  })

  it('shows an empty-state message when no tutorials are published', () => {
    const html = renderTutorialsIndexHtml([])
    expect(html).toMatch(/no.*tutorials.*yet|nothing.*published/i)
  })

  it('lists each published tutorial with a link to its page', () => {
    const html = renderTutorialsIndexHtml([
      makeTutorial({ id: 'a', title: 'A Tutorial' }),
      makeTutorial({ id: 'b', title: 'B Tutorial' }),
    ])
    expect(html).toContain('A Tutorial')
    expect(html).toContain('B Tutorial')
    expect(html).toMatch(/href="a\/?(?:index\.html)?"/)
    expect(html).toMatch(/href="b\/?(?:index\.html)?"/)
  })

  it('includes each tutorial summary in the index listing', () => {
    const html = renderTutorialsIndexHtml([
      makeTutorial({ id: 'a', title: 'A', summary: 'Summary of A.' }),
    ])
    expect(html).toContain('Summary of A.')
  })

  it('sorts tutorials newest-first by publishedAt', () => {
    const html = renderTutorialsIndexHtml([
      makeTutorial({ id: 'old', title: 'Old', publishedAt: '2026-01-01T00:00:00.000Z' }),
      makeTutorial({ id: 'new', title: 'New', publishedAt: '2026-05-25T00:00:00.000Z' }),
    ])
    expect(html.indexOf('New')).toBeLessThan(html.indexOf('Old'))
  })
})

describe('publishTutorial', () => {
  let tempDir: string
  let docsDir: string

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'sonolex-publish-test-'))
    docsDir = join(tempDir, 'docs')
  })

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true })
  })

  it('writes docs/tutorials/<slug>/index.html for the tutorial', async () => {
    await publishTutorial(makeTutorial({ id: 'oxi-saga' }), docsDir, [])

    const html = await readFile(join(docsDir, 'tutorials', 'oxi-saga', 'index.html'), 'utf-8')
    expect(html).toContain('OXI Saga Tutorial')
    expect(html).toMatch(/<h2[^>]*>Step 1<\/h2>/)
  })

  it('writes docs/tutorials/index.html listing all published tutorials', async () => {
    const t1 = makeTutorial({ id: 'a', title: 'A', status: 'published', publishedAt: '2026-05-25T00:00:00.000Z' })
    const t2 = makeTutorial({ id: 'b', title: 'B', status: 'published', publishedAt: '2026-05-26T00:00:00.000Z' })
    await publishTutorial(t1, docsDir, [t1, t2])

    const html = await readFile(join(docsDir, 'tutorials', 'index.html'), 'utf-8')
    expect(html).toContain('A')
    expect(html).toContain('B')
    expect(html).toMatch(/href="a\/?(?:index\.html)?"/)
    expect(html).toMatch(/href="b\/?(?:index\.html)?"/)
  })

  it('returns the list of files it wrote with their absolute paths', async () => {
    const result = await publishTutorial(makeTutorial({ id: 'paths' }), docsDir, [])
    expect(result.filesWritten).toHaveLength(2)
    expect(result.filesWritten).toContain(join(docsDir, 'tutorials', 'paths', 'index.html'))
    expect(result.filesWritten).toContain(join(docsDir, 'tutorials', 'index.html'))
  })

  it('returns the tutorial marked as published with publishedAt set', async () => {
    const result = await publishTutorial(makeTutorial({ id: 'mark', status: 'draft' }), docsDir, [])
    expect(result.tutorial.status).toBe('published')
    expect(result.tutorial.publishedAt).toBeDefined()
  })

  it('uses the freshly-published tutorial in the index even if allPublished does not include it yet', async () => {
    // Caller may pass the prior state of "all published"; publishTutorial should
    // make sure the just-published one shows up in the index.
    const fresh = makeTutorial({ id: 'fresh', title: 'Fresh Take', status: 'draft' })
    await publishTutorial(fresh, docsDir, [])

    const html = await readFile(join(docsDir, 'tutorials', 'index.html'), 'utf-8')
    expect(html).toContain('Fresh Take')
  })
})
