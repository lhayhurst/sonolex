// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdtemp, rm, writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { Storage } from './storage'
import { createDevice, createConnection, createManual, createStudioData } from '../../src/types/index'

describe('Storage', () => {
  let tempDir: string
  let storage: Storage

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'sonolex-test-'))
    storage = new Storage(tempDir)
  })

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true })
  })

  describe('initialization', () => {
    it('creates data directory structure on init', async () => {
      await storage.init()

      const { readdir } = await import('node:fs/promises')
      const entries = await readdir(tempDir)
      expect(entries).toContain('manuals')
    })

    it('creates default studio.json if none exists', async () => {
      await storage.init()

      const studio = await storage.loadStudio()
      expect(studio.meta.name).toBe('My Studio')
      expect(studio.meta.version).toBe(1)
      expect(studio.devices).toEqual([])
      expect(studio.connections).toEqual([])
      expect(studio.manuals).toEqual([])
    })

    it('preserves existing studio.json on init', async () => {
      await storage.init()

      const device = createDevice({ id: 'test', name: 'Test', category: 'other' })
      const studio = createStudioData({ name: 'Existing Studio', devices: [device] })
      await storage.saveStudio(studio)

      const storage2 = new Storage(tempDir)
      await storage2.init()

      const loaded = await storage2.loadStudio()
      expect(loaded.meta.name).toBe('Existing Studio')
      expect(loaded.devices).toHaveLength(1)
    })
  })

  describe('studio data', () => {
    beforeEach(async () => {
      await storage.init()
    })

    it('saves and loads studio data', async () => {
      const device = createDevice({
        id: 'fireface',
        name: 'RME Fireface UCX II',
        category: 'interface',
        manufacturer: 'RME',
      })

      const connection = createConnection({
        id: 'conn-1',
        sourceDeviceId: 'fireface',
        sourcePortId: 'out-3',
        targetDeviceId: 'clean',
        targetPortId: 'in-1',
        connectionType: 'audio',
      })

      const studio = createStudioData({
        name: 'Test Studio',
        devices: [device],
        connections: [connection],
      })

      await storage.saveStudio(studio)
      const loaded = await storage.loadStudio()

      expect(loaded.meta.name).toBe('Test Studio')
      expect(loaded.devices).toHaveLength(1)
      expect(loaded.devices[0].name).toBe('RME Fireface UCX II')
      expect(loaded.connections).toHaveLength(1)
      expect(loaded.connections[0].connectionType).toBe('audio')
    })

    it('roundtrips studio data without loss', async () => {
      const studio = createStudioData({ name: 'Roundtrip Test' })
      studio.devices.push(
        createDevice({ id: 'd1', name: 'Device 1', category: 'synthesizer' }),
        createDevice({ id: 'd2', name: 'Device 2', category: 'effects' }),
      )
      studio.connections.push(
        createConnection({
          id: 'c1',
          sourceDeviceId: 'd1',
          sourcePortId: 'out',
          targetDeviceId: 'd2',
          targetPortId: 'in',
          connectionType: 'audio',
          label: 'Main audio',
          notes: 'Stereo connection',
        }),
      )

      await storage.saveStudio(studio)
      const loaded = await storage.loadStudio()

      expect(loaded.devices).toEqual(studio.devices)
      expect(loaded.connections).toEqual(studio.connections)
    })
  })

  describe('manuals', () => {
    beforeEach(async () => {
      await storage.init()
    })

    it('saves and loads a manual', async () => {
      const manual = createManual({
        id: 'fireface-manual',
        title: 'RME Fireface UCX II Manual',
        content: 'Full manual text...',
        deviceId: 'fireface',
      })

      await storage.saveManual(manual)
      const loaded = await storage.loadManual('fireface-manual')

      expect(loaded).toBeDefined()
      expect(loaded!.title).toBe('RME Fireface UCX II Manual')
      expect(loaded!.content).toBe('Full manual text...')
      expect(loaded!.deviceId).toBe('fireface')
    })

    it('returns undefined for non-existent manual', async () => {
      const loaded = await storage.loadManual('does-not-exist')
      expect(loaded).toBeUndefined()
    })

    it('lists all manuals', async () => {
      await storage.saveManual(createManual({ id: 'm1', title: 'Manual 1', content: 'text 1' }))
      await storage.saveManual(createManual({ id: 'm2', title: 'Manual 2', content: 'text 2' }))

      const manuals = await storage.listManuals()
      expect(manuals).toHaveLength(2)
      expect(manuals.map(m => m.id).sort()).toEqual(['m1', 'm2'])
    })

    it('deletes a manual', async () => {
      await storage.saveManual(createManual({ id: 'm1', title: 'Manual 1', content: 'text' }))
      await storage.deleteManual('m1')

      const loaded = await storage.loadManual('m1')
      expect(loaded).toBeUndefined()
    })

    it('delete is idempotent for non-existent manual', async () => {
      await expect(storage.deleteManual('does-not-exist')).resolves.not.toThrow()
    })

    it('overwrites manual on save with same id', async () => {
      await storage.saveManual(createManual({ id: 'm1', title: 'Version 1', content: 'old' }))
      await storage.saveManual(createManual({ id: 'm1', title: 'Version 2', content: 'new' }))

      const loaded = await storage.loadManual('m1')
      expect(loaded!.title).toBe('Version 2')
      expect(loaded!.content).toBe('new')
    })
  })

  describe('export', () => {
    beforeEach(async () => {
      await storage.init()
    })

    it('exports complete studio data including manuals', async () => {
      const device = createDevice({ id: 'd1', name: 'Device 1', category: 'other' })
      const studio = createStudioData({ name: 'Export Test', devices: [device] })
      await storage.saveStudio(studio)

      await storage.saveManual(createManual({ id: 'm1', title: 'Manual 1', content: 'text' }))

      const exported = await storage.exportAll()

      expect(exported.meta.name).toBe('Export Test')
      expect(exported.devices).toHaveLength(1)
      expect(exported.manuals).toHaveLength(1)
      expect(exported.manuals[0].content).toBe('text')
    })
  })

  describe('cheatsheet tag normalization', () => {
    it('defaults tags to empty array when null in stored JSON', async () => {
      const csDir = join(tempDir, 'cheatsheets')
      await mkdir(csDir, { recursive: true })
      await writeFile(
        join(csDir, 'broken.json'),
        JSON.stringify({ id: 'broken', title: 'No Tags', content: 'test', category: 'other', tags: null, createdAt: '', updatedAt: '' }),
      )

      const sheets = await storage.listCheatSheets()
      expect(sheets).toHaveLength(1)
      expect(sheets[0].tags).toEqual([])
    })

    it('normalizes cheat sheets with non-standard schema', async () => {
      const csDir = join(tempDir, 'cheatsheets')
      await mkdir(csDir, { recursive: true })
      await writeFile(
        join(csDir, 'weird.json'),
        JSON.stringify({ title: 'Raw Data', sliders: [{ cc: 30 }] }),
      )

      const sheets = await storage.listCheatSheets()
      expect(sheets).toHaveLength(1)
      expect(sheets[0].id).toBe('weird')
      expect(sheets[0].title).toBe('Raw Data')
      expect(sheets[0].tags).toEqual([])
      expect(sheets[0].category).toBe('other')
      expect(sheets[0].content).toContain('"sliders"')
    })

    it('defaults tags to empty array when missing from stored JSON', async () => {
      const csDir = join(tempDir, 'cheatsheets')
      await mkdir(csDir, { recursive: true })
      await writeFile(
        join(csDir, 'notags.json'),
        JSON.stringify({ id: 'notags', title: 'Missing Tags', content: 'test', category: 'other', createdAt: '', updatedAt: '' }),
      )

      const sheet = await storage.loadCheatSheet('notags')
      expect(sheet).toBeDefined()
      expect(sheet!.tags).toEqual([])
    })
  })
})
