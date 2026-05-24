import { describe, it, expect } from 'vitest'
import { extractTextFromPdf, layoutItemsToText } from './pdf-extract'

// Minimal valid PDF with "Hello World" text
const MINIMAL_PDF = Buffer.from(
  '%PDF-1.0\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n' +
  '2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n' +
  '3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj\n' +
  '4 0 obj<</Length 44>>stream\nBT /F1 12 Tf 100 700 Td (Hello World) Tj ET\nendstream\nendobj\n' +
  '5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj\n' +
  'xref\n0 6\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n' +
  '0000000115 00000 n \n0000000266 00000 n \n0000000360 00000 n \n' +
  'trailer<</Size 6/Root 1 0 R>>\nstartxref\n431\n%%EOF'
)

describe('extractTextFromPdf', () => {
  it('extracts text from a valid PDF', async () => {
    const result = await extractTextFromPdf(MINIMAL_PDF)
    expect(result.text).toContain('Hello World')
    expect(result.pageCount).toBe(1)
  })

  it('throws on invalid PDF data', async () => {
    const garbage = Buffer.from('this is not a pdf')
    await expect(extractTextFromPdf(garbage)).rejects.toThrow()
  })

  it('returns page count', async () => {
    const result = await extractTextFromPdf(MINIMAL_PDF)
    expect(typeof result.pageCount).toBe('number')
    expect(result.pageCount).toBe(1)
  })
})

describe('layoutItemsToText', () => {
  it('returns empty string for no items', () => {
    expect(layoutItemsToText([])).toBe('')
  })

  it('returns the trimmed string for a single item', () => {
    expect(layoutItemsToText([{ str: 'Hello', x: 0, y: 0 }])).toBe('Hello')
  })

  it('joins items on the same y, sorted by x ascending', () => {
    const items = [
      { str: 'World', x: 100, y: 500 },
      { str: 'Hello', x: 0, y: 500 },
    ]
    expect(layoutItemsToText(items)).toBe('Hello World')
  })

  it('emits higher-y items first (PDF origin is bottom-left, top of page = high y)', () => {
    const items = [
      { str: 'Second line', x: 0, y: 480 },
      { str: 'First line', x: 0, y: 500 },
    ]
    expect(layoutItemsToText(items)).toBe('First line\nSecond line')
  })

  it('preserves dual-row tabular layouts (the OXI Page 2/3 step display)', () => {
    // From real PDF: y=598.3 Rept Durat ; y=580.0 Offst Strm
    // The naive flatten produced "Rept Offst Durat Strm" — wrong.
    const items = [
      { str: 'Rept', x: 75.6, y: 598.3 },
      { str: 'Offst', x: 75.6, y: 580.0 },
      { str: 'Durat', x: 97.0, y: 598.3 },
      { str: 'Strm', x: 98.3, y: 580.0 },
    ]
    expect(layoutItemsToText(items)).toBe('Rept Durat\nOffst Strm')
  })

  it('preserves grid tables (the OXI voicing table that was dropped)', () => {
    const items = [
      { str: 'S:0', x: 324, y: 397.6 },
      { str: 'Type', x: 342.8, y: 397.6 },
      { str: 'Voicing', x: 373.5, y: 397.6 },
      { str: 'G root', x: 324, y: 387.1 },
      { str: 'I Open', x: 371.7, y: 387.1 },
      { str: 'G minor', x: 324, y: 376.7 },
      { str: 'No Inver', x: 371.7, y: 376.7 },
      { str: 'G min6', x: 324, y: 366.2 },
      { str: 'Open Voic', x: 371.7, y: 366.2 },
    ]
    expect(layoutItemsToText(items)).toBe(
      'S:0 Type Voicing\nG root I Open\nG minor No Inver\nG min6 Open Voic'
    )
  })

  it('treats items with small y differences as the same row', () => {
    // Real PDFs have sub-unit baseline drift on the same visual line
    const items = [
      { str: 'World', x: 100, y: 500.4 },
      { str: 'Hello', x: 0, y: 500.0 },
    ]
    expect(layoutItemsToText(items)).toBe('Hello World')
  })

  it('filters out empty and whitespace-only items', () => {
    const items = [
      { str: 'Hello', x: 0, y: 500 },
      { str: '', x: 50, y: 500 },
      { str: '   ', x: 60, y: 500 },
      { str: 'World', x: 100, y: 500 },
    ]
    expect(layoutItemsToText(items)).toBe('Hello World')
  })
})
