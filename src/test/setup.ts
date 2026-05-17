import '@testing-library/jest-dom'

// happy-dom 20 + vitest 4 doesn't expose a working `localStorage` global,
// so `localStorage.getItem(...)` throws in code under test (e.g. the
// ChatPage deep-thinking toggle). Install a tiny in-memory polyfill.
if (typeof globalThis.localStorage?.getItem !== 'function') {
  const store = new Map<string, string>()
  const ls = {
    getItem: (k: string) => store.has(k) ? store.get(k)! : null,
    setItem: (k: string, v: string) => { store.set(k, String(v)) },
    removeItem: (k: string) => { store.delete(k) },
    clear: () => { store.clear() },
    key: (i: number) => Array.from(store.keys())[i] ?? null,
    get length() { return store.size },
  }
  Object.defineProperty(globalThis, 'localStorage', { value: ls, writable: true, configurable: true })
}
