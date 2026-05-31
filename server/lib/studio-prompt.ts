import { join } from 'node:path'
import type { Manual, CheatSheet } from '../../src/types/index'

export function buildSystemPrompt(
  manuals: Manual[],
  studioDocPath?: string,
  cheatsheets?: CheatSheet[],
  dataDir?: string,
): string {
  if (manuals.length === 0 && (!cheatsheets || cheatsheets.length === 0)) {
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

  const cheatsheetSummaries = cheatsheets && cheatsheets.length > 0
    ? '\n\nThe user also has these cheat sheets (quick references they\'ve created):\n' +
      cheatsheets.map(cs => `- "${cs.title}" [${cs.category}] tags: ${cs.tags.join(', ')}`).join('\n')
    : ''

  const manualsDir = dataDir ? join(dataDir, 'manuals') : undefined
  const cheatsheetsDir = dataDir ? join(dataDir, 'cheatsheets') : undefined

  const groundingBlock = manualsDir && cheatsheetsDir
    ? `

GROUNDING — READ THIS BEFORE EVERY ANSWER

The user's library lives in markdown files on disk:
- Manuals:     ${manualsDir}/*.md
- Cheatsheets: ${cheatsheetsDir}/*.md
- Studio doc:  ${studioDocPath ?? '(none yet)'}

Each .md file has a YAML frontmatter block (id, title, tags) followed by the full content. Filenames are UUIDs or slugs — match by frontmatter title, not filename.

Before answering ANY factual question about the user's gear, signal flow, MIDI mappings, or saved cheat sheets, use Grep across these directories for the key nouns from the user's question. Then Read the matching files.

Examples:
- User asks about "Drop arpeggiator" → Grep for "arpeggio" in ${manualsDir}, Read the matching manual.
- User asks "what cheatsheets do I have for Ableton?" → Grep for "ableton" in ${cheatsheetsDir}.
- User asks about MIDI CCs on the Monolit → Grep for "Monolit" + "CC" in ${manualsDir}.

DO NOT answer from training knowledge alone. If you have not read the relevant manual section in this turn, you cannot answer specifics. The OP-1 Field is not the OP-1; the Drop is not a generic MIDI controller; the user's Clean settings are not a generic compressor's. Always ground in the actual files.

DO NOT ask the user "want me to check the manual?" or "should I look it up?" — just check it. Do NOT preface answers with "from memory" or "I think" or "if I recall" — if you haven't grepped + read the relevant file in this turn, do that first and THEN answer. The user expects you to ground yourself silently without permission-asking.

If grep finds nothing, say so explicitly rather than guessing.

DO NOT use the Write tool to create files under ${manualsDir} or anywhere named tutorials/. Manuals are imported only via the app's upload flow; tutorials are created only when the user clicks the "Generate tutorial draft" button in the chat UI. If you think a tutorial or manual should exist, tell the user how to create it through the UI — do not write the file yourself.`
    : ''

  return `You are a music studio assistant helping the user understand and connect their equipment. You have knowledge of the following gear from their uploaded manuals:

${manualSummaries}${cheatsheetSummaries}${groundingBlock}

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

export function findRelevantCheatSheets(message: string, cheatsheets: CheatSheet[]): CheatSheet[] {
  const lower = message.toLowerCase()

  return cheatsheets.filter(cs => {
    // Match against title words and tags
    const titleWords = cs.title.toLowerCase().split(/\s+/).filter(w => w.length > 2)
    const tagMatch = cs.tags.some(tag => lower.includes(tag.toLowerCase()))
    const titleMatch = titleWords.some(word => lower.includes(word))
    return tagMatch || titleMatch
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

export function buildCheatSheetContext(cheatsheets: CheatSheet[]): string {
  return cheatsheets.map(cs =>
    `--- Cheat Sheet: ${cs.title} ---\n\n${cs.content}`
  ).join('\n\n')
}
