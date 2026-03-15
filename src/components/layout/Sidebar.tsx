import { NavLink } from 'react-router-dom'
import { THEMES, type ThemeName } from '../../hooks/useTheme'
import type { UploadState } from '../../hooks/useUpload'

interface SidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
  theme: ThemeName
  onThemeChange: (theme: ThemeName) => void
  upload: UploadState
}

const navItems = [
  { to: '/studio', label: 'Studio', icon: '◇' },
  { to: '/manuals', label: 'Manuals', icon: '☰' },
  { to: '/chat', label: 'Chat', icon: '◈' },
  { to: '/settings', label: 'Settings', icon: '⚙' },
]

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return m > 0 ? `${m}m ${s}s` : `${s}s`
}

function UploadIndicator({ upload }: { upload: UploadState }) {
  if (upload.status === 'idle') return null

  const pct = upload.estimatedMs && upload.estimatedMs > 0
    ? Math.min((upload.elapsed * 1000 / upload.estimatedMs) * 100, 90)
    : -1

  return (
    <div className="sidebar-upload">
      {upload.status === 'uploading' && (
        <>
          <p className="sidebar-upload-file">{upload.fileName}</p>
          <div className="progress-bar">
            <div
              className={`progress-bar-fill${pct < 0 ? ' indeterminate' : ''}`}
              style={pct >= 0 ? { width: `${pct}%` } : undefined}
            />
          </div>
          <p className="sidebar-upload-time">{formatTime(upload.elapsed)}</p>
        </>
      )}
      {upload.status === 'done' && (
        <div className="sidebar-upload-done">
          <p className="sidebar-upload-complete">Conversion complete</p>
          {upload.usage && (
            <p className="sidebar-upload-cost">${upload.usage.costUsd.toFixed(2)}</p>
          )}
          <button className="sidebar-upload-dismiss" onClick={upload.dismiss}>dismiss</button>
        </div>
      )}
      {upload.status === 'error' && (
        <div className="sidebar-upload-done">
          <p className="sidebar-upload-error">{upload.error}</p>
          <button className="sidebar-upload-dismiss" onClick={upload.dismiss}>dismiss</button>
        </div>
      )}
    </div>
  )
}

export function Sidebar({ collapsed, onToggleCollapse, theme, onThemeChange, upload }: SidebarProps) {
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

      {!collapsed && <UploadIndicator upload={upload} />}

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
