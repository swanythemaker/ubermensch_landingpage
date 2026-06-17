<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/state';
  import { ui, LANGS, type Lang, type SiteMode } from '../../site.config';

  let {
    lang,
    slop = false,
    onLangChange,
    mode,
    onModeSelect,
  }: {
    lang: Lang;
    slop?: boolean;
    onLangChange?: (lang: Lang) => void;
    mode?: SiteMode;
    onModeSelect?: (mode: SiteMode) => void;
  } = $props();

  let t = $derived(ui[lang]);
  let path = $derived(page.url.pathname);
  let hasUtilities = $derived(!!onLangChange && !!onModeSelect);

  let items = $derived([
    { href: '/', label: t.nav.home, active: path === '/' },
    { href: '/news', label: t.nav.news, active: path === '/news' || path.startsWith('/news/') },
    { href: '/status', label: t.nav.status, active: path === '/status' },
  ]);

  const modeOrder: SiteMode[] = ['normal', 'slop'];

  let scrolled = $state(false);
  let menuOpen = $state(false);

  $effect(() => {
    if (!browser) return;
    const onScroll = () => (scrolled = window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  $effect(() => {
    if (!browser) return;
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  });

  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape' && menuOpen) menuOpen = false;
  }

  function go(fn: (() => void) | undefined) {
    fn?.();
    menuOpen = false;
  }
</script>

<svelte:window onkeydown={onKey} />

<header class="hdr" class:slop class:scrolled aria-label="Site">
  <div class="hdr-inner">
    <nav class="nav nav-desktop" aria-label="Primary">
      {#each items as item (item.href)}
        <a
          class="nav-link"
          class:active={item.active}
          href={item.href}
          aria-current={item.active ? 'page' : undefined}
          data-sveltekit-preload-data="hover"
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <div class="util">
      {#if hasUtilities}
        <div class="seg lang" role="group" aria-label={t.langSwitcherLabel}>
          {#each LANGS as value (value)}
            <button
              type="button"
              class:active={lang === value}
              aria-pressed={lang === value}
              title={ui[value].langName}
              onclick={() => onLangChange?.(value)}
            >
              {ui[value].langCode}
            </button>
          {/each}
        </div>

        <span class="divider" aria-hidden="true"></span>

        <div class="seg mode" role="group" aria-label={t.modeToggleLabel}>
          {#each modeOrder as value (value)}
            <button
              type="button"
              class:active={mode === value}
              aria-pressed={mode === value}
              onclick={() => onModeSelect?.(value)}
            >
              {t.modeLabels[value]}
            </button>
          {/each}
        </div>
      {/if}

      <button
        type="button"
        class="menu-btn"
        aria-label={menuOpen ? t.menuClose : t.menuOpen}
        aria-expanded={menuOpen}
        onclick={() => (menuOpen = !menuOpen)}
      >
        <span class="bars" class:open={menuOpen}><i></i><i></i></span>
      </button>
    </div>
  </div>
</header>

{#if menuOpen}
  <button class="scrim" aria-label={t.menuClose} onclick={() => (menuOpen = false)}></button>
{/if}

<aside class="sheet" class:slop class:open={menuOpen} aria-hidden={!menuOpen}>
  <nav class="nav-mobile" aria-label="Primary">
    {#each items as item (item.href)}
      <a
        class="nav-link"
        class:active={item.active}
        href={item.href}
        aria-current={item.active ? 'page' : undefined}
        data-sveltekit-preload-data="hover"
        onclick={() => (menuOpen = false)}
      >
        {item.label}
      </a>
    {/each}
  </nav>

  {#if hasUtilities}
    <div class="sheet-utils">
      <div class="sheet-row">
        <span class="sheet-label">{t.langSwitcherLabel}</span>
        <div class="seg lang" role="group" aria-label={t.langSwitcherLabel}>
          {#each LANGS as value (value)}
            <button
              type="button"
              class:active={lang === value}
              aria-pressed={lang === value}
              onclick={() => go(() => onLangChange?.(value))}
            >
              {ui[value].langCode}
            </button>
          {/each}
        </div>
      </div>

      <div class="sheet-row">
        <span class="sheet-label">{t.modeToggleLabel}</span>
        <div class="seg mode" role="group" aria-label={t.modeToggleLabel}>
          {#each modeOrder as value (value)}
            <button
              type="button"
              class:active={mode === value}
              aria-pressed={mode === value}
              onclick={() => go(() => onModeSelect?.(value))}
            >
              {t.modeLabels[value]}
            </button>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</aside>

<style>
  .hdr {
    --ink: #93a3b4;
    --ink-strong: #e6edf2;
    --signal: #3df2e0;
    --hairline: rgba(230, 237, 242, 0.1);
    --bar-bg: rgba(11, 15, 20, 0.72);

    position: fixed;
    inset: 0 0 auto 0;
    z-index: 40;
    border-bottom: 1px solid transparent;
    transition:
      background 0.3s var(--ease-out),
      border-color 0.3s var(--ease-out),
      backdrop-filter 0.3s var(--ease-out);
  }

  .hdr.slop {
    --ink: #9eb7d4;
    --ink-strong: #edf4ff;
    --signal: #5dddff;
    --hairline: rgba(146, 198, 255, 0.16);
    --bar-bg: rgba(6, 11, 23, 0.74);
  }

  .hdr.scrolled {
    background: var(--bar-bg);
    border-bottom-color: var(--hairline);
    backdrop-filter: blur(16px) saturate(1.1);
  }

  .hdr-inner {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 1rem;
    max-width: var(--width-page);
    margin-inline: auto;
    padding: 0.7rem var(--space-gutter);
    padding-top: max(0.7rem, env(safe-area-inset-top));
  }

  .nav-desktop {
    grid-column: 2;
    justify-self: center;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .nav-link {
    position: relative;
    color: var(--ink);
    text-decoration: none;
    font-size: 0.72rem;
    font-weight: 640;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    padding: 0.55rem 0.7rem;
    border-radius: 6px;
    transition: color 0.2s var(--ease-out);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0.34rem;
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: var(--signal);
    opacity: 0;
    transform: translate(-50%, 4px);
    transition:
      opacity 0.24s var(--ease-out),
      transform 0.24s var(--ease-out);
  }

  .nav-link:hover,
  .nav-link:focus-visible {
    color: var(--ink-strong);
  }

  .nav-link.active {
    color: var(--ink-strong);
  }

  .nav-link.active::after {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  .util {
    grid-column: 3;
    justify-self: end;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
  }

  .seg {
    display: inline-flex;
    align-items: center;
    gap: 0.1rem;
    padding: 0.18rem;
    border: 1px solid var(--hairline);
    border-radius: 999px;
  }

  .seg button {
    border: 0;
    background: transparent;
    color: var(--ink);
    font: inherit;
    font-size: 0.68rem;
    font-weight: 640;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.4rem 0.62rem;
    border-radius: 999px;
    cursor: pointer;
    transition:
      color 0.2s var(--ease-out),
      background 0.2s var(--ease-out);
  }

  .seg.mode button {
    min-width: 4.2rem;
  }

  .seg button:hover,
  .seg button:focus-visible {
    color: var(--ink-strong);
  }

  .seg button.active {
    color: var(--void, #0b0f14);
    background: var(--signal);
  }

  .divider {
    width: 1px;
    height: 1.1rem;
    background: var(--hairline);
  }

  .menu-btn {
    display: none;
    border: 1px solid var(--hairline);
    background: transparent;
    border-radius: 10px;
    width: 2.6rem;
    height: 2.6rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  .bars {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 18px;
  }

  .bars i {
    display: block;
    height: 1.5px;
    width: 100%;
    background: var(--ink-strong);
    border-radius: 2px;
    transition: transform 0.26s var(--ease-out);
  }

  .bars.open i:first-child {
    transform: translateY(3.25px) rotate(45deg);
  }

  .bars.open i:last-child {
    transform: translateY(-3.25px) rotate(-45deg);
  }

  :is(.nav-link, .seg button, .menu-btn):focus-visible {
    outline: 2px solid var(--signal);
    outline-offset: 2px;
  }

  /* Mobile sheet */
  .scrim {
    position: fixed;
    inset: 0;
    z-index: 38;
    border: 0;
    background: rgba(4, 7, 11, 0.6);
    backdrop-filter: blur(2px);
    cursor: pointer;
    animation: fade 0.24s var(--ease-out);
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
  }

  .sheet {
    --ink: #93a3b4;
    --ink-strong: #e6edf2;
    --signal: #3df2e0;
    --hairline: rgba(230, 237, 242, 0.12);
    --void: #0b0f14;

    position: fixed;
    inset: 0 0 0 auto;
    z-index: 39;
    width: min(82vw, 320px);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 5.5rem 1.6rem 2rem;
    padding-top: max(5.5rem, calc(env(safe-area-inset-top) + 4.5rem));
    background: rgba(9, 13, 19, 0.96);
    border-left: 1px solid var(--hairline);
    backdrop-filter: blur(18px) saturate(1.1);
    transform: translateX(100%);
    visibility: hidden;
    transition:
      transform 0.32s var(--ease-out),
      visibility 0.32s var(--ease-out);
  }

  .sheet.slop {
    --ink: #9eb7d4;
    --ink-strong: #edf4ff;
    --signal: #5dddff;
    --hairline: rgba(146, 198, 255, 0.18);
    --void: #061325;
    background: rgba(6, 11, 23, 0.96);
  }

  .sheet.open {
    transform: translateX(0);
    visibility: visible;
  }

  .nav-mobile {
    display: flex;
    flex-direction: column;
  }

  .nav-mobile .nav-link {
    padding: 0.85rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: none;
    border-bottom: 1px solid var(--hairline);
  }

  .nav-mobile .nav-link::after {
    left: 0;
    bottom: 0.95rem;
    transform: translateY(4px);
  }

  .nav-mobile .nav-link.active::after {
    transform: translateY(0);
  }

  .sheet-utils {
    margin-top: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  .sheet-row {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  .sheet-label {
    font-size: 0.7rem;
    font-weight: 640;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink);
  }

  .sheet-row .seg {
    align-self: start;
  }

  @media (max-width: 760px) {
    .hdr-inner {
      grid-template-columns: 1fr;
    }

    .util {
      grid-column: 1;
    }

    .nav-desktop,
    .util .seg,
    .util .divider {
      display: none;
    }

    .menu-btn {
      display: inline-flex;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sheet,
    .bars i,
    .nav-link::after {
      transition: none;
    }
    .scrim {
      animation: none;
    }
  }
</style>
