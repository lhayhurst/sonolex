import { useState, useRef, useEffect } from 'react'
import type { Manual } from '../../types/index'

interface UsageReport {
  inputTokens: number
  outputTokens: number
  costUsd: number
  durationMs: number
}

interface PdfUploadProps {
  onUploaded: (manual: Manual) => void
}

type UploadState = 'idle' | 'uploading' | 'done' | 'error'

export function PdfUpload({ onUploaded }: PdfUploadProps) {
  const [state, setState] = useState<UploadState>('idle')
  const [error, setError] = useState('')
  const [fileName, setFileName] = useState('')
  const [elapsed, setElapsed] = useState(0)
  const [estimatedMs, setEstimatedMs] = useState<number | null>(null)
  const [usage, setUsage] = useState<UsageReport | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    if (state === 'uploading') {
      setElapsed(0)
      timerRef.current = setInterval(() => {
        setElapsed(t => t + 1)
      }, 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [state])

  function progressPercent(): number {
    if (!estimatedMs || estimatedMs <= 0) return -1 // indeterminate
    const elapsedMs = elapsed * 1000
    const raw = (elapsedMs / estimatedMs) * 100
    // Cap at 90% — don't hit 100 until actually done
    return Math.min(raw, 90)
  }

  async function handleFile(file: File) {
    setState('uploading')
    setFileName(file.name)
    setError('')
    setUsage(null)
    setEstimatedMs(null)

    const formData = new FormData()
    formData.append('pdf', file)

    // Phase 1: Extract text and get time estimate (fast)
    try {
      const extractForm = new FormData()
      extractForm.append('pdf', file)
      const estRes = await fetch('/api/extract-text', {
        method: 'POST',
        body: extractForm,
      })
      if (estRes.ok) {
        const estData = await estRes.json()
        if (estData.estimatedMs) setEstimatedMs(estData.estimatedMs)
      }
    } catch {
      // Estimation is best-effort
    }

    // Phase 2: Full conversion with Claude (slow)
    try {
      const response = await fetch('/api/upload-pdf', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Upload failed')
      }

      const data = await response.json()
      if (data.usage) setUsage(data.usage)
      setState('done')
      onUploaded(data)

      setTimeout(() => {
        setState('idle')
        setFileName('')
        setUsage(null)
      }, 10000)
    } catch (err) {
      setState('error')
      setError(err instanceof Error ? err.message : 'Upload failed')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
    if (inputRef.current) inputRef.current.value = ''
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type === 'application/pdf') {
      handleFile(file)
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return m > 0 ? `${m}m ${s}s` : `${s}s`
  }

  function formatNumber(n: number): string {
    return n.toLocaleString()
  }

  const pct = progressPercent()

  return (
    <div
      className="pdf-upload"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="pdf-upload-zone">
        {state === 'uploading' ? (
          <div className="pdf-upload-progress">
            <p className="pdf-upload-filename">{fileName}</p>
            <div className="progress-bar">
              <div
                className={`progress-bar-fill${pct < 0 ? ' indeterminate' : ''}`}
                style={pct >= 0 ? { width: `${pct}%` } : undefined}
              />
            </div>
            <p className="pdf-upload-status">
              Converting with Claude... {formatTime(elapsed)}
              {estimatedMs && pct >= 0 && (
                <> (~{formatTime(Math.max(0, Math.round((estimatedMs / 1000) - elapsed)))} remaining)</>
              )}
            </p>
          </div>
        ) : state === 'done' && usage ? (
          <div className="pdf-upload-report">
            <p className="pdf-upload-report-title">Conversion complete</p>
            <div className="pdf-upload-report-stats">
              <span>{formatNumber(usage.inputTokens)} input tokens</span>
              <span>{formatNumber(usage.outputTokens)} output tokens</span>
              <span>${usage.costUsd.toFixed(2)} cost</span>
              <span>{formatTime(Math.round(usage.durationMs / 1000))}</span>
            </div>
          </div>
        ) : (
          <>
            <p className="pdf-upload-instructions">
              Drop a PDF here or click to browse
            </p>
            <label className="pdf-upload-label">
              <input
                ref={inputRef}
                type="file"
                accept=".pdf"
                onChange={handleChange}
                aria-label="Upload PDF"
                className="pdf-upload-input"
              />
              Choose file
            </label>
          </>
        )}
        {state === 'error' && (
          <p className="pdf-upload-error">{error}</p>
        )}
      </div>
    </div>
  )
}
