import type { CheatSheetCategory } from '../../src/types/index'
import { CHEAT_SHEET_CATEGORIES } from '../../src/types/index'

export interface ExtractedCheatSheet {
  title: string
  content: string
  category: CheatSheetCategory
  tags: string[]
}

export function extractCheatSheet(response: string): ExtractedCheatSheet | null {
  const fencePattern = /```(?:json)?\s*\n([\s\S]*?)\n```/g
  let match

  while ((match = fencePattern.exec(response)) !== null) {
    try {
      const parsed = JSON.parse(match[1])
      if (typeof parsed.title === 'string' && typeof parsed.content === 'string') {
        return {
          title: parsed.title,
          content: parsed.content,
          category: CHEAT_SHEET_CATEGORIES.includes(parsed.category) ? parsed.category : 'other',
          tags: Array.isArray(parsed.tags) ? parsed.tags : [],
        }
      }
    } catch {
      // Not valid JSON or not a cheat sheet, try next block
    }
  }

  return null
}
