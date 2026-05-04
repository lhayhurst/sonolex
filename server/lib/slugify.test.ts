import { describe, it, expect } from 'vitest'
import { slugify, uniqueSlug } from './slugify'

describe('slugify', () => {
  it('lowercases and hyphenates simple titles', () => {
    expect(slugify('Chase Bliss Clean')).toBe('chase-bliss-clean')
    expect(slugify('OXI One')).toBe('oxi-one')
  })

  it('strips punctuation', () => {
    expect(slugify('Artemis - Product Manual')).toBe('artemis-product-manual')
    expect(slugify('Scaler 3 User Guide')).toBe('scaler-3-user-guide')
    expect(slugify("Faderfox's micromodul EC4")).toBe('faderfoxs-micromodul-ec4')
  })

  it('collapses runs of whitespace and dashes into single hyphens', () => {
    expect(slugify('foo   bar')).toBe('foo-bar')
    expect(slugify('foo --- bar')).toBe('foo-bar')
    expect(slugify('foo___bar')).toBe('foo-bar')
  })

  it('strips leading and trailing hyphens', () => {
    expect(slugify('-Hello-')).toBe('hello')
    expect(slugify('  spaces  ')).toBe('spaces')
  })

  it('handles unicode by transliterating or stripping', () => {
    expect(slugify('OP–XY Portable Sequencer')).toMatch(/^op[-–]?xy-portable-sequencer$/)
    expect(slugify('Café')).toMatch(/^caf[eé]?$/)
  })

  it('truncates long titles to a reasonable length', () => {
    const long = 'This is an absolutely ridiculously long manual title that nobody would ever sensibly use as a filename in a normal world'
    const result = slugify(long)
    expect(result.length).toBeLessThanOrEqual(60)
    expect(result).not.toMatch(/-$/)
  })

  it('returns "manual" for empty or unsluggable input', () => {
    expect(slugify('')).toBe('manual')
    expect(slugify('   ')).toBe('manual')
    expect(slugify('!!!')).toBe('manual')
  })

  it('preserves digits', () => {
    expect(slugify('MONOLIT 2.0 — User Manual')).toContain('2-0')
    expect(slugify('Live 12')).toBe('live-12')
  })
})

describe('uniqueSlug', () => {
  it('returns the slug as-is if not in the existing set', () => {
    expect(uniqueSlug('chase-bliss-clean', new Set())).toBe('chase-bliss-clean')
    expect(uniqueSlug('foo', new Set(['bar', 'baz']))).toBe('foo')
  })

  it('appends -2, -3 etc on collision', () => {
    expect(uniqueSlug('scaler-3-user-guide', new Set(['scaler-3-user-guide']))).toBe('scaler-3-user-guide-2')
    expect(uniqueSlug('foo', new Set(['foo', 'foo-2']))).toBe('foo-3')
    expect(uniqueSlug('foo', new Set(['foo', 'foo-2', 'foo-3']))).toBe('foo-4')
  })

  it('does not infinite loop on dense collisions', () => {
    const existing = new Set<string>()
    for (let i = 0; i < 50; i++) existing.add(i === 0 ? 'foo' : `foo-${i + 1}`)
    expect(uniqueSlug('foo', existing)).toBe('foo-51')
  })
})
