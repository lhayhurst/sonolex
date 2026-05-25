import { useState, useEffect, useCallback } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Tutorial } from '../types/index'

const remarkPlugins = [remarkGfm]

interface EditState {
  title: string
  summary: string
  content: string
}

const STATUS_LABELS: Record<Tutorial['status'], string> = {
  draft: 'Draft',
  published: 'Published',
}

function TutorialCard({
  tutorial,
  onSelect,
}: {
  tutorial: Tutorial
  onSelect: (id: string) => void
}) {
  return (
    <button className="cs-card" onClick={() => onSelect(tutorial.id)}>
      <div className="cs-card-title">{tutorial.title}</div>
      <span className={`cs-category-badge tut-status-${tutorial.status}`}>
        {STATUS_LABELS[tutorial.status]}
      </span>
      {tutorial.summary && <div className="cs-card-preview">{tutorial.summary}</div>}
    </button>
  )
}

export function TutorialsPage() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [editing, setEditing] = useState(false)
  const [creating, setCreating] = useState(false)
  const [editState, setEditState] = useState<EditState>({ title: '', summary: '', content: '' })

  const loadTutorials = useCallback(async () => {
    try {
      const res = await fetch('/api/tutorials')
      if (res.ok) setTutorials(await res.json())
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTutorials()
  }, [loadTutorials])

  const selected = tutorials.find(t => t.id === selectedId)

  function handleNew() {
    setSelectedId(null)
    setEditing(false)
    setCreating(true)
    setEditState({ title: '', summary: '', content: '' })
  }

  function handleEdit() {
    if (!selected) return
    setEditing(true)
    setCreating(false)
    setEditState({
      title: selected.title,
      summary: selected.summary,
      content: selected.content,
    })
  }

  async function handleSave() {
    if (creating) {
      const res = await fetch('/api/tutorials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editState.title || 'Untitled',
          summary: editState.summary,
          content: editState.content,
        }),
      })
      if (res.ok) {
        const created = (await res.json()) as Tutorial
        setCreating(false)
        setSelectedId(created.id)
      }
    } else if (selected) {
      await fetch(`/api/tutorials/${selected.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editState.title,
          summary: editState.summary,
          content: editState.content,
        }),
      })
      setEditing(false)
    }
    await loadTutorials()
  }

  function handleCancel() {
    setEditing(false)
    setCreating(false)
  }

  async function handleDelete() {
    if (!selected) return
    await fetch(`/api/tutorials/${selected.id}`, { method: 'DELETE' })
    setSelectedId(null)
    await loadTutorials()
  }

  if (loading) return null

  // Edit / Create
  if (editing || creating) {
    return (
      <div className="cs-page">
        <div className="cs-header">
          <h1>{creating ? 'New Tutorial' : 'Edit Tutorial'}</h1>
          <div className="cs-actions">
            <button className="cs-btn" onClick={handleCancel}>Cancel</button>
            <button className="cs-btn cs-btn-primary" onClick={handleSave}>Save</button>
          </div>
        </div>
        <div className="cs-edit-form tut-edit-form">
          <input
            className="cs-edit-title"
            value={editState.title}
            onChange={e => setEditState(s => ({ ...s, title: e.target.value }))}
            placeholder="Title"
          />
          <input
            className="cs-edit-title tut-edit-summary"
            value={editState.summary}
            onChange={e => setEditState(s => ({ ...s, summary: e.target.value }))}
            placeholder="One-line summary"
          />
          <div className="tut-edit-split">
            <textarea
              className="cs-edit-content tut-edit-textarea"
              value={editState.content}
              onChange={e => setEditState(s => ({ ...s, content: e.target.value }))}
              placeholder="Markdown content..."
            />
            <div className="tut-edit-preview">
              <Markdown remarkPlugins={remarkPlugins}>{editState.content || '*Live preview*'}</Markdown>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Detail
  if (selected) {
    return (
      <div className="cs-page">
        <div className="cs-header">
          <button className="cs-back" onClick={() => setSelectedId(null)}>&larr; All Tutorials</button>
          <div className="cs-actions">
            <button className="cs-btn" onClick={handleEdit}>Edit</button>
            <button className="cs-btn cs-btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <div className="cs-detail">
          <h1 className="cs-detail-title">{selected.title}</h1>
          <div className="cs-detail-meta">
            <span className={`cs-category-badge tut-status-${selected.status}`}>
              {STATUS_LABELS[selected.status]}
            </span>
            {selected.summary && <span className="tut-summary">{selected.summary}</span>}
          </div>
          <div className="cs-detail-content">
            <Markdown remarkPlugins={remarkPlugins}>{selected.content}</Markdown>
          </div>
        </div>
      </div>
    )
  }

  // List
  return (
    <div className="cs-page">
      <div className="cs-header">
        <h1>Tutorials</h1>
        <button className="cs-btn cs-btn-primary" onClick={handleNew}>+ New</button>
      </div>

      {tutorials.length === 0 ? (
        <p className="cs-empty">
          No tutorials yet. Create one here, or open a chat session and click
          "Generate tutorial draft" once you've worked through something.
        </p>
      ) : (
        <div className="cs-grid">
          {tutorials.map(t => (
            <TutorialCard key={t.id} tutorial={t} onSelect={setSelectedId} />
          ))}
        </div>
      )}
    </div>
  )
}
