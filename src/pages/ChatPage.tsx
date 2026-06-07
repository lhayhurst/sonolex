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
  toolCalls?: string[]
}

function ToolCallChips({ calls }: { calls: string[] }) {
  if (calls.length === 0) return null
  return (
    <div className="chat-tool-calls">
      {calls.map((name, i) => (
        <span key={i} className="chat-tool-call">🔍 {name}</span>
      ))}
    </div>
  )
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
        {msg.role === 'assistant' && msg.toolCalls && msg.toolCalls.length > 0 && (
          <ToolCallChips calls={msg.toolCalls} />
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
  toolCalls: string[]
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
            {streaming && streaming.toolCalls.length > 0 && (
              <ToolCallChips calls={streaming.toolCalls} />
            )}
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
  const [allManuals, setAllManuals] = useState<Array<{ id: string; title: string }>>([])
  const [scopeManualIds, setScopeManualIds] = useState<string[]>([])
  const [userOverride, setUserOverride] = useState(false)
  const [scopeOpen, setScopeOpen] = useState(false)
  const [tocCollapsed, setTocCollapsed] = useState(false)
  const [deepThinking, setDeepThinking] = useState(() => localStorage.getItem('sonolex-deep-thinking') !== 'false')
  const [generatingTutorial, setGeneratingTutorial] = useState(false)
  const [tutorialError, setTutorialError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  async function createSession(): Promise<string | null> {
    try {
      const res = await fetch('/api/chat/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      })
      const data = await res.json()
      navigate(`/chat/${data.id}`, { replace: true })
      return data.id
    } catch {
      return null
    }
  }

  // Load manuals (titles for TOC, ids+titles for scope picker)
  useEffect(() => {
    fetch('/api/manuals')
      .then(res => res.ok ? res.json() : [])
      .then((manuals: Array<{ id: string; title: string }>) => {
        setDeviceNames(manuals.map(m => m.title))
        setAllManuals(manuals.map(m => ({ id: m.id, title: m.title })))
      })
      .catch(() => {})
  }, [])

  const loadSessionInfo = useCallback(async () => {
    if (!sessionId) return
    try {
      const res = await fetch(`/api/chat/sessions/${sessionId}`)
      if (res.ok) {
        const info = (await res.json()) as {
          manualIdsInScope?: string[]
          userOverrideOfManuals?: boolean
        }
        setScopeManualIds(info.manualIdsInScope ?? [])
        setUserOverride(Boolean(info.userOverrideOfManuals))
      }
    } catch {
      // Ignore
    }
  }, [sessionId])

  useEffect(() => {
    loadSessionInfo()
  }, [loadSessionInfo])

  async function persistScope(nextIds: string[], nextOverride: boolean) {
    if (!sessionId) return
    setScopeManualIds(nextIds)
    setUserOverride(nextOverride)
    try {
      await fetch(`/api/chat/sessions/${sessionId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          manualIdsInScope: nextIds,
          userOverrideOfManuals: nextOverride,
        }),
      })
    } catch {
      // Best-effort; UI already reflects the change optimistically
    }
  }

  function toggleScopeManual(id: string) {
    const next = scopeManualIds.includes(id)
      ? scopeManualIds.filter(x => x !== id)
      : [...scopeManualIds, id]
    persistScope(next, true)
  }

  function resetScopeToAuto() {
    persistScope([], false)
  }

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
    if ((!input.trim() && !pendingImage) || sending) return

    let activeSessionId: string | undefined = sessionId
    if (!activeSessionId) {
      activeSessionId = (await createSession()) ?? undefined
      if (!activeSessionId) return
    }

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
    setStreaming({ thinking: '', text: '', toolCalls: [] })

    try {
      const res = await fetch(`/api/chat/sessions/${activeSessionId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, imagePath, deepThinking }),
      })

      if (res.ok && res.body) {
        let thinking = ''
        let text = ''
        const toolCalls: string[] = []

        for await (const event of parseNdjsonStream(res.body)) {
          if (event.type === 'thinking') {
            thinking += event.text as string
            setStreaming({ thinking, text, toolCalls: [...toolCalls] })
          } else if (event.type === 'text') {
            text += event.text as string
            setStreaming({ thinking, text, toolCalls: [...toolCalls] })
          } else if (event.type === 'tool_use') {
            toolCalls.push(event.toolName as string)
            setStreaming({ thinking, text, toolCalls: [...toolCalls] })
          } else if (event.type === 'error') {
            setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${event.error}` }])
          } else if (event.type === 'done') {
            const finalThinking = thinking || (event.thinking as string) || ''
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: event.text as string,
              thinking: finalThinking || undefined,
              toolCalls: toolCalls.length > 0 ? [...toolCalls] : undefined,
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
      // Server may have auto-extended scope from device mentions this turn
      loadSessionInfo()
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

  async function handleGenerateTutorial() {
    if (!sessionId) return
    setGeneratingTutorial(true)
    setTutorialError(null)
    try {
      const res = await fetch('/api/tutorials/draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatSessionId: sessionId }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || `Generation failed (${res.status})`)
      }
      navigate('/tutorials')
    } catch (err) {
      setTutorialError(err instanceof Error ? err.message : 'Tutorial generation failed')
    } finally {
      setGeneratingTutorial(false)
    }
  }

  const canGenerateTutorial = Boolean(sessionId) && messages.length > 0 && !sending && !streaming

  return (
    <div className="chat-page">
      <div className="chat-body">
        <div className="chat-main">
          {sessionId && messages.length > 0 && (
            <div className="chat-toolbar">
              <button
                className="cs-btn chat-toolbar-btn"
                onClick={handleGenerateTutorial}
                disabled={!canGenerateTutorial || generatingTutorial}
                title="Distill this chat into a publishable tutorial draft"
              >
                {generatingTutorial ? 'Generating tutorial...' : '✎ Generate tutorial draft'}
              </button>
              {tutorialError && <span className="chat-toolbar-error">{tutorialError}</span>}
            </div>
          )}
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
              <div className="chat-scope-picker">
                <button
                  type="button"
                  className="chat-scope-trigger"
                  onClick={() => setScopeOpen(o => !o)}
                  title={userOverride ? 'Manuals are pinned to your selection' : 'Manuals auto-track from chat'}
                >
                  <span className={`chat-scope-mode${userOverride ? ' pinned' : ''}`}>
                    {userOverride ? '📌' : '🔎'}
                  </span>
                  <span className="chat-scope-label">
                    {scopeManualIds.length === 0
                      ? userOverride
                        ? 'No manuals'
                        : 'Auto'
                      : scopeManualIds.length === 1
                        ? allManuals.find(m => m.id === scopeManualIds[0])?.title ?? '1 manual'
                        : `${scopeManualIds.length} manuals`}
                  </span>
                  <span aria-hidden>▾</span>
                </button>
                {scopeOpen && (
                  <div className="chat-scope-menu" role="dialog" aria-label="Manuals in scope">
                    <div className="chat-scope-menu-head">
                      <strong>Manuals in scope</strong>
                      <button
                        type="button"
                        className="chat-scope-reset"
                        onClick={() => { resetScopeToAuto(); setScopeOpen(false) }}
                        disabled={!userOverride && scopeManualIds.length === 0}
                      >
                        Reset to auto
                      </button>
                    </div>
                    {allManuals.length === 0 ? (
                      <p className="chat-scope-empty">No manuals uploaded yet.</p>
                    ) : (
                      <ul className="chat-scope-list">
                        {allManuals.map(m => {
                          const checked = scopeManualIds.includes(m.id)
                          return (
                            <li key={m.id}>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleScopeManual(m.id)}
                                />
                                <span>{m.title}</span>
                              </label>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                )}
              </div>
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
