import { readFile, writeFile, unlink } from 'node:fs/promises'
import { runClaude, type ClaudeResult, type ClaudeOptions } from './claude-cli'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  imageUrl?: string
}

export class ChatSession {
  private readonly historyPath: string
  sessionId: string | undefined

  constructor(historyPath: string) {
    this.historyPath = historyPath
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

  async send(
    claudeMessage: string,
    systemPrompt: string,
    displayMessage?: string,
    extraOptions?: Partial<ClaudeOptions>,
    imageUrl?: string,
  ): Promise<ClaudeResult> {
    const result = await runClaude(claudeMessage, {
      systemPrompt: !this.sessionId ? systemPrompt : undefined,
      resumeSessionId: this.sessionId,
      ...extraOptions,
    })

    if (result.sessionId) {
      this.sessionId = result.sessionId
    }

    // Store the display message (without injected manual content), not what we sent to Claude
    const messages = await this.getHistory()
    const userMsg: ChatMessage = { role: 'user', content: displayMessage ?? claudeMessage }
    if (imageUrl) userMsg.imageUrl = imageUrl
    messages.push(userMsg)
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
