import type { Tutorial } from '../../src/types/index'

function quote(value: string): string {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
}

export function renderTutorialMarkdown(tutorial: Tutorial): string {
  const lines = [
    '---',
    `id: ${tutorial.id}`,
    `title: ${quote(tutorial.title)}`,
    `summary: ${quote(tutorial.summary)}`,
    `status: ${tutorial.status}`,
  ]
  if (tutorial.chatSessionId) lines.push(`chatSessionId: ${tutorial.chatSessionId}`)
  lines.push(`createdAt: ${tutorial.createdAt}`)
  lines.push(`updatedAt: ${tutorial.updatedAt}`)
  if (tutorial.publishedAt) lines.push(`publishedAt: ${tutorial.publishedAt}`)
  lines.push('---', '', '')

  const head = lines.join('\n')
  if (!tutorial.content.trim()) return head
  return `${head}${tutorial.content.trim()}\n`
}
