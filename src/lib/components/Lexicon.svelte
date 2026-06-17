<script lang="ts">
  import type { SiteConfig } from '../../site.config';
  import { reveal } from '../actions/reveal';

  let { lexicon }: { lexicon: SiteConfig['lexicon'] } = $props();
</script>

<section class="lexicon">
  <div class="container">
    <p class="kicker" use:reveal>{lexicon.kicker}</p>
    <h2 use:reveal={{ delay: 100 }}>{lexicon.title}</h2>

    <dl class="grid">
      {#each lexicon.entries as entry, i (entry.term)}
        <div class="entry" use:reveal={{ delay: (i % 2) * 110 }}>
          <dt class="fraktur">{entry.term}</dt>
          <dd>{entry.meaning}</dd>
        </div>
      {/each}
    </dl>
  </div>
</section>

<style>
  .lexicon {
    padding-block: var(--space-section);
  }

  h2 {
    font-size: var(--text-title);
    font-weight: 600;
    line-height: 1.3;
    margin-block: 1.25rem 3rem;
    max-width: 30ch;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
    column-gap: clamp(2rem, 5vw, 4rem);
    row-gap: 0.4rem;
  }

  .entry {
    border-top: 1px solid var(--color-line-soft);
    padding-block: 1.5rem;
  }

  dt {
    font-size: clamp(1.5rem, 2.4vw, 1.9rem);
    transition: color 0.35s var(--ease-out);
  }

  .entry:hover dt {
    color: var(--color-cyan);
  }

  dd {
    margin-top: 0.4rem;
    color: var(--color-ink-dim);
    font-size: var(--text-small);
    max-width: 44ch;
  }

  :global(main.theme-slop) h2 {
    margin-bottom: 2rem;
    max-width: 34ch;
  }

  :global(main.theme-slop) .grid {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
    gap: 0.75rem;
  }

  :global(main.theme-slop) .entry {
    border-top: 0;
    border: 1px solid var(--color-line-soft);
    border-radius: 14px;
    padding: 1rem;
    background: linear-gradient(180deg, rgba(10, 20, 38, 0.52), rgba(8, 16, 31, 0.38));
    transition:
      border-color 0.24s var(--ease-out),
      transform 0.24s var(--ease-out),
      box-shadow 0.24s var(--ease-out);
  }

  :global(main.theme-slop) .entry:hover {
    transform: translateY(-3px);
    border-color: var(--color-line);
    box-shadow: 0 12px 24px rgba(3, 10, 23, 0.3);
  }

  :global(main.theme-slop) dt {
    font-size: clamp(1.15rem, 2vw, 1.5rem);
    font-weight: 670;
  }

  :global(main.theme-slop) dd {
    font-size: 0.87rem;
    line-height: 1.58;
  }
</style>
