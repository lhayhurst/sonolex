import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AboutPage } from './AboutPage'

describe('AboutPage', () => {
  it('renders the welcome heading', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: /welcome to sonolex/i })).toBeInTheDocument()
  })

  it('shows the three workflow steps as headings', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: /1\. upload manuals/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /2\. chat/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /3\. studio/i })).toBeInTheDocument()
  })

  it('renders as markdown with proper formatting', () => {
    const { container } = render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    // Should have code blocks rendered
    expect(container.querySelector('code')).toBeInTheDocument()
  })
})
