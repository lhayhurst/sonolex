/**
 * Find which PDF page index contains a given search string.
 *
 * Usage:
 *   npx tsx server/scripts/find-pdf-page.ts <pdf-path> <search-string>
 */

import { readFileSync } from 'node:fs'

async function main() {
  const [, , pdfPath, query] = process.argv
  if (!pdfPath || !query) {
    console.error('Usage: find-pdf-page.ts <pdf-path> <search-string>')
    process.exit(1)
  }

  const buffer = readFileSync(pdfPath)
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs')
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buffer) }).promise

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i)
    const content = await page.getTextContent()
    const text = content.items.map((it: { str?: string }) => it.str ?? '').join(' ')
    if (text.toLowerCase().includes(query.toLowerCase())) {
      console.log(`Match on PDF page ${i}`)
    }
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
