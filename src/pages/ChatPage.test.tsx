import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ChatPage } from './ChatPage'

describe('ChatPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders chat input and send button', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    render(
      <MemoryRouter>
        <ChatPage />
      </MemoryRouter>
    )

    expect(screen.getByPlaceholderText(/ask about your gear/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('loads and displays chat history', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([
        { role: 'user', content: 'How do I connect my Artemis?' },
        { role: 'assistant', content: 'The Artemis connects via MIDI...' },
      ]),
    })

    render(
      <MemoryRouter>
        <ChatPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText(/how do i connect my artemis/i)).toBeInTheDocument()
      expect(screen.getByText(/artemis connects via midi/i)).toBeInTheDocument()
    })
  })

  it('sends a message and displays the response', async () => {
    global.fetch = vi.fn().mockImplementation((url: string, opts?: any) => {
      if (url === '/api/chat/history') {
        return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
      }
      if (url === '/api/chat' && opts?.method === 'POST') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ text: 'Here is the MIDI CC map...', usage: { costUsd: 0.01 } }),
        })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })

    render(
      <MemoryRouter>
        <ChatPage />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/ask about your gear/i)).toBeInTheDocument()
    })

    const input = screen.getByPlaceholderText(/ask about your gear/i)
    fireEvent.change(input, { target: { value: 'What are the MIDI CCs for Clean?' } })
    fireEvent.click(screen.getByRole('button', { name: /send/i }))

    // User message appears immediately (optimistic)
    expect(screen.getByText(/what are the midi ccs for clean/i)).toBeInTheDocument()

    // Assistant response appears after fetch resolves
    await waitFor(() => {
      expect(screen.getByText(/here is the midi cc map/i)).toBeInTheDocument()
    })
  })

  it('disables send button when input is empty', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    render(
      <MemoryRouter>
        <ChatPage />
      </MemoryRouter>
    )

    expect(screen.getByRole('button', { name: /send/i })).toBeDisabled()
  })

  it('shows clear chat button', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    render(
      <MemoryRouter>
        <ChatPage />
      </MemoryRouter>
    )

    expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument()
  })
})
