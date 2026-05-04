// Pure-translation tests for QmdStore.
// QMD I/O is integration-tested separately via a smoke script;
// these tests cover the domain↔QMD shape mapping in isolation.

import { describe, it, expect } from 'vitest'
import {
  buildQmdSearchOptions,
  toSearchResult,
  collectionToQmdName,
  type SearchOptions,
} from './qmd-store'

describe('collectionToQmdName', () => {
  it('maps Sonolex collection names to QMD collection names', () => {
    expect(collectionToQmdName('manuals')).toBe('manuals')
    expect(collectionToQmdName('cheatsheets')).toBe('cheatsheets')
    expect(collectionToQmdName('studio')).toBe('studio')
  })

  it('returns undefined for "all" — meaning no filter', () => {
    expect(collectionToQmdName('all')).toBeUndefined()
  })
})

describe('buildQmdSearchOptions', () => {
  const baseOpts: SearchOptions = { query: 'MIDI clock sync' }

  it('passes through the query verbatim', () => {
    const result = buildQmdSearchOptions(baseOpts)
    expect(result.query).toBe('MIDI clock sync')
  })

  it('defaults limit to 5 for chat-friendly result count', () => {
    const result = buildQmdSearchOptions(baseOpts)
    expect(result.limit).toBe(5)
  })

  it('respects explicit limit when provided', () => {
    const result = buildQmdSearchOptions({ ...baseOpts, limit: 10 })
    expect(result.limit).toBe(10)
  })

  it('passes intent through when provided — improves QMD reranker', () => {
    const result = buildQmdSearchOptions({
      ...baseOpts,
      intent: 'finding the CC for tempo source on a hardware sequencer',
    })
    expect(result.intent).toBe('finding the CC for tempo source on a hardware sequencer')
  })

  it('omits intent field when not provided', () => {
    const result = buildQmdSearchOptions(baseOpts)
    expect(result).not.toHaveProperty('intent')
  })

  it('scopes to a specific collection when given', () => {
    const result = buildQmdSearchOptions({ ...baseOpts, collection: 'cheatsheets' })
    expect(result.collection).toBe('cheatsheets')
  })

  it('omits collection scope when "all"', () => {
    const result = buildQmdSearchOptions({ ...baseOpts, collection: 'all' })
    expect(result.collection).toBeUndefined()
  })
})

describe('toSearchResult', () => {
  const qmdResult = {
    docid: 'abc123',
    displayPath: 'manuals/chase-bliss-clean-midi-manual.md',
    title: 'Chase Bliss Clean — MIDI Manual',
    snippet: 'CC 14: Dynamics, CC 15: Sensitivity...',
    score: 0.87,
    context: 'Equipment manual',
  }

  it('maps QMD result fields to Sonolex SearchResult', () => {
    const result = toSearchResult(qmdResult)
    expect(result.path).toBe('manuals/chase-bliss-clean-midi-manual.md')
    expect(result.title).toBe('Chase Bliss Clean — MIDI Manual')
    expect(result.snippet).toBe('CC 14: Dynamics, CC 15: Sensitivity...')
    expect(result.score).toBe(0.87)
  })

  it('infers collection from path prefix', () => {
    expect(toSearchResult({ ...qmdResult, displayPath: 'manuals/foo.md' }).collection).toBe('manuals')
    expect(toSearchResult({ ...qmdResult, displayPath: 'cheatsheets/foo.md' }).collection).toBe('cheatsheets')
    expect(toSearchResult({ ...qmdResult, displayPath: 'studio.md' }).collection).toBe('studio')
  })

  it('extracts the slug (filename without extension) for citation building', () => {
    const result = toSearchResult({ ...qmdResult, displayPath: 'manuals/chase-bliss-clean-midi-manual.md' })
    expect(result.slug).toBe('chase-bliss-clean-midi-manual')
  })

  it('handles unknown collection gracefully', () => {
    const result = toSearchResult({ ...qmdResult, displayPath: 'random/foo.md' })
    expect(result.collection).toBe('unknown')
  })
})
