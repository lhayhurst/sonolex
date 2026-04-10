export interface NdjsonEvent {
  type: string
  [key: string]: unknown
}

export async function* parseNdjsonStream(
  body: ReadableStream<Uint8Array>,
): AsyncGenerator<NdjsonEvent> {
  const reader = body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })

    const lines = buffer.split('\n')
    buffer = lines.pop()! // keep incomplete last line in buffer

    for (const line of lines) {
      if (!line.trim()) continue
      try {
        yield JSON.parse(line) as NdjsonEvent
      } catch {
        // skip unparseable lines
      }
    }
  }

  // Process any remaining buffer
  if (buffer.trim()) {
    try {
      yield JSON.parse(buffer) as NdjsonEvent
    } catch {
      // skip
    }
  }
}
