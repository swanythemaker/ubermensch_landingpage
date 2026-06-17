<script lang="ts">
  import type { Pillar, SiteConfig } from '../../site.config';
  import { reveal } from '../actions/reveal';
  import Cycle from './Cycle.svelte';

  let {
    kicker,
    pillars,
    cycle,
  }: { kicker: string; pillars: Pillar[]; cycle: SiteConfig['cycle'] } = $props();
</script>

<section class="pillars">
  <div class="container">
    <p class="kicker" use:reveal>{kicker}</p>

    {#each pillars as pillar (pillar.number)}
      <article class="pillar">
        <header class="meta" use:reveal>
          <span class="number">{pillar.number}</span>
          <h2 class="fraktur name">{pillar.name}</h2>
        </header>

        <div class="content">
          <div class="text" use:reveal={{ delay: 120 }}>
            <h3>{pillar.title}</h3>
            {#each pillar.paragraphs as paragraph (paragraph)}
              <p>{paragraph}</p>
            {/each}
            {#if pillar.aside}
              <p class="aside">{pillar.aside}</p>
            {/if}
          </div>
          {#if pillar.showCycle}
            <div class="visual" use:reveal={{ delay: 240 }}>
              <Cycle {cycle} />
            </div>
          {/if}
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  .pillars {
    padding-block: var(--space-section);
    border-top: 1px solid var(--color-line-soft);
  }

  .pillar {
    display: grid;
    grid-template-columns: minmax(180px, 16rem) 1fr;
    gap: clamp(1.5rem, 4vw, 4rem);
    padding-block: clamp(3rem, 7vh, 5rem);
  }

  .pillar + .pillar {
    border-top: 1px solid var(--color-line-soft);
  }

  .kicker {
    margin-bottom: 1rem;
  }

  .number {
    display: block;
    font-size: var(--text-small);
    font-weight: 560;
    letter-spacing: var(--tracking-kicker);
    color: var(--color-cyan);
    font-variant-numeric: tabular-nums;
    margin-bottom: 0.75rem;
  }

  .name {
    font-size: var(--text-display);
    overflow-wrap: break-word;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(2rem, 4vw, 3.5rem);
    align-items: center;
  }

  .content:has(.visual) {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  h3 {
    font-size: var(--text-title);
    font-weight: 600;
    line-height: 1.3;
    max-width: 30ch;
    margin-bottom: 1.5rem;
  }

  .text p {
    color: var(--color-ink-dim);
    max-width: var(--width-measure);
  }

  .text p + p {
    margin-top: 1.1rem;
  }

  .aside {
    font-family: var(--font-quote);
    font-style: italic;
    font-size: 1.25rem;
    line-height: 1.55;
    color: var(--color-ink) !important;
    border-left: 1px solid var(--color-cyan);
    padding-left: 1.25rem;
    margin-top: 1.75rem !important;
    max-width: 42ch !important;
  }

  .visual {
    justify-self: center;
  }

  :global(main.theme-slop) .pillar {
    grid-template-columns: 1fr;
    gap: 1.15rem;
    align-content: start;
    align-self: start;
    border: 1px solid var(--color-line-soft);
    border-radius: 18px;
    padding: clamp(1.15rem, 2.5vw, 1.6rem);
    background: linear-gradient(180deg, rgba(10, 21, 40, 0.52), rgba(8, 18, 34, 0.42));
  }

  :global(main.theme-slop) .container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  :global(main.theme-slop) .kicker {
    grid-column: 1 / -1;
  }

  :global(main.theme-slop) .pillar + .pillar {
    margin-top: 0;
  }

  :global(main.theme-slop) .meta {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  :global(main.theme-slop) .number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.1rem;
    height: 2.1rem;
    margin-bottom: 0;
    background: linear-gradient(130deg, rgba(84, 212, 255, 0.2), rgba(111, 180, 255, 0.2));
    border: 1px solid var(--color-line);
    border-radius: 999px;
    color: #95d8ff;
  }

  :global(main.theme-slop) .name {
    font-size: clamp(1.3rem, 2.4vw, 2rem);
  }

  :global(main.theme-slop) .content:has(.visual) {
    grid-template-columns: 1fr;
  }

  :global(main.theme-slop) .content {
    align-items: start;
  }

  :global(main.theme-slop) h3 {
    font-size: clamp(1.08rem, 2.1vw, 1.5rem);
    margin-bottom: 1.05rem;
    max-width: 34ch;
  }

  :global(main.theme-slop) .text p {
    font-size: 0.99rem;
    line-height: 1.68;
    max-width: 70ch;
  }

  :global(main.theme-slop) .aside {
    border-left: 0;
    border: 1px dashed var(--color-line);
    border-radius: 12px;
    padding: 0.95rem 1rem;
    font-family: var(--font-body);
    font-size: 0.98rem;
    color: #bde7ff !important;
    background: rgba(9, 20, 38, 0.46);
    max-width: 64ch !important;
  }

  :global(main.theme-slop) .visual {
    justify-self: start;
    margin-top: 0.4rem;
  }

  @media (max-width: 900px) {
    .pillar {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .content:has(.visual) {
      grid-template-columns: 1fr;
    }
    :global(main.theme-slop) .container {
      grid-template-columns: 1fr;
    }
  }
</style>
