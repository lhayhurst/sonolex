export interface PdfExtractResult {
  text: string
  pageCount: number
}

export interface LayoutItem {
  str: string
  x: number
  y: number
}

export interface LayoutOptions {
  yTolerance?: number
}

/**
 * Group PDF text items into visual rows by y-coordinate and sort by x within
 * each row. PDF text streams are returned in reading order rather than visual
 * order, so a naive join scrambles stacked tables and dual-row displays.
 */
export function layoutItemsToText(items: LayoutItem[], options?: LayoutOptions): string {
  const yTolerance = options?.yTolerance ?? 2
  const meaningful = items.filter(it => it.str.trim().length > 0)
  if (meaningful.length === 0) return ''

  // PDF origin is bottom-left, so the top of the page has the highest y
  const sortedByY = [...meaningful].sort((a, b) => b.y - a.y)

  const rows: LayoutItem[][] = []
  let currentRow: LayoutItem[] = [sortedByY[0]]
  let currentY = sortedByY[0].y

  for (let i = 1; i < sortedByY.length; i++) {
    const item = sortedByY[i]
    if (Math.abs(item.y - currentY) <= yTolerance) {
      currentRow.push(item)
    } else {
      rows.push(currentRow)
      currentRow = [item]
      currentY = item.y
    }
  }
  rows.push(currentRow)

  return rows
    .map(row =>
      [...row]
        .sort((a, b) => a.x - b.x)
        .map(it => it.str.trim())
        .join(' '),
    )
    .join('\n')
}

export async function extractTextFromPdf(buffer: Buffer): Promise<PdfExtractResult> {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs')
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buffer) }).promise

  const pages: string[] = []
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i)
    const content = await page.getTextContent()
    const layoutItems: LayoutItem[] = content.items.map(
      (item: { str?: string; transform?: number[] }) => {
        const str = item.str ?? ''
        const transform = item.transform ?? [1, 0, 0, 1, 0, 0]
        return { str, x: transform[4], y: transform[5] }
      },
    )
    pages.push(layoutItemsToText(layoutItems))
  }

  return {
    text: pages.join('\n\n'),
    pageCount: doc.numPages,
  }
}
