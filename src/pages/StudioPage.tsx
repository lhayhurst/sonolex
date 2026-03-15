import { useState, useEffect, useCallback, useRef } from 'react'
import Markdown from 'react-markdown'

type ViewMode = 'view' | 'edit'

export function StudioPage() {
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState<ViewMode>('view')
  const [editContent, setEditContent] = useState('')
  const [saving, setSaving] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

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
      <div className="studio-doc">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}
