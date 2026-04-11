import { readFile, writeFile, unlink } from 'node:fs/promises'
import { runClaude, type ClaudeResult, type ClaudeOptions } from './claude-cli'
import { runClaudeStream } from './claude-stream'
import type { ClaudeStreamEvent } from './claude-stream-parser'

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

  async sendStreaming(
    claudeMessage: string,
    systemPrompt: string,
    displayMessage?: string,
    extraOptions?: Partial<ClaudeOptions>,
    imageUrl?: string,
  ): Promise<{ stream: AsyncGenerator<ClaudeStreamEvent> }> {
    const options: ClaudeOptions = {
      systemPrompt: !this.sessionId ? systemPrompt : undefined,
      resumeSessionId: this.sessionId,
      ...extraOptions,
    }

    const session = this
    const source = runClaudeStream(claudeMessage, options)

    async function* wrapStream(): AsyncGenerator<ClaudeStreamEvent> {
      let finalText = ''
      let finalSessionId: string | undefined
      let retried = false

      try {
        for await (const event of source) {
          if (event.type === 'result') {
            finalText = event.text
            finalSessionId = event.sessionId
          }
          yield event
        }
      } catch (err) {
        // If resume failed, retry as a fresh session
        if (session.sessionId && !retried) {
          retried = true
          session.sessionId = undefined
          const retrySource = runClaudeStream(claudeMessage, {
            ...options,
            resumeSessionId: undefined,
            systemPrompt,
          })
          for await (const event of retrySource) {
            if (event.type === 'result') {
              finalText = event.text
              finalSessionId = event.sessionId
            }
            yield event
          }
        } else {
          throw err
        }
      }

      if (finalSessionId) {
        session.sessionId = finalSessionId
      }

      const messages = await session.getHistory()
      const userMsg: ChatMessage = { role: 'user', content: displayMessage ?? claudeMessage }
      if (imageUrl) userMsg.imageUrl = imageUrl
      messages.push(userMsg)
      messages.push({ role: 'assistant', content: finalText })
      await session.saveHistory(messages)
    }

    return { stream: wrapStream() }
  }

  async clear(): Promise<void> {
    this.sessionId = undefined
    try {
      await unlink(this.historyPath)
    } catch {
      // File may not exist
    }
  }

  async saveHistory(messages: ChatMessage[]): Promise<void> {
    await writeFile(
      this.historyPath,
      JSON.stringify({ sessionId: this.sessionId, messages }, null, 2),
      'utf-8',
    )
  }
}
