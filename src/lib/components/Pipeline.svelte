<script lang="ts">
  import type { SiteConfig } from '../../site.config';
  import { reveal } from '../actions/reveal';

  let { pipeline }: { pipeline: SiteConfig['pipeline'] } = $props();
</script>

<section class="pipeline">
  <div class="container">
    <p class="kicker inverted" use:reveal>{pipeline.kicker}</p>
    <h2 class="fraktur name" use:reveal={{ delay: 100 }}>{pipeline.name}</h2>
    <p class="intro" use:reveal={{ delay: 200 }}>{pipeline.intro}</p>

    <ol class="steps">
      {#each pipeline.steps as step, i (step)}
        <li class="step" use:reveal={{ delay: 150 + i * 130 }}>
          <span class="index">{String(i + 1).padStart(2, '0')}</span>
          <span class="label">{step}</span>
        </li>
      {/each}
    </ol>

    <p class="closing" use:reveal={{ delay: 300 }}>{pipeline.closing}</p>
  </div>
</section>

<style>
  .pipeline {
    background: var(--color-cyan);
    color: var(--color-on-cyan);
    padding-block: var(--space-section);
    position: relative;
    overflow: hidden;
  }

  .kicker.inverted {
    color: var(--color-on-cyan-dim);
  }

  .name {
    font-size: var(--text-display);
    margin-block: 0.5rem 1.5rem;
    overflow-wrap: break-word;
  }

  .intro {
    max-width: var(--width-measure);
    color: var(--color-on-cyan-dim);
    font-weight: 480;
  }

  .steps {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1.25rem;
    margin-block: clamp(3rem, 7vh, 4.5rem);
  }

  .step {
    position: relative;
    padding-top: 1.1rem;
    transition: transform 0.28s var(--ease-out);
  }

  .step::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--color-on-cyan);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.7s var(--ease-out);
    transition-delay: var(--reveal-delay, 0ms);
  }

  .step:global(.is-revealed)::before {
    transform: scaleX(1);
  }

  .index {
    display: block;
    font-size: 0.75rem;
    font-weight: 560;
    letter-spacing: var(--tracking-kicker);
    color: var(--color-on-cyan-dim);
    font-variant-numeric: tabular-nums;
    margin-bottom: 0.4rem;
  }

  .label {
    font-weight: 620;
    font-size: 1rem;
    line-height: 1.3;
    display: block;
  }

  .closing {
    font-family: var(--font-quote);
    font-style: italic;
    font-size: var(--text-litany);
    line-height: 1.45;
    max-width: 30ch;
  }

  :global(main.theme-slop) .pipeline {
    color: #071528;
  }

  :global(main.theme-slop) .pipeline::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(360px 140px at 16% 8%, rgba(255, 255, 255, 0.5), transparent 68%),
      linear-gradient(90deg, rgba(255, 255, 255, 0.12), transparent 50%);
    pointer-events: none;
  }

  :global(main.theme-slop) .intro {
    color: rgba(6, 18, 38, 0.82);
    max-width: 70ch;
  }

  :global(main.theme-slop) .steps {
    grid-template-columns: repeat(7, minmax(120px, 1fr));
    gap: 0.9rem;
  }

  :global(main.theme-slop) .step {
    border: 1px solid rgba(6, 21, 43, 0.16);
    border-radius: 14px;
    padding: 1rem 0.9rem 0.95rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(236, 248, 255, 0.26));
    box-shadow:
      0 7px 20px rgba(7, 28, 53, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.45);
  }

  :global(main.theme-slop) .step:hover {
    transform: translateY(-3px);
  }

  :global(main.theme-slop) .step::before {
    display: none;
  }

  :global(main.theme-slop) .index {
    color: rgba(5, 25, 50, 0.5);
    font-weight: 700;
  }

  :global(main.theme-slop) .label {
    font-size: 0.98rem;
    font-weight: 640;
  }

  :global(main.theme-slop) .closing {
    font-family: var(--font-body);
    font-style: normal;
    font-size: clamp(1.05rem, 1.8vw, 1.35rem);
    max-width: 42ch;
  }

  @media (max-width: 980px) {
    .steps {
      grid-template-columns: 1fr;
      gap: 0;
      border-left: 2px solid var(--color-on-cyan-line);
    }
    .step {
      padding: 0.65rem 0 0.65rem 1.25rem;
      display: flex;
      align-items: baseline;
      gap: 0.9rem;
    }
    .step::before {
      width: 2px;
      height: 100%;
      transform: scaleY(0);
      transform-origin: top;
    }
    .step:global(.is-revealed)::before {
      transform: scaleY(1);
    }
    .index {
      margin-bottom: 0;
    }

    :global(main.theme-slop) .steps {
      grid-template-columns: 1fr;
      border-left: 0;
    }

    :global(main.theme-slop) .step {
      display: block;
      padding: 0.95rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .step::before {
      transform: none !important;
      transition: none;
    }
  }
</style>
