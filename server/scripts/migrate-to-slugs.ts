import { rename, access, unlink } from 'node:fs/promises'
import { join } from 'node:path'
import { Storage } from '../lib/storage'
import { slugify, uniqueSlug } from '../lib/slugify'
import type { Manual, CheatSheet, StudioData } from '../../src/types/index'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function looksLikeUuid(id: string): boolean {
  return UUID_RE.test(id)
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

async function migrateManuals(dataDir: string, storage: Storage): Promise<Map<string, string>> {
  const manualsDir = join(dataDir, 'manuals')
  const pdfsDir = join(dataDir, 'pdfs')
  const manuals = await storage.listManuals()

  const idMap = new Map<string, string>()
  const usedSlugs = new Set<string>()

  // First pass: pick slugs for everything (including UUID-id manuals)
  const plan: { manual: Manual, oldId: string, newId: string }[] = []
  for (const manual of manuals) {
    const oldId = manual.id
    const desiredSlug = slugify(manual.title)
    const finalSlug = uniqueSlug(desiredSlug, usedSlugs)
    usedSlugs.add(finalSlug)

    if (oldId === finalSlug) {
      console.log(`  skip (already slug): ${oldId}`)
      continue
    }
    plan.push({ manual, oldId, newId: finalSlug })
    idMap.set(oldId, finalSlug)
  }

  // Second pass: do the renames
  for (const { manual, oldId, newId } of plan) {
    const oldJson = join(manualsDir, `${oldId}.json`)
    const oldMd = join(manualsDir, `${oldId}.md`)
    const updated: Manual = {
      ...manual,
      id: newId,
      pdfPath: manual.pdfPath ? `/api/manuals/${newId}/pdf` : undefined,
    }

    // Save under new id (writes both .json and .md with new content)
    await storage.saveManual(updated)

    // Remove the old files
    if (await fileExists(oldJson)) await unlink(oldJson)
    if (await fileExists(oldMd)) await unlink(oldMd)

    // Rename PDF if present
    if (looksLikeUuid(oldId)) {
      const oldPdf = join(pdfsDir, `${oldId}.pdf`)
      const newPdf = join(pdfsDir, `${newId}.pdf`)
      if (await fileExists(oldPdf)) {
        await rename(oldPdf, newPdf)
        console.log(`    pdf: ${oldId}.pdf → ${newId}.pdf`)
      }
    }

    console.log(`  manual: ${oldId} → ${newId} (${manual.title})`)
  }

  return idMap
}

async function migrateCheatSheets(storage: Storage): Promise<Map<string, string>> {
  const sheets = await storage.listCheatSheets()
  const idMap = new Map<string, string>()
  const usedSlugs = new Set<string>()

  const plan: { sheet: CheatSheet, oldId: string, newId: string }[] = []
  for (const sheet of sheets) {
    const oldId = sheet.id
    const desiredSlug = slugify(sheet.title)
    const finalSlug = uniqueSlug(desiredSlug, usedSlugs)
    usedSlugs.add(finalSlug)

    if (oldId === finalSlug) {
      console.log(`  skip (already slug): ${oldId}`)
      continue
    }
    plan.push({ sheet, oldId, newId: finalSlug })
    idMap.set(oldId, finalSlug)
  }

  for (const { sheet, oldId, newId } of plan) {
    const updated: CheatSheet = { ...sheet, id: newId }
    await storage.saveCheatSheet(updated)

    if (oldId !== newId) {
      await storage.deleteCheatSheet(oldId)
    }

    console.log(`  cheatsheet: ${oldId} → ${newId} (${sheet.title})`)
  }

  return idMap
}

async function remapStudio(storage: Storage, manualIdMap: Map<string, string>): Promise<void> {
  if (manualIdMap.size === 0) return

  const studio: StudioData = await storage.loadStudio()
  let changed = 0

  for (const device of studio.devices) {
    if (device.manualId && manualIdMap.has(device.manualId)) {
      const oldId = device.manualId
      device.manualId = manualIdMap.get(oldId)!
      changed++
      console.log(`  studio.${device.name}.manualId: ${oldId} → ${device.manualId}`)
    }
  }

  for (const m of studio.manuals) {
    if (manualIdMap.has(m.id)) {
      m.id = manualIdMap.get(m.id)!
    }
  }

  if (changed > 0) {
    await storage.saveStudio(studio)
    console.log(`  studio.json updated: ${changed} device manualId references remapped`)
  }
}

async function main() {
  const dataDir = process.env.DATA_DIR ?? join(process.cwd(), 'data')
  const storage = new Storage(dataDir)
  await storage.init()

  console.log(`Migrating UUIDs to slugs in ${dataDir}\n`)

  console.log('Manuals:')
  const manualMap = await migrateManuals(dataDir, storage)

  console.log('\nCheat sheets:')
  await migrateCheatSheets(storage)

  console.log('\nStudio doc references:')
  await remapStudio(storage, manualMap)

  console.log(`\nDone. ${manualMap.size} manuals renamed.`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
