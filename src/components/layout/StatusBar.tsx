import type { UploadState } from '../../hooks/useUpload'

interface StatusBarProps {
  upload: UploadState
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return m > 0 ? `${m}m ${s}s` : `${s}s`
}

export function StatusBar({ upload }: StatusBarProps) {
  if (upload.status === 'idle') return null

  const pct = upload.estimatedMs && upload.estimatedMs > 0
    ? Math.min((upload.elapsed * 1000 / upload.estimatedMs) * 100, 90)
    : -1

  return (
    <div className="status-bar">
      {upload.status === 'uploading' && (
        <>
          <div className="status-bar-left">
            <span className="status-bar-spinner" />
            <span className="status-bar-text">Converting {upload.fileName}</span>
          </div>
          <div className="status-bar-center">
            <div className="progress-bar">
              <div
                className={`progress-bar-fill${pct < 0 ? ' indeterminate' : ''}`}
                style={pct >= 0 ? { width: `${pct}%` } : undefined}
              />
            </div>
          </div>
          <span className="status-bar-time">{formatTime(upload.elapsed)}</span>
        </>
      )}
      {upload.status === 'done' && (
        <>
          <span className="status-bar-text">Conversion complete</span>
          {upload.usage && (
            <span className="status-bar-meta">
              {upload.usage.inputTokens.toLocaleString()} in / {upload.usage.outputTokens.toLocaleString()} out &middot; ${upload.usage.costUsd.toFixed(2)} &middot; {formatTime(Math.round(upload.usage.durationMs / 1000))}
            </span>
          )}
          <button className="status-bar-dismiss" onClick={upload.dismiss} aria-label="Dismiss">
            &times;
          </button>
        </>
      )}
      {upload.status === 'error' && (
        <>
          <span className="status-bar-error">{upload.error}</span>
          <button className="status-bar-dismiss" onClick={upload.dismiss} aria-label="Dismiss">
            &times;
          </button>
        </>
      )}
    </div>
  )
}
