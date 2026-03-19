import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { ChatPage } from './ChatPage'

function renderWithSession(sessionId = 'test-session-1') {
  return render(
    <MemoryRouter initialEntries={[`/chat/${sessionId}`]}>
      <Routes>
        <Route path="/chat/:sessionId" element={<ChatPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('ChatPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders chat input and send button', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    renderWithSession()

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/ask about your gear/i)).toBeInTheDocument()
    })
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('loads and displays chat history for a session', async () => {
    global.fetch = vi.fn().mockImplementation((url: string) => {
      if (url === '/api/chat/sessions/test-session-1/history') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
            { role: 'user', content: 'How do I connect my Artemis?' },
            { role: 'assistant', content: 'The Artemis connects via MIDI...' },
          ]),
        })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })

    renderWithSession()

    await waitFor(() => {
      expect(screen.getByText(/how do i connect my artemis/i)).toBeInTheDocument()
      expect(screen.getByText(/artemis connects via midi/i)).toBeInTheDocument()
    })
  })

  it('sends a message to the session endpoint', async () => {
    global.fetch = vi.fn().mockImplementation((url: string, opts?: RequestInit) => {
      if (url.includes('/history')) {
        return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
      }
      if (url.includes('/messages') && opts?.method === 'POST') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ text: 'Here is the MIDI CC map...', usage: { costUsd: 0.01 } }),
        })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })

    renderWithSession()

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/ask about your gear/i)).toBeInTheDocument()
    })

    const input = screen.getByPlaceholderText(/ask about your gear/i)
    fireEvent.change(input, { target: { value: 'What are the MIDI CCs?' } })
    fireEvent.click(screen.getByRole('button', { name: /send/i }))

    expect(screen.getByText(/what are the midi ccs/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText(/here is the midi cc map/i)).toBeInTheDocument()
    })

    // Verify it hit the session-scoped endpoint
    const postCall = vi.mocked(global.fetch).mock.calls.find(
      c => typeof c[0] === 'string' && c[0].includes('/messages')
    )
    expect(postCall?.[0]).toBe('/api/chat/sessions/test-session-1/messages')
  })

  it('disables send button when input is empty', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    renderWithSession()

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /send/i })).toBeDisabled()
    })
  })

  it('creates a new session when no sessionId is provided', async () => {
    global.fetch = vi.fn().mockImplementation((url: string, opts?: RequestInit) => {
      if (url === '/api/chat/sessions' && opts?.method === 'POST') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ id: 'new-session-id', name: 'New Chat' }),
        })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })

    render(
      <MemoryRouter initialEntries={['/chat']}>
        <Routes>
          <Route path="/chat/:sessionId" element={<ChatPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/chat/sessions',
        expect.objectContaining({ method: 'POST' }),
      )
    })
  })
})
