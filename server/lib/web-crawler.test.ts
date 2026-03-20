import { describe, it, expect, vi, beforeEach } from 'vitest'
import { crawlDocs, extractPageContent, resolveLinks } from './web-crawler'

describe('extractPageContent', () => {
  it('extracts text from main content, stripping nav/footer/script', () => {
    const html = `
      <html>
        <head><title>Test</title></head>
        <body>
          <nav><a href="/">Home</a></nav>
          <header><h1>Site Header</h1></header>
          <main>
            <h1>Getting Started</h1>
            <p>This is the content.</p>
          </main>
          <footer>Copyright 2024</footer>
          <script>console.log('hi')</script>
        </body>
      </html>
    `
    const result = extractPageContent(html, 'https://example.com/docs/')
    expect(result.title).toBe('Getting Started')
    expect(result.text).toContain('This is the content.')
    expect(result.text).not.toContain('Site Header')
    expect(result.text).not.toContain('Copyright')
    expect(result.text).not.toContain('console.log')
  })

  it('falls back to body if no main/article element', () => {
    const html = `
      <html><body>
        <h1>Docs</h1>
        <p>Some content here.</p>
      </body></html>
    `
    const result = extractPageContent(html, 'https://example.com/docs/')
    expect(result.text).toContain('Some content here.')
  })

  it('extracts from article element', () => {
    const html = `
      <html><body>
        <nav>Nav stuff</nav>
        <article><h2>Guide</h2><p>Article content.</p></article>
      </body></html>
    `
    const result = extractPageContent(html, 'https://example.com/docs/')
    expect(result.text).toContain('Article content.')
    expect(result.text).not.toContain('Nav stuff')
  })

  it('returns empty text for empty page', () => {
    const result = extractPageContent('<html><body></body></html>', 'https://example.com/')
    expect(result.text).toBe('')
  })
})

describe('resolveLinks', () => {
  it('extracts links within the same prefix', () => {
    const html = `
      <html><body>
        <a href="/docs/setup">Setup</a>
        <a href="/docs/midi">MIDI</a>
        <a href="/pricing">Pricing</a>
        <a href="https://other.com/page">External</a>
      </body></html>
    `
    const links = resolveLinks(html, 'https://example.com/docs/', 'https://example.com/docs/')
    expect(links).toContain('https://example.com/docs/setup')
    expect(links).toContain('https://example.com/docs/midi')
    expect(links).not.toContain('https://example.com/pricing')
    expect(links).not.toContain('https://other.com/page')
  })

  it('normalizes trailing slashes and fragments', () => {
    const html = `
      <html><body>
        <a href="/docs/setup/">Setup</a>
        <a href="/docs/setup#section">Setup Section</a>
      </body></html>
    `
    const links = resolveLinks(html, 'https://example.com/docs/', 'https://example.com/docs/')
    // Should deduplicate — both resolve to the same page
    const unique = [...new Set(links)]
    expect(unique).toHaveLength(1)
    expect(unique[0]).toBe('https://example.com/docs/setup')
  })

  it('handles relative links', () => {
    const html = `<a href="./config">Config</a><a href="../other">Other</a>`
    const links = resolveLinks(html, 'https://example.com/docs/getting-started', 'https://example.com/docs/')
    expect(links).toContain('https://example.com/docs/config')
    expect(links).not.toContain('https://example.com/other')
  })
})

describe('crawlDocs', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('crawls pages and returns combined content', async () => {
    const pages: Record<string, string> = {
      'https://example.com/docs/': '<html><body><main><h1>Docs Home</h1><p>Welcome.</p><a href="/docs/setup">Setup</a></main></body></html>',
      'https://example.com/docs/setup': '<html><body><main><h1>Setup</h1><p>Install instructions.</p></main></body></html>',
    }

    const mockFetch = vi.fn().mockImplementation((url: string) => {
      const body = pages[url]
      if (!body) return Promise.resolve({ ok: false, status: 404 })
      return Promise.resolve({
        ok: true,
        headers: { get: (h: string) => h === 'content-type' ? 'text/html' : null },
        text: () => Promise.resolve(body),
      })
    })

    const result = await crawlDocs('https://example.com/docs/', {
      fetchFn: mockFetch,
      delayMs: 0,
      maxPages: 10,
    })

    expect(result.pages).toHaveLength(2)
    expect(result.pages[0].text).toContain('Welcome.')
    expect(result.pages[1].text).toContain('Install instructions.')
    expect(result.errors).toHaveLength(0)
  })

  it('respects maxPages limit', async () => {
    const pages: Record<string, string> = {
      'https://example.com/docs/': '<html><body><main><p>Home</p><a href="/docs/a">A</a><a href="/docs/b">B</a></main></body></html>',
      'https://example.com/docs/a': '<html><body><main><p>Page A</p></main></body></html>',
      'https://example.com/docs/b': '<html><body><main><p>Page B</p></main></body></html>',
    }

    const mockFetch = vi.fn().mockImplementation((url: string) => {
      const body = pages[url]
      if (!body) return Promise.resolve({ ok: false, status: 404 })
      return Promise.resolve({
        ok: true,
        headers: { get: () => 'text/html' },
        text: () => Promise.resolve(body),
      })
    })

    const result = await crawlDocs('https://example.com/docs/', {
      fetchFn: mockFetch,
      delayMs: 0,
      maxPages: 2,
    })

    expect(result.pages).toHaveLength(2)
  })

  it('collects errors for failed pages without crashing', async () => {
    const mockFetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        headers: { get: () => 'text/html' },
        text: () => Promise.resolve('<html><body><main><p>Home</p><a href="/docs/broken">Broken</a></main></body></html>'),
      })
      .mockResolvedValueOnce({ ok: false, status: 500 })

    const result = await crawlDocs('https://example.com/docs/', {
      fetchFn: mockFetch,
      delayMs: 0,
      maxPages: 10,
    })

    expect(result.pages).toHaveLength(1)
    expect(result.errors).toHaveLength(1)
    expect(result.errors[0]).toContain('500')
  })

  it('handles fetch exceptions gracefully', async () => {
    const mockFetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        headers: { get: () => 'text/html' },
        text: () => Promise.resolve('<html><body><main><p>Home</p><a href="/docs/timeout">Timeout</a></main></body></html>'),
      })
      .mockRejectedValueOnce(new Error('ETIMEDOUT'))

    const result = await crawlDocs('https://example.com/docs/', {
      fetchFn: mockFetch,
      delayMs: 0,
      maxPages: 10,
    })

    expect(result.pages).toHaveLength(1)
    expect(result.errors).toHaveLength(1)
    expect(result.errors[0]).toContain('ETIMEDOUT')
  })

  it('skips non-HTML responses', async () => {
    const mockFetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        headers: { get: () => 'text/html' },
        text: () => Promise.resolve('<html><body><main><p>Home</p><a href="/docs/file.pdf">PDF</a></main></body></html>'),
      })
      .mockResolvedValueOnce({
        ok: true,
        headers: { get: () => 'application/pdf' },
        text: () => Promise.resolve('binary junk'),
      })

    const result = await crawlDocs('https://example.com/docs/', {
      fetchFn: mockFetch,
      delayMs: 0,
      maxPages: 10,
    })

    expect(result.pages).toHaveLength(1)
  })
})
