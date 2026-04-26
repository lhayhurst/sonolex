interface WrongBackendScreenProps {
  expected: string
  found: string
  onRetry: () => void
}

export function WrongBackendScreen({ expected, found, onRetry }: WrongBackendScreenProps) {
  return (
    <div className="setup-screen">
      <div className="setup-card">
        <h1>Wrong backend connected</h1>
        <p className="setup-description">
          This frontend expects the <strong>{expected}</strong> backend, but the API responded
          as <strong>{found}</strong>. Another fork is probably already bound to this port.
        </p>

        <div className="setup-steps">
          <h2>How to fix</h2>
          <ol>
            <li>Stop the other app, or run it on a different port</li>
            <li>Restart this app's backend</li>
            <li>Click retry below</li>
          </ol>
        </div>

        <button className="setup-button" onClick={onRetry}>
          Retry
        </button>
      </div>
    </div>
  )
}
