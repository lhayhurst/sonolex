import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './Sidebar'

function renderSidebar(initialRoute = '/studio') {
  // Mock fetch for session list
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve([]),
  })

  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Routes>
        <Route path="*" element={
          <Sidebar
            collapsed={false}
            onToggleCollapse={() => {}}
            theme="clean"
            onThemeChange={() => {}}
          />
        } />
      </Routes>
    </MemoryRouter>
  )
}

describe('Sidebar', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the app name', () => {
    renderSidebar()
    expect(screen.getByText('sonolex')).toBeInTheDocument()
  })

  it('renders navigation links for Manuals, Studio, About', () => {
    renderSidebar()
    expect(screen.getByRole('link', { name: /manuals/i })).toHaveAttribute('href', '/manuals')
    expect(screen.getByRole('link', { name: /studio/i })).toHaveAttribute('href', '/studio')
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about')
  })

  it('renders New Chat button instead of Chat nav link', () => {
    renderSidebar()
    expect(screen.getByText(/new chat/i)).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /^chat$/i })).not.toBeInTheDocument()
  })

  it('highlights the active link', () => {
    renderSidebar('/manuals')
    const manualsLink = screen.getByRole('link', { name: /manuals/i })
    expect(manualsLink.className).toContain('active')
  })

  it('renders collapse toggle button', () => {
    renderSidebar()
    expect(screen.getByRole('button', { name: /collapse/i })).toBeInTheDocument()
  })

  it('calls onToggleCollapse when toggle clicked', () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    const onToggle = vi.fn()
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={
            <Sidebar collapsed={false} onToggleCollapse={onToggle} theme="clean" onThemeChange={() => {}} />
          } />
        </Routes>
      </MemoryRouter>
    )
    fireEvent.click(screen.getByRole('button', { name: /collapse/i }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('adds collapsed class when collapsed', () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    const { container } = render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={
            <Sidebar collapsed={true} onToggleCollapse={() => {}} theme="clean" onThemeChange={() => {}} />
          } />
        </Routes>
      </MemoryRouter>
    )
    expect(container.querySelector('.sidebar.collapsed')).toBeInTheDocument()
  })

  it('renders theme buttons', () => {
    renderSidebar()
    expect(screen.getByRole('button', { name: /clean/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /warm/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /daw/i })).toBeInTheDocument()
  })

  it('displays chat sessions when loaded', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([
        { id: 's1', name: 'Studio routing', createdAt: '2026-03-19T00:00:00Z', lastMessageAt: null },
        { id: 's2', name: 'MIDI setup', createdAt: '2026-03-19T01:00:00Z', lastMessageAt: null },
      ]),
    })

    render(
      <MemoryRouter initialEntries={['/studio']}>
        <Routes>
          <Route path="*" element={
            <Sidebar collapsed={false} onToggleCollapse={() => {}} theme="clean" onThemeChange={() => {}} />
          } />
        </Routes>
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Studio routing')).toBeInTheDocument()
      expect(screen.getByText('MIDI setup')).toBeInTheDocument()
    })
  })

  it('creates a new session when New Chat is clicked', async () => {
    global.fetch = vi.fn().mockImplementation((url: string, opts?: RequestInit) => {
      if (url === '/api/chat/sessions' && opts?.method === 'POST') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ id: 'new-id', name: 'New Chat' }),
        })
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    })

    render(
      <MemoryRouter initialEntries={['/studio']}>
        <Routes>
          <Route path="*" element={
            <Sidebar collapsed={false} onToggleCollapse={() => {}} theme="clean" onThemeChange={() => {}} />
          } />
        </Routes>
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText(/new chat/i))

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/chat/sessions',
        expect.objectContaining({ method: 'POST' }),
      )
    })
  })
})
