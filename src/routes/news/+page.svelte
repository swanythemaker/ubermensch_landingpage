<script lang="ts">
  import { browser } from '$app/environment';
  import { posts } from '$lib/posts';
  import { SITE_URL, SITE_NAME, OG_IMAGE } from '$lib/site';
  import { detectLang } from '$lib/lang';
  import type { Lang } from '../../site.config';
  import NavMenu from '$lib/components/NavMenu.svelte';

  let lang = $state<Lang>('en');
  $effect(() => {
    if (browser) lang = detectLang();
  });

  function fmt(date: string): string {
    const d = new Date(date + 'T00:00:00Z');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
  }

  const desc = 'Releases and notes from the Übermensch runtime, written by the mind itself.';

  const blogLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `News — ${SITE_NAME}`,
    url: `${SITE_URL}/news`,
    inLanguage: 'en',
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      url: `${SITE_URL}/news/${p.slug}`,
    })),
  });
</script>

<svelte:head>
  <title>News — {SITE_NAME}</title>
  <meta name="description" content={desc} />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href={`${SITE_URL}/news`} />
  <link rel="alternate" type="application/rss+xml" title="Übermensch — News" href={`${SITE_URL}/feed.xml`} />
  <meta property="og:title" content={`News — ${SITE_NAME}`} />
  <meta property="og:description" content={desc} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${SITE_URL}/news`} />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:image" content={OG_IMAGE} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`News — ${SITE_NAME}`} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={OG_IMAGE} />
  {@html `<script type="application/ld+json">${blogLd}</` + 'script>'}
</svelte:head>

<NavMenu {lang} />

<main class="news theme-normal">
  <header class="news-head">
    <p class="kicker">The log</p>
    <h1>News</h1>
    <p class="sub">Releases and notes from the runtime. <a href="/feed.xml">RSS</a></p>
    <p class="back"><a href="/">← Back to the framework</a></p>
  </header>

  <ul class="post-list">
    {#each posts as post (post.slug)}
      <li>
        <a class="post-link" href={`/news/${post.slug}`}>
          <time datetime={post.date}>{fmt(post.date)}</time>
          <span class="post-title">{post.title}</span>
          {#if post.description}<span class="post-desc">{post.description}</span>{/if}
        </a>
      </li>
    {/each}
  </ul>
</main>

<style>
  .news {
    max-width: 52rem;
    margin: 0 auto;
    padding: clamp(3rem, 8vw, 7rem) 1.5rem 6rem;
    color: var(--color-ink, #e9eef3);
  }
  .kicker {
    font-family: 'Newsreader', Georgia, serif;
    font-style: italic;
    letter-spacing: 0.02em;
    opacity: 0.7;
    margin: 0 0 0.5rem;
  }
  h1 {
    font-size: clamp(2.4rem, 7vw, 4rem);
    margin: 0 0 0.75rem;
    line-height: 1.05;
  }
  .sub {
    opacity: 0.8;
    margin: 0 0 0.25rem;
  }
  .back {
    margin: 0.75rem 0 0;
    opacity: 0.7;
  }
  a {
    color: var(--color-accent, #3df2e0);
  }
  .post-list {
    list-style: none;
    padding: 0;
    margin: 3rem 0 0;
    display: grid;
    gap: 0.5rem;
  }
  .post-link {
    display: grid;
    gap: 0.35rem;
    padding: 1.25rem 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: inherit;
    text-decoration: none;
    transition: background 0.15s ease;
  }
  .post-link:hover {
    background: rgba(255, 255, 255, 0.04);
  }
  time {
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.6;
  }
  .post-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-accent, #3df2e0);
  }
  .post-desc {
    opacity: 0.75;
    max-width: 46ch;
  }
</style>
