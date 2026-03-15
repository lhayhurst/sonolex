import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Sidebar } from './Sidebar'

function renderSidebar(initialRoute = '/studio') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Sidebar
        collapsed={false}
        onToggleCollapse={() => {}}
        theme="clean"
        onThemeChange={() => {}}
      />
    </MemoryRouter>
  )
}

describe('Sidebar', () => {
  it('renders the app name', () => {
    renderSidebar()
    expect(screen.getByText('sonolex')).toBeInTheDocument()
  })

  it('renders navigation links with icons', () => {
    renderSidebar()
    expect(screen.getByRole('link', { name: /studio/i })).toHaveAttribute('href', '/studio')
    expect(screen.getByRole('link', { name: /manuals/i })).toHaveAttribute('href', '/manuals')
    expect(screen.getByRole('link', { name: /chat/i })).toHaveAttribute('href', '/chat')
    expect(screen.getByRole('link', { name: /settings/i })).toHaveAttribute('href', '/settings')
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
    const onToggle = vi.fn()
    render(
      <MemoryRouter>
        <Sidebar collapsed={false} onToggleCollapse={onToggle} theme="clean" onThemeChange={() => {}} />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByRole('button', { name: /collapse/i }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('adds collapsed class when collapsed', () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar collapsed={true} onToggleCollapse={() => {}} theme="clean" onThemeChange={() => {}} />
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

  it('marks active theme button', () => {
    render(
      <MemoryRouter>
        <Sidebar collapsed={false} onToggleCollapse={() => {}} theme="daw" onThemeChange={() => {}} />
      </MemoryRouter>
    )
    expect(screen.getByRole('button', { name: /daw/i }).className).toContain('active')
  })

  it('calls onThemeChange when theme button clicked', () => {
    const onThemeChange = vi.fn()
    render(
      <MemoryRouter>
        <Sidebar collapsed={false} onToggleCollapse={() => {}} theme="clean" onThemeChange={onThemeChange} />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByRole('button', { name: /warm/i }))
    expect(onThemeChange).toHaveBeenCalledWith('warm')
  })
})
