// === Constants ===

export const CONNECTION_TYPES = [
  'audio', 'midi', 'usb', 'cv', 'adat', 'spdif', 'wordclock',
] as const

export const PORT_DIRECTIONS = [
  'input', 'output', 'bidirectional',
] as const

export const DEVICE_CATEGORIES = [
  'interface', 'synthesizer', 'effects', 'mixer', 'monitor',
  'controller', 'computer', 'recorder', 'microphone', 'other',
] as const

// === Types ===

export type ConnectionType = typeof CONNECTION_TYPES[number]
export type PortDirection = typeof PORT_DIRECTIONS[number]
export type DeviceCategory = typeof DEVICE_CATEGORIES[number]

export interface Port {
  id: string
  label: string
  direction: PortDirection
  connectionType: ConnectionType
  channel?: number
}

export interface Device {
  id: string
  name: string
  manufacturer?: string
  category: DeviceCategory
  ports: Port[]
  notes?: string
  position: { x: number; y: number }
  manualId?: string
}

export interface Connection {
  id: string
  sourceDeviceId: string
  sourcePortId: string
  targetDeviceId: string
  targetPortId: string
  connectionType: ConnectionType
  label?: string
  notes?: string
}

export interface ManualSection {
  heading: string
  content: string
  level: number
}

export interface Manual {
  id: string
  deviceId?: string
  title: string
  summary?: string
  content: string
  sections?: ManualSection[]
  sourceFileName?: string
  convertedAt?: string
  pdfPath?: string
}

// === Cheat Sheets ===

export const CHEAT_SHEET_CATEGORIES = [
  'midi-map', 'signal-routing', 'shortcuts', 'troubleshooting',
  'preset-notes', 'checklist', 'quick-reference', 'other',
] as const

export type CheatSheetCategory = typeof CHEAT_SHEET_CATEGORIES[number]

export interface CheatSheet {
  id: string
  title: string
  content: string
  category: CheatSheetCategory
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface ChatSessionInfo {
  id: string
  name: string
  createdAt: string
  lastMessageAt: string | null
}

export interface StudioMeta {
  name: string
  lastModified: string
  version: number
}

export interface StudioData {
  devices: Device[]
  connections: Connection[]
  manuals: Manual[]
  meta: StudioMeta
}

// === Factory Functions ===

export function createPort(params: Port): Port {
  return { ...params }
}

export function createDevice(params: {
  id: string
  name: string
  category: DeviceCategory
  manufacturer?: string
  ports?: Port[]
  notes?: string
  position?: { x: number; y: number }
  manualId?: string
}): Device {
  return {
    id: params.id,
    name: params.name,
    category: params.category,
    manufacturer: params.manufacturer,
    ports: params.ports ?? [],
    notes: params.notes,
    position: params.position ?? { x: 0, y: 0 },
    manualId: params.manualId,
  }
}

export function createConnection(params: {
  id: string
  sourceDeviceId: string
  sourcePortId: string
  targetDeviceId: string
  targetPortId: string
  connectionType: ConnectionType
  label?: string
  notes?: string
}): Connection {
  return { ...params }
}

export function createManual(params: {
  id: string
  title: string
  content: string
  deviceId?: string
  sections?: ManualSection[]
  sourceFileName?: string
  convertedAt?: string
  pdfPath?: string
}): Manual {
  return { ...params }
}

export function createCheatSheet(params: {
  id: string
  title: string
  content: string
  category: CheatSheetCategory
  tags?: string[]
}): CheatSheet {
  const now = new Date().toISOString()
  return {
    ...params,
    tags: params.tags ?? [],
    createdAt: now,
    updatedAt: now,
  }
}

export function createStudioData(params: {
  name: string
  devices?: Device[]
  connections?: Connection[]
  manuals?: Manual[]
}): StudioData {
  return {
    devices: params.devices ?? [],
    connections: params.connections ?? [],
    manuals: params.manuals ?? [],
    meta: {
      name: params.name,
      lastModified: new Date().toISOString(),
      version: 1,
    },
  }
}
