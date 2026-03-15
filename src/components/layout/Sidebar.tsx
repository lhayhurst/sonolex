import { NavLink } from 'react-router-dom'
import { THEMES, type ThemeName } from '../../hooks/useTheme'

interface SidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
  theme: ThemeName
  onThemeChange: (theme: ThemeName) => void
}

const navItems = [
  { to: '/manuals', label: 'Manuals', icon: '☰' },
  { to: '/chat', label: 'Chat', icon: '◈' },
  { to: '/studio', label: 'Studio', icon: '◇' },
  { to: '/about', label: 'About', icon: '?' },
]

export function Sidebar({ collapsed, onToggleCollapse, theme, onThemeChange }: SidebarProps) {
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
