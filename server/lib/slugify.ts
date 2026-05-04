const MAX_SLUG_LENGTH = 60

export function slugify(input: string): string {
  const slug = input
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  if (!slug) return 'manual'

  if (slug.length <= MAX_SLUG_LENGTH) return slug

  return slug.slice(0, MAX_SLUG_LENGTH).replace(/-+$/, '')
}

export function uniqueSlug(slug: string, existing: ReadonlySet<string>): string {
  if (!existing.has(slug)) return slug

  let n = 2
  while (existing.has(`${slug}-${n}`)) n++
  return `${slug}-${n}`
}
