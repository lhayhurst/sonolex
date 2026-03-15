import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { SetupScreen } from './SetupScreen'

describe('SetupScreen', () => {
  it('renders welcome message', () => {
    render(<SetupScreen onRetry={() => {}} />)
    expect(screen.getByText(/welcome to sonolex/i)).toBeInTheDocument()
  })

  it('shows install instructions', () => {
    render(<SetupScreen onRetry={() => {}} />)
    expect(screen.getByText(/npm install -g/i)).toBeInTheDocument()
  })

  it('mentions no separate billing', () => {
    render(<SetupScreen onRetry={() => {}} />)
    expect(screen.getByText(/no separate api billing/i)).toBeInTheDocument()
  })

  it('has a retry button that calls onRetry', () => {
    const onRetry = vi.fn()
    render(<SetupScreen onRetry={onRetry} />)
    fireEvent.click(screen.getByRole('button', { name: /retry/i }))
    expect(onRetry).toHaveBeenCalledTimes(1)
  })
})
