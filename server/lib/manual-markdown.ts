import type { Manual } from '../../src/types/index'

function quote(value: string): string {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
}

function frontmatter(manual: Manual): string {
  const lines = ['---', `id: ${manual.id}`, `title: ${quote(manual.title)}`]
  if (manual.sourceFileName) lines.push(`source: ${quote(manual.sourceFileName)}`)
  if (manual.convertedAt) lines.push(`convertedAt: ${manual.convertedAt}`)
  if (manual.summary) lines.push(`summary: ${quote(manual.summary)}`)
  lines.push('---', '', '')
  return lines.join('\n')
}

function section(heading: string, content: string, level: number): string {
  const clamped = Math.max(1, Math.min(6, level))
  return `${'#'.repeat(clamped)} ${heading.trim()}\n\n${content.trim()}`
}

export function renderManualMarkdown(manual: Manual): string {
  const head = frontmatter(manual)
  const body = (manual.sections ?? [])
    .map(s => section(s.heading, s.content, s.level))
    .join('\n\n')
  return body ? `${head}${body}\n` : head
}
