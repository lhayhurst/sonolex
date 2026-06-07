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

  it('sends a message and streams NDJSON response with thinking', async () => {
    function makeNdjsonResponse(events: Record<string, unknown>[]) {
      const encoder = new TextEncoder()
      const text = events.map(e => JSON.stringify(e)).join('\n') + '\n'
      const body = new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(text))
          controller.close()
        },
      })
      return { ok: true, body, json: () => Promise.reject('should not be called') }
    }

    global.fetch = vi.fn().mockImplementation((url: string, opts?: RequestInit) => {
      if (url.includes('/history')) {
        return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
      }
      if (url.includes('/messages') && opts?.method === 'POST') {
        return Promise.resolve(makeNdjsonResponse([
          { type: 'thinking', text: 'Considering MIDI CCs...' },
          { type: 'text', text: 'Here is the MIDI CC map...' },
          { type: 'done', text: 'Here is the MIDI CC map...', usage: { costUsd: 0.01 } },
        ]))
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

    // Verify the thinking block renders as a collapsible on the completed message
    await waitFor(() => {
      expect(screen.getByText('Thinking')).toBeInTheDocument()  // the <summary>
    })
    expect(screen.getByText('Considering MIDI CCs...')).toBeInTheDocument()
  })

  it('renders a tool-use chip for each Claude tool invocation during streaming', async () => {
    function makeNdjsonResponse(events: Record<string, unknown>[]) {
      const encoder = new TextEncoder()
      const text = events.map(e => JSON.stringify(e)).join('\n') + '\n'
      const body = new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(text))
          controller.close()
        },
      })
      return { ok: true, body, json: () => Promise.reject('should not be called') }
    }

    global.fetch = vi.fn().mockImplementation((url: string, opts?: RequestInit) => {
      if (url.includes('/history')) {
        return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
      }
      if (url.includes('/messages') && opts?.method === 'POST') {
        return Promise.resolve(makeNdjsonResponse([
          { type: 'tool_use', toolName: 'Grep' },
          { type: 'tool_use', toolName: 'Read' },
          { type: 'text', text: 'Found it.' },
          { type: 'done', text: 'Found it.', usage: { costUsd: 0.01 } },
        ]))
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })

    renderWithSession()

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/ask about your gear/i)).toBeInTheDocument()
    })

    const input = screen.getByPlaceholderText(/ask about your gear/i)
    fireEvent.change(input, { target: { value: 'search for MIDI' } })
    fireEvent.click(screen.getByRole('button', { name: /send/i }))

    await waitFor(() => {
      expect(screen.getByText(/found it/i)).toBeInTheDocument()
    })

    expect(screen.getByText(/Grep/)).toBeInTheDocument()
    expect(screen.getByText(/Read/)).toBeInTheDocument()
  })

  it('shows thinking from done event when no incremental thinking arrived', async () => {
    function makeNdjsonResponse(events: Record<string, unknown>[]) {
      const encoder = new TextEncoder()
      const text = events.map(e => JSON.stringify(e)).join('\n') + '\n'
      const body = new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(text))
          controller.close()
        },
      })
      return { ok: true, body, json: () => Promise.reject('should not be called') }
    }

    global.fetch = vi.fn().mockImplementation((url: string, opts?: RequestInit) => {
      if (url.includes('/history')) {
        return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
      }
      if (url.includes('/messages') && opts?.method === 'POST') {
        return Promise.resolve(makeNdjsonResponse([
          // No incremental thinking events — only in the done event
          { type: 'text', text: 'Here is the answer.' },
          { type: 'done', text: 'Here is the answer.', thinking: 'I considered the question carefully.', usage: {} },
        ]))
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })

    renderWithSession()

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/ask about your gear/i)).toBeInTheDocument()
    })

    const input = screen.getByPlaceholderText(/ask about your gear/i)
    fireEvent.change(input, { target: { value: 'Tell me about MIDI' } })
    fireEvent.click(screen.getByRole('button', { name: /send/i }))

    await waitFor(() => {
      expect(screen.getByText(/here is the answer/i)).toBeInTheDocument()
    })

    // Thinking should show from the done event's thinking field
    expect(screen.getByText('Thinking')).toBeInTheDocument()
    expect(screen.getByText('I considered the question carefully.')).toBeInTheDocument()
  })

  it('renders deep thinking toggle defaulting to on', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    renderWithSession()

    await waitFor(() => {
      const toggle = screen.getByRole('checkbox', { name: /deep thinking/i })
      expect(toggle).toBeInTheDocument()
      expect(toggle).toBeChecked()
    })
  })

  it('sends deepThinking true when toggle is on', async () => {
    function makeNdjsonResponse(events: Record<string, unknown>[]) {
      const encoder = new TextEncoder()
      const text = events.map(e => JSON.stringify(e)).join('\n') + '\n'
      const body = new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(text))
          controller.close()
        },
      })
      return { ok: true, body, json: () => Promise.reject('nope') }
    }

    global.fetch = vi.fn().mockImplementation((url: string, opts?: RequestInit) => {
      if (url.includes('/history')) {
        return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
      }
      if (url.includes('/messages') && opts?.method === 'POST') {
        return Promise.resolve(makeNdjsonResponse([
          { type: 'done', text: 'Response.', usage: {} },
        ]))
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })

    renderWithSession()

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/ask about your gear/i)).toBeInTheDocument()
    })

    const input = screen.getByPlaceholderText(/ask about your gear/i)
    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.click(screen.getByRole('button', { name: /send/i }))

    await waitFor(() => {
      const postCall = vi.mocked(global.fetch).mock.calls.find(
        c => typeof c[0] === 'string' && c[0].includes('/messages')
      )
      const body = JSON.parse(postCall?.[1]?.body as string)
      expect(body.deepThinking).toBe(true)
    })
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

  it('shows "Generate tutorial draft" only when the session has messages', async () => {
    global.fetch = vi.fn().mockImplementation((url: string) => {
      if (url === '/api/chat/sessions/test-session-1/history') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
            { role: 'user', content: 'walk me through saga' },
            { role: 'assistant', content: 'Step 1: open the SEQ menu.' },
          ]),
        })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })

    renderWithSession()

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /generate tutorial draft/i })).toBeInTheDocument()
    })
  })

  it('POSTs to /api/tutorials/draft when "Generate tutorial draft" is clicked', async () => {
    const calls: Array<{ url: string; opts?: RequestInit }> = []
    global.fetch = vi.fn().mockImplementation((url: string, opts?: RequestInit) => {
      calls.push({ url, opts })
      if (url === '/api/chat/sessions/test-session-1/history') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
            { role: 'user', content: 'walk me through saga' },
            { role: 'assistant', content: 'Step 1.' },
          ]),
        })
      }
      if (url === '/api/tutorials/draft' && opts?.method === 'POST') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ id: 'new-tut', title: 'T' }),
        })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })

    renderWithSession()

    const button = await screen.findByRole('button', { name: /generate tutorial draft/i })
    button.click()

    await waitFor(() => {
      const postCall = calls.find(c => c.url === '/api/tutorials/draft' && c.opts?.method === 'POST')
      expect(postCall).toBeDefined()
      const body = JSON.parse(postCall!.opts!.body as string)
      expect(body.chatSessionId).toBe('test-session-1')
    })
  })

  it('does not auto-create a session when no sessionId is provided', async () => {
    global.fetch = vi.fn().mockImplementation(() => {
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

    // Wait for any effects to settle
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    // Verify no POST to create a session was made
    const postCalls = (global.fetch as ReturnType<typeof vi.fn>).mock.calls.filter(
      ([url, opts]: [string, RequestInit?]) => url === '/api/chat/sessions' && opts?.method === 'POST'
    )
    expect(postCalls).toHaveLength(0)
  })

  describe('scope picker', () => {
    function setupFetch(opts?: {
      manuals?: Array<{ id: string; title: string }>
      session?: { manualIdsInScope?: string[]; userOverrideOfManuals?: boolean }
      onPatch?: (body: unknown) => void
    }) {
      const manuals = opts?.manuals ?? [
        { id: 'oxi-one', title: 'OXI ONE MKII' },
        { id: 'monolit', title: 'Monolit 2.0' },
      ]
      const session = opts?.session ?? { manualIdsInScope: [], userOverrideOfManuals: false }
      global.fetch = vi.fn().mockImplementation((url: string, fetchOpts?: RequestInit) => {
        if (url === '/api/manuals') {
          return Promise.resolve({ ok: true, json: () => Promise.resolve(manuals) })
        }
        if (url === '/api/chat/sessions/test-session-1' && (!fetchOpts || fetchOpts.method === 'GET' || fetchOpts.method === undefined)) {
          return Promise.resolve({ ok: true, json: () => Promise.resolve(session) })
        }
        if (url === '/api/chat/sessions/test-session-1' && fetchOpts?.method === 'PATCH') {
          opts?.onPatch?.(JSON.parse(fetchOpts.body as string))
          return Promise.resolve({ ok: true, json: () => Promise.resolve({ ok: true }) })
        }
        return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
      })
    }

    it('shows "Auto" by default when scope is empty and not overridden', async () => {
      setupFetch()
      renderWithSession()

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /auto/i })).toBeInTheDocument()
      })
    })

    it('shows the manual title when a single manual is in scope', async () => {
      setupFetch({ session: { manualIdsInScope: ['oxi-one'], userOverrideOfManuals: false } })
      renderWithSession()

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /OXI ONE MKII/i })).toBeInTheDocument()
      })
    })

    it('opens a list of all manuals when clicked', async () => {
      setupFetch()
      renderWithSession()

      const trigger = await screen.findByRole('button', { name: /auto/i })
      fireEvent.click(trigger)

      await waitFor(() => {
        expect(screen.getByText('OXI ONE MKII')).toBeInTheDocument()
        expect(screen.getByText('Monolit 2.0')).toBeInTheDocument()
      })
    })

    it('PATCHes scope with override=true when a manual is checked', async () => {
      let patched: unknown = null
      setupFetch({ onPatch: body => { patched = body } })
      renderWithSession()

      const trigger = await screen.findByRole('button', { name: /auto/i })
      fireEvent.click(trigger)

      const checkbox = await screen.findByLabelText('OXI ONE MKII')
      fireEvent.click(checkbox)

      await waitFor(() => {
        expect(patched).toEqual({
          manualIdsInScope: ['oxi-one'],
          userOverrideOfManuals: true,
        })
      })
    })

    it('Reset to auto PATCHes empty scope with override=false', async () => {
      let patched: unknown = null
      setupFetch({
        session: { manualIdsInScope: ['oxi-one'], userOverrideOfManuals: true },
        onPatch: body => { patched = body },
      })
      renderWithSession()

      const trigger = await screen.findByRole('button', { name: /OXI ONE MKII/i })
      fireEvent.click(trigger)

      const reset = await screen.findByRole('button', { name: /reset to auto/i })
      fireEvent.click(reset)

      await waitFor(() => {
        expect(patched).toEqual({
          manualIdsInScope: [],
          userOverrideOfManuals: false,
        })
      })
    })
  })
})
