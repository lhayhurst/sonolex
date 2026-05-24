/**
 * Diff old (naive join) vs new (position-aware) PDF extraction for a single page.
 * Side-by-side proof that the new layout logic actually changes what we extract.
 *
 * Usage:
 *   npx tsx server/scripts/diff-parser.ts <pdf-path> <page-number>
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { layoutItemsToText } from '../lib/pdf-extract'

interface Item {
  str?: string
  transform?: number[]
}

function oldExtract(items: Item[]): string {
  return items.map(it => it.str ?? '').join(' ')
}

function newExtract(items: Item[]): string {
  return layoutItemsToText(
    items.map(it => ({
      str: it.str ?? '',
      x: it.transform?.[4] ?? 0,
      y: it.transform?.[5] ?? 0,
    })),
  )
}

async function main() {
  const [, , pdfPath, pageArg] = process.argv
  if (!pdfPath || !pageArg) {
    console.error('Usage: diff-parser.ts <pdf-path> <page-number>')
    process.exit(1)
  }
  const pageNum = parseInt(pageArg, 10)

  const buffer = readFileSync(pdfPath)
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs')
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buffer) }).promise
  const page = await doc.getPage(pageNum)
  const content = await page.getTextContent()
  const items = content.items as Item[]

  const oldText = oldExtract(items)
  const newText = newExtract(items)

  const oldPath = join(tmpdir(), `pdf-old-p${pageNum}.txt`)
  const newPath = join(tmpdir(), `pdf-new-p${pageNum}.txt`)
  writeFileSync(oldPath, oldText)
  writeFileSync(newPath, newText)

  console.log(`OLD output: ${oldPath} (${oldText.length} chars)`)
  console.log(`NEW output: ${newPath} (${newText.length} chars)`)
  console.log()
  console.log('=== diff (old → new) ===')
  try {
    execSync(`diff -u "${oldPath}" "${newPath}"`, { stdio: 'inherit' })
  } catch {
    // diff exits 1 when files differ — that's expected
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
