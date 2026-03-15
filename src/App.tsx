import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { SetupScreen } from './components/setup/SetupScreen'
import { StudioPage } from './pages/StudioPage'
import { ManualsPage } from './pages/ManualsPage'
import { ChatPage } from './pages/ChatPage'
import { SettingsPage } from './pages/SettingsPage'

type AppState = 'loading' | 'setup' | 'ready'

function App() {
  const [state, setState] = useState<AppState>('loading')

  const checkStatus = useCallback(() => {
    setState('loading')
    fetch('/api/config/status')
      .then(res => res.json())
      .then(data => {
        setState(data.claudeAvailable ? 'ready' : 'setup')
      })
      .catch(() => {
        setState('setup')
      })
  }, [])

  useEffect(() => {
    checkStatus()
  }, [checkStatus])

  if (state === 'loading') return null

  if (state === 'setup') {
    return <SetupScreen onRetry={checkStatus} />
  }

  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/studio" replace />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/manuals" element={<ManualsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App
