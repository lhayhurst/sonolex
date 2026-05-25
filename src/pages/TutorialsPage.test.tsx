import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { TutorialsPage } from './TutorialsPage'
import type { Tutorial } from '../types/index'

function makeTutorial(overrides: Partial<Tutorial> = {}): Tutorial {
  return {
    id: 't1',
    title: 'OXI Saga Tutorial',
    summary: 'Walk through Saga.',
    content: '## Step 1\n\nOpen the SEQ menu.',
    status: 'draft',
    createdAt: '2026-05-25T00:00:00.000Z',
    updatedAt: '2026-05-25T00:00:00.000Z',
    ...overrides,
  }
}

describe('TutorialsPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('shows an empty-state message when there are no tutorials', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve([]) })

    render(
      <MemoryRouter>
        <TutorialsPage />
      </MemoryRouter>,
    )

    await waitFor(() => {
      expect(screen.getByText(/no tutorials yet/i)).toBeInTheDocument()
    })
  })

  it('renders cards for each loaded tutorial with title, status, and summary', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([
        makeTutorial({ id: 'a', title: 'A Tutorial', summary: 'Summary A' }),
        makeTutorial({ id: 'b', title: 'B Tutorial', summary: 'Summary B', status: 'published' }),
      ]),
    })

    render(
      <MemoryRouter>
        <TutorialsPage />
      </MemoryRouter>,
    )

    await waitFor(() => {
      expect(screen.getByText('A Tutorial')).toBeInTheDocument()
      expect(screen.getByText('B Tutorial')).toBeInTheDocument()
      expect(screen.getByText('Summary A')).toBeInTheDocument()
      expect(screen.getByText('Summary B')).toBeInTheDocument()
      // Status labels
      expect(screen.getByText('Draft')).toBeInTheDocument()
      expect(screen.getByText('Published')).toBeInTheDocument()
    })
  })

  it('opens an empty editor when clicking "+ New"', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve([]) })

    render(
      <MemoryRouter>
        <TutorialsPage />
      </MemoryRouter>,
    )

    await waitFor(() => screen.getByRole('button', { name: /\+ new/i }))
    fireEvent.click(screen.getByRole('button', { name: /\+ new/i }))

    expect(screen.getByRole('heading', { name: /new tutorial/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/^title$/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/one-line summary/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/markdown content/i)).toBeInTheDocument()
  })

  it('POSTs to /api/tutorials when saving a new tutorial', async () => {
    const calls: Array<{ url: string; opts?: RequestInit }> = []
    global.fetch = vi.fn().mockImplementation((url: string, opts?: RequestInit) => {
      calls.push({ url, opts })
      if (url === '/api/tutorials' && (!opts || opts.method !== 'POST')) {
        return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
      }
      if (url === '/api/tutorials' && opts?.method === 'POST') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(makeTutorial({ id: 'new-id', title: 'My Tutorial' })),
        })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    })

    render(
      <MemoryRouter>
        <TutorialsPage />
      </MemoryRouter>,
    )

    await waitFor(() => screen.getByRole('button', { name: /\+ new/i }))
    fireEvent.click(screen.getByRole('button', { name: /\+ new/i }))

    fireEvent.change(screen.getByPlaceholderText(/^title$/i), { target: { value: 'My Tutorial' } })
    fireEvent.change(screen.getByPlaceholderText(/one-line summary/i), { target: { value: 'A summary' } })
    fireEvent.change(screen.getByPlaceholderText(/markdown content/i), { target: { value: '## Hi' } })

    fireEvent.click(screen.getByRole('button', { name: /^save$/i }))

    await waitFor(() => {
      const postCall = calls.find(c => c.url === '/api/tutorials' && c.opts?.method === 'POST')
      expect(postCall).toBeDefined()
      const body = JSON.parse(postCall!.opts!.body as string)
      expect(body.title).toBe('My Tutorial')
      expect(body.summary).toBe('A summary')
      expect(body.content).toBe('## Hi')
    })
  })

  it('opens the detail view when a tutorial card is clicked', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([makeTutorial({ id: 'show', title: 'The Show', content: '## Heading\n\nHello.' })]),
    })

    render(
      <MemoryRouter>
        <TutorialsPage />
      </MemoryRouter>,
    )

    await waitFor(() => screen.getByText('The Show'))
    fireEvent.click(screen.getByText('The Show'))

    // Detail title + back button + edit/delete buttons
    expect(screen.getByText(/all tutorials/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^edit$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
  })

  it('DELETEs and returns to the list when Delete is clicked', async () => {
    let listings: Tutorial[] = [makeTutorial({ id: 'gone', title: 'Doomed' })]
    const calls: string[] = []
    global.fetch = vi.fn().mockImplementation((url: string, opts?: RequestInit) => {
      calls.push(`${opts?.method ?? 'GET'} ${url}`)
      if (url === '/api/tutorials' && (!opts || opts.method !== 'POST')) {
        return Promise.resolve({ ok: true, json: () => Promise.resolve(listings) })
      }
      if (url === '/api/tutorials/gone' && opts?.method === 'DELETE') {
        listings = []
        return Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    })

    render(
      <MemoryRouter>
        <TutorialsPage />
      </MemoryRouter>,
    )

    await waitFor(() => screen.getByText('Doomed'))
    fireEvent.click(screen.getByText('Doomed'))
    fireEvent.click(screen.getByRole('button', { name: /delete/i }))

    await waitFor(() => {
      expect(calls).toContain('DELETE /api/tutorials/gone')
      expect(screen.getByText(/no tutorials yet/i)).toBeInTheDocument()
    })
  })
})
