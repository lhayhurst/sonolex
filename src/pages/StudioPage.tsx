import { useState, useEffect, useCallback } from 'react'
import Markdown from 'react-markdown'

type ViewMode = 'view' | 'edit'

export function StudioPage() {
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState<ViewMode>('view')
  const [editContent, setEditContent] = useState('')
  const [saving, setSaving] = useState(false)

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
          <button className="studio-btn studio-btn-primary" onClick={handleImport} aria-label="Import studio doc">
            Import
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="studio-page">
      <div className="studio-header">
        <h1>Studio</h1>
        <button className="studio-btn" onClick={handleEdit} aria-label="Edit studio doc">
          Edit
        </button>
      </div>
      <div className="studio-doc">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}
