interface SetupScreenProps {
  onRetry: () => void
}

export function SetupScreen({ onRetry }: SetupScreenProps) {
  return (
    <div className="setup-screen">
      <div className="setup-card">
        <h1>Welcome to Sonolex</h1>
        <p className="setup-description">
          Sonolex uses Claude to read your equipment manuals and build a map of your studio.
          It needs the Claude Code CLI installed to work.
        </p>

        <div className="setup-steps">
          <h2>Setup</h2>
          <ol>
            <li>Install Claude Code: <code>npm install -g @anthropic-ai/claude-code</code></li>
            <li>Run <code>claude</code> once to sign in with your Anthropic account</li>
            <li>Click retry below</li>
          </ol>
          <p className="setup-steps-note">
            Uses your existing Claude subscription. No separate API billing needed.
          </p>
        </div>

        <button className="setup-button" onClick={onRetry}>
          Retry
        </button>
      </div>
    </div>
  )
}
