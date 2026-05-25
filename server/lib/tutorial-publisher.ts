import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { marked } from 'marked'
import type { Tutorial } from '../../src/types/index'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const SHARED_STYLE = `
:root {
  --text: #374151;
  --text-h: #111827;
  --text-muted: #9ca3af;
  --bg: #ffffff;
  --bg-alt: #f9fafb;
  --border: #e5e7eb;
  --accent: #6366f1;
  --accent-hover: #4f46e5;
  --sans: system-ui, -apple-system, sans-serif;
  --mono: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
}
@media (prefers-color-scheme: dark) {
  :root {
    --text: #d1d5db;
    --text-h: #f9fafb;
    --text-muted: #6b7280;
    --bg: #111827;
    --bg-alt: #1f2937;
    --border: #374151;
    --accent: #818cf8;
    --accent-hover: #6366f1;
  }
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font: 16px/1.6 var(--sans);
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}
.container { max-width: 760px; margin: 0 auto; padding: 48px 24px 96px; }
.back { color: var(--text-muted); text-decoration: none; font-size: 14px; }
.back:hover { color: var(--accent); }
h1 { color: var(--text-h); font-size: 32px; margin: 24px 0 8px; line-height: 1.2; }
h2 { color: var(--text-h); font-size: 22px; margin: 32px 0 8px; }
h3 { color: var(--text-h); font-size: 18px; margin: 24px 0 8px; }
p { margin: 12px 0; }
.summary { color: var(--text-muted); font-size: 17px; margin: 8px 0 32px; }
a { color: var(--accent); }
a:hover { color: var(--accent-hover); }
ul, ol { margin: 12px 0 12px 24px; }
li { margin: 4px 0; }
code { font-family: var(--mono); font-size: 14px; background: var(--bg-alt); padding: 1px 6px; border-radius: 3px; }
pre { background: var(--bg-alt); border: 1px solid var(--border); border-radius: 6px; padding: 12px 16px; overflow-x: auto; margin: 12px 0; }
pre code { background: none; padding: 0; }
table { border-collapse: collapse; margin: 12px 0; width: 100%; font-size: 14px; }
th, td { border: 1px solid var(--border); padding: 8px 12px; text-align: left; }
th { background: var(--bg-alt); font-weight: 600; }
blockquote { border-left: 3px solid var(--border); padding-left: 16px; margin: 12px 0; color: var(--text-muted); }
.tutorial-list { list-style: none; margin: 24px 0 0; padding: 0; }
.tutorial-list li { margin: 0 0 24px; padding: 0; border-bottom: 1px solid var(--border); padding-bottom: 24px; }
.tutorial-list li:last-child { border-bottom: 0; }
.tutorial-list a { text-decoration: none; color: var(--text-h); font-size: 20px; font-weight: 600; }
.tutorial-list a:hover { color: var(--accent); }
.tutorial-list .summary { font-size: 15px; margin: 6px 0 0; }
.empty { color: var(--text-muted); font-style: italic; margin: 32px 0; }
`.trim()

function renderShellHtml(params: {
  title: string
  description: string
  bodyHtml: string
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(params.title)}</title>
<meta name="description" content="${escapeHtml(params.description)}">
<style>${SHARED_STYLE}</style>
</head>
<body>
<div class="container">
${params.bodyHtml}
</div>
</body>
</html>
`
}

export function renderTutorialHtml(tutorial: Tutorial): string {
  const contentHtml = marked.parse(tutorial.content, { gfm: true, async: false }) as string
  const bodyHtml = [
    `<a class="back" href="../">&larr; All tutorials</a>`,
    `<h1>${escapeHtml(tutorial.title)}</h1>`,
    tutorial.summary ? `<p class="summary">${escapeHtml(tutorial.summary)}</p>` : '',
    contentHtml,
  ]
    .filter(Boolean)
    .join('\n')

  return renderShellHtml({
    title: `${tutorial.title} — Sonolex`,
    description: tutorial.summary,
    bodyHtml,
  })
}

export function renderTutorialsIndexHtml(tutorials: Tutorial[]): string {
  const sorted = [...tutorials].sort((a, b) => {
    const aTime = a.publishedAt ?? a.updatedAt
    const bTime = b.publishedAt ?? b.updatedAt
    return bTime.localeCompare(aTime)
  })

  const listHtml =
    sorted.length === 0
      ? `<p class="empty">No tutorials published yet.</p>`
      : `<ul class="tutorial-list">${sorted
          .map(
            t => `<li>
<a href="${escapeHtml(t.id)}/">${escapeHtml(t.title)}</a>
${t.summary ? `<p class="summary">${escapeHtml(t.summary)}</p>` : ''}
</li>`,
          )
          .join('\n')}</ul>`

  return renderShellHtml({
    title: 'Tutorials — Sonolex',
    description: 'Published tutorials about music studio gear.',
    bodyHtml: `<h1>Tutorials</h1>\n${listHtml}`,
  })
}

export interface PublishResult {
  tutorial: Tutorial
  filesWritten: string[]
}

export async function publishTutorial(
  tutorial: Tutorial,
  docsDir: string,
  allPublished: Tutorial[],
): Promise<PublishResult> {
  const published: Tutorial = {
    ...tutorial,
    status: 'published',
    publishedAt: tutorial.publishedAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  const tutorialsDir = join(docsDir, 'tutorials')
  const slugDir = join(tutorialsDir, published.id)
  await mkdir(slugDir, { recursive: true })

  const tutorialPath = join(slugDir, 'index.html')
  await writeFile(tutorialPath, renderTutorialHtml(published), 'utf-8')

  // Make sure the freshly-published tutorial is in the index list, replacing
  // any prior entry with the same id.
  const indexList = [
    ...allPublished.filter(t => t.id !== published.id),
    published,
  ]
  const indexPath = join(tutorialsDir, 'index.html')
  await writeFile(indexPath, renderTutorialsIndexHtml(indexList), 'utf-8')

  return {
    tutorial: published,
    filesWritten: [tutorialPath, indexPath],
  }
}
