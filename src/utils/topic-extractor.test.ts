import { describe, it, expect } from 'vitest'
import { extractTopic, extractAssistantLabel, buildChatToc } from './topic-extractor'

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

describe('extractAssistantLabel', () => {
  it('uses the first markdown heading', () => {
    const response = '# MIDI CC Map for the Drop\n\nHere are the CCs...'
    expect(extractAssistantLabel(response)).toBe('MIDI CC Map for the Drop')
  })

  it('uses h2 heading if no h1', () => {
    const response = '## Setting Up Your Signal Chain\n\nFirst, connect...'
    expect(extractAssistantLabel(response)).toBe('Setting Up Your Signal Chain')
  })

  it('falls back to first sentence when no heading', () => {
    const response = 'The Artemis connects via MIDI out to the Midihub. You can then route...'
    expect(extractAssistantLabel(response)).toBe('The Artemis connects via MIDI out to the Midihub')
  })

  it('truncates long first sentences', () => {
    const response = 'This is an extremely long first sentence that goes on and on about various topics and should be truncated at some reasonable point to fit in the sidebar.'
    const label = extractAssistantLabel(response)
    expect(label.length).toBeLessThanOrEqual(63) // 60 + '...'
  })

  it('strips markdown formatting from the label', () => {
    const response = 'The **Fireface UCX II** has _excellent_ `low-latency` performance.'
    expect(extractAssistantLabel(response)).toBe('The Fireface UCX II has excellent low-latency performance')
  })

  it('handles empty response', () => {
    expect(extractAssistantLabel('')).toBe('')
  })

  it('skips blank lines to find first real content', () => {
    const response = '\n\n\nThe Drop encoder mapping is straightforward.'
    expect(extractAssistantLabel(response)).toBe('The Drop encoder mapping is straightforward')
  })
})

describe('buildChatToc', () => {
  function msgPairs(pairs: [string, string][]) {
    return pairs.flatMap(([user, assistant]) => [
      { role: 'user' as const, content: user },
      { role: 'assistant' as const, content: assistant },
    ])
  }

  it('labels entries from assistant responses, not user messages', () => {
    const toc = buildChatToc(msgPairs([
      ['How do I connect the Drop?', '# Connecting the Drop\n\nPlug it in via USB...'],
      ['What about the Artemis?', 'The Artemis uses MIDI DIN connections.'],
    ]), deviceNames)
    expect(toc).toHaveLength(2)
    expect(toc[0].label).toBe('Connecting the Drop')
    expect(toc[1].label).toBe('The Artemis uses MIDI DIN connections')
  })

  it('still groups consecutive messages about the same device', () => {
    const toc = buildChatToc(msgPairs([
      ['How do I connect the Drop?', '# Drop Connections\n\nUSB-C...'],
      ['What are the Drop MIDI CCs?', '## Drop MIDI CC Map\n\nCC 1: Mod...'],
      ['Now tell me about the Artemis', 'The Artemis is a polysynth.'],
    ]), deviceNames)
    expect(toc).toHaveLength(2)
    expect(toc[0].label).toBe('Drop Connections')
    expect(toc[0].messageCount).toBe(2)
    expect(toc[1].label).toBe('The Artemis is a polysynth')
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

  it('points messageIndex to the assistant message, not the user message', () => {
    const toc = buildChatToc(msgPairs([
      ['Connect the Drop', 'Use USB-C to connect.'],
      ['Now the Artemis', 'MIDI DIN out to Midihub.'],
    ]), deviceNames)
    expect(toc[0].messageIndex).toBe(1) // assistant message index
    expect(toc[1].messageIndex).toBe(3)
  })

  it('falls back to user topic when assistant response is empty', () => {
    const toc = buildChatToc(msgPairs([
      ['How do I set up reverb?', ''],
    ]), [])
    expect(toc).toHaveLength(1)
    expect(toc[0].label).toBeTruthy()
  })
})
