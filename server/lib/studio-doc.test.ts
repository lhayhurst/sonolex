import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { StudioDoc } from './studio-doc'

describe('StudioDoc', () => {
  let tempDir: string
  let doc: StudioDoc

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'sonolex-studio-'))
    doc = new StudioDoc(tempDir)
  })

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true })
  })

  it('returns null when no doc exists', async () => {
    const content = await doc.load()
    expect(content).toBeNull()
  })

  it('saves and loads markdown content', async () => {
    await doc.save('# My Studio\n\nSome gear here.')
    const content = await doc.load()
    expect(content).toBe('# My Studio\n\nSome gear here.')
  })

  it('overwrites on subsequent saves', async () => {
    await doc.save('# Version 1')
    await doc.save('# Version 2')
    const content = await doc.load()
    expect(content).toBe('# Version 2')
  })

  it('persists across instances', async () => {
    await doc.save('# Persistent')
    const doc2 = new StudioDoc(tempDir)
    const content = await doc2.load()
    expect(content).toBe('# Persistent')
  })
})
