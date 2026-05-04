import { spawn } from 'node:child_process'
import { createInterface } from 'node:readline'
import { parseClaudeStreamEvent, type ClaudeStreamEvent } from './claude-stream-parser'
import type { ClaudeOptions } from './claude-cli'

export async function* runClaudeStream(
  prompt: string,
  options?: ClaudeOptions,
): AsyncGenerator<ClaudeStreamEvent> {
  const args = ['-p', '--output-format', 'stream-json', '--verbose', '--include-partial-messages']

  if (options?.effort) {
    args.push('--effort', options.effort)
  }

  if (options?.disableTools) {
    args.push('--tools', '')
  }

  if (options?.allowedTools?.length) {
    args.push('--allowedTools', ...options.allowedTools)
  }

  if (options?.addDirs?.length) {
    for (const dir of options.addDirs) {
      args.push('--add-dir', dir)
    }
  }

  if (options?.mcpConfig) {
    args.push('--mcp-config', options.mcpConfig, '--strict-mcp-config')
  }

  if (options?.resumeSessionId) {
    args.push('--resume', options.resumeSessionId)
  }

  if (options?.systemPrompt) {
    args.push('--append-system-prompt', options.systemPrompt)
  }

  const proc = spawn('claude', args, { stdio: ['pipe', 'pipe', 'pipe'] })

  proc.stdin!.write(prompt)
  proc.stdin!.end()

  const rl = createInterface({ input: proc.stdout! })

  const lines: string[] = []
  const stderrChunks: string[] = []
  let closed = false
  let exitCode: number | null = null
  let errorResult: string | null = null
  let resolveWait: (() => void) | null = null

  rl.on('line', (line) => {
    // Check for error results before queuing
    try {
      const parsed = JSON.parse(line)
      if (parsed.type === 'result' && parsed.is_error) {
        errorResult = parsed.result ?? 'Unknown error'
      }
    } catch { /* not JSON, ignore */ }
    lines.push(line)
    resolveWait?.()
  })

  proc.stderr!.on('data', (chunk) => {
    stderrChunks.push(chunk.toString())
  })

  proc.on('close', (code) => {
    exitCode = code
    closed = true
    resolveWait?.()
  })

  while (true) {
    while (lines.length > 0) {
      const line = lines.shift()!
      const event = parseClaudeStreamEvent(line)
      if (event) yield event
    }

    if (closed) break

    await new Promise<void>((resolve) => {
      resolveWait = resolve
    })
  }

  if (exitCode !== null && exitCode !== 0) {
    const detail = errorResult || stderrChunks.join('').trim() || `exit code ${exitCode}`
    throw new Error(`claude CLI failed: ${detail}`)
  }
}
