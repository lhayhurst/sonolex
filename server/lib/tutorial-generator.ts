import { runClaude, stripMarkdownFences, type ClaudeUsage } from './claude-cli'
import type { ChatMessage } from './chat-session'

export interface GeneratedTutorial {
  title: string
  summary: string
  content: string
  usage: ClaudeUsage
}

export function formatTranscript(messages: ChatMessage[]): string {
  return messages
    .map(m => `${m.role.toUpperCase()}: ${m.content}`)
    .join('\n\n')
}

export function buildTutorialPrompt(messages: ChatMessage[], sessionName: string): string {
  return `You are turning a chat session into a publishable tutorial.

Chat session name: ${sessionName}

The chat below is a working conversation between a user and Claude about
music studio gear. Your job is to distill it into a clean, standalone
tutorial that a reader who wasn't in the chat could follow.

Return a JSON object with:
- "title": A short, descriptive title for the tutorial
- "summary": A 1-2 sentence blurb describing what the tutorial teaches
- "content": The full tutorial as markdown. Structure it as numbered steps
  (## Step 1, ## Step 2, ...). Lead with a brief intro paragraph. Drop
  the chat's false starts, corrections, and side-tangents — keep only
  the load-bearing instructions.

Return ONLY valid JSON, no markdown fences or other text.

Chat transcript:
${formatTranscript(messages)}`
}

export async function generateTutorial(
  messages: ChatMessage[],
  sessionName: string,
): Promise<GeneratedTutorial> {
  const prompt = buildTutorialPrompt(messages, sessionName)
  const { text, usage } = await runClaude(prompt, { disableTools: true })
  const jsonText = stripMarkdownFences(text)

  let parsed: { title: string; summary: string; content: string }
  try {
    parsed = JSON.parse(jsonText) as { title: string; summary: string; content: string }
  } catch {
    throw new Error('Claude returned invalid JSON for tutorial — unable to parse generated draft.')
  }

  return {
    title: parsed.title,
    summary: parsed.summary,
    content: parsed.content,
    usage,
  }
}
