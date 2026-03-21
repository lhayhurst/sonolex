import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useUploadState } from './useUpload'

// Helper to create a mock NDJSON streaming response
function mockNdjsonResponse(events: Record<string, unknown>[]) {
  const text = events.map(e => JSON.stringify(e)).join('\n') + '\n'
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(text))
      controller.close()
    },
  })

  return {
    ok: true,
    headers: { get: (h: string) => h === 'content-type' ? 'application/x-ndjson' : null },
    body: stream,
  }
}

describe('useUploadState', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('starts idle with no active upload', () => {
    const { result } = renderHook(() => useUploadState())
    expect(result.current.status).toBe('idle')
    expect(result.current.fileName).toBe('')
  })

  it('transitions to uploading when startUpload is called', async () => {
    global.fetch = vi.fn().mockImplementation(() => new Promise(() => {}))

    const { result } = renderHook(() => useUploadState())
    const file = new File(['fake'], 'test.pdf', { type: 'application/pdf' })

    act(() => {
      result.current.startUpload(file)
    })

    expect(result.current.status).toBe('uploading')
    expect(result.current.fileName).toBe('test.pdf')
  })

  it('transitions to done on successful upload', async () => {
    const mockManual = { id: 'm1', title: 'Test', content: 'text', usage: { costUsd: 0.01 } }
    global.fetch = vi.fn().mockResolvedValue(
      mockNdjsonResponse([
        { type: 'extracting', chars: 100 },
        { type: 'done', manual: mockManual },
      ])
    )

    const onUploaded = vi.fn()
    const { result } = renderHook(() => useUploadState(onUploaded))
    const file = new File(['fake'], 'test.pdf', { type: 'application/pdf' })

    await act(async () => {
      result.current.startUpload(file)
      await new Promise(r => setTimeout(r, 50))
    })

    expect(result.current.status).toBe('done')
    expect(onUploaded).toHaveBeenCalledWith(mockManual)
  })

  it('transitions to error on streamed error event', async () => {
    global.fetch = vi.fn().mockResolvedValue(
      mockNdjsonResponse([
        { type: 'extracting', chars: 100 },
        { type: 'error', message: 'Something broke' },
      ])
    )

    const { result } = renderHook(() => useUploadState())
    const file = new File(['fake'], 'test.pdf', { type: 'application/pdf' })

    await act(async () => {
      result.current.startUpload(file)
      await new Promise(r => setTimeout(r, 50))
    })

    expect(result.current.status).toBe('error')
    expect(result.current.error).toBe('Something broke')
  })

  it('falls back to JSON for non-NDJSON error responses', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve({ error: 'No file uploaded' }),
    })

    const { result } = renderHook(() => useUploadState())
    const file = new File(['fake'], 'test.pdf', { type: 'application/pdf' })

    await act(async () => {
      result.current.startUpload(file)
      await new Promise(r => setTimeout(r, 50))
    })

    expect(result.current.status).toBe('error')
    expect(result.current.error).toBe('No file uploaded')
  })

  it('shows chunk progress in statusMessage', async () => {
    let resolveStream: (() => void) | undefined
    const encoder = new TextEncoder()

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      headers: { get: (h: string) => h === 'content-type' ? 'application/x-ndjson' : null },
      body: new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(JSON.stringify({ type: 'extracting', chars: 100 }) + '\n'))
          controller.enqueue(encoder.encode(JSON.stringify({ type: 'chunk', chunk: 2, totalChunks: 5 }) + '\n'))
          controller.enqueue(encoder.encode(JSON.stringify({ type: 'done', manual: { id: 'm1', title: 'Test' } }) + '\n'))
          controller.close()
        },
      }),
    })

    const { result } = renderHook(() => useUploadState())
    const file = new File(['fake'], 'test.pdf', { type: 'application/pdf' })

    await act(async () => {
      result.current.startUpload(file)
      await new Promise(r => setTimeout(r, 50))
    })

    // Should end at done
    expect(result.current.status).toBe('done')
  })

  it('tracks elapsed time while uploading', async () => {
    vi.useFakeTimers()
    global.fetch = vi.fn().mockImplementation(() => new Promise(() => {}))

    const { result } = renderHook(() => useUploadState())
    const file = new File(['fake'], 'test.pdf', { type: 'application/pdf' })

    act(() => {
      result.current.startUpload(file)
    })

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(result.current.elapsed).toBe(3)

    vi.useRealTimers()
  })

  it('dismiss resets state to idle', async () => {
    const mockManual = { id: 'm1', title: 'Test', content: 'text' }
    global.fetch = vi.fn().mockResolvedValue(
      mockNdjsonResponse([
        { type: 'extracting', chars: 100 },
        { type: 'done', manual: mockManual },
      ])
    )

    const { result } = renderHook(() => useUploadState())
    const file = new File(['fake'], 'test.pdf', { type: 'application/pdf' })

    await act(async () => {
      result.current.startUpload(file)
      await new Promise(r => setTimeout(r, 50))
    })

    expect(result.current.status).toBe('done')

    act(() => {
      result.current.dismiss()
    })

    expect(result.current.status).toBe('idle')
  })
})
