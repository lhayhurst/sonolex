import type { ClaudeUsage } from './claude-cli'

export type ClaudeStreamEvent =
  | { type: 'thinking'; text: string }
  | { type: 'thinking_complete'; text: string }
  | { type: 'text'; text: string }
  | { type: 'tool_use'; toolName: string }
  | { type: 'result'; text: string; sessionId?: string; usage: ClaudeUsage }

export function parseClaudeStreamEvent(line: string): ClaudeStreamEvent | null {
  let parsed: Record<string, unknown>
  try {
    parsed = JSON.parse(line)
  } catch {
    return null
  }

  if (parsed.type === 'result') {
    return {
      type: 'result',
      text: (parsed.result as string) ?? '',
      sessionId: parsed.session_id as string | undefined,
      usage: {
        inputTokens: ((parsed.usage as Record<string, unknown>)?.input_tokens as number) ?? 0,
        outputTokens: ((parsed.usage as Record<string, unknown>)?.output_tokens as number) ?? 0,
        costUsd: (parsed.total_cost_usd as number) ?? 0,
        durationMs: (parsed.duration_ms as number) ?? 0,
      },
    }
  }

  if (parsed.type === 'assistant') {
    const message = parsed.message as Record<string, unknown> | undefined
    const content = message?.content as Array<Record<string, unknown>> | undefined
    if (content) {
      const thinkingBlock = content.find(c => c.type === 'thinking')
      if (thinkingBlock?.thinking) {
        return { type: 'thinking_complete', text: thinkingBlock.thinking as string }
      }
    }
    return null
  }

  if (parsed.type === 'stream_event') {
    const event = parsed.event as Record<string, unknown>

    if (event.type === 'content_block_start') {
      const block = event.content_block as Record<string, unknown>
      if (block?.type === 'tool_use') {
        return { type: 'tool_use', toolName: block.name as string }
      }
      return null
    }

    if (event.type === 'content_block_delta') {
      const delta = event.delta as Record<string, unknown>
      if (delta.type === 'thinking_delta') {
        return { type: 'thinking', text: delta.thinking as string }
      }
      if (delta.type === 'text_delta') {
        return { type: 'text', text: delta.text as string }
      }
    }
  }

  return null
}
