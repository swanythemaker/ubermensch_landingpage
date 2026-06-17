<script lang="ts">
  import type { SiteConfig } from '../../site.config';
  import { reveal } from '../actions/reveal';

  let { footer }: { footer: SiteConfig['footer'] } = $props();
</script>

<footer class="footer">
  <div class="container">
    <div class="top" use:reveal>
      <div class="refusals">
        {#each footer.litany as line (line)}
          <p>{line}</p>
        {/each}
      </div>
      <a class="cta" href={footer.ctaHref}>
        {footer.ctaLabel}
        <span aria-hidden="true">→</span>
      </a>
    </div>

    <div class="bottom">
      <p class="stack">{footer.stack}</p>
      <p class="fineprint">{footer.fineprint}</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--color-line);
    padding-block: clamp(4rem, 10vh, 7rem) 2.5rem;
  }

  .top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
    margin-bottom: clamp(4rem, 10vh, 6rem);
  }

  .refusals p {
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 560;
    line-height: 1.7;
  }

  .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    border: 1px solid var(--color-cyan);
    color: var(--color-cyan);
    text-decoration: none;
    font-size: var(--text-kicker);
    font-weight: 600;
    letter-spacing: var(--tracking-kicker);
    text-transform: uppercase;
    padding: 1.1rem 2rem;
    transition:
      background 0.3s var(--ease-out),
      color 0.3s var(--ease-out);
  }

  .cta span {
    transition: transform 0.3s var(--ease-out);
  }

  .cta:hover,
  .cta:focus-visible {
    background: var(--color-cyan);
    color: var(--color-void);
  }

  .cta:hover span {
    transform: translateX(4px);
  }

  .bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    border-top: 1px solid var(--color-line-soft);
    padding-top: 1.5rem;
  }

  .stack {
    font-size: var(--text-small);
    color: var(--color-ink-dim);
  }

  .fineprint {
    font-size: var(--text-small);
    color: var(--color-ink-ghost);
  }

  :global(main.theme-slop) .footer {
    border-top: 0;
    padding-top: clamp(3rem, 8vh, 5rem);
  }

  :global(main.theme-slop) .container {
    border: 1px solid var(--color-line);
    border-radius: 22px;
    padding-top: clamp(1.3rem, 2.6vw, 2rem);
    padding-bottom: clamp(1.2rem, 2.3vw, 1.7rem);
    background: linear-gradient(180deg, rgba(10, 21, 40, 0.65), rgba(8, 18, 33, 0.45));
    box-shadow: 0 18px 40px rgba(2, 10, 24, 0.25);
  }

  :global(main.theme-slop) .top {
    margin-bottom: clamp(2rem, 6vh, 3rem);
    gap: 1.2rem;
  }

  :global(main.theme-slop) .refusals {
    display: grid;
    gap: 0.5rem;
  }

  :global(main.theme-slop) .refusals p {
    font-size: clamp(1rem, 1.5vw, 1.12rem);
    line-height: 1.38;
    color: #d8ecff;
  }

  :global(main.theme-slop) .cta {
    background: linear-gradient(120deg, rgba(83, 214, 255, 0.22), rgba(122, 180, 255, 0.18));
    color: #dcf4ff;
    border-color: rgba(108, 213, 255, 0.55);
    padding: 0.95rem 1.5rem;
  }

  :global(main.theme-slop) .bottom {
    gap: 0.6rem;
  }

  :global(main.theme-slop) .stack,
  :global(main.theme-slop) .fineprint {
    color: #95b1cf;
  }
</style>
