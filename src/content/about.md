# Welcome to Sonolex

Sonolex helps you document your music studio. Upload your equipment manuals, chat with Claude about your gear, and build a comprehensive studio setup document.

## How it works

### 1. Upload Manuals

Start by uploading PDF manuals for your gear. Sonolex extracts the text and uses Claude to structure it into searchable sections. Each manual gets a summary, section headings, and the full technical details preserved.

You can upload as many manuals as you like. The more Claude knows about your gear, the better it can help you.

### 2. Chat

Ask Claude anything about your equipment:

- "What are the MIDI CCs for my Chase Bliss Clean?"
- "How do I set up MPE on the QuNexus?"
- "What's the difference between the LFO and Motion modes on the Monolit?"

Claude has context from all your uploaded manuals and will give you specific, technical answers.

### 3. Studio

Build a living document that describes your complete studio setup — what gear you have, how it's all connected, signal routing, MIDI channels, and configuration details.

You can:
- **Import** an existing studio document (upload a markdown file)
- **Chat to update** — tell Claude "add the Monolit to my studio" and it will ask how it's connected, then update your studio doc
- **Edit directly** — click Edit to modify the markdown yourself

## Tips

- **Be specific in chat** — "My Artemis connects to TX-6 channel 6 at +21dB" gives Claude better info than "I have an Artemis"
- **Upload before chatting** — Claude can only reference manuals that have been uploaded
- **Studio updates via chat** — say "update my studio" and describe the change. Claude will ask for connection details if needed

## Requirements

Sonolex uses the Claude Code CLI for all AI features. It runs locally on your machine — no data is sent to external servers beyond the Claude API.

```bash
npm install -g @anthropic-ai/claude-code
```
