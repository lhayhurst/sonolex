import { describe, it, expect } from 'vitest'
import {
  createPort,
  createDevice,
  createConnection,
  createManual,
  createStudioData,
  CONNECTION_TYPES,
  PORT_DIRECTIONS,
  DEVICE_CATEGORIES,
} from './index'
import type {
  Port,
  Device,
  Connection,
  Manual,
  StudioData,
  ConnectionType,
  PortDirection,
  DeviceCategory,
} from './index'

describe('ConnectionType', () => {
  it('defines all expected connection types', () => {
    expect(CONNECTION_TYPES).toContain('audio')
    expect(CONNECTION_TYPES).toContain('midi')
    expect(CONNECTION_TYPES).toContain('usb')
    expect(CONNECTION_TYPES).toContain('cv')
    expect(CONNECTION_TYPES).toContain('adat')
    expect(CONNECTION_TYPES).toContain('spdif')
    expect(CONNECTION_TYPES).toContain('wordclock')
    expect(CONNECTION_TYPES).toHaveLength(7)
  })
})

describe('PortDirection', () => {
  it('defines all expected directions', () => {
    expect(PORT_DIRECTIONS).toContain('input')
    expect(PORT_DIRECTIONS).toContain('output')
    expect(PORT_DIRECTIONS).toContain('bidirectional')
    expect(PORT_DIRECTIONS).toHaveLength(3)
  })
})

describe('DeviceCategory', () => {
  it('defines all expected categories', () => {
    expect(DEVICE_CATEGORIES).toContain('interface')
    expect(DEVICE_CATEGORIES).toContain('synthesizer')
    expect(DEVICE_CATEGORIES).toContain('effects')
    expect(DEVICE_CATEGORIES).toContain('mixer')
    expect(DEVICE_CATEGORIES).toContain('monitor')
    expect(DEVICE_CATEGORIES).toContain('controller')
    expect(DEVICE_CATEGORIES).toContain('computer')
    expect(DEVICE_CATEGORIES).toContain('recorder')
    expect(DEVICE_CATEGORIES).toContain('microphone')
    expect(DEVICE_CATEGORIES).toContain('other')
    expect(DEVICE_CATEGORIES).toHaveLength(10)
  })
})

describe('createPort', () => {
  it('creates a port with required fields', () => {
    const port = createPort({
      id: 'out-1',
      label: 'Main Out L',
      direction: 'output',
      connectionType: 'audio',
    })

    expect(port.id).toBe('out-1')
    expect(port.label).toBe('Main Out L')
    expect(port.direction).toBe('output')
    expect(port.connectionType).toBe('audio')
    expect(port.channel).toBeUndefined()
  })

  it('creates a port with optional channel', () => {
    const port = createPort({
      id: 'midi-in-1',
      label: 'MIDI In',
      direction: 'input',
      connectionType: 'midi',
      channel: 1,
    })

    expect(port.channel).toBe(1)
  })
})

describe('createDevice', () => {
  it('creates a device with required fields', () => {
    const device = createDevice({
      id: 'fireface',
      name: 'RME Fireface UCX II',
      category: 'interface',
    })

    expect(device.id).toBe('fireface')
    expect(device.name).toBe('RME Fireface UCX II')
    expect(device.category).toBe('interface')
    expect(device.ports).toEqual([])
    expect(device.position).toEqual({ x: 0, y: 0 })
    expect(device.manufacturer).toBeUndefined()
    expect(device.notes).toBeUndefined()
    expect(device.manualId).toBeUndefined()
  })

  it('creates a device with all optional fields', () => {
    const port = createPort({
      id: 'out-1',
      label: 'Out 1',
      direction: 'output',
      connectionType: 'audio',
    })

    const device = createDevice({
      id: 'artemis',
      name: 'Artemis',
      manufacturer: 'Dreadbox',
      category: 'synthesizer',
      ports: [port],
      notes: '6-voice polysynth',
      position: { x: 100, y: 200 },
      manualId: 'artemis-manual',
    })

    expect(device.manufacturer).toBe('Dreadbox')
    expect(device.ports).toHaveLength(1)
    expect(device.notes).toBe('6-voice polysynth')
    expect(device.position).toEqual({ x: 100, y: 200 })
    expect(device.manualId).toBe('artemis-manual')
  })
})

