import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTheme, THEMES, type ThemeStorage } from './useTheme'

function createMockStorage(): ThemeStorage & { store: Map<string, string> } {
  const store = new Map<string, string>()
  return {
    store,
    get: () => store.get('sonolex-theme') ?? null,
    set: (v: string) => store.set('sonolex-theme', v),
    remove: () => store.delete('sonolex-theme'),
  }
}

describe('useTheme', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('data-theme')
  })

  it('defaults to clean theme', () => {
    const storage = createMockStorage()
    const { result } = renderHook(() => useTheme(storage))
    expect(result.current.theme).toBe('clean')
  })

  it('sets data-theme attribute on document element', () => {
    const storage = createMockStorage()
    renderHook(() => useTheme(storage))
    expect(document.documentElement.getAttribute('data-theme')).toBe('clean')
  })

  it('cycles through themes on setTheme', () => {
    const storage = createMockStorage()
    const { result } = renderHook(() => useTheme(storage))

    act(() => result.current.setTheme('warm'))
    expect(result.current.theme).toBe('warm')
    expect(document.documentElement.getAttribute('data-theme')).toBe('warm')

    act(() => result.current.setTheme('daw'))
    expect(result.current.theme).toBe('daw')
    expect(document.documentElement.getAttribute('data-theme')).toBe('daw')
  })

  it('persists theme choice to storage', () => {
    const storage = createMockStorage()
    const { result } = renderHook(() => useTheme(storage))
    act(() => result.current.setTheme('daw'))

    expect(storage.get()).toBe('daw')
  })

  it('restores theme from storage', () => {
    const storage = createMockStorage()
    storage.set('warm')
    const { result } = renderHook(() => useTheme(storage))
    expect(result.current.theme).toBe('warm')
  })

  it('falls back to clean for invalid stored value', () => {
    const storage = createMockStorage()
    storage.set('garbage')
    const { result } = renderHook(() => useTheme(storage))
    expect(result.current.theme).toBe('clean')
  })

  it('exposes all available themes', () => {
    expect(THEMES).toEqual(['clean', 'warm', 'daw'])
  })
})
