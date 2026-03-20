import { useState } from 'react'
import { useUpload } from '../layout/AppShell'

export function UrlImport() {
  const [url, setUrl] = useState('')
  const upload = useUpload()

  function handleImport() {
    if (!url.trim() || upload.status === 'uploading') return
    upload.startUrlImport(url.trim())
    setUrl('')
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
          disabled={upload.status === 'uploading'}
        />
        <button
          className="url-import-btn"
          onClick={handleImport}
          disabled={!url.trim() || upload.status === 'uploading'}
        >
          Import from URL
        </button>
      </div>
    </div>
  )
}