describe('createConnection', () => {
  it('creates a connection with required fields', () => {
    const conn = createConnection({
      id: 'conn-1',
      sourceDeviceId: 'fireface',
      sourcePortId: 'out-3',
      targetDeviceId: 'clean',
      targetPortId: 'in-1',
      connectionType: 'audio',
    })

    expect(conn.id).toBe('conn-1')
    expect(conn.sourceDeviceId).toBe('fireface')
    expect(conn.sourcePortId).toBe('out-3')
    expect(conn.targetDeviceId).toBe('clean')
    expect(conn.targetPortId).toBe('in-1')
    expect(conn.connectionType).toBe('audio')
    expect(conn.label).toBeUndefined()
    expect(conn.notes).toBeUndefined()
  })

  it('creates a connection with optional fields', () => {
    const conn = createConnection({
      id: 'conn-2',
      sourceDeviceId: 'fireface',
      sourcePortId: 'midi-out',
      targetDeviceId: 'midihub',
      targetPortId: 'in-a',
      connectionType: 'midi',
      label: 'Main MIDI bus',
      notes: 'Carries all MIDI from Ableton',
    })

    expect(conn.label).toBe('Main MIDI bus')
    expect(conn.notes).toBe('Carries all MIDI from Ableton')
  })
})

describe('createManual', () => {
  it('creates a manual with required fields', () => {
    const manual = createManual({
      id: 'fireface-manual',
      title: 'RME Fireface UCX II Manual',
      content: 'Full manual text here...',
    })

    expect(manual.id).toBe('fireface-manual')
    expect(manual.title).toBe('RME Fireface UCX II Manual')
    expect(manual.content).toBe('Full manual text here...')
    expect(manual.deviceId).toBeUndefined()
    expect(manual.sections).toBeUndefined()
    expect(manual.sourceFileName).toBeUndefined()
    expect(manual.convertedAt).toBeUndefined()
  })

  it('creates a manual with all optional fields', () => {
    const manual = createManual({
      id: 'artemis-manual',
      deviceId: 'artemis',
      title: 'Artemis Digital Manual',
      content: 'Manual content...',
      sections: [
        { heading: 'Overview', content: 'The Artemis is...', level: 1 },
        { heading: 'MIDI CC Map', content: 'CC 19: Cutoff...', level: 2 },
      ],
      sourceFileName: 'ARTEMIS-DIGITAL-MANUAL.pdf',
      convertedAt: '2026-03-15T12:00:00Z',
    })

    expect(manual.deviceId).toBe('artemis')
    expect(manual.sections).toHaveLength(2)
    expect(manual.sections![0].heading).toBe('Overview')
    expect(manual.sections![0].level).toBe(1)
    expect(manual.sourceFileName).toBe('ARTEMIS-DIGITAL-MANUAL.pdf')
    expect(manual.convertedAt).toBe('2026-03-15T12:00:00Z')
  })
})

describe('createStudioData', () => {
  it('creates empty studio data with defaults', () => {
    const studio = createStudioData({ name: 'My Studio' })

    expect(studio.devices).toEqual([])
    expect(studio.connections).toEqual([])
    expect(studio.manuals).toEqual([])
    expect(studio.meta.name).toBe('My Studio')
    expect(studio.meta.version).toBe(1)
    expect(studio.meta.lastModified).toBeDefined()
  })

  it('creates studio data with provided entities', () => {
    const device = createDevice({
      id: 'test',
      name: 'Test Device',
      category: 'other',
    })

    const studio = createStudioData({
      name: 'Test Studio',
      devices: [device],
    })

    expect(studio.devices).toHaveLength(1)
    expect(studio.devices[0].id).toBe('test')
  })
})
