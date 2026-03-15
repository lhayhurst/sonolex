import { useState, useEffect, useCallback, useRef } from 'react'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const loadHistory = useCallback(async () => {
    try {
      const res = await fetch('/api/chat/history')
      if (res.ok) {
        const data = await res.json()
        setMessages(data)
      }
    } catch {
      // Ignore
    }
  }, [])

  useEffect(() => {
    loadHistory()
  }, [loadHistory])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView?.({ behavior: 'smooth' })
  }, [messages])

  async function handleSend() {
    if (!input.trim() || sending) return

    const userMessage = input.trim()
    setInput('')
    setSending(true)

    setMessages(prev => [...prev, { role: 'user', content: userMessage }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      })

      if (res.ok) {
        const data = await res.json()
        setMessages(prev => [...prev, { role: 'assistant', content: data.text }])
      } else {
        const data = await res.json()
        setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${data.error}` }])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: Failed to connect to server' }])
    } finally {
      setSending(false)
    }
  }

  async function handleClear() {
    await fetch('/api/chat/history', { method: 'DELETE' })
    setMessages([])
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chat-page">
      <div className="chat-header">
        <h1>Chat</h1>
        <button className="chat-clear" onClick={handleClear} aria-label="Clear chat">
          Clear
        </button>
      </div>

      <div className="chat-messages">
        {messages.length === 0 && (
          <p className="chat-empty">Ask about your gear, connections, or studio setup.</p>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message chat-message-${msg.role}`}>
            <div className="chat-message-content">{msg.content}</div>
          </div>
        ))}
        {sending && (
          <div className="chat-message chat-message-assistant">
            <div className="chat-message-content chat-typing">Thinking...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-bar">
        <textarea
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about your gear..."
          rows={1}
          disabled={sending}
        />
        <button
          className="chat-send"
          onClick={handleSend}
          disabled={!input.trim() || sending}
          aria-label="Send"
        >
          Send
        </button>
      </div>
    </div>
  )
}
