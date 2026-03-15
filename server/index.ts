import { join } from 'node:path'
import { createApp } from './app'
import { Storage } from './lib/storage'
import { isClaudeAvailable } from './lib/claude-cli'

const PORT = parseInt(process.env.PORT ?? '3001', 10)
const DATA_DIR = process.env.DATA_DIR ?? join(process.cwd(), 'data')

async function main() {
  const storage = new Storage(DATA_DIR)
  await storage.init()

  const available = await isClaudeAvailable()
  if (available) {
    console.log('Claude CLI available')
  } else {
    console.warn('Claude CLI not found — install with: npm install -g @anthropic-ai/claude-code')
  }

  const app = createApp(storage, DATA_DIR)

  app.listen(PORT, () => {
    console.log(`Sonolex server running at http://localhost:${PORT}`)
    console.log(`Data directory: ${DATA_DIR}`)
  })
}

main().catch(console.error)
