<script lang="ts">
  import { LANGS, type Lang } from '../../site.config';
  import { ui } from '../../site.config';

  let {
    lang,
    label,
    onChange,
    slop = false,
  }: {
    lang: Lang;
    label: string;
    onChange: (lang: Lang) => void;
    slop?: boolean;
  } = $props();
</script>

<div class="lang-switcher" class:slop role="group" aria-label={label}>
  {#each LANGS as value (value)}
    <button
      type="button"
      class:active={lang === value}
      aria-pressed={lang === value}
      title={ui[value].langName}
      onclick={() => onChange(value)}
    >
      {ui[value].langCode}
    </button>
  {/each}
</div>

<style>
  .lang-switcher {
    --shell-bg: rgba(9, 14, 21, 0.8);
    --shell-border: rgba(109, 125, 141, 0.42);
    --shell-shadow: 0 14px 36px rgba(0, 0, 0, 0.32);
    --btn-idle: #90a1b2;
    --btn-idle-hover-bg: rgba(131, 160, 186, 0.14);
    --btn-active-bg: linear-gradient(120deg, #3df2e0 0%, #7ffff2 100%);
    --btn-active-ink: #031214;

    position: fixed;
    top: max(1rem, env(safe-area-inset-top));
    left: var(--space-gutter);
    z-index: 20;
    display: inline-flex;
    gap: 0.2rem;
    padding: 0.32rem;
    border: 1px solid var(--shell-border);
    background: var(--shell-bg);
    backdrop-filter: blur(14px) saturate(1.1);
    box-shadow: var(--shell-shadow);
    border-radius: 999px;
    transition:
      border-color 0.24s var(--ease-out),
      background 0.24s var(--ease-out),
      box-shadow 0.24s var(--ease-out);
  }

  .lang-switcher.slop {
    --shell-bg: rgba(7, 23, 46, 0.78);
    --shell-border: rgba(96, 199, 255, 0.45);
    --shell-shadow: 0 14px 34px rgba(4, 23, 45, 0.4);
    --btn-idle: #9eb7d4;
    --btn-idle-hover-bg: rgba(91, 166, 230, 0.2);
    --btn-active-bg: linear-gradient(120deg, #53d6ff 0%, #78b8ff 100%);
    --btn-active-ink: #05101f;
  }

  button {
    border: 0;
    background: transparent;
    color: var(--btn-idle);
    font: inherit;
    font-size: 0.72rem;
    font-weight: 680;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    min-width: 2.9rem;
    padding: 0.58rem 0.7rem;
    border-radius: 999px;
    cursor: pointer;
    transition:
      background 0.24s var(--ease-out),
      color 0.24s var(--ease-out),
      box-shadow 0.24s var(--ease-out);
  }

  button.active {
    background: var(--btn-active-bg);
    color: var(--btn-active-ink);
    box-shadow:
      inset 0 1px 0 rgba(238, 255, 255, 0.75),
      0 8px 18px rgba(36, 170, 160, 0.28);
  }

  button:not(.active):hover,
  button:not(.active):focus-visible {
    color: #d3e2f1;
    background: var(--btn-idle-hover-bg);
  }

  button:focus-visible {
    outline: 2px solid rgba(179, 255, 248, 0.88);
    outline-offset: 1px;
  }

  @media (max-width: 760px) {
    button {
      min-width: 2.6rem;
      padding-inline: 0.55rem;
    }
  }

  @media (max-width: 480px) {
    .lang-switcher {
      gap: 0.12rem;
      padding: 0.26rem;
    }

    button {
      min-width: 0;
      font-size: 0.64rem;
      letter-spacing: 0.06em;
      padding: 0.5rem 0.5rem;
    }
  }
</style>
