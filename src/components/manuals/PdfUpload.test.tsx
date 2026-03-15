import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { PdfUpload } from './PdfUpload'
import type { UploadState } from '../../hooks/useUpload'

// Mock the useUpload hook via the AppShell module
const mockUpload: UploadState = {
  status: 'idle', fileName: '', elapsed: 0, estimatedMs: null,
  usage: null, error: '', startUpload: vi.fn(), dismiss: vi.fn(),
}

vi.mock('../layout/AppShell', () => ({
  useUpload: () => mockUpload,
  useManualCallback: () => ({ register: () => {}, unregister: () => {} }),
}))

describe('PdfUpload', () => {
  it('renders a file input for PDFs', () => {
    render(<PdfUpload />)
    const input = screen.getByLabelText(/upload/i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('accept', '.pdf')
  })

  it('renders a drop zone with instructions', () => {
    render(<PdfUpload />)
    expect(screen.getByText(/drop a pdf/i)).toBeInTheDocument()
  })

  it('calls startUpload when file is selected', () => {
    render(<PdfUpload />)
    const input = screen.getByLabelText(/upload/i)
    const file = new File(['fake pdf'], 'test.pdf', { type: 'application/pdf' })
    fireEvent.change(input, { target: { files: [file] } })

    expect(mockUpload.startUpload).toHaveBeenCalledWith(file)
  })
})
