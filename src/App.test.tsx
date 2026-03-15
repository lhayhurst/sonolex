import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

function renderApp(initialRoute = '/') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>
  )
}

function mockClaudeAvailable() {
  global.fetch = vi.fn().mockImplementation((url: string) => {
    if (url === '/api/config/status') {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ claudeAvailable: true }),
      })
    }
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    })
  })
}

function mockClaudeUnavailable() {
  global.fetch = vi.fn().mockImplementation((url: string) => {
    if (url === '/api/config/status') {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ claudeAvailable: false }),
      })
    }
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    })
  })
}

describe('App', () => {
  describe('when Claude CLI is available', () => {
    beforeEach(() => mockClaudeAvailable())

    it('renders the app shell with navigation', async () => {
      renderApp()
      await waitFor(() => {
        expect(screen.getByText('sonolex')).toBeInTheDocument()
      })
    })

    it('shows navigation links', async () => {
      renderApp()
      await waitFor(() => {
        expect(screen.getByRole('link', { name: /studio/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /manuals/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /chat/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument()
      })
    })

    it('renders studio page on /studio', async () => {
      renderApp('/studio')
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /studio/i })).toBeInTheDocument()
      })
    })

    it('redirects / to /studio', async () => {
      renderApp('/')
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /studio/i })).toBeInTheDocument()
      })
    })
  })

  describe('when Claude CLI is not available', () => {
    beforeEach(() => mockClaudeUnavailable())

    it('shows the setup screen', async () => {
      renderApp()
      await waitFor(() => {
        expect(screen.getByText(/welcome to sonolex/i)).toBeInTheDocument()
      })
    })

    it('does not show the sidebar', async () => {
      renderApp()
      await waitFor(() => {
        expect(screen.getByText(/welcome to sonolex/i)).toBeInTheDocument()
      })
      expect(screen.queryByText('sonolex')).not.toBeInTheDocument()
    })
  })
})
