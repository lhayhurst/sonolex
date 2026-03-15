import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ManualsPage } from './ManualsPage'

// Mock AppShell context
vi.mock('../components/layout/AppShell', () => ({
  useUpload: () => ({
    status: 'idle', fileName: '', elapsed: 0, estimatedMs: null,
    usage: null, error: '', startUpload: vi.fn(), dismiss: vi.fn(),
  }),
  useManualCallback: () => ({ register: vi.fn(), unregister: vi.fn() }),
}))

describe('ManualsPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('shows upload area', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    render(
      <MemoryRouter>
        <ManualsPage />
      </MemoryRouter>
    )

    expect(screen.getByText(/drop a pdf/i)).toBeInTheDocument()
  })

  it('loads and displays manuals from API', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([
        { id: 'm1', title: 'Fireface Manual', content: 'text', sourceFileName: 'fireface.pdf' },
        { id: 'm2', title: 'Artemis Manual', content: 'text', sourceFileName: 'artemis.pdf' },
      ]),
    })

    render(
      <MemoryRouter>
        <ManualsPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Fireface Manual')).toBeInTheDocument()
      expect(screen.getByText('Artemis Manual')).toBeInTheDocument()
    })
  })

  it('shows Open PDF link when manual has pdfPath', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([
        { id: 'm1', title: 'Fireface Manual', content: 'text', sourceFileName: 'fireface.pdf', pdfPath: '/api/manuals/m1/pdf' },
      ]),
    })

    render(
      <MemoryRouter>
        <ManualsPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      const link = screen.getByRole('link', { name: /open pdf/i })
      expect(link).toHaveAttribute('href', '/api/manuals/m1/pdf')
    })
  })

  it('hides summary by default and shows it on toggle', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([
        { id: 'm1', title: 'Monolit Manual', summary: 'A versatile 8-slider MIDI controller.', content: 'text' },
      ]),
    })

    render(
      <MemoryRouter>
        <ManualsPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Monolit Manual')).toBeInTheDocument()
    })

    expect(screen.queryByText(/versatile 8-slider/i)).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /show description/i }))
    expect(screen.getByText(/versatile 8-slider/i)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /hide description/i }))
    expect(screen.queryByText(/versatile 8-slider/i)).not.toBeInTheDocument()
  })

  it('deletes a manual when delete button clicked', async () => {
    const mockFetch = vi.fn()
    mockFetch.mockImplementation((url: string, opts?: any) => {
      if (url === '/api/manuals' && !opts) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
            { id: 'm1', title: 'Manual 1', content: 'text' },
          ]),
        })
      }
      if (url === '/api/manuals/m1' && opts?.method === 'DELETE') {
        return Promise.resolve({ ok: true, status: 204 })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })
    global.fetch = mockFetch

    render(
      <MemoryRouter>
        <ManualsPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Manual 1')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: /delete/i }))

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/manuals/m1', expect.objectContaining({ method: 'DELETE' }))
    })
  })

  it('shows empty state when no manuals exist', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    render(
      <MemoryRouter>
        <ManualsPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText(/no manuals yet/i)).toBeInTheDocument()
    })
  })
})
