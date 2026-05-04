import type { CheatSheet } from '../../src/types/index'

function quote(value: string): string {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
}

export function renderCheatSheetMarkdown(sheet: CheatSheet): string {
  const tagList = sheet.tags.length > 0 ? `[${sheet.tags.join(', ')}]` : '[]'
  const head = [
    '---',
    `id: ${sheet.id}`,
    `title: ${quote(sheet.title)}`,
    `category: ${sheet.category}`,
    `tags: ${tagList}`,
    `createdAt: ${sheet.createdAt}`,
    `updatedAt: ${sheet.updatedAt}`,
    '---',
    '',
    '',
  ].join('\n')

  if (!sheet.content.trim()) return head
  return `${head}${sheet.content.trim()}\n`
}
