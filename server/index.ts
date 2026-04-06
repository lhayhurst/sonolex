import { join } from 'node:path'
import { createApp } from './app'
import { Storage } from './lib/storage'
import { isClaudeAvailable } from './lib/claude-cli'

const PORT = parseInt(process.env.PORT ?? '3001', 10)
const DATA_DIR = process.env.DATA_DIR ?? join(process.cwd(), 'data')

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

  app.listen(PORT, () => {
    console.log(`Sonolex ready in ${Date.now() - t0}ms — http://localhost:${PORT}`)
    console.log(`Data directory: ${DATA_DIR}`)
  })
}

main().catch(console.error)
