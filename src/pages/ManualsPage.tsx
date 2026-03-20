import { useState, useEffect, useCallback } from 'react'
import { PdfUpload } from '../components/manuals/PdfUpload'
import { UrlImport } from '../components/manuals/UrlImport'
import { useManualCallback } from '../components/layout/AppShell'
import type { Manual } from '../types/index'

function ManualCard({ manual, onDelete }: { manual: Manual; onDelete: (id: string) => void }) {
  const [showSummary, setShowSummary] = useState(false)

  return (
    <div className="manual-card">
      <div className="manual-card-header">
        <h3 className="manual-card-title">{manual.title}</h3>
        <button
          className="manual-card-delete"
          onClick={() => onDelete(manual.id)}
          aria-label="Delete manual"
        >
          &times;
        </button>
      </div>
      {manual.summary && (
        <>
          <button
            className="manual-card-toggle"
            onClick={() => setShowSummary(s => !s)}
            aria-label={showSummary ? 'Hide description' : 'Show description'}
          >
            {showSummary ? 'Hide description' : 'Show description'}
          </button>
          {showSummary && (
            <p className="manual-card-summary">{manual.summary}</p>
          )}
        </>
      )}
      <div className="manual-card-details">
        {manual.sourceFileName && (
          <p className="manual-card-meta">{manual.sourceFileName}</p>
        )}
        {manual.sections && (
          <p className="manual-card-meta">{manual.sections.length} sections</p>
        )}
      </div>
      <div className="manual-card-actions">
        {manual.pdfPath && (
          <a
            href={manual.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="manual-card-pdf-link"
          >
            Open PDF
          </a>
        )}
      </div>
    </div>
  )
}

export function ManualsPage() {
  const [manuals, setManuals] = useState<Manual[]>([])
  const [loading, setLoading] = useState(true)
  const { register, unregister } = useManualCallback()

  const loadManuals = useCallback(async () => {
    try {
      const res = await fetch('/api/manuals')
      if (res.ok) {
        const data = await res.json()
        setManuals(data)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadManuals()
  }, [loadManuals])

  // Listen for new manuals from the global upload
  useEffect(() => {
    const cb = (manual: Manual) => {
      setManuals(prev => [...prev, manual])
    }
    register(cb)
    return () => unregister(cb)
  }, [register, unregister])

  async function handleDelete(id: string) {
    await fetch(`/api/manuals/${id}`, { method: 'DELETE' })
    setManuals(prev => prev.filter(m => m.id !== id))
  }

  return (
    <div>
      <h1>Manuals</h1>

      <PdfUpload />
      <UrlImport />

      {loading ? (
        <p>Loading...</p>
      ) : manuals.length === 0 ? (
        <p className="empty-state">No manuals yet. Upload a PDF to get started.</p>
      ) : (
        <div className="manual-list">
          {manuals.map(manual => (
            <ManualCard key={manual.id} manual={manual} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  )
}
