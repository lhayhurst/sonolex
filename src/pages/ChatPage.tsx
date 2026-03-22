import { useState, useEffect, useCallback, useRef, memo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  imageUrl?: string
}

const remarkPlugins = [remarkGfm]

const ChatMessageItem = memo(function ChatMessageItem({ msg }: { msg: ChatMessage }) {
  return (
    <div className={`chat-message chat-message-${msg.role}`}>
      <div className="chat-message-content">
        {msg.imageUrl && (
          <img src={msg.imageUrl} alt="Pasted image" className="chat-image" />
        )}
        {msg.role === 'assistant'
          ? <Markdown remarkPlugins={remarkPlugins}>{msg.content}</Markdown>
          : msg.content}
      </div>
    </div>
  )
})

const ChatMessageList = memo(function ChatMessageList({
  messages,
  sending,
}: {
  messages: ChatMessage[]
  sending: boolean
}) {
  return (
    <>
      {messages.length === 0 && (
        <p className="chat-empty">Ask about your gear, connections, or studio setup.</p>
      )}
      {messages.map((msg, i) => (
        <ChatMessageItem key={i} msg={msg} />
      ))}
      {sending && (
        <div className="chat-message chat-message-assistant">
          <div className="chat-message-content chat-typing">Thinking...</div>
        </div>
      )}
    </>
  )
})

interface PendingImage {
  file: File
  previewUrl: string
}

export function ChatPage() {
  const { sessionId } = useParams<{ sessionId: string }>()
  const navigate = useNavigate()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [pendingImage, setPendingImage] = useState<PendingImage | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // If no sessionId, create a new session and redirect
  useEffect(() => {
    if (!sessionId) {
      fetch('/api/chat/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      })
        .then(res => res.json())
        .then(data => navigate(`/chat/${data.id}`, { replace: true }))
        .catch(() => {})
    }
  }, [sessionId, navigate])

  const loadHistory = useCallback(async () => {
    if (!sessionId) return
    try {
      const res = await fetch(`/api/chat/sessions/${sessionId}/history`)
      if (res.ok) {
        const data = await res.json()
        setMessages(data)
      }
    } catch {
      // Ignore
    }
  }, [sessionId])

  useEffect(() => {
    setMessages([])
    loadHistory()
  }, [loadHistory])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView?.({ behavior: 'smooth' })
  }, [messages])

  // Clean up preview URL on unmount or change
  useEffect(() => {
    return () => {
      if (pendingImage) URL.revokeObjectURL(pendingImage.previewUrl)
    }
  }, [pendingImage])

  async function uploadImage(file: File): Promise<{ path: string; url: string } | null> {
    const formData = new FormData()
    formData.append('image', file)
    try {
      const res = await fetch('/api/chat/images', { method: 'POST', body: formData })
      if (res.ok) return await res.json()
    } catch {
      // Ignore
    }
    return null
  }

  async function handleSend() {
    if ((!input.trim() && !pendingImage) || sending || !sessionId) return

    const userMessage = input.trim() || (pendingImage ? 'What is this image?' : '')
    const currentImage = pendingImage
    setInput('')
    setPendingImage(null)
    setSending(true)
    if (textareaRef.current) textareaRef.current.style.height = 'auto'

    // Upload image first if present
    let imagePath: string | undefined
    let imageUrl: string | undefined
    if (currentImage) {
      const uploaded = await uploadImage(currentImage.file)
      if (uploaded) {
        imagePath = uploaded.path
        imageUrl = uploaded.url
      }
      URL.revokeObjectURL(currentImage.previewUrl)
    }

    setMessages(prev => [...prev, { role: 'user', content: userMessage, imageUrl }])

    try {
      const res = await fetch(`/api/chat/sessions/${sessionId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, imagePath }),
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

  function autoGrow() {
    const el = textareaRef.current
    if (el) {
      el.style.height = 'auto'
      el.style.height = `${el.scrollHeight}px`
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    const items = e.clipboardData.items
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        e.preventDefault()
        const file = item.getAsFile()
        if (file) {
          setPendingImage({
            file,
            previewUrl: URL.createObjectURL(file),
          })
        }
        return
      }
    }
  }

  function removePendingImage() {
    if (pendingImage) {
      URL.revokeObjectURL(pendingImage.previewUrl)
      setPendingImage(null)
    }
  }

  if (!sessionId) return null

  return (
    <div className="chat-page">
      <div className="chat-messages">
        <ChatMessageList messages={messages} sending={sending} />
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-bar">
        {pendingImage && (
          <div className="chat-image-preview">
            <img src={pendingImage.previewUrl} alt="To send" />
            <button className="chat-image-remove" onClick={removePendingImage} aria-label="Remove image">×</button>
          </div>
        )}
        <div className="chat-input-row">
          <textarea
            ref={textareaRef}
            className="chat-input"
            value={input}
            onChange={e => { setInput(e.target.value); autoGrow() }}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            placeholder={pendingImage ? 'Add a message about this image...' : 'Ask about your gear...'}
            rows={1}
          />
          <button
            className="chat-send"
            onClick={handleSend}
            disabled={(!input.trim() && !pendingImage) || sending}
            aria-label="Send"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
