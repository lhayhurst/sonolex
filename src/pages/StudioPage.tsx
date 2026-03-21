import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

type ViewMode = 'view' | 'edit'

interface TocEntry {
  id: string
  text: string
  level: number
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function extractToc(markdown: string): TocEntry[] {
  const entries: TocEntry[] = []
  const lines = markdown.split('\n')
  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.+)$/)
    if (match) {
      entries.push({
        id: slugify(match[2]),
        text: match[2].replace(/\*\*/g, ''),
        level: match[1].length,
      })
    }
  }
  return entries
}

interface TocSection {
  entry: TocEntry
  children: TocEntry[]
}

function groupTocSections(entries: TocEntry[]): TocSection[] {
  const sections: TocSection[] = []
  let current: TocSection | null = null

  for (const entry of entries) {
    if (entry.level === 1) {
      current = { entry, children: [] }
      sections.push(current)
    } else if (current) {
      current.children.push(entry)
    } else {
      // Orphan heading before first h1
      sections.push({ entry, children: [] })
    }
  }
  return sections
}

function TocSidebar({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string>('')
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(() => new Set())
  const sections = useMemo(() => groupTocSections(entries), [entries])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (observerEntries) => {
        for (const entry of observerEntries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    )

    for (const tocEntry of entries) {
      const el = document.getElementById(tocEntry.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [entries])

  function handleClick(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  function toggleSection(id: string) {
    setCollapsedSections(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <nav className="studio-toc">
      <div className="studio-toc-title">On this page</div>
      <ul>
        {sections.map(section => {
          const isCollapsed = collapsedSections.has(section.entry.id)
          const hasChildren = section.children.length > 0

          return (
            <li key={section.entry.id}>
              {hasChildren ? (
                <button
                  className="toc-section-toggle"
                  onClick={() => toggleSection(section.entry.id)}
                >
                  <span className={`toc-section-arrow${isCollapsed ? ' collapsed' : ''}`}>▾</span>
                  <span
                    className={activeId === section.entry.id ? 'toc-active-text' : ''}
                    onClick={e => { e.stopPropagation(); handleClick(section.entry.id) }}
                  >
                    {section.entry.text}
                  </span>
                </button>
              ) : (
                <button
                  className={`toc-link${activeId === section.entry.id ? ' active' : ''}`}
                  onClick={() => handleClick(section.entry.id)}
                >
                  {section.entry.text}
                </button>
              )}
              {hasChildren && (
                <div className={`toc-section-children${isCollapsed ? ' collapsed' : ''}`}>
                  <ul>
                    {section.children.map(child => (
                      <li key={child.id} className={`toc-level-${child.level}`}>
                        <button
                          className={`toc-link${activeId === child.id ? ' active' : ''}`}
                          onClick={() => handleClick(child.id)}
                        >
                          {child.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function createHeadingComponents(): Partial<Components> {
  function makeHeading(level: 1 | 2 | 3) {
    const Tag = `h${level}` as const
    return function HeadingComponent(props: React.HTMLAttributes<HTMLHeadingElement>) {
      const text = getTextFromChildren(props.children)
      const id = slugify(text)
      return <Tag id={id} {...props} />
    }
  }

  return {
    h1: makeHeading(1),
    h2: makeHeading(2),
    h3: makeHeading(3),
  }
}

function getTextFromChildren(children: React.ReactNode): string {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(getTextFromChildren).join('')
  if (children && typeof children === 'object' && 'props' in children) {
    return getTextFromChildren((children as React.ReactElement).props.children)
  }
  return ''
}

const remarkPlugins = [remarkGfm]
const headingComponents = createHeadingComponents()

export function StudioPage() {
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState<ViewMode>('view')
  const [editContent, setEditContent] = useState('')
  const [saving, setSaving] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const tocEntries = useMemo(() => content ? extractToc(content) : [], [content])

  const loadDoc = useCallback(async () => {
    try {
      const res = await fetch('/api/studio-doc')
      if (res.ok) {
        const data = await res.json()
        setContent(data.content)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadDoc()
  }, [loadDoc])

  function handleEdit() {
    setEditContent(content ?? '')
    setMode('edit')
  }

  function handleImport() {
    setEditContent('')
    setMode('edit')
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const text = reader.result as string
      setEditContent(text)
      setMode('edit')
    }
    reader.readAsText(file)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleSave() {
    setSaving(true)
    try {
      const res = await fetch('/api/studio-doc', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: editContent }),
      })
      if (res.ok) {
        setContent(editContent)
        setMode('view')
      }
    } finally {
      setSaving(false)
    }
  }

  function handleCancel() {
    setMode('view')
  }

  function handleDownload() {
    if (!content) return
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'studio.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  if (loading) return null

  if (mode === 'edit') {
    return (
      <div className="studio-page">
        <div className="studio-header">
          <h1>Studio</h1>
          <div className="studio-actions">
            <button className="studio-btn" onClick={handleCancel}>Cancel</button>
            <button className="studio-btn studio-btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
        <textarea
          className="studio-editor"
          value={editContent}
          onChange={e => setEditContent(e.target.value)}
          placeholder="Paste your studio setup markdown here..."
        />
      </div>
    )
  }

  if (!content) {
    return (
      <div className="studio-page">
        <div className="studio-header">
          <h1>Studio</h1>
        </div>
        <div className="studio-empty">
          <p>No studio doc yet.</p>
          <p className="studio-empty-hint">
            Import an existing studio document, or use the Chat to build one from your uploaded manuals.
          </p>
          <div className="studio-empty-actions">
            <label className="studio-btn studio-btn-primary">
              <input
                ref={fileInputRef}
                type="file"
                accept=".md,.txt,.markdown"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
              Upload file
            </label>
            <button className="studio-btn" onClick={handleImport} aria-label="Paste text">
              Paste text
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="studio-page">
      <div className="studio-header">
        <h1>Studio</h1>
        <div className="studio-actions">
          <button className="studio-btn" onClick={handleDownload} aria-label="Download studio doc">
            Download
          </button>
          <button className="studio-btn" onClick={handleEdit} aria-label="Edit studio doc">
            Edit
          </button>
        </div>
      </div>
      <div className="studio-body">
        <div className="studio-doc">
          <Markdown remarkPlugins={remarkPlugins} components={headingComponents}>{content}</Markdown>
        </div>
        {tocEntries.length > 0 && <TocSidebar entries={tocEntries} />}
      </div>
    </div>
  )
}
