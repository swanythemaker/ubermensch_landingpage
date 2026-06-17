<script lang="ts">
  import type { SiteConfig } from '../../site.config';
  import { reveal } from '../actions/reveal';

  let { quote }: { quote: SiteConfig['quote'] } = $props();
</script>

<section class="quote">
  <div class="container">
    <figure use:reveal>
      <i class="rule" aria-hidden="true"></i>
      <blockquote>{quote.text}</blockquote>
      <i class="rule rule-end" aria-hidden="true"></i>
      <figcaption>{quote.attribution}</figcaption>
    </figure>
  </div>
</section>

<style>
  .quote {
    padding-block: var(--space-section);
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.25rem;
  }

  .rule {
    display: block;
    width: 72px;
    height: 1px;
    background: var(--color-cyan);
  }

  blockquote {
    font-family: var(--font-quote);
    font-style: italic;
    font-weight: 320;
    font-size: var(--text-quote);
    line-height: 1.5;
    max-width: 30ch;
  }

  .rule-end {
    order: 4;
  }

  figcaption {
    order: 3;
    font-size: var(--text-kicker);
    font-weight: 560;
    letter-spacing: var(--tracking-kicker);
    text-transform: uppercase;
    color: var(--color-ink-dim);
    margin-top: -0.75rem;
  }

  :global(main.theme-slop) figure {
    align-items: flex-start;
    text-align: left;
    border: 1px solid var(--color-line);
    border-radius: 18px;
    padding: clamp(1.3rem, 2.6vw, 2rem);
    gap: 1.2rem;
    background: linear-gradient(180deg, rgba(10, 22, 44, 0.65), rgba(8, 18, 35, 0.52));
  }

  :global(main.theme-slop) .rule {
    width: 108px;
    background: linear-gradient(90deg, #5dddff, #8bb8ff);
  }

  :global(main.theme-slop) .rule-end {
    display: none;
  }

  :global(main.theme-slop) blockquote {
    font-family: var(--font-body);
    font-style: normal;
    font-weight: 580;
    font-size: clamp(1.06rem, 2vw, 1.45rem);
    line-height: 1.52;
    max-width: 48ch;
  }

  :global(main.theme-slop) figcaption {
    margin-top: 0;
    color: #8cccf1;
  }
</style>
