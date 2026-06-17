<script lang="ts">
  import type { SiteMode } from '../../site.config';

  let {
    mode,
    labels,
    label,
    onSelect,
  }: {
    mode: SiteMode;
    labels: Record<SiteMode, string>;
    label: string;
    onSelect: (mode: SiteMode) => void;
  } = $props();

  const order: SiteMode[] = ['slop', 'normal'];
</script>

<div class="mode-toggle" class:slop={mode === 'slop'} role="group" aria-label={label}>
  {#each order as value (value)}
    <button
      type="button"
      class:active={mode === value}
      aria-pressed={mode === value}
      onclick={() => onSelect(value)}
    >
      {labels[value]}
    </button>
  {/each}
</div>

<style>
  .mode-toggle {
    --toggle-shell-bg: rgba(9, 14, 21, 0.8);
    --toggle-shell-border: rgba(109, 125, 141, 0.42);
    --toggle-shell-shadow: 0 14px 36px rgba(0, 0, 0, 0.32);
    --toggle-btn-idle: #90a1b2;
    --toggle-btn-idle-hover-bg: rgba(131, 160, 186, 0.14);
    --toggle-btn-active-bg: linear-gradient(120deg, #3df2e0 0%, #7ffff2 100%);
    --toggle-btn-active-ink: #031214;

    position: fixed;
    top: max(1rem, env(safe-area-inset-top));
    right: var(--space-gutter);
    z-index: 20;
    display: inline-flex;
    gap: 0.35rem;
    padding: 0.32rem;
    border: 1px solid var(--toggle-shell-border);
    background: var(--toggle-shell-bg);
    backdrop-filter: blur(14px) saturate(1.1);
    box-shadow: var(--toggle-shell-shadow);
    border-radius: 999px;
    transition:
      border-color 0.24s var(--ease-out),
      background 0.24s var(--ease-out),
      box-shadow 0.24s var(--ease-out);
  }

  .mode-toggle.slop {
    --toggle-shell-bg: rgba(7, 23, 46, 0.78);
    --toggle-shell-border: rgba(96, 199, 255, 0.45);
    --toggle-shell-shadow: 0 14px 34px rgba(4, 23, 45, 0.4);
    --toggle-btn-idle: #9eb7d4;
    --toggle-btn-idle-hover-bg: rgba(91, 166, 230, 0.2);
    --toggle-btn-active-bg: linear-gradient(120deg, #53d6ff 0%, #78b8ff 100%);
    --toggle-btn-active-ink: #05101f;
  }

  .mode-toggle.slop button.active {
    box-shadow:
      inset 0 1px 0 rgba(220, 244, 255, 0.62),
      0 8px 20px rgba(55, 150, 230, 0.35);
  }

  button {
    border: 0;
    background: transparent;
    color: var(--toggle-btn-idle);
    font: inherit;
    font-size: 0.72rem;
    font-weight: 680;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    min-width: 5.4rem;
    padding: 0.58rem 0.88rem;
    border-radius: 999px;
    cursor: pointer;
    transition:
      background 0.24s var(--ease-out),
      color 0.24s var(--ease-out),
      transform 0.24s var(--ease-out),
      box-shadow 0.24s var(--ease-out);
  }

  button.active {
    background: var(--toggle-btn-active-bg);
    color: var(--toggle-btn-active-ink);
    box-shadow:
      inset 0 1px 0 rgba(238, 255, 255, 0.75),
      0 8px 18px rgba(36, 170, 160, 0.28);
  }

  button:not(.active):hover,
  button:not(.active):focus-visible {
    color: #d3e2f1;
    background: var(--toggle-btn-idle-hover-bg);
  }

  button:focus-visible {
    outline: 2px solid rgba(179, 255, 248, 0.88);
    outline-offset: 1px;
  }

  @media (max-width: 760px) {
    button {
      min-width: 4.6rem;
      padding-inline: 0.7rem;
    }
  }

  @media (max-width: 480px) {
    .mode-toggle {
      gap: 0.2rem;
      padding: 0.26rem;
    }

    button {
      min-width: 0;
      font-size: 0.64rem;
      letter-spacing: 0.1em;
      padding: 0.5rem 0.62rem;
    }
  }
</style>
