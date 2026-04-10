// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { parseNdjsonStream, type NdjsonEvent } from './ndjson-stream'

function makeReadableStream(lines: string[]): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder()
  return new ReadableStream({
    start(controller) {
      for (const line of lines) {
        controller.enqueue(encoder.encode(line + '\n'))
      }
      controller.close()
    },
  })
}

describe('parseNdjsonStream', () => {
  it('yields parsed JSON objects from NDJSON stream', async () => {
    const stream = makeReadableStream([
      JSON.stringify({ type: 'thinking', text: 'hmm' }),
      JSON.stringify({ type: 'text', text: 'hello' }),
      JSON.stringify({ type: 'done', text: 'hello' }),
    ])

    const events: NdjsonEvent[] = []
    for await (const event of parseNdjsonStream(stream)) {
      events.push(event)
    }

    expect(events).toEqual([
      { type: 'thinking', text: 'hmm' },
      { type: 'text', text: 'hello' },
      { type: 'done', text: 'hello' },
    ])
  })

  it('handles chunks split across line boundaries', async () => {
    const encoder = new TextEncoder()
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        // Split a line across two chunks
        controller.enqueue(encoder.encode('{"type":"thi'))
        controller.enqueue(encoder.encode('nking","text":"hi"}\n'))
        controller.close()
      },
    })

    const events: NdjsonEvent[] = []
    for await (const event of parseNdjsonStream(stream)) {
      events.push(event)
    }

    expect(events).toEqual([{ type: 'thinking', text: 'hi' }])
  })

  it('skips empty lines', async () => {
    const stream = makeReadableStream(['', JSON.stringify({ type: 'done' }), ''])

    const events: NdjsonEvent[] = []
    for await (const event of parseNdjsonStream(stream)) {
      events.push(event)
    }

    expect(events).toEqual([{ type: 'done' }])
  })
})
