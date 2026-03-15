import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

function renderApp(initialRoute = '/') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>
  )
}

describe('App', () => {
  it('renders the app shell with navigation', () => {
    renderApp()
    expect(screen.getByText('sonolex')).toBeInTheDocument()
  })

  it('shows navigation links', () => {
    renderApp()
    expect(screen.getByRole('link', { name: /studio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /manuals/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /chat/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument()
  })

  it('renders studio page on /studio', () => {
    renderApp('/studio')
    expect(screen.getByRole('heading', { name: /studio/i })).toBeInTheDocument()
  })

  it('renders manuals page on /manuals', () => {
    renderApp('/manuals')
    expect(screen.getByRole('heading', { name: /manuals/i })).toBeInTheDocument()
  })

  it('renders chat page on /chat', () => {
    renderApp('/chat')
    expect(screen.getByRole('heading', { name: /chat/i })).toBeInTheDocument()
  })

  it('renders settings page on /settings', () => {
    renderApp('/settings')
    expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()
  })

  it('redirects / to /studio', () => {
    renderApp('/')
    expect(screen.getByRole('heading', { name: /studio/i })).toBeInTheDocument()
  })
})
