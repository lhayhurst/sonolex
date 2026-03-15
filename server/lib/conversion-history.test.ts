import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { ConversionHistory } from './conversion-history'

describe('ConversionHistory', () => {
  let tempDir: string
  let history: ConversionHistory

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'sonolex-history-'))
    history = new ConversionHistory(tempDir)
  })

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true })
  })

  it('starts with no entries', async () => {
    const entries = await history.getEntries()
    expect(entries).toEqual([])
  })

  it('records a conversion', async () => {
    await history.record({ inputChars: 50000, durationMs: 15000 })
    const entries = await history.getEntries()
    expect(entries).toHaveLength(1)
    expect(entries[0].inputChars).toBe(50000)
    expect(entries[0].durationMs).toBe(15000)
  })

  it('persists across instances', async () => {
    await history.record({ inputChars: 50000, durationMs: 15000 })

    const history2 = new ConversionHistory(tempDir)
    const entries = await history2.getEntries()
    expect(entries).toHaveLength(1)
  })

  it('estimates duration with no history', async () => {
    const estimate = await history.estimateDuration(50000)
    expect(estimate).toBeNull()
  })

  it('estimates duration from single data point', async () => {
    await history.record({ inputChars: 50000, durationMs: 15000 })
    const estimate = await history.estimateDuration(100000)

    // Should roughly double (linear)
    expect(estimate).toBeGreaterThan(25000)
    expect(estimate).toBeLessThan(35000)
  })

  it('estimates duration from multiple data points', async () => {
    await history.record({ inputChars: 10000, durationMs: 5000 })
    await history.record({ inputChars: 50000, durationMs: 15000 })
    await history.record({ inputChars: 100000, durationMs: 28000 })

    const estimate = await history.estimateDuration(75000)
    expect(estimate).toBeDefined()
    expect(estimate).toBeGreaterThan(15000)
    expect(estimate).toBeLessThan(30000)
  })
})
