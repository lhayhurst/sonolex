import { runClaude, stripMarkdownFences, type ClaudeUsage } from './claude-cli'
import type { ManualSection } from '../../src/types/index'

export interface ConvertedManual {
  title: string
  summary: string
  content: string
  sections: ManualSection[]
  usage: ClaudeUsage
}

const CHUNK_THRESHOLD = 50000 // characters — above this, split into chunks

export function buildConversionPrompt(rawText: string, fileName: string): string {
  return `You are converting an equipment manual into a structured format.

Source file: ${fileName}

Please analyze the following raw text extracted from a PDF manual and return a JSON object with:
- "title": The equipment name and manual title
- "summary": A 2-3 sentence summary of what this device is, what it does, and its key capabilities. Write this for a musician who might not know the device.
- "sections": An array of section objects, each with:
  - "heading": The section heading
  - "content": The section content (preserve technical details, MIDI CC numbers, specifications)
  - "level": The heading depth (1 for top-level, 2 for sub-section, etc.)

Organize the content into logical sections. Preserve all technical details including MIDI CC maps, specifications, signal routing information, and configuration instructions.

Return ONLY valid JSON, no markdown fences or other text.

Raw text:
${rawText}`
}

function buildChunkPrompt(rawText: string, fileName: string, chunkIndex: number, totalChunks: number): string {
  return `You are converting part of an equipment manual into structured sections.

Source file: ${fileName}
This is chunk ${chunkIndex + 1} of ${totalChunks}.

Return a JSON object with:
- "sections": An array of section objects, each with:
  - "heading": The section heading
  - "content": The section content (preserve all technical details, MIDI CC numbers, specifications)
  - "level": The heading depth (1 for top-level, 2 for sub-section, etc.)

Preserve all technical details. Return ONLY valid JSON, no markdown fences or other text.

Raw text:
${rawText}`
}

function buildTitlePrompt(rawText: string, fileName: string): string {
  // Use just the first portion for title/summary extraction
  const preview = rawText.slice(0, 5000)
  return `You are identifying an equipment manual.

Source file: ${fileName}

Based on the beginning of this manual, return a JSON object with:
- "title": The equipment name and manual title
- "summary": A 2-3 sentence summary of what this device is, what it does, and its key capabilities. Write this for a musician who might not know the device.

Return ONLY valid JSON, no markdown fences or other text.

Beginning of manual:
${preview}`
}

export function splitIntoChunks(text: string, maxChunkSize: number = CHUNK_THRESHOLD): string[] {
  if (text.length <= maxChunkSize) return [text]

  const chunks: string[] = []
  let remaining = text

  while (remaining.length > 0) {
    if (remaining.length <= maxChunkSize) {
      chunks.push(remaining)
      break
    }

    // Try to split on a double newline near the boundary
    const searchStart = Math.floor(maxChunkSize * 0.7)
    const searchRegion = remaining.slice(searchStart, maxChunkSize)
    const breakIdx = searchRegion.lastIndexOf('\n\n')

    let splitAt: number
    if (breakIdx >= 0) {
      splitAt = searchStart + breakIdx
    } else {
      // No good break point — force split at max
      splitAt = maxChunkSize
    }

    chunks.push(remaining.slice(0, splitAt).trim())
    remaining = remaining.slice(splitAt).trim()
  }

  return chunks
}

function parseJsonResponse(text: string): unknown {
  const jsonText = stripMarkdownFences(text)
  try {
    return JSON.parse(jsonText)
  } catch {
    throw new Error('Claude returned an invalid response — the content may be too large or complex. Try a smaller docs section.')
  }
}

function sumUsage(usages: ClaudeUsage[]): ClaudeUsage {
  return usages.reduce((acc, u) => ({
    inputTokens: acc.inputTokens + u.inputTokens,
    outputTokens: acc.outputTokens + u.outputTokens,
    costUsd: acc.costUsd + u.costUsd,
    durationMs: acc.durationMs + u.durationMs,
  }), { inputTokens: 0, outputTokens: 0, costUsd: 0, durationMs: 0 })
}

export interface ConvertOptions {
  onChunkProgress?: (chunk: number, totalChunks: number) => void
}

export async function convertToManual(
  rawText: string,
  fileName: string,
  options?: ConvertOptions,
): Promise<ConvertedManual> {
  // Small enough for a single call
  if (rawText.length <= CHUNK_THRESHOLD) {
    const prompt = buildConversionPrompt(rawText, fileName)
    const { text: output, usage } = await runClaude(prompt)
    const parsed = parseJsonResponse(output) as { title: string; summary?: string; sections: ManualSection[] }

    return {
      title: parsed.title,
      summary: parsed.summary ?? '',
      content: rawText,
      sections: parsed.sections,
      usage,
    }
  }

  // Large manual — chunk it
  const usages: ClaudeUsage[] = []

  // Step 1: Extract title and summary from the beginning
  const titlePrompt = buildTitlePrompt(rawText, fileName)
  const titleResult = await runClaude(titlePrompt)
  usages.push(titleResult.usage)
  const titleData = parseJsonResponse(titleResult.text) as { title: string; summary?: string }

  // Step 2: Convert each chunk into sections
  const chunks = splitIntoChunks(rawText)
  const allSections: ManualSection[] = []

  async function convertChunk(text: string, index: number, total: number, depth: number): Promise<void> {
    const chunkPrompt = buildChunkPrompt(text, fileName, index, total)
    const chunkResult = await runClaude(chunkPrompt)
    usages.push(chunkResult.usage)

    try {
      const chunkData = parseJsonResponse(chunkResult.text) as { sections: ManualSection[] }
      allSections.push(...chunkData.sections)
    } catch {
      // If this chunk failed and we can split further, retry with smaller halves
      if (depth < 2 && text.length > 5000) {
        const halves = splitIntoChunks(text, Math.ceil(text.length / 2))
        for (const half of halves) {
          await convertChunk(half, index, total, depth + 1)
        }
      }
      // If we can't split further, skip this chunk rather than failing the whole import
    }
  }

  for (let i = 0; i < chunks.length; i++) {
    options?.onChunkProgress?.(i + 1, chunks.length)
    await convertChunk(chunks[i], i, chunks.length, 0)
  }

  return {
    title: titleData.title,
    summary: titleData.summary ?? '',
    content: rawText,
    sections: allSections,
    usage: sumUsage(usages),
  }
}
