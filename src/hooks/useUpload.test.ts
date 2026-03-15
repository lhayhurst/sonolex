import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useUploadState } from './useUpload'

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
    const mockManual = { id: 'm1', title: 'Test', content: 'text' }
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockManual),
    })

    const onUploaded = vi.fn()
    const { result } = renderHook(() => useUploadState(onUploaded))
    const file = new File(['fake'], 'test.pdf', { type: 'application/pdf' })

    await act(async () => {
      result.current.startUpload(file)
      // Let promises resolve
      await new Promise(r => setTimeout(r, 50))
    })

    expect(result.current.status).toBe('done')
    expect(onUploaded).toHaveBeenCalledWith(mockManual)
  })

  it('transitions to error on failed upload', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ error: 'Something broke' }),
    })

    const { result } = renderHook(() => useUploadState())
    const file = new File(['fake'], 'test.pdf', { type: 'application/pdf' })

    await act(async () => {
      result.current.startUpload(file)
      await new Promise(r => setTimeout(r, 50))
    })

    expect(result.current.status).toBe('error')
    expect(result.current.error).toBe('Something broke')
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
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockManual),
    })

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
