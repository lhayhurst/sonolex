interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatTocEntry {
  label: string
  messageIndex: number
  messageCount: number
  userDevice?: string
}

const ACTION_KEYWORDS = [
  'connect', 'map', 'route', 'configure', 'troubleshoot', 'learn',
  'set up', 'setup', 'install', 'update', 'add', 'remove', 'change',
  'customize', 'assign', 'create', 'save', 'export', 'import',
]

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'can', 'shall', 'to', 'of', 'in', 'for',
  'on', 'with', 'at', 'by', 'from', 'as', 'into', 'about', 'between',
  'through', 'during', 'before', 'after', 'and', 'but', 'or', 'not',
  'no', 'if', 'then', 'so', 'than', 'too', 'very', 'just', 'how',
  'what', 'when', 'where', 'why', 'who', 'which', 'that', 'this',
  'these', 'those', 'my', 'your', 'its', 'our', 'their', 'i', 'me',
  'you', 'he', 'she', 'it', 'we', 'they', 'want', 'need', 'like',
  'know', 'think', 'tell', 'get', 'got', 'let', 'now', 'also',
  'question', 'please', 'thanks', 'hey', 'hi', 'hello', 'okay',
])

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function findDeviceName(message: string, deviceNames: string[]): string | null {
  const lower = message.toLowerCase()
  // Sort by length descending so "Fireface UCX II" matches before "Fire"
  const sorted = [...deviceNames].sort((a, b) => b.length - a.length)
  for (const name of sorted) {
    if (lower.includes(name.toLowerCase())) return name
  }
  return null
}

function findActionKeyword(message: string): string | null {
  const lower = message.toLowerCase()
  for (const kw of ACTION_KEYWORDS) {
    // Match as word prefix (e.g. "learn" matches "learning")
    const regex = new RegExp(`\\b${kw}\\w*\\b`, 'i')
    if (regex.test(lower)) {
      return kw === 'setup' ? 'Set up' : capitalize(kw)
    }
  }
  return null
}

function extractSignificantWords(message: string, maxWords: number = 3): string {
  const words = message
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w.toLowerCase()))

  if (words.length === 0) return ''
  return words.slice(0, maxWords).map(capitalize).join(' ')
}

export function extractTopic(message: string, deviceNames: string[]): string {
  if (!message.trim()) return ''

  const device = findDeviceName(message, deviceNames)
  const action = findActionKeyword(message)

  // Device + action
  if (device && action) {
    return `${action} ${device}`
  }

  // Device only
  if (device) {
    const significant = extractSignificantWords(
      message.toLowerCase().replace(device.toLowerCase(), ''),
      2,
    )
    return significant ? `${significant} ${device}` : device
  }

  // Action + nouns
  if (action) {
    const nouns = extractSignificantWords(
      message.replace(new RegExp(`\\b${action}\\b`, 'i'), ''),
      2,
    )
    return nouns ? `${action} ${nouns}` : action
  }

  // Significant words
  const words = extractSignificantWords(message, 4)
  if (words) return words

  // Final fallback: truncate
  const trimmed = message.trim()
  if (trimmed.length <= 30) return capitalize(trimmed)
  return trimmed.slice(0, 30).trim() + '...'
}

function stripMarkdownFormatting(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')   // **bold**
    .replace(/__(.+?)__/g, '$1')         // __bold__
    .replace(/\*(.+?)\*/g, '$1')         // *italic*
    .replace(/_(.+?)_/g, '$1')           // _italic_
    .replace(/`(.+?)`/g, '$1')           // `code`
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')  // [links](url)
}

export function extractAssistantLabel(response: string): string {
  if (!response.trim()) return ''

  const lines = response.split('\n')

  // Look for first markdown heading
  for (const line of lines) {
    const headingMatch = line.match(/^#{1,3}\s+(.+)/)
    if (headingMatch) {
      return stripMarkdownFormatting(headingMatch[1].trim())
    }
  }

  // Fall back to first non-empty line as a sentence
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    const clean = stripMarkdownFormatting(trimmed)
    // Extract first sentence (up to first period followed by space or end)
    const sentenceMatch = clean.match(/^(.+?)\.\s/)
    const label = sentenceMatch ? sentenceMatch[1] : clean.replace(/\.$/, '')

    if (label.length <= 60) return label
    return label.slice(0, 60).trim() + '...'
  }

  return ''
}

export function buildChatToc(messages: ChatMessage[], deviceNames: string[]): ChatTocEntry[] {
  const entries: ChatTocEntry[] = []

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i]
    if (msg.role !== 'user') continue

    // Group by device from the user message
    const device = findDeviceName(msg.content, deviceNames)
    const prev = entries[entries.length - 1]

    if (prev && device && prev.userDevice?.toLowerCase() === device.toLowerCase()) {
      prev.messageCount++
      continue
    }

    // Label from assistant response (next message), fall back to user topic
    const assistantMsg = messages[i + 1]
    const assistantLabel = assistantMsg?.role === 'assistant'
      ? extractAssistantLabel(assistantMsg.content)
      : ''
    const label = assistantLabel || extractTopic(msg.content, deviceNames)
    if (!label) continue

    // Point to the assistant message if it exists, otherwise the user message
    const messageIndex = assistantMsg?.role === 'assistant' ? i + 1 : i

    entries.push({ label, messageIndex, messageCount: 1, userDevice: device ?? undefined })
  }

  return entries
}
