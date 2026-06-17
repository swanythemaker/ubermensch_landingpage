import { marked } from 'marked';

export interface Post {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  description: string;
  author: string;
  lang: string;
  html: string;
}

const files = import.meta.glob('/src/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    value = value.replace(/^["']|["']$/g, '');
    if (key) meta[key] = value;
  }
  return { meta, body: match[2] };
}

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '');
}

marked.setOptions({ gfm: true, breaks: false });

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw);
    return {
      slug: meta.slug || slugFromPath(path),
      title: meta.title || 'Untitled',
      date: meta.date || '1970-01-01',
      description: meta.description || '',
      author: meta.author || 'Übermensch',
      lang: meta.lang || 'en',
      html: marked.parse(body.trim()) as string,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
