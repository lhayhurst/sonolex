import { useState, useEffect, useCallback, useRef } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { THEMES, type ThemeName } from '../../hooks/useTheme'
import type { ChatSessionInfo } from '../../types/index'

interface SidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
  theme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

const navItems = [
  { to: '/manuals', label: 'Manuals', icon: '☰' },
  { to: '/studio', label: 'Studio', icon: '◇' },
  { to: '/about', label: 'About', icon: '?' },
]

export function Sidebar({ collapsed, onToggleCollapse, theme, onThemeChange }: SidebarProps) {
  const navigate = useNavigate()
  const { sessionId: activeSessionId } = useParams<{ sessionId: string }>()
  const [sessions, setSessions] = useState<ChatSessionInfo[]>([])
  const [menuSessionId, setMenuSessionId] = useState<string | null>(null)
  const [renamingId, setRenamingId] = useState<string | null>(null)
  const [renameValue, setRenameValue] = useState('')
  const renameInputRef = useRef<HTMLInputElement>(null)

  const loadSessions = useCallback(async () => {
    try {
      const res = await fetch('/api/chat/sessions')
      if (res.ok) {
        const data = await res.json()
        setSessions(data)
      }
    } catch {
      // Ignore
    }
  }, [])

  useEffect(() => {
    loadSessions()
  }, [loadSessions, activeSessionId])

  useEffect(() => {
    if (renamingId && renameInputRef.current) {
      renameInputRef.current.focus()
      renameInputRef.current.select()
    }
  }, [renamingId])

  async function handleNewChat() {
    try {
      const res = await fetch('/api/chat/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      })
      if (res.ok) {
        const data = await res.json()
        await loadSessions()
        navigate(`/chat/${data.id}`)
      }
    } catch {
      // Ignore
    }
  }

  async function handleDelete(id: string) {
    setMenuSessionId(null)
    await fetch(`/api/chat/sessions/${id}`, { method: 'DELETE' })
    await loadSessions()
    if (activeSessionId === id) {
      navigate('/chat')
    }
  }

  function handleStartRename(id: string, currentName: string) {
    setMenuSessionId(null)
    setRenamingId(id)
    setRenameValue(currentName)
  }

  async function handleRenameSubmit(id: string) {
    if (renameValue.trim()) {
      await fetch(`/api/chat/sessions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: renameValue.trim() }),
      })
      await loadSessions()
    }
    setRenamingId(null)
  }

  return (
    <nav className={`sidebar${collapsed ? ' collapsed' : ''}`}>
      <div className="sidebar-header">
        <span className="sidebar-brand">sonolex</span>
        <button
          className="sidebar-toggle"
          onClick={onToggleCollapse}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? '▸' : '◂'}
        </button>
      </div>

      {!collapsed && (
        <button className="new-chat-btn" onClick={handleNewChat}>
          <span className="nav-icon">+</span>
          <span className="nav-label">New Chat</span>
        </button>
      )}
      {collapsed && (
        <button className="new-chat-btn collapsed" onClick={handleNewChat} aria-label="New Chat">
          <span className="nav-icon">+</span>
        </button>
      )}

      <ul className="sidebar-nav">
        {navItems.map(item => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {!collapsed && sessions.length > 0 && (
        <div className="session-list">
          <div className="session-list-header">Chats</div>
          {sessions.map(s => (
            <div
              key={s.id}
              className={`session-item${activeSessionId === s.id ? ' active' : ''}`}
            >
              {renamingId === s.id ? (
                <input
                  ref={renameInputRef}
                  className="session-rename-input"
                  value={renameValue}
                  onChange={e => setRenameValue(e.target.value)}
                  onBlur={() => handleRenameSubmit(s.id)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') handleRenameSubmit(s.id)
                    if (e.key === 'Escape') setRenamingId(null)
                  }}
                />
              ) : (
                <>
                  <button
                    className="session-item-name"
                    onClick={() => navigate(`/chat/${s.id}`)}
                  >
                    {s.name}
                  </button>
                  <div className="session-item-actions">
                    <button
                      className="session-menu-btn"
                      onClick={e => {
                        e.stopPropagation()
                        setMenuSessionId(menuSessionId === s.id ? null : s.id)
                      }}
                      aria-label="Session menu"
                    >
                      ···
                    </button>
                    {menuSessionId === s.id && (
                      <div className="session-menu">
                        <button onClick={() => handleStartRename(s.id, s.name)}>Rename</button>
                        <button onClick={() => handleDelete(s.id)}>Delete</button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="theme-switcher">
        <div className="theme-buttons">
          {THEMES.map(t => (
            <button
              key={t}
              className={`theme-btn${theme === t ? ' active' : ''}`}
              onClick={() => onThemeChange(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
