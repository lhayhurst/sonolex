/**
 * Diagnostic: dump pdfjs raw items for a given PDF page with x/y/width/font/height.
 * Lets us see exactly what the extractor sees before deciding how to fix it.
 *
 * Usage:
 *   npx tsx server/scripts/dump-pdf-items.ts <pdf-path> <page-number>
 */

import { readFileSync } from 'node:fs'

async function main() {
  const [, , pdfPath, pageArg] = process.argv
  if (!pdfPath || !pageArg) {
    console.error('Usage: dump-pdf-items.ts <pdf-path> <page-number>')
    process.exit(1)
  }
  const pageNum = parseInt(pageArg, 10)

  const buffer = readFileSync(pdfPath)
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs')
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buffer) }).promise

  if (pageNum < 1 || pageNum > doc.numPages) {
    console.error(`Page ${pageNum} out of range (1-${doc.numPages})`)
    process.exit(1)
  }

  const page = await doc.getPage(pageNum)
  const viewport = page.getViewport({ scale: 1 })
  const content = await page.getTextContent()

  console.log(`# PDF: ${pdfPath}`)
  console.log(`# Page: ${pageNum} of ${doc.numPages}`)
  console.log(`# Viewport: ${viewport.width} x ${viewport.height} (origin bottom-left)`)
  console.log(`# Items: ${content.items.length}`)
  console.log()
  console.log('idx\tx\ty\twidth\theight\tfontHeight\tstr')

  for (let i = 0; i < content.items.length; i++) {
    const item = content.items[i] as {
      str: string
      transform: number[]
      width: number
      height: number
    }
    const [, , , fontHeight, x, y] = item.transform
    const displayStr = JSON.stringify(item.str)
    console.log(
      `${i}\t${x.toFixed(1)}\t${y.toFixed(1)}\t${item.width.toFixed(1)}\t${item.height.toFixed(1)}\t${fontHeight.toFixed(1)}\t${displayStr}`,
    )
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
