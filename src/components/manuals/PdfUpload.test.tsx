import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { PdfUpload } from './PdfUpload'

describe('PdfUpload', () => {
  it('renders a file input for PDFs', () => {
    render(<PdfUpload onUploaded={() => {}} />)
    const input = screen.getByLabelText(/upload/i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('accept', '.pdf')
  })

  it('renders a drop zone with instructions', () => {
    render(<PdfUpload onUploaded={() => {}} />)
    expect(screen.getByText(/drop a pdf/i)).toBeInTheDocument()
  })

  it('shows filename and converting status when file is selected', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      new Promise(() => {}) // never resolves
    )

    render(<PdfUpload onUploaded={() => {}} />)
    const input = screen.getByLabelText(/upload/i)
    const file = new File(['fake pdf'], 'my-synth-manual.pdf', { type: 'application/pdf' })
    fireEvent.change(input, { target: { files: [file] } })

    await waitFor(() => {
      expect(screen.getByText(/my-synth-manual\.pdf/i)).toBeInTheDocument()
      expect(screen.getByText(/converting/i)).toBeInTheDocument()
    })
  })

  it('shows a progress bar during conversion', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      new Promise(() => {})
    )

    const { container } = render(<PdfUpload onUploaded={() => {}} />)
    const input = screen.getByLabelText(/upload/i)
    const file = new File(['fake pdf'], 'test.pdf', { type: 'application/pdf' })
    fireEvent.change(input, { target: { files: [file] } })

    await waitFor(() => {
      expect(container.querySelector('.progress-bar')).toBeInTheDocument()
    })
  })

  it('calls onUploaded with manual data on success', async () => {
    const mockManual = { id: 'm1', title: 'Test Manual', content: 'text' }
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockManual),
    })

    const onUploaded = vi.fn()
    render(<PdfUpload onUploaded={onUploaded} />)
    const input = screen.getByLabelText(/upload/i)
    const file = new File(['fake pdf'], 'test.pdf', { type: 'application/pdf' })
    fireEvent.change(input, { target: { files: [file] } })

    await waitFor(() => {
      expect(onUploaded).toHaveBeenCalledWith(mockManual)
    })
  })

  it('shows usage report after successful upload', async () => {
    const mockManual = {
      id: 'm1',
      title: 'Test Manual',
      content: 'text',
      usage: { inputTokens: 1500, outputTokens: 400, costUsd: 0.02, durationMs: 12000 },
    }
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockManual),
    })

    render(<PdfUpload onUploaded={() => {}} />)
    const input = screen.getByLabelText(/upload/i)
    const file = new File(['fake pdf'], 'test.pdf', { type: 'application/pdf' })
    fireEvent.change(input, { target: { files: [file] } })

    await waitFor(() => {
      expect(screen.getByText(/\$0\.02/)).toBeInTheDocument()
      expect(screen.getByText(/1,500/)).toBeInTheDocument()
    })
  })

  it('shows error message on upload failure', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ error: 'Claude API not configured' }),
    })

    render(<PdfUpload onUploaded={() => {}} />)
    const input = screen.getByLabelText(/upload/i)
    const file = new File(['fake pdf'], 'test.pdf', { type: 'application/pdf' })
    fireEvent.change(input, { target: { files: [file] } })

    await waitFor(() => {
      expect(screen.getByText(/claude api not configured/i)).toBeInTheDocument()
    })
  })
})
