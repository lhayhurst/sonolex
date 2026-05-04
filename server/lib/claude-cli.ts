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
  sessionId?: string
}

export interface ClaudeOptions {
  systemPrompt?: string
  resumeSessionId?: string
  disableTools?: boolean
  // Tools Claude is allowed to use without permission prompting. In -p
  // mode the workspace trust dialog is skipped, so allowedTools functions
  // as auto-approve, NOT as restriction. To actually keep tools out of
  // Claude's hands, use disallowedTools.
  allowedTools?: string[]
  // Tools Claude cannot use at all. The CLI accepts either variadic args
  // or a comma-separated single string; the comma form is more reliable
  // when the list is long. We pass it as a single string.
  disallowedTools?: string[]
  addDirs?: string[]
  effort?: 'high' | 'max'
  // MCP server config (raw JSON or file path) passed via --mcp-config.
  // When set, --strict-mcp-config restricts Claude to only these servers
  // — keeps the QMD-only forcing function honest by preventing the
  // user's globally-configured MCP servers from leaking in.
  mcpConfig?: string
}

export function stripMarkdownFences(text: string): string {
  const trimmed = text.trim()
  const match = trimmed.match(/^```(?:\w*)\n([\s\S]*?)\n```$/)
  return match ? match[1] : trimmed
}

export async function runClaude(prompt: string, options?: ClaudeOptions): Promise<ClaudeResult> {
  return new Promise((resolve, reject) => {
    const args = ['-p', '--output-format', 'json']

    if (options?.disableTools) {
      args.push('--tools', '')
    }

    if (options?.allowedTools?.length) {
      args.push('--allowedTools', options.allowedTools.join(','))
    }

    if (options?.disallowedTools?.length) {
      args.push('--disallowedTools', options.disallowedTools.join(','))
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

    const proc = execFile(
      'claude',
      args,
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
          resolve({
            text: parsed.result ?? '',
            usage,
            sessionId: parsed.session_id,
          })
        } catch {
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
