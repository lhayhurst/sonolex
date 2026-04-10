import { useState, useEffect, useCallback, useRef, memo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ChatToc } from '../components/chat/ChatToc'
import { parseNdjsonStream } from '../utils/ndjson-stream'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  thinking?: string
  imageUrl?: string
}

const remarkPlugins = [remarkGfm]

const ChatMessageItem = memo(function ChatMessageItem({ msg, index }: { msg: ChatMessage; index: number }) {
  return (
    <div
      className={`chat-message chat-message-${msg.role}`}
      data-msg-index={index}
    >
      <div className="chat-message-content">
        {msg.imageUrl && (
          <img src={msg.imageUrl} alt="Pasted image" className="chat-image" />
        )}
        {msg.role === 'assistant' && msg.thinking && (
          <details className="chat-thinking">
            <summary>Thinking</summary>
            <div className="chat-thinking-content">{msg.thinking}</div>
          </details>
        )}
        {msg.role === 'assistant'
          ? <Markdown remarkPlugins={remarkPlugins}>{msg.content}</Markdown>
          : msg.content}
      </div>
    </div>
  )
})

interface StreamingState {
  thinking: string
  text: string
}

const ChatMessageList = memo(function ChatMessageList({
  messages,
  sending,
  streaming,
}: {
  messages: ChatMessage[]
  sending: boolean
  streaming: StreamingState | null
}) {
  return (
    <>
      {messages.length === 0 && !sending && (
        <p className="chat-empty">Ask about your gear, connections, or studio setup.</p>
      )}
      {messages.map((msg, i) => (
        <ChatMessageItem key={i} msg={msg} index={i} />
      ))}
      {sending && (
        <div className="chat-message chat-message-assistant">
          <div className="chat-message-content">
            {streaming && streaming.thinking ? (
              <details className="chat-thinking" open>
                <summary>Thinking</summary>
                <div className="chat-thinking-content">{streaming.thinking}</div>
              </details>
            ) : !streaming?.text ? (
              <span className="chat-typing">Thinking...</span>
            ) : null}
            {streaming?.text && (
              <Markdown remarkPlugins={remarkPlugins}>{streaming.text}</Markdown>
            )}
          </div>
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
  const [streaming, setStreaming] = useState<StreamingState | null>(null)
  const [pendingImage, setPendingImage] = useState<PendingImage | null>(null)
  const [deviceNames, setDeviceNames] = useState<string[]>([])
  const [tocCollapsed, setTocCollapsed] = useState(false)
  const [deepThinking, setDeepThinking] = useState(() => localStorage.getItem('sonolex-deep-thinking') !== 'false')
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

  // Load device names for TOC topic extraction
  useEffect(() => {
    fetch('/api/manuals')
      .then(res => res.ok ? res.json() : [])
      .then((manuals: { title: string }[]) => setDeviceNames(manuals.map(m => m.title)))
      .catch(() => {})
  }, [])

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
    setStreaming({ thinking: '', text: '' })

    try {
      const res = await fetch(`/api/chat/sessions/${sessionId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, imagePath, deepThinking }),
      })

      if (res.ok && res.body) {
        let thinking = ''
        let text = ''

        for await (const event of parseNdjsonStream(res.body)) {
          if (event.type === 'thinking') {
            thinking += event.text as string
            setStreaming({ thinking, text })
          } else if (event.type === 'text') {
            text += event.text as string
            setStreaming({ thinking, text })
          } else if (event.type === 'done') {
            const finalThinking = thinking || (event.thinking as string) || ''
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: event.text as string,
              thinking: finalThinking || undefined,
            }])
          }
        }
      } else if (!res.ok) {
        const data = await res.json()
        setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${data.error}` }])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: Failed to connect to server' }])
    } finally {
      setSending(false)
      setStreaming(null)
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
      <div className="chat-body">
        <div className="chat-main">
          <div className="chat-messages">
            <ChatMessageList messages={messages} sending={sending} streaming={streaming} />
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
              <label className="chat-deep-thinking-toggle">
                <input
                  type="checkbox"
                  checked={deepThinking}
                  onChange={e => {
                    setDeepThinking(e.target.checked)
                    localStorage.setItem('sonolex-deep-thinking', String(e.target.checked))
                  }}
                />
                Deep thinking
              </label>
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
        <ChatToc
          messages={messages}
          deviceNames={deviceNames}
          collapsed={tocCollapsed}
          onToggle={() => setTocCollapsed(c => !c)}
        />
      </div>
    </div>
  )
}
