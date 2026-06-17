<script lang="ts">
  import type { LitanyLine } from '../../site.config';
  import { reveal } from '../actions/reveal';

  let { lines }: { lines: LitanyLine[] } = $props();

  function split(line: LitanyLine): [string, string, string] {
    const i = line.text.indexOf(line.em);
    if (i === -1) return [line.text, '', ''];
    return [line.text.slice(0, i), line.em, line.text.slice(i + line.em.length)];
  }
</script>

<section class="litany">
  <div class="container">
    {#each lines as line, i (line.text)}
      {@const [pre, em, post] = split(line)}
      <p class="line" use:reveal={{ delay: i * 110 }}>
        {pre}<em>{em}</em>{post}
      </p>
    {/each}
  </div>
</section>

<style>
  .litany {
    padding-block: var(--space-section);
    border-top: 1px solid var(--color-line-soft);
  }

  .container {
    display: grid;
    gap: 0.15rem;
  }

  .line {
    font-family: var(--font-quote);
    font-style: italic;
    font-weight: 340;
    font-size: var(--text-litany);
    line-height: 1.55;
    color: var(--color-ink);
  }

  .line em {
    color: var(--color-cyan);
    font-style: inherit;
  }

  :global(main.theme-slop) .container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;
  }

  :global(main.theme-slop) .line {
    font-family: var(--font-body);
    font-size: clamp(1rem, 1.8vw, 1.24rem);
    font-style: normal;
    line-height: 1.4;
    border: 1px solid var(--color-line-soft);
    border-radius: 13px;
    padding: 1rem 1.1rem;
    background: linear-gradient(180deg, rgba(12, 23, 45, 0.62), rgba(8, 19, 37, 0.5));
    transition:
      border-color 0.22s var(--ease-out),
      transform 0.22s var(--ease-out),
      background 0.22s var(--ease-out);
  }

  :global(main.theme-slop) .line:hover {
    border-color: var(--color-line);
    transform: translateY(-2px);
    background: linear-gradient(180deg, rgba(13, 28, 52, 0.74), rgba(9, 21, 41, 0.6));
  }

  :global(main.theme-slop) .line em {
    font-weight: 700;
  }

  @media (max-width: 760px) {
    :global(main.theme-slop) .container {
      grid-template-columns: 1fr;
    }
  }
</style>
