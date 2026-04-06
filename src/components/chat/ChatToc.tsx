import { useState, useEffect, useMemo } from 'react'
import { buildChatToc, type ChatTocEntry } from '../../utils/topic-extractor'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatTocProps {
  messages: ChatMessage[]
  deviceNames: string[]
  collapsed: boolean
  onToggle: () => void
}

export function ChatToc({ messages, deviceNames, collapsed, onToggle }: ChatTocProps) {
  const entries = useMemo(() => buildChatToc(messages, deviceNames), [messages, deviceNames])
  const [activeIndex, setActiveIndex] = useState<number>(-1)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (observerEntries) => {
        for (const entry of observerEntries) {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-msg-index') ?? '-1', 10)
            if (idx >= 0) setActiveIndex(idx)
          }
        }
      },
      { rootMargin: '-60px 0px -60% 0px' }
    )

    // Observe all user message elements
    for (const tocEntry of entries) {
      const el = document.querySelector(`[data-msg-index="${tocEntry.messageIndex}"]`)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [entries])

  function handleClick(messageIndex: number) {
    const el = document.querySelector(`[data-msg-index="${messageIndex}"]`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Find which TOC entry is active
  const activeEntryIndex = entries.findIndex((e, i) => {
    const next = entries[i + 1]
    return activeIndex >= e.messageIndex && (!next || activeIndex < next.messageIndex)
  })

  // Don't show TOC for short conversations
  const userMessageCount = messages.filter(m => m.role === 'user').length
  if (userMessageCount < 4) return null

  return (
    <>
      <button
        className="chat-toc-toggle"
        onClick={onToggle}
        aria-label={collapsed ? 'Show conversation map' : 'Hide conversation map'}
      >
        {collapsed ? '◂' : '▸'}
      </button>
      {!collapsed && (
        <nav className="chat-toc">
          <div className="chat-toc-title">Conversation</div>
          <ul>
            {entries.map((entry, i) => (
              <li key={entry.messageIndex}>
                <button
                  className={`chat-toc-entry${activeEntryIndex === i ? ' active' : ''}`}
                  onClick={() => handleClick(entry.messageIndex)}
                >
                  <span className="chat-toc-label">{entry.label}</span>
                  {entry.messageCount > 1 && (
                    <span className="chat-toc-count">{entry.messageCount}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
