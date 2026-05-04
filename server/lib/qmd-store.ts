// Sonolex's wrapper around QMD (https://github.com/tobi/qmd).
// QMD provides hybrid BM25+vector+rerank search over local markdown.
// We adapt its API to Sonolex domain types (manuals/cheatsheets/studio)
// and centralize the index lifecycle so the rest of the app sees a stable
// interface even if we swap search engines later.

import { join, basename, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
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
    // Aligned with QMD's XDG-derived default so the QMD MCP subprocess
    // (spawned by Claude) reads the same DB. server/index.ts sets
    // XDG_CACHE_HOME = <dataDir>/.qmd-cache; QMD then defaults to
    // <XDG>/qmd/index.sqlite — which is what we open here.
    this.dbPath = join(opts.dataDir, '.qmd-cache', 'qmd', 'index.sqlite')
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

// ---------------------------------------------------------------------------
// MCP config helper.
//
// Claude can't call our in-process QmdStore directly. We expose QMD search
// to Claude by spawning QMD's bundled MCP server as a stdio subprocess and
// passing its config to the Claude CLI via --mcp-config. The subprocess
// inherits XDG_CACHE_HOME from our backend, so it reads the same SQLite
// our embedded QmdStore writes.
// ---------------------------------------------------------------------------

export function buildQmdMcpConfig(): string {
  // Bypass qmd's shell wrapper (which prefers bun if bun.lock is present
  // and the user might not have bun installed). Invoke the JS entrypoint
  // directly with the same node we're running under. Subprocess inherits
  // XDG_CACHE_HOME from us, so it reads our SQLite.
  //
  // QMD's package.json `exports` only declares the `import` condition
  // (ESM-only), so createRequire().resolve() can't find it. Use the
  // ESM-native import.meta.resolve, then derive the CLI path next to
  // the resolved main module since `exports` doesn't expose subpaths.
  const indexPath = fileURLToPath(import.meta.resolve('@tobilu/qmd'))
  const cliPath = join(dirname(indexPath), 'cli', 'qmd.js')
  return JSON.stringify({
    mcpServers: {
      qmd: {
        command: process.execPath, // current node binary
        args: [cliPath, 'mcp'],
      },
    },
  })
}

// Tools the qmd MCP server exposes, in Claude-CLI-namespaced form.
// Used in the chat route's allowedTools list.
export const QMD_MCP_TOOLS = [
  'mcp__qmd__query',
  'mcp__qmd__get',
  'mcp__qmd__multi_get',
  'mcp__qmd__status',
] as const

// Built-in Claude Code tools we explicitly deny in QMD-only chat mode.
// In `-p` (print) mode, --allowedTools functions as auto-approve, NOT
// restriction; the only way to actually keep tools out of Claude's hands
// is --disallowedTools. We list everything we don't want — long but
// honest. Notably ToolSearch is critical to deny: if Claude can call it,
// it can load arbitrary deferred tools and bypass any restriction.
//
// Edit and Write are intentionally absent (they remain available for
// the studio.md update flow).
export const BLOCKED_BUILTIN_TOOLS = [
  'Bash',
  'Read',
  'Grep',
  'Glob',
  'Task',
  'NotebookEdit',
  'WebSearch',
  'WebFetch',
  'ToolSearch',
  'TodoWrite',
  'ScheduleWakeup',
  'Skill',
  'Monitor',
  'TaskStop',
  'TaskOutput',
  'AskUserQuestion',
  'EnterPlanMode',
  'ExitPlanMode',
  'EnterWorktree',
  'ExitWorktree',
  'PushNotification',
  'RemoteTrigger',
  'CronCreate',
  'CronDelete',
  'CronList',
] as const

