// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdtemp, rm, writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { Storage } from './storage'
import { createDevice, createConnection, createManual, createStudioData, createTutorial } from '../../src/types/index'

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

  describe('markdown sidecars', () => {
    beforeEach(async () => {
      await storage.init()
    })

    it('writes a .md sidecar when saving a manual', async () => {
      await storage.saveManual(createManual({
        id: 'sidecar-test',
        title: 'Sidecar Test',
        content: 'unused for sidecar',
        sections: [{ heading: 'Intro', content: 'Body text', level: 1 }],
      }))

      const { readFile } = await import('node:fs/promises')
      const md = await readFile(join(tempDir, 'manuals', 'sidecar-test.md'), 'utf-8')
      expect(md).toContain('id: sidecar-test')
      expect(md).toContain('title: "Sidecar Test"')
      expect(md).toContain('# Intro')
      expect(md).toContain('Body text')
    })

    it('removes the .md sidecar when deleting a manual', async () => {
      await storage.saveManual(createManual({ id: 'rm-test', title: 'Remove Me', content: 'x' }))
      await storage.deleteManual('rm-test')

      const { access } = await import('node:fs/promises')
      await expect(access(join(tempDir, 'manuals', 'rm-test.md'))).rejects.toThrow()
      await expect(access(join(tempDir, 'manuals', 'rm-test.json'))).rejects.toThrow()
    })

    it('writes a .md sidecar when saving a cheat sheet', async () => {
      await storage.saveCheatSheet({
        id: 'cs-1',
        title: 'Drop Setup',
        content: 'Plug it in.',
        category: 'signal-routing',
        tags: ['drop'],
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
      })

      const { readFile } = await import('node:fs/promises')
      const md = await readFile(join(tempDir, 'cheatsheets', 'cs-1.md'), 'utf-8')
      expect(md).toContain('id: cs-1')
      expect(md).toContain('title: "Drop Setup"')
      expect(md).toContain('category: signal-routing')
      expect(md).toContain('tags: [drop]')
      expect(md).toContain('Plug it in.')
    })

    it('removes the .md sidecar when deleting a cheat sheet', async () => {
      await storage.saveCheatSheet({
        id: 'cs-rm',
        title: 'Bye',
        content: 'x',
        category: 'other',
        tags: [],
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
      })
      await storage.deleteCheatSheet('cs-rm')

      const { access } = await import('node:fs/promises')
      await expect(access(join(tempDir, 'cheatsheets', 'cs-rm.md'))).rejects.toThrow()
      await expect(access(join(tempDir, 'cheatsheets', 'cs-rm.json'))).rejects.toThrow()
    })

    it('list operations ignore .md files', async () => {
      await storage.saveManual(createManual({ id: 'ml-1', title: 'M1', content: 'x' }))
      await storage.saveCheatSheet({
        id: 'csl-1',
        title: 'CS1',
        content: 'x',
        category: 'other',
        tags: [],
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
      })

      const manuals = await storage.listManuals()
      const sheets = await storage.listCheatSheets()
      expect(manuals).toHaveLength(1)
      expect(sheets).toHaveLength(1)
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

  describe('tutorials', () => {
    beforeEach(async () => {
      await storage.init()
    })

    it('creates a tutorials directory on init', async () => {
      const { readdir } = await import('node:fs/promises')
      const entries = await readdir(tempDir)
      expect(entries).toContain('tutorials')
    })

    it('saves and loads a tutorial', async () => {
      const tutorial = createTutorial({
        id: 'oxi-saga',
        title: 'OXI Saga',
        summary: 'Walk through Saga.',
        content: '## Step 1\n\nDo the thing.',
        chatSessionId: 'chat-1',
      })
      await storage.saveTutorial(tutorial)

      const loaded = await storage.loadTutorial('oxi-saga')
      expect(loaded).toBeDefined()
      expect(loaded!.title).toBe('OXI Saga')
      expect(loaded!.status).toBe('draft')
      expect(loaded!.chatSessionId).toBe('chat-1')
      expect(loaded!.content).toContain('Step 1')
    })

    it('returns undefined when loading an unknown tutorial', async () => {
      expect(await storage.loadTutorial('nope')).toBeUndefined()
    })

    it('writes a .md sidecar when saving a tutorial', async () => {
      await storage.saveTutorial(
        createTutorial({
          id: 'side-1',
          title: 'Sidecar Test',
          summary: 'Sidecar summary.',
          content: 'Body.',
        }),
      )

      const { readFile } = await import('node:fs/promises')
      const md = await readFile(join(tempDir, 'tutorials', 'side-1.md'), 'utf-8')
      expect(md).toContain('id: side-1')
      expect(md).toContain('title: "Sidecar Test"')
      expect(md).toContain('summary: "Sidecar summary."')
      expect(md).toContain('status: draft')
      expect(md).toContain('Body.')
    })

    it('removes both files when deleting a tutorial', async () => {
      await storage.saveTutorial(
        createTutorial({ id: 'rm-tut', title: 'Bye', summary: 's', content: 'x' }),
      )
      await storage.deleteTutorial('rm-tut')

      const { access } = await import('node:fs/promises')
      await expect(access(join(tempDir, 'tutorials', 'rm-tut.md'))).rejects.toThrow()
      await expect(access(join(tempDir, 'tutorials', 'rm-tut.json'))).rejects.toThrow()
    })

    it('lists all tutorials and ignores .md sidecars', async () => {
      await storage.saveTutorial(
        createTutorial({ id: 'a', title: 'A', summary: 's', content: 'x' }),
      )
      await storage.saveTutorial(
        createTutorial({ id: 'b', title: 'B', summary: 's', content: 'x' }),
      )
      const tutorials = await storage.listTutorials()
      expect(tutorials).toHaveLength(2)
      expect(tutorials.map(t => t.id).sort()).toEqual(['a', 'b'])
    })

    it('generates a unique slug from title, avoiding collisions', async () => {
      await storage.saveTutorial(
        createTutorial({ id: 'oxi-saga', title: 'OXI Saga', summary: 's', content: 'x' }),
      )
      const next = await storage.nextTutorialSlug('OXI Saga')
      expect(next).not.toBe('oxi-saga')
      expect(next).toMatch(/^oxi-saga/)
    })

    it('preserves status and publishedAt fields through save/load cycle', async () => {
      const tutorial: ReturnType<typeof createTutorial> = {
        ...createTutorial({ id: 'pub', title: 'Published', summary: 's', content: 'x' }),
        status: 'published',
        publishedAt: '2026-05-25T12:00:00.000Z',
      }
      await storage.saveTutorial(tutorial)

      const loaded = await storage.loadTutorial('pub')
      expect(loaded!.status).toBe('published')
      expect(loaded!.publishedAt).toBe('2026-05-25T12:00:00.000Z')
    })

    it('normalizes a tutorial JSON missing required fields', async () => {
      const dir = join(tempDir, 'tutorials')
      await mkdir(dir, { recursive: true })
      await writeFile(
        join(dir, 'partial.json'),
        JSON.stringify({ title: 'Just a Title' }),
      )

      const loaded = await storage.loadTutorial('partial')
      expect(loaded).toBeDefined()
      expect(loaded!.id).toBe('partial')
      expect(loaded!.title).toBe('Just a Title')
      expect(loaded!.status).toBe('draft')
      expect(loaded!.summary).toBe('')
      expect(loaded!.content).toBe('')
    })
  })
})
