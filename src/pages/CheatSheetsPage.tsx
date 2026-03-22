import { useState, useEffect, useCallback } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { CheatSheet, CheatSheetCategory } from '../types/index'
import { CHEAT_SHEET_CATEGORIES } from '../types/index'

const remarkPlugins = [remarkGfm]

const CATEGORY_LABELS: Record<CheatSheetCategory, string> = {
  'midi-map': 'MIDI Maps',
  'signal-routing': 'Routing',
  'shortcuts': 'Shortcuts',
  'troubleshooting': 'Troubleshooting',
  'preset-notes': 'Presets',
  'checklist': 'Checklists',
  'quick-reference': 'Quick Ref',
  'other': 'Other',
}

interface EditState {
  title: string
  content: string
  category: CheatSheetCategory
  tags: string
}

function CheatSheetCard({
  sheet,
  isSelected,
  onSelect,
}: {
  sheet: CheatSheet
  isSelected: boolean
  onSelect: (id: string) => void
}) {
  return (
    <button
      className={`cs-card${isSelected ? ' selected' : ''}`}
      onClick={() => onSelect(sheet.id)}
    >
      <div className="cs-card-title">{sheet.title}</div>
      <span className={`cs-category-badge cs-cat-${sheet.category}`}>
        {CATEGORY_LABELS[sheet.category]}
      </span>
      {sheet.tags.length > 0 && (
        <div className="cs-card-tags">
          {sheet.tags.map(tag => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>
      )}
      <div className="cs-card-preview">
        {sheet.content.slice(0, 120)}
        {sheet.content.length > 120 ? '...' : ''}
      </div>
    </button>
  )
}

export function CheatSheetsPage() {
  const [sheets, setSheets] = useState<CheatSheet[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<CheatSheetCategory | 'all'>('all')
  const [editing, setEditing] = useState(false)
  const [creating, setCreating] = useState(false)
  const [editState, setEditState] = useState<EditState>({
    title: '', content: '', category: 'other', tags: '',
  })

  const loadSheets = useCallback(async () => {
    try {
      const res = await fetch('/api/cheatsheets')
      if (res.ok) setSheets(await res.json())
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { loadSheets() }, [loadSheets])

  const selected = sheets.find(s => s.id === selectedId)
  const filtered = filter === 'all' ? sheets : sheets.filter(s => s.category === filter)

  function handleNew() {
    setSelectedId(null)
    setEditing(false)
    setCreating(true)
    setEditState({ title: '', content: '', category: 'other', tags: '' })
  }

  function handleEdit() {
    if (!selected) return
    setEditing(true)
    setCreating(false)
    setEditState({
      title: selected.title,
      content: selected.content,
      category: selected.category,
      tags: selected.tags.join(', '),
    })
  }

  async function handleSave() {
    const tags = editState.tags.split(',').map(t => t.trim()).filter(Boolean)

    if (creating) {
      const id = globalThis.crypto.randomUUID()
      const now = new Date().toISOString()
      const sheet: CheatSheet = {
        id,
        title: editState.title || 'Untitled',
        content: editState.content,
        category: editState.category,
        tags,
        createdAt: now,
        updatedAt: now,
      }
      await fetch('/api/cheatsheets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sheet),
      })
      setCreating(false)
      setSelectedId(id)
    } else if (selected) {
      await fetch(`/api/cheatsheets/${selected.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editState.title,
          content: editState.content,
          category: editState.category,
          tags,
        }),
      })
      setEditing(false)
    }
    await loadSheets()
  }

  function handleCancel() {
    setEditing(false)
    setCreating(false)
  }

  async function handleDelete() {
    if (!selected) return
    await fetch(`/api/cheatsheets/${selected.id}`, { method: 'DELETE' })
    setSelectedId(null)
    await loadSheets()
  }

  function handlePrint() {
    window.print()
  }

  if (loading) return null

  // Edit/Create form
  if (editing || creating) {
    return (
      <div className="cs-page">
        <div className="cs-header">
          <h1>{creating ? 'New Cheat Sheet' : 'Edit Cheat Sheet'}</h1>
          <div className="cs-actions">
            <button className="cs-btn" onClick={handleCancel}>Cancel</button>
            <button className="cs-btn cs-btn-primary" onClick={handleSave}>Save</button>
          </div>
        </div>
        <div className="cs-edit-form">
          <input
            className="cs-edit-title"
            value={editState.title}
            onChange={e => setEditState(s => ({ ...s, title: e.target.value }))}
            placeholder="Title"
          />
          <div className="cs-edit-row">
            <select
              className="cs-edit-category"
              value={editState.category}
              onChange={e => setEditState(s => ({ ...s, category: e.target.value as CheatSheetCategory }))}
            >
              {CHEAT_SHEET_CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{CATEGORY_LABELS[cat]}</option>
              ))}
            </select>
            <input
              className="cs-edit-tags"
              value={editState.tags}
              onChange={e => setEditState(s => ({ ...s, tags: e.target.value }))}
              placeholder="Tags (comma-separated)"
            />
          </div>
          <textarea
            className="cs-edit-content"
            value={editState.content}
            onChange={e => setEditState(s => ({ ...s, content: e.target.value }))}
            placeholder="Markdown content..."
          />
        </div>
      </div>
    )
  }

  // Detail view
  if (selected) {
    return (
      <div className="cs-page">
        <div className="cs-header">
          <button className="cs-back" onClick={() => setSelectedId(null)}>&larr; All Cheat Sheets</button>
          <div className="cs-actions">
            <button className="cs-btn" onClick={handlePrint}>Print</button>
            <button className="cs-btn" onClick={handleEdit}>Edit</button>
            <button className="cs-btn cs-btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <div className="cs-detail">
          <h1 className="cs-detail-title">{selected.title}</h1>
          <div className="cs-detail-meta">
            <span className={`cs-category-badge cs-cat-${selected.category}`}>
              {CATEGORY_LABELS[selected.category]}
            </span>
            {selected.tags.map(tag => (
              <span key={tag} className="cs-tag">{tag}</span>
            ))}
          </div>
          <div className="cs-detail-content">
            <Markdown remarkPlugins={remarkPlugins}>{selected.content}</Markdown>
          </div>
        </div>
      </div>
    )
  }

  // List view
  return (
    <div className="cs-page">
      <div className="cs-header">
        <h1>Cheat Sheets</h1>
        <button className="cs-btn cs-btn-primary" onClick={handleNew}>+ New</button>
      </div>

      <div className="cs-filters">
        <button
          className={`cs-filter-pill${filter === 'all' ? ' active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {CHEAT_SHEET_CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`cs-filter-pill${filter === cat ? ' active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="cs-empty">
          {sheets.length === 0
            ? 'No cheat sheets yet. Create one or ask Claude to save one from chat.'
            : 'No cheat sheets match this filter.'}
        </p>
      ) : (
        <div className="cs-grid">
          {filtered.map(sheet => (
            <CheatSheetCard
              key={sheet.id}
              sheet={sheet}
              isSelected={false}
              onSelect={setSelectedId}
            />
          ))}
        </div>
      )}
    </div>
  )
}
