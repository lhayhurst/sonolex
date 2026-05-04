import { join, resolve } from 'node:path'
import { createApp } from './app'
import { Storage } from './lib/storage'
import { isClaudeAvailable } from './lib/claude-cli'

const PORT = parseInt(process.env.PORT ?? '3011', 10)
const DATA_DIR = process.env.DATA_DIR ?? join(process.cwd(), 'data')

// Pin QMD's cache root to a path under our data dir so the SQLite
// index lives with the user's library and the same DB is shared
// between (a) our embedded QmdStore (does indexing) and (b) the
// QMD MCP subprocess Claude spawns (does searching). Both inherit
// this env, both compute the same default `${XDG}/qmd/index.sqlite`.
process.env.XDG_CACHE_HOME = resolve(DATA_DIR, '.qmd-cache')

// Prevent the server from crashing on unhandled errors
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception (server still running):', err.message)
})

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection (server still running):', reason)
})

async function main() {
  const t0 = Date.now()
  console.log('Starting Sonolex...')

  const storage = new Storage(DATA_DIR)
  await storage.init()
  console.log(`  Storage init: ${Date.now() - t0}ms`)

  const t1 = Date.now()
  const available = await isClaudeAvailable()
  console.log(`  Claude CLI check: ${Date.now() - t1}ms (${available ? 'available' : 'not found'})`)

  if (!available) {
    console.warn('Claude CLI not found — install with: npm install -g @anthropic-ai/claude-code')
  }

  const t2 = Date.now()
  const app = await createApp(storage, DATA_DIR)
  console.log(`  App init: ${Date.now() - t2}ms`)

  const server = app.listen(PORT, () => {
    console.log(`Sonolex ready in ${Date.now() - t0}ms — http://localhost:${PORT}`)
    console.log(`Data directory: ${DATA_DIR}`)
  })

  server.on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') {
      console.error(
        `\nERROR: Port ${PORT} is already in use.\n` +
        `Another app (perhaps a different fork) is bound to this port.\n` +
        `Stop that process, or run with PORT=<other> npm run dev:server.\n`
      )
    } else {
      console.error('Server error:', err)
    }
    process.exit(1)
  })
}

main().catch(console.error)
