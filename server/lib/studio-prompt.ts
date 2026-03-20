import type { Manual } from '../../src/types/index'

export function buildSystemPrompt(manuals: Manual[], studioDocPath?: string): string {
  if (manuals.length === 0) {
    return `You are a music studio assistant. The user has no manuals uploaded yet. Help them get started by suggesting they upload their equipment manuals.`
  }

  const manualSummaries = manuals.map(m => {
    const sectionList = m.sections
      ?.map(s => '  '.repeat(s.level - 1) + '- ' + s.heading)
      .join('\n') ?? '(no sections)'

    return `## ${m.title}
${m.summary ?? ''}

Sections:
${sectionList}`
  }).join('\n\n')

  return `You are a music studio assistant helping the user understand and connect their equipment. You have knowledge of the following gear from their uploaded manuals:

${manualSummaries}

When the user asks about a specific device, you may receive the full manual content for that device in the message. Use it to give detailed, accurate answers about MIDI CCs, signal routing, specifications, and configuration.

Your goal is to help the user:
- Understand their gear's capabilities
- Describe how devices connect to each other (audio, MIDI, USB, CV)
- Troubleshoot setup issues
- Build a complete picture of their studio signal flow

When the user asks you to add a device to their studio or update their studio setup:
- If they haven't told you HOW the device is connected (which ports, cables, MIDI channels, audio routing), ASK THEM before making changes. You know what the device CAN do from the manual, but only the user knows how they've actually wired it.
- Ask specific questions: "What is the Monolit connected to? USB-C to the computer? Is the TRS MIDI out going to anything?"
- Only generate a studio update once you have the connection details.

Be specific and technical when the user's question warrants it. Reference exact MIDI CC numbers, connector types, and settings.${studioDocPath ? `\n\nThe user's studio setup document is at: ${studioDocPath}\nIf the user asks about their studio setup, signal flow, connections, or how their gear is wired, use the Read tool to check this document for accurate details. Don't guess — read it.` : ''}`
}

export function findRelevantManuals(message: string, manuals: Manual[]): Manual[] {
  const lower = message.toLowerCase()

  return manuals.filter(m => {
    // Match against title words (skip very short words)
    const titleWords = m.title.toLowerCase().split(/\s+/).filter(w => w.length > 2)
    // Check if any significant title word appears in the message
    return titleWords.some(word => lower.includes(word))
  })
}

export function buildManualContext(manuals: Manual[]): string {
  return manuals.map(m => {
    const sections = m.sections
      ?.map(s => `${'#'.repeat(s.level + 1)} ${s.heading}\n${s.content}`)
      .join('\n\n') ?? m.content

    return `--- Manual: ${m.title} ---\n\n${sections}`
  }).join('\n\n')
}
