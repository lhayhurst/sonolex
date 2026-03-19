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
    if (url === '/api/studio-doc') {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ content: null }),
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

    it('shows navigation links (Manuals, Studio) and New Chat button', async () => {
      renderApp()
      await waitFor(() => {
        expect(screen.getByRole('link', { name: /manuals/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /studio/i })).toBeInTheDocument()
        expect(screen.getByText(/new chat/i)).toBeInTheDocument()
      })
    })

    it('does not show settings link', async () => {
      renderApp()
      await waitFor(() => {
        expect(screen.getByText('sonolex')).toBeInTheDocument()
      })
      expect(screen.queryByRole('link', { name: /settings/i })).not.toBeInTheDocument()
    })

    it('redirects / to /manuals', async () => {
      renderApp('/')
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /manuals/i })).toBeInTheDocument()
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
