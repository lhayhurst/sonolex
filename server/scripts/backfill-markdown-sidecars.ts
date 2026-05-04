import { join } from 'node:path'
import { Storage } from '../lib/storage'

async function main() {
  const dataDir = process.env.DATA_DIR ?? join(process.cwd(), 'data')
  const storage = new Storage(dataDir)
  await storage.init()

  console.log(`Backfilling markdown sidecars in ${dataDir}`)

  const manuals = await storage.listManuals()
  for (const manual of manuals) {
    await storage.saveManual(manual)
    console.log(`  manual: ${manual.id} — ${manual.title}`)
  }

  const sheets = await storage.listCheatSheets()
  for (const sheet of sheets) {
    await storage.saveCheatSheet(sheet)
    console.log(`  cheatsheet: ${sheet.id} — ${sheet.title}`)
  }

  console.log(`Done. ${manuals.length} manuals, ${sheets.length} cheatsheets.`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
