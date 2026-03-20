import * as cheerio from 'cheerio'

export interface PageContent {
  url: string
  title: string
  text: string
}

export interface CrawlResult {
  pages: PageContent[]
  errors: string[]
}

export interface CrawlOptions {
  fetchFn?: typeof fetch
  delayMs?: number
  maxPages?: number
}

export function extractPageContent(html: string, _url: string): { title: string; text: string } {
  const $ = cheerio.load(html)

  // Remove noise elements
  $('nav, header, footer, script, style, noscript, .sidebar, .menu, .navigation, .breadcrumb').remove()

  // Try to find main content
  let $content = $('main')
  if ($content.length === 0) $content = $('article')
  if ($content.length === 0) $content = $('body')

  // Extract title from first h1, or page title
  const title = $content.find('h1').first().text().trim() || $('title').text().trim() || ''

  // Get text content, preserving some structure
  const text = $content.text().replace(/\s+/g, ' ').trim()

  return { title, text }
}

export function resolveLinks(html: string, currentUrl: string, prefixUrl: string): string[] {
  const $ = cheerio.load(html)
  const links: string[] = []
  const seen = new Set<string>()

  $('a[href]').each((_, el) => {
    const href = $(el).attr('href')
    if (!href) return

    try {
      const resolved = new URL(href, currentUrl)
      // Strip fragment and trailing slash
      resolved.hash = ''
      let normalized = resolved.toString().replace(/\/$/, '')

      // Only follow links within the prefix
      const normalizedPrefix = prefixUrl.replace(/\/$/, '')
      if (!normalized.startsWith(normalizedPrefix)) return

      if (!seen.has(normalized)) {
        seen.add(normalized)
        links.push(normalized)
      }
    } catch {
      // Invalid URL — skip
    }
  })

  return links
}

export async function discoverPages(startUrl: string, options?: CrawlOptions): Promise<{ urls: string[]; errors: string[] }> {
  const fetchFn = options?.fetchFn ?? fetch
  const delayMs = options?.delayMs ?? 100
  const maxPages = options?.maxPages ?? 50

  const prefixUrl = startUrl
  const visited = new Set<string>()
  const queue: string[] = [startUrl]
  const urls: string[] = []
  const errors: string[] = []

  while (queue.length > 0 && urls.length < maxPages) {
    const url = queue.shift()!
    if (visited.has(url)) continue
    visited.add(url)

    try {
      const res = await fetchFn(url)
      if (!res.ok) {
        errors.push(`${url}: HTTP ${res.status}`)
        continue
      }

      const contentType = res.headers.get('content-type') ?? ''
      if (!contentType.includes('text/html')) continue

      const html = await res.text()
      urls.push(url)

      const links = resolveLinks(html, url, prefixUrl)
      for (const link of links) {
        if (!visited.has(link)) queue.push(link)
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      errors.push(`${url}: ${msg}`)
    }

    if (delayMs > 0 && queue.length > 0) {
      await new Promise(r => setTimeout(r, delayMs))
    }
  }

  return { urls, errors }
}

export async function crawlDocs(startUrl: string, options?: CrawlOptions): Promise<CrawlResult> {
  const fetchFn = options?.fetchFn ?? fetch
  const delayMs = options?.delayMs ?? 200
  const maxPages = options?.maxPages ?? 50

  const prefixUrl = startUrl

  const visited = new Set<string>()
  const queue: string[] = [startUrl]
  const pages: PageContent[] = []
  const errors: string[] = []

  while (queue.length > 0 && pages.length < maxPages) {
    const url = queue.shift()!
    if (visited.has(url)) continue
    visited.add(url)

    try {
      const res = await fetchFn(url)

      if (!res.ok) {
        errors.push(`${url}: HTTP ${res.status}`)
        continue
      }

      const contentType = res.headers.get('content-type') ?? ''
      if (!contentType.includes('text/html')) continue

      const html = await res.text()
      const { title, text } = extractPageContent(html, url)

      if (text) {
        pages.push({ url, title, text })
      }

      // Find more links to crawl
      const links = resolveLinks(html, url, prefixUrl)
      for (const link of links) {
        if (!visited.has(link)) {
          queue.push(link)
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      errors.push(`${url}: ${msg}`)
    }

    // Be polite
    if (delayMs > 0 && queue.length > 0) {
      await new Promise(r => setTimeout(r, delayMs))
    }
  }

  return { pages, errors }
}
