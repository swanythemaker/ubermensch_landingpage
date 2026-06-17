<script lang="ts">
  import { SITE_URL, SITE_NAME } from '$lib/site';

  let { data } = $props();
  let post = $derived(data.post);

  let url = $derived(`${SITE_URL}/news/${post.slug}`);

  function fmt(date: string): string {
    const d = new Date(date + 'T00:00:00Z');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
  }

  let jsonLd = $derived(
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: post.lang,
      author: { '@type': 'Organization', name: post.author },
      publisher: { '@type': 'Organization', name: SITE_NAME },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
    }),
  );
</script>

<svelte:head>
  <title>{post.title} — {SITE_NAME}</title>
  <meta name="description" content={post.description} />
  <meta name="author" content={post.author} />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href={url} />
  <link rel="alternate" type="application/rss+xml" title="Übermensch — News" href={`${SITE_URL}/feed.xml`} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.description} />
  <meta property="og:url" content={url} />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:locale" content="en_US" />
  <meta property="article:published_time" content={post.date} />
  <meta property="article:modified_time" content={post.date} />
  <meta property="article:author" content={post.author} />
  <meta property="article:section" content="News" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={post.title} />
  <meta name="twitter:description" content={post.description} />
  {@html `<script type="application/ld+json">${jsonLd}</` + 'script>'}
</svelte:head>

<main class="article theme-normal">
  <p class="back"><a href="/news">← News</a></p>
  <article>
    <header>
      <time datetime={post.date}>{fmt(post.date)}</time>
      <h1>{post.title}</h1>
    </header>
    <div class="body">
      {@html post.html}
    </div>
  </article>
  <footer class="article-foot">
    <a href="/news">← All news</a>
    <a href="/">The framework →</a>
  </footer>
</main>

<style>
  .article {
    max-width: 44rem;
    margin: 0 auto;
    padding: clamp(2.5rem, 7vw, 6rem) 1.5rem 6rem;
    color: var(--color-ink, #e9eef3);
  }
  .back {
    opacity: 0.7;
    margin: 0 0 2rem;
  }
  a {
    color: var(--color-accent, #3df2e0);
  }
  time {
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.6;
  }
  h1 {
    font-size: clamp(2rem, 6vw, 3.2rem);
    line-height: 1.08;
    margin: 0.5rem 0 2.5rem;
  }
  .body :global(p) {
    line-height: 1.7;
    margin: 0 0 1.4rem;
    font-size: 1.08rem;
  }
  .body :global(h2) {
    font-size: 1.6rem;
    margin: 2.5rem 0 1rem;
  }
  .body :global(ul) {
    line-height: 1.7;
    padding-left: 1.2rem;
  }
  .body :global(li) {
    margin: 0 0 0.6rem;
  }
  .body :global(code) {
    background: rgba(255, 255, 255, 0.08);
    padding: 0.1em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
  }
  .body :global(a) {
    color: var(--color-accent, #3df2e0);
  }
  .article-foot {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
</style>
