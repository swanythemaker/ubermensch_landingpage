<script lang="ts">
  import type { SiteConfig } from '../../site.config';
  import { reveal } from '../actions/reveal';

  let { enemy }: { enemy: SiteConfig['enemy'] } = $props();
</script>

<section class="enemy">
  <div class="container grid">
    <div class="problem">
      <p class="kicker" use:reveal>{enemy.kicker}</p>
      <h2 use:reveal={{ delay: 100 }}>{enemy.lead}</h2>
      <ul>
        {#each enemy.ghosts as ghost, i (ghost)}
          <li use:reveal={{ delay: 200 + i * 90 }}>{ghost}</li>
        {/each}
      </ul>
    </div>
    <div class="counter" use:reveal={{ delay: 250 }}>
      <h3>{enemy.counterTitle}</h3>
      <p>{enemy.counter}</p>
    </div>
  </div>
</section>

<style>
  .enemy {
    padding-block: var(--space-section);
    border-top: 1px solid var(--color-line-soft);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2.5rem, 6vw, 6rem);
    align-items: start;
  }

  h2 {
    font-size: var(--text-title);
    font-weight: 600;
    line-height: 1.3;
    margin-block: 1.25rem 2rem;
    max-width: 26ch;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: clamp(1.1rem, 1.8vw, 1.35rem);
    color: var(--color-ink-ghost);
    line-height: 1.9;
  }

  .counter {
    border-left: 1px solid var(--color-line);
    padding-left: clamp(1.5rem, 3vw, 2.5rem);
    align-self: center;
  }

  h3 {
    font-size: var(--text-title);
    font-weight: 600;
    line-height: 1.3;
    color: var(--color-cyan);
    margin-bottom: 1.25rem;
    max-width: 24ch;
  }

  .counter p {
    color: var(--color-ink-dim);
    max-width: 46ch;
  }

  :global(main.theme-slop) .grid {
    grid-template-columns: 1.08fr 0.92fr;
    gap: clamp(1.5rem, 3vw, 2.6rem);
  }

  :global(main.theme-slop) h2 {
    font-size: clamp(1.4rem, 2.8vw, 2.05rem);
    max-width: 24ch;
  }

  :global(main.theme-slop) ul {
    display: grid;
    gap: 0.7rem;
  }

  :global(main.theme-slop) li {
    font-size: clamp(0.98rem, 1.45vw, 1.1rem);
    line-height: 1.35;
    color: var(--color-ink-dim);
    border: 1px solid var(--color-line-soft);
    border-radius: 12px;
    padding: 0.8rem 0.95rem;
    background: linear-gradient(180deg, rgba(9, 19, 37, 0.58), rgba(8, 17, 33, 0.44));
  }

  :global(main.theme-slop) .counter {
    border-left: 0;
    border: 1px solid var(--color-line);
    border-radius: 16px;
    padding: 1.2rem 1.3rem;
    background: radial-gradient(220px 120px at 80% 0%, rgba(95, 221, 255, 0.08), transparent 72%);
  }

  :global(main.theme-slop) h3 {
    color: #86d8ff;
    font-size: clamp(1.2rem, 2vw, 1.55rem);
    max-width: none;
  }

  :global(main.theme-slop) .counter p {
    font-size: 0.99rem;
    line-height: 1.62;
  }

  @media (max-width: 760px) {
    .grid {
      grid-template-columns: 1fr;
    }
    :global(main.theme-slop) .grid {
      grid-template-columns: 1fr;
    }
    :global(main.theme-slop) .counter {
      padding: 1rem;
    }
  }
</style>
