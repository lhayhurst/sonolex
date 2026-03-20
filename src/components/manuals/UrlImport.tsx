import { useState } from 'react'

interface UrlImportProps {
  onImported?: () => void
}

export function UrlImport({ onImported }: UrlImportProps) {
  const [url, setUrl] = useState('')
  const [importing, setImporting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  async function handleImport() {
    if (!url.trim() || importing) return

    setImporting(true)
    setStatus(null)

    try {
      const res = await fetch('/api/import-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })

      const data = await res.json()

      if (res.ok) {
        const pagesMsg = data.crawlStats?.pagesFound
          ? ` (${data.crawlStats.pagesFound} pages crawled)`
          : ''
        const errorsMsg = data.crawlStats?.errors?.length
          ? ` — ${data.crawlStats.errors.length} pages had errors`
          : ''
        setStatus({ type: 'success', message: `Imported "${data.title}"${pagesMsg}${errorsMsg}` })
        setUrl('')
        onImported?.()
      } else {
        setStatus({ type: 'error', message: data.error || 'Import failed' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Failed to connect to server' })
    } finally {
      setImporting(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleImport()
    }
  }

  return (
    <div className="url-import">
      <div className="url-import-row">
        <input
          type="url"
          className="url-import-input"
          value={url}
          onChange={e => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="https://example.com/docs/"
          disabled={importing}
        />
        <button
          className="url-import-btn"
          onClick={handleImport}
          disabled={!url.trim() || importing}
        >
          {importing ? 'Importing...' : 'Import'}
        </button>
      </div>
      {importing && (
        <p className="url-import-status url-import-progress">
          Crawling pages and converting — this may take a minute...
        </p>
      )}
      {status && (
        <p className={`url-import-status url-import-${status.type}`}>
          {status.message}
        </p>
      )}
    </div>
  )
}
