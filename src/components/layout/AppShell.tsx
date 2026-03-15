import { useState, createContext, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { useTheme } from '../../hooks/useTheme'
import { useUploadState, type UploadState } from '../../hooks/useUpload'
import type { Manual } from '../../types/index'

const UploadContext = createContext<UploadState | null>(null)

export function useUpload(): UploadState {
  const ctx = useContext(UploadContext)
  if (!ctx) throw new Error('useUpload must be used within AppShell')
  return ctx
}

// Context for notifying ManualsPage of new manuals
type ManualCallback = (manual: Manual) => void
const ManualCallbackContext = createContext<{ register: (cb: ManualCallback) => void; unregister: (cb: ManualCallback) => void }>({
  register: () => {},
  unregister: () => {},
})

export function useManualCallback() {
  return useContext(ManualCallbackContext)
}

export function AppShell() {
  const { theme, setTheme } = useTheme()
  const [collapsed, setCollapsed] = useState(false)
  const [listeners] = useState<Set<ManualCallback>>(() => new Set())

  const upload = useUploadState((manual) => {
    listeners.forEach(cb => cb(manual))
  })

  const callbackCtx = {
    register: (cb: ManualCallback) => { listeners.add(cb) },
    unregister: (cb: ManualCallback) => { listeners.delete(cb) },
  }

  return (
    <UploadContext.Provider value={upload}>
      <ManualCallbackContext.Provider value={callbackCtx}>
        <div className="app-shell">
          <Sidebar
            collapsed={collapsed}
            onToggleCollapse={() => setCollapsed(c => !c)}
            theme={theme}
            onThemeChange={setTheme}
            upload={upload}
          />
          <main className="app-content">
            <Outlet />
          </main>
        </div>
      </ManualCallbackContext.Provider>
    </UploadContext.Provider>
  )
}
