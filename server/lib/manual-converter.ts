import { runClaude, stripMarkdownFences, type ClaudeUsage } from './claude-cli'
import type { ManualSection } from '../../src/types/index'

export interface ConvertedManual {
  title: string
  summary: string
  content: string
  sections: ManualSection[]
  usage: ClaudeUsage
}

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

export async function convertToManual(
  rawText: string,
  fileName: string,
): Promise<ConvertedManual> {
  const prompt = buildConversionPrompt(rawText, fileName)
  const { text: output, usage } = await runClaude(prompt)
  const jsonText = stripMarkdownFences(output)

  const parsed = JSON.parse(jsonText) as { title: string; summary?: string; sections: ManualSection[] }

  return {
    title: parsed.title,
    summary: parsed.summary ?? '',
    content: rawText,
    sections: parsed.sections,
    usage,
  }
}
