import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { StatusBar } from './StatusBar'
import type { UploadState } from '../../hooks/useUpload'

const idleUpload: UploadState = {
  status: 'idle', fileName: '', elapsed: 0, estimatedMs: null,
  usage: null, error: '', startUpload: () => {}, dismiss: () => {},
}

const activeUpload: UploadState = {
  status: 'uploading', fileName: 'my-synth.pdf', elapsed: 12, estimatedMs: 60000,
  usage: null, error: '', startUpload: () => {}, dismiss: () => {},
}

const doneUpload: UploadState = {
  status: 'done', fileName: 'my-synth.pdf', elapsed: 30, estimatedMs: null,
  usage: { inputTokens: 1000, outputTokens: 500, costUsd: 0.02, durationMs: 30000 },
  error: '', startUpload: () => {}, dismiss: vi.fn(),
}

const errorUpload: UploadState = {
  status: 'error', fileName: 'bad.pdf', elapsed: 5, estimatedMs: null,
  usage: null, error: 'Something broke', startUpload: () => {}, dismiss: vi.fn(),
}

describe('StatusBar', () => {
  it('renders nothing when idle', () => {
    const { container } = render(<StatusBar upload={idleUpload} />)
    expect(container.querySelector('.status-bar')).not.toBeInTheDocument()
  })

  it('shows filename and progress bar during upload', () => {
    const { container } = render(<StatusBar upload={activeUpload} />)
    expect(screen.getByText(/my-synth\.pdf/i)).toBeInTheDocument()
    expect(container.querySelector('.progress-bar')).toBeInTheDocument()
  })

  it('shows elapsed time during upload', () => {
    render(<StatusBar upload={activeUpload} />)
    expect(screen.getByText(/12s/)).toBeInTheDocument()
  })

  it('shows completion with cost when done', () => {
    render(<StatusBar upload={doneUpload} />)
    expect(screen.getByText(/complete/i)).toBeInTheDocument()
    expect(screen.getByText(/\$0\.02/)).toBeInTheDocument()
  })

  it('shows dismiss button when done', () => {
    render(<StatusBar upload={doneUpload} />)
    fireEvent.click(screen.getByRole('button', { name: /dismiss/i }))
    expect(doneUpload.dismiss).toHaveBeenCalled()
  })

  it('shows error message', () => {
    render(<StatusBar upload={errorUpload} />)
    expect(screen.getByText(/something broke/i)).toBeInTheDocument()
  })

  it('shows dismiss button on error', () => {
    render(<StatusBar upload={errorUpload} />)
    fireEvent.click(screen.getByRole('button', { name: /dismiss/i }))
    expect(errorUpload.dismiss).toHaveBeenCalled()
  })
})
