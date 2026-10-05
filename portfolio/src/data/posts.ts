export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  draft: boolean
  body: string
  minutes: number
}

const files = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parse(path: string, raw: string): Post {
  const slug = path.split('/').pop()!.replace(/\.md$/, '')
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  const meta: Record<string, string> = {}
  let body = raw
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const i = line.indexOf(':')
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim()
    }
    body = match[2]
  }
  body = body.replace(/<!--[\s\S]*?-->/g, '').trim()
  const words = body.split(/\s+/).filter(Boolean).length
  return {
    slug,
    title: meta.title ?? slug,
    date: meta.date ?? '',
    excerpt: meta.excerpt ?? '',
    draft: meta.draft === 'true' || body.length === 0,
    body,
    minutes: Math.max(1, Math.round(words / 220)),
  }
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug: string) => posts.find((p) => p.slug === slug && !p.draft)
