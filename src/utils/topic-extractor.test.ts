import { describe, it, expect } from 'vitest'
import { extractTopic, buildChatToc } from './topic-extractor'

const deviceNames = ['Drop', 'Fireface UCX II', 'Artemis', 'Monolit', 'Midihub', 'Move']

describe('extractTopic', () => {
  it('extracts device name when mentioned', () => {
    expect(extractTopic("Let's work through learning how to use the drop!", deviceNames))
      .toBe('Learn Drop')
  })

  it('extracts device name case-insensitively', () => {
    expect(extractTopic('How do I connect the ARTEMIS?', deviceNames))
      .toBe('Connect Artemis')
  })

  it('extracts multi-word device names', () => {
    expect(extractTopic('configure the fireface ucx ii outputs', deviceNames))
      .toBe('Configure Fireface UCX II')
  })

  it('uses action keyword with device', () => {
    expect(extractTopic('I want to map the drop encoders to Valhalla', deviceNames))
      .toBe('Map Drop')
  })

  it('falls back to action + noun when no device match', () => {
    expect(extractTopic('how do I set up my MIDI controller?', deviceNames))
      .toBe('Set up MIDI Controller')
  })

  it('falls back to significant words when no action keyword', () => {
    expect(extractTopic('what about the reverb tail length?', deviceNames))
      .toBe('Reverb Tail Length')
  })

  it('truncates long messages with no matches', () => {
    const longMsg = 'This is a very long message that does not contain any device names or action keywords and should be truncated'
    const result = extractTopic(longMsg, deviceNames)
    expect(result.length).toBeLessThanOrEqual(35)
  })

  it('handles very short messages', () => {
    expect(extractTopic('yes', deviceNames)).toBe('Yes')
    expect(extractTopic('ok!', deviceNames)).toBe('Ok!')
  })

  it('handles empty message', () => {
    expect(extractTopic('', deviceNames)).toBe('')
  })
})

describe('buildChatToc', () => {
  const msgs = (contents: string[]) =>
    contents.flatMap(c => [
      { role: 'user' as const, content: c },
      { role: 'assistant' as const, content: 'Response here.' },
    ])

  it('creates one entry per user message', () => {
    const toc = buildChatToc(msgs(['How do I connect the Drop?', 'What about the Artemis?']), deviceNames)
    expect(toc).toHaveLength(2)
    expect(toc[0].label).toContain('Drop')
    expect(toc[1].label).toContain('Artemis')
  })

  it('groups consecutive messages with the same device', () => {
    const toc = buildChatToc(msgs([
      'How do I connect the Drop?',
      'What are the Drop MIDI CCs?',
      'Now tell me about the Artemis',
    ]), deviceNames)
    expect(toc).toHaveLength(2)
    expect(toc[0].label).toContain('Drop')
    expect(toc[0].messageCount).toBe(2)
    expect(toc[1].label).toContain('Artemis')
    expect(toc[1].messageCount).toBe(1)
  })

  it('returns empty for no messages', () => {
    expect(buildChatToc([], deviceNames)).toEqual([])
  })

  it('returns empty for only assistant messages', () => {
    const toc = buildChatToc([
      { role: 'assistant', content: 'Hello!' },
    ], deviceNames)
    expect(toc).toEqual([])
  })

  it('tracks correct message indices', () => {
    const toc = buildChatToc(msgs([
      'Connect the Drop',
      'Now the Artemis',
    ]), deviceNames)
    expect(toc[0].messageIndex).toBe(0)
    expect(toc[1].messageIndex).toBe(2) // index 2 because each pair is 2 messages
  })

  it('works with empty device names', () => {
    const toc = buildChatToc(msgs(['How do I set up reverb?']), [])
    expect(toc).toHaveLength(1)
    expect(toc[0].label).toBeTruthy()
  })
})
