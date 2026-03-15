import { execFile } from 'node:child_process'

export interface ClaudeUsage {
  inputTokens: number
  outputTokens: number
  costUsd: number
  durationMs: number
}

export interface ClaudeResult {
  text: string
  usage: ClaudeUsage
}

export function stripMarkdownFences(text: string): string {
  const trimmed = text.trim()
  const match = trimmed.match(/^```(?:\w*)\n([\s\S]*?)\n```$/)
  return match ? match[1] : trimmed
}

export async function runClaude(prompt: string): Promise<ClaudeResult> {
  return new Promise((resolve, reject) => {
    const proc = execFile(
      'claude',
      ['-p', '--output-format', 'json'],
      { maxBuffer: 10 * 1024 * 1024 },
      (err, stdout, stderr) => {
        if (err) {
          reject(new Error(`claude CLI failed: ${err.message}${stderr ? `\n${stderr}` : ''}`))
          return
        }

        try {
          const parsed = JSON.parse(stdout)
          const usage: ClaudeUsage = {
            inputTokens: parsed.usage?.input_tokens ?? 0,
            outputTokens: parsed.usage?.output_tokens ?? 0,
            costUsd: parsed.total_cost_usd ?? 0,
            durationMs: parsed.duration_ms ?? 0,
          }
          resolve({ text: parsed.result ?? '', usage })
        } catch {
          // Fallback if JSON parsing fails — treat as plain text
          resolve({
            text: stdout,
            usage: { inputTokens: 0, outputTokens: 0, costUsd: 0, durationMs: 0 },
          })
        }
      },
    )

    proc.stdin?.write(prompt)
    proc.stdin?.end()
  })
}

export async function isClaudeAvailable(): Promise<boolean> {
  return new Promise((resolve) => {
    execFile('claude', ['--version'], { timeout: 5000 }, (err) => {
      resolve(!err)
    })
  })
}
