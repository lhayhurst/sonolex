export interface PdfExtractResult {
  text: string
  pageCount: number
}

export async function extractTextFromPdf(buffer: Buffer): Promise<PdfExtractResult> {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs')
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buffer) }).promise

  const pages: string[] = []
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i)
    const content = await page.getTextContent()
    const pageText = content.items
      .map((item: { str?: string }) => item.str ?? '')
      .join(' ')
    pages.push(pageText)
  }

  return {
    text: pages.join('\n\n'),
    pageCount: doc.numPages,
  }
}
