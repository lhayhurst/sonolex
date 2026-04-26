import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { SetupScreen } from './components/setup/SetupScreen'
import { WrongBackendScreen } from './components/setup/WrongBackendScreen'
import { ManualsPage } from './pages/ManualsPage'
import { ChatPage } from './pages/ChatPage'
import { CheatSheetsPage } from './pages/CheatSheetsPage'
import { StudioPage } from './pages/StudioPage'
import { AboutPage } from './pages/AboutPage'

const EXPECTED_APP = 'sonolex'

type AppState = 'loading' | 'setup' | 'ready' | 'wrong-backend'

function App() {
  const [state, setState] = useState<AppState>('loading')
  const [foundApp, setFoundApp] = useState<string>('')

  const checkStatus = useCallback(async () => {
    setState('loading')
    try {
      const idRes = await fetch('/api/identity')
      const id = await idRes.json()
      if (id.app !== EXPECTED_APP) {
        setFoundApp(id.app ?? 'unknown')
        setState('wrong-backend')
        return
      }
    } catch {
      // Identity endpoint missing or unreachable. Fall through to status check
      // so single-fork forks predating the identity endpoint still boot.
    }

    try {
      const res = await fetch('/api/config/status')
      const data = await res.json()
      setState(data.claudeAvailable ? 'ready' : 'setup')
    } catch {
      setState('setup')
    }
  }, [])

  useEffect(() => {
    checkStatus()
  }, [checkStatus])

  if (state === 'loading') return null

  if (state === 'wrong-backend') {
    return <WrongBackendScreen expected={EXPECTED_APP} found={foundApp} onRetry={checkStatus} />
  }

  if (state === 'setup') {
    return <SetupScreen onRetry={checkStatus} />
  }

  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/manuals" replace />} />
        <Route path="/manuals" element={<ManualsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:sessionId" element={<ChatPage />} />
        <Route path="/cheatsheets" element={<CheatSheetsPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
