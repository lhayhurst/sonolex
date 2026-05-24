/**
 * Run the production PDF extractor against a single page and print the result.
 * Useful for visually diffing parser changes against real manuals.
 *
 * Usage:
 *   npx tsx server/scripts/extract-pdf-page.ts <pdf-path> <page-number>
 */

import { readFileSync } from 'node:fs'
import { layoutItemsToText } from '../lib/pdf-extract'

async function main() {
  const [, , pdfPath, pageArg] = process.argv
  if (!pdfPath || !pageArg) {
    console.error('Usage: extract-pdf-page.ts <pdf-path> <page-number>')
    process.exit(1)
  }
  const pageNum = parseInt(pageArg, 10)

  const buffer = readFileSync(pdfPath)
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs')
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buffer) }).promise

  const page = await doc.getPage(pageNum)
  const content = await page.getTextContent()
  const layoutItems = content.items.map(
    (item: { str?: string; transform?: number[] }) => ({
      str: item.str ?? '',
      x: item.transform?.[4] ?? 0,
      y: item.transform?.[5] ?? 0,
    }),
  )

  console.log(layoutItemsToText(layoutItems))
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
