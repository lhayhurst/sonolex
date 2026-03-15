import { useState, useEffect } from 'react'

export const THEMES = ['clean', 'warm', 'daw'] as const
export type ThemeName = typeof THEMES[number]

const STORAGE_KEY = 'sonolex-theme'

function isValidTheme(value: string): value is ThemeName {
  return THEMES.includes(value as ThemeName)
}

export interface ThemeStorage {
  get(): string | null
  set(value: string): void
  remove(): void
}

function createLocalStorage(): ThemeStorage {
  try {
    // Test if we have a working Web Storage API (not Node's built-in localStorage)
    const storage = typeof window !== 'undefined' ? window.localStorage : undefined
    if (storage && typeof storage.getItem === 'function') {
      const testKey = '__sonolex_test__'
      storage.setItem(testKey, 'test')
      storage.removeItem(testKey)
      return {
        get: () => storage.getItem(STORAGE_KEY),
        set: (v: string) => storage.setItem(STORAGE_KEY, v),
        remove: () => storage.removeItem(STORAGE_KEY),
      }
    }
  } catch {
    // Fall through to in-memory
  }
  // Fallback: in-memory storage
  const map = new Map<string, string>()
  return {
    get: () => map.get(STORAGE_KEY) ?? null,
    set: (v: string) => map.set(STORAGE_KEY, v),
    remove: () => map.delete(STORAGE_KEY),
  }
}

function loadTheme(storage: ThemeStorage): ThemeName {
  const stored = storage.get()
  if (stored && isValidTheme(stored)) return stored
  return 'clean'
}

export function useTheme(storage: ThemeStorage = createLocalStorage()) {
  const [theme, setThemeState] = useState<ThemeName>(() => loadTheme(storage))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    storage.set(theme)
  }, [theme, storage])

  function setTheme(next: ThemeName) {
    setThemeState(next)
  }

  return { theme, setTheme }
}
