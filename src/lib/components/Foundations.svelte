<script lang="ts">
  import type { FoundationsSection } from '../../site.config';
  import { reveal } from '../actions/reveal';

  let { foundations }: { foundations: FoundationsSection } = $props();
</script>

<section class="foundations">
  <div class="container">
    <p class="kicker" use:reveal>{foundations.kicker}</p>
    <h2 use:reveal={{ delay: 80 }}>{foundations.title}</h2>
    <p class="intro" use:reveal={{ delay: 160 }}>{foundations.intro}</p>

    <div class="layers">
      {#each foundations.layers as layer, i (layer.name)}
        <article class="layer" use:reveal={{ delay: 120 + i * 90 }}>
          <header>
            <h3>{layer.name}</h3>
            <span class="tag">{layer.tag}</span>
          </header>
          <p>{layer.body}</p>
        </article>
      {/each}
    </div>

    <div class="grid">
      <div class="col" use:reveal>
        <p class="sub">{foundations.storageLabel}</p>
        <dl>
          {#each foundations.storage as item (item.name)}
            <dt class="mono">{item.name}</dt>
            <dd>{item.body}</dd>
          {/each}
        </dl>
      </div>
      <div class="col" use:reveal={{ delay: 120 }}>
        <p class="sub">{foundations.stackLabel}</p>
        <dl>
          {#each foundations.stack as item (item.label)}
            <dt>{item.label}</dt>
            <dd>{item.body}</dd>
          {/each}
        </dl>
      </div>
    </div>
  </div>
</section>

<style>
  .foundations {
    padding-block: var(--space-section);
    border-top: 1px solid var(--color-line-soft);
  }

  h2 {
    font-size: var(--text-title);
    font-weight: 600;
    line-height: 1.3;
    max-width: 26ch;
    margin-block: 0.8rem 1.1rem;
  }

  .intro {
    color: var(--color-ink-dim);
    max-width: var(--width-measure);
  }

  .layers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-top: clamp(2.5rem, 5vh, 4rem);
  }

  .layer {
    border: 1px solid var(--color-line-soft);
    border-radius: 14px;
    padding: clamp(1.25rem, 2vw, 1.6rem);
    background: rgba(230, 237, 242, 0.012);
  }

  .layer header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.6rem;
    margin-bottom: 0.85rem;
  }

  .layer h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .tag {
    font-size: var(--text-small);
    letter-spacing: 0.04em;
    color: var(--color-cyan);
    white-space: nowrap;
  }

  .layer p {
    color: var(--color-ink-dim);
    font-size: 0.97rem;
    line-height: 1.62;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 4vw, 3.5rem);
    margin-top: clamp(2.5rem, 5vh, 4rem);
  }

  .sub {
    font-size: var(--text-small);
    letter-spacing: var(--tracking-kicker);
    text-transform: uppercase;
    color: var(--color-ink-dim);
    margin-bottom: 1.15rem;
  }

  dl {
    display: grid;
    gap: 1.15rem;
  }

  dt {
    font-weight: 600;
    color: var(--color-ink);
    margin-bottom: 0.3rem;
  }

  dt.mono {
    font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
    font-weight: 500;
    color: var(--color-cyan);
    font-size: 0.95rem;
  }

  dd {
    color: var(--color-ink-dim);
    font-size: 0.97rem;
    line-height: 1.62;
  }

  @media (max-width: 900px) {
    .layers {
      grid-template-columns: 1fr;
    }
    .grid {
      grid-template-columns: 1fr;
      gap: 2.25rem;
    }
  }
</style>
