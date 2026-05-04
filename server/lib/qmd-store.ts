// Sonolex's wrapper around QMD (https://github.com/tobi/qmd).
// QMD provides hybrid BM25+vector+rerank search over local markdown.
// We adapt its API to Sonolex domain types (manuals/cheatsheets/studio)
// and centralize the index lifecycle so the rest of the app sees a stable
// interface even if we swap search engines later.

import { join, basename, extname, dirname } from 'node:path'
// Type-only import — erased at runtime so vitest workers (and any code
// that only uses translation helpers) don't have to load QMD's native
// dependencies. The runtime import is dynamic, inside init().
import type { QMDStore } from '@tobilu/qmd'

export type Collection = 'manuals' | 'cheatsheets' | 'studio' | 'all'

export interface SearchOptions {
  query: string
  intent?: string
  collection?: Collection
  limit?: number
}

export interface SearchResult {
  path: string
  slug: string
  title: string
  snippet: string
  score: number
  collection: 'manuals' | 'cheatsheets' | 'studio' | 'unknown'
}

interface QmdSearchOptions {
  query: string
  intent?: string
  collection?: string
  limit: number
}

interface QmdResultLike {
  displayPath: string
  title: string
  snippet: string
  score: number
}

const DEFAULT_LIMIT = 5

export function collectionToQmdName(c: Collection): string | undefined {
  return c === 'all' ? undefined : c
}

export function buildQmdSearchOptions(opts: SearchOptions): QmdSearchOptions {
  const out: QmdSearchOptions = {
    query: opts.query,
    limit: opts.limit ?? DEFAULT_LIMIT,
  }
  if (opts.intent !== undefined) out.intent = opts.intent
  const qmdCollection = opts.collection !== undefined
    ? collectionToQmdName(opts.collection)
    : undefined
  if (qmdCollection) out.collection = qmdCollection
  return out
}

export function toSearchResult(qmd: QmdResultLike): SearchResult {
  const path = qmd.displayPath
  const dir = dirname(path)
  const slug = basename(path, extname(path))

  let collection: SearchResult['collection']
  if (dir === 'manuals') collection = 'manuals'
  else if (dir === 'cheatsheets') collection = 'cheatsheets'
  else if (path === 'studio.md' || dir === '.' && slug === 'studio') collection = 'studio'
  else collection = 'unknown'

  return {
    path,
    slug,
    title: qmd.title,
    snippet: qmd.snippet,
    score: qmd.score,
    collection,
  }
}

// ---------------------------------------------------------------------------
// QmdStore: thin wrapper over QMD's createStore.
//
// Owns the index lifecycle for Sonolex: three collections (manuals,
// cheatsheets, studio) backed by the on-disk markdown sidecars, plus a
// search() method that returns Sonolex-domain results.
//
// Single instance per server. Lazy-init: models load on first search,
// not at construction. This keeps server startup fast and lets the UI
// surface "preparing search" only when actually needed.
// ---------------------------------------------------------------------------

export interface QmdStoreOptions {
  dataDir: string
}

export class QmdStore {
  private readonly dataDir: string
  private readonly dbPath: string
  private store: QMDStore | undefined
  private initPromise: Promise<void> | undefined

  constructor(opts: QmdStoreOptions) {
    this.dataDir = opts.dataDir
    this.dbPath = join(opts.dataDir, '.qmd', 'index.sqlite')
  }

  // Idempotent: safe to call multiple times. Concurrent callers share the
  // same in-flight init promise so we never open two stores against the
  // same DB.
  async init(): Promise<void> {
    if (this.store) return
    if (this.initPromise) return this.initPromise

    this.initPromise = (async () => {
      const { createStore } = await import('@tobilu/qmd')
      this.store = await createStore({
        dbPath: this.dbPath,
        config: {
          collections: {
            manuals: {
              path: join(this.dataDir, 'manuals'),
              pattern: '*.md',
            },
            cheatsheets: {
              path: join(this.dataDir, 'cheatsheets'),
              pattern: '*.md',
            },
            studio: {
              path: this.dataDir,
              pattern: 'studio.md',
            },
          },
        },
      })
    })()

    await this.initPromise
  }

  async search(opts: SearchOptions): Promise<SearchResult[]> {
    await this.init()
    await this.embedIfNeeded()
    const qmdOpts = buildQmdSearchOptions(opts)
    const results = await this.store!.search(qmdOpts)
    return results.map(r => toSearchResult({
      displayPath: r.displayPath,
      title: r.title,
      snippet: r.snippet,
      score: r.score,
    }))
  }

  // Re-scan all collections from disk and refresh the BM25/full-text
  // index. Cheap — does not load embedding models. Call after a manual
  // or cheatsheet is saved or deleted. Idempotent — re-indexing
  // unchanged files is a no-op inside QMD.
  //
  // Embeddings are *not* refreshed here on purpose: that would pull in
  // a ~2GB model download on first save, which is a terrible surprise
  // (especially on a tethered connection). Embeddings refresh on first
  // search via embedIfNeeded().
  async reindex(collections?: Array<'manuals' | 'cheatsheets' | 'studio'>): Promise<void> {
    await this.init()
    await this.store!.update({ collections })
  }

  // Embed any chunks that aren't yet vectorized. Triggers model download
  // on first call. Called lazily from search() so the cost only lands
  // when the user actually searches.
  async embedIfNeeded(): Promise<void> {
    await this.init()
    await this.store!.embed({ force: false })
  }

  async close(): Promise<void> {
    if (this.store) {
      await this.store.close()
      this.store = undefined
    }
  }
}

