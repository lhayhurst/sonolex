import { readFile, writeFile, unlink } from 'node:fs/promises'
import { join } from 'node:path'
import { runClaude, type ClaudeResult } from './claude-cli'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export class ChatSession {
  private readonly historyPath: string
  sessionId: string | undefined

  constructor(dataDir: string) {
    this.historyPath = join(dataDir, 'chat-history.json')
  }

  async getHistory(): Promise<ChatMessage[]> {
    try {
      const raw = await readFile(this.historyPath, 'utf-8')
      const data = JSON.parse(raw)
      this.sessionId = data.sessionId
      return data.messages as ChatMessage[]
    } catch {
      return []
    }
  }

  async send(message: string, systemPrompt: string): Promise<ClaudeResult> {
    const result = await runClaude(message, {
      systemPrompt: !this.sessionId ? systemPrompt : undefined,
      resumeSessionId: this.sessionId,
    })

    if (result.sessionId) {
      this.sessionId = result.sessionId
    }

    // Append to history
    const messages = await this.getHistory()
    messages.push({ role: 'user', content: message })
    messages.push({ role: 'assistant', content: result.text })
    await this.saveHistory(messages)

    return result
  }

  async clear(): Promise<void> {
    this.sessionId = undefined
    try {
      await unlink(this.historyPath)
    } catch {
      // File may not exist
    }
  }

  private async saveHistory(messages: ChatMessage[]): Promise<void> {
    await writeFile(
      this.historyPath,
      JSON.stringify({ sessionId: this.sessionId, messages }, null, 2),
      'utf-8',
    )
  }
}
