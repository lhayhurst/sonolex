import { useState, useRef, useEffect, useCallback } from 'react'
import type { Manual } from '../types/index'

export type UploadStatus = 'idle' | 'uploading' | 'done' | 'error'

export interface UsageReport {
  inputTokens: number
  outputTokens: number
  costUsd: number
  durationMs: number
}

export interface UploadState {
  status: UploadStatus
  fileName: string
  elapsed: number
  estimatedMs: number | null
  usage: UsageReport | null
  error: string
  statusMessage: string
  startUpload: (file: File) => void
  startUrlImport: (url: string) => void
  dismiss: () => void
}

export function useUploadState(onUploaded?: (manual: Manual) => void): UploadState {
  const [status, setStatus] = useState<UploadStatus>('idle')
  const [fileName, setFileName] = useState('')
  const [elapsed, setElapsed] = useState(0)
  const [estimatedMs, setEstimatedMs] = useState<number | null>(null)
  const [usage, setUsage] = useState<UsageReport | null>(null)
  const [error, setError] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const timerRef = useRef<ReturnType<typeof setInterval>>()
  const onUploadedRef = useRef(onUploaded)
  onUploadedRef.current = onUploaded

  useEffect(() => {
    if (status === 'uploading') {
      setElapsed(0)
      timerRef.current = setInterval(() => {
        setElapsed(t => t + 1)
      }, 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [status])

  const startUpload = useCallback(async (file: File) => {
    setStatus('uploading')
    setFileName(file.name)
    setError('')
    setUsage(null)
    setEstimatedMs(null)
    setStatusMessage('Extracting text...')

    const formData = new FormData()
    formData.append('pdf', file)

    // Phase 1: Extract text and get estimate
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
      // Best-effort
    }

    setStatusMessage('Converting with Claude...')

    // Phase 2: Full conversion
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
      setStatus('done')
      setStatusMessage('')
      onUploadedRef.current?.(data)
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Upload failed')
      setStatusMessage('')
    }
  }, [])

  const startUrlImport = useCallback(async (url: string) => {
    setStatus('uploading')
    setFileName(url)
    setError('')
    setUsage(null)
    setEstimatedMs(null)
    setStatusMessage('Starting crawl...')

    try {
      const response = await fetch('/api/import-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })

      const contentType = response.headers.get('content-type') ?? ''
      if (!contentType.includes('ndjson')) {
        // Non-streaming response (validation error, etc.)
        const data = await response.json()
        if (!response.ok) throw new Error(data.error || 'Import failed')
        // Shouldn't happen, but handle gracefully
        if (data.usage) setUsage(data.usage)
        setStatus('done')
        setStatusMessage('')
        onUploadedRef.current?.(data)
        return
      }

      // Read NDJSON stream
      const reader = response.body!.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.trim()) continue
          try {
            const event = JSON.parse(line)
            if (event.type === 'progress') {
              setStatusMessage(`Crawling page ${event.crawled} of ${event.total}...`)
            } else if (event.type === 'converting') {
              setStatusMessage(`Crawled ${event.pagesFound} pages — converting with Claude...`)
            } else if (event.type === 'done') {
              if (event.manual?.usage) setUsage(event.manual.usage)
              setStatus('done')
              setStatusMessage('')
              onUploadedRef.current?.(event.manual)
            } else if (event.type === 'error') {
              throw new Error(event.message)
            }
          } catch (parseErr) {
            if (parseErr instanceof SyntaxError) continue
            throw parseErr
          }
        }
      }
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Import failed')
      setStatusMessage('')
    }
  }, [])

  const dismiss = useCallback(() => {
    setStatus('idle')
    setFileName('')
    setUsage(null)
    setEstimatedMs(null)
    setError('')
    setStatusMessage('')
  }, [])

  return { status, fileName, elapsed, estimatedMs, usage, error, statusMessage, startUpload, startUrlImport, dismiss }
}
