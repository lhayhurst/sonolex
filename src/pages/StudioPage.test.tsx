import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { StudioPage } from './StudioPage'

describe('StudioPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('shows empty state when no studio doc exists', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ content: null }),
    })

    render(
      <MemoryRouter>
        <StudioPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText(/no studio doc yet/i)).toBeInTheDocument()
    })
  })

  it('renders studio doc as markdown', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ content: '# My Studio\n\nGreat gear here.' }),
    })

    render(
      <MemoryRouter>
        <StudioPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /my studio/i })).toBeInTheDocument()
      expect(screen.getByText(/great gear here/i)).toBeInTheDocument()
    })
  })

  it('shows import button when no doc exists', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ content: null }),
    })

    render(
      <MemoryRouter>
        <StudioPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /import/i })).toBeInTheDocument()
    })
  })

  it('shows edit button when doc exists', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ content: '# Studio' }),
    })

    render(
      <MemoryRouter>
        <StudioPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument()
    })
  })

  it('switches to edit mode and saves', async () => {
    const mockFetch = vi.fn().mockImplementation((url: string, opts?: any) => {
      if (url === '/api/studio-doc' && opts?.method === 'PUT') {
        return Promise.resolve({ ok: true, json: () => Promise.resolve({ ok: true }) })
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ content: '# Studio' }),
      })
    })
    global.fetch = mockFetch

    render(
      <MemoryRouter>
        <StudioPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: /edit/i }))

    // Should show a textarea with the content
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveValue('# Studio')

    // Edit and save
    fireEvent.change(textarea, { target: { value: '# Updated Studio' } })
    fireEvent.click(screen.getByRole('button', { name: /save/i }))

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/studio-doc', expect.objectContaining({
        method: 'PUT',
      }))
    })
  })
})
