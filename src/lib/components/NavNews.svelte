<script lang="ts">
  let {
    href = '/news',
    label = 'News',
    slop = false,
  }: {
    href?: string;
    label?: string;
    slop?: boolean;
  } = $props();
</script>

<a class="nav-news" class:slop {href} aria-label={label} data-sveltekit-preload-data="hover">
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M4 5h13v14a1 1 0 0 0 1 1H6a2 2 0 0 1-2-2V5z" />
    <path d="M17 8h2a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2" />
    <line x1="7" y1="9" x2="14" y2="9" />
    <line x1="7" y1="12.5" x2="14" y2="12.5" />
    <line x1="7" y1="16" x2="11" y2="16" />
  </svg>
  <span>{label}</span>
</a>

<style>
  .nav-news {
    --shell-bg: rgba(9, 14, 21, 0.8);
    --shell-border: rgba(109, 125, 141, 0.42);
    --shell-shadow: 0 14px 36px rgba(0, 0, 0, 0.32);
    --ink: #c4d2e0;

    position: fixed;
    top: max(1rem, env(safe-area-inset-top));
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.62rem 0.95rem;
    border: 1px solid var(--shell-border);
    background: var(--shell-bg);
    backdrop-filter: blur(14px) saturate(1.1);
    box-shadow: var(--shell-shadow);
    border-radius: 999px;
    color: var(--ink);
    text-decoration: none;
    font-size: 0.72rem;
    font-weight: 680;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition:
      color 0.24s var(--ease-out),
      border-color 0.24s var(--ease-out),
      background 0.24s var(--ease-out),
      box-shadow 0.24s var(--ease-out);
  }

  .nav-news.slop {
    --shell-bg: rgba(7, 23, 46, 0.78);
    --shell-border: rgba(96, 199, 255, 0.45);
    --shell-shadow: 0 14px 34px rgba(4, 23, 45, 0.4);
    --ink: #b6d2ef;
  }

  .nav-news:hover,
  .nav-news:focus-visible {
    color: #eafffb;
    border-color: rgba(61, 242, 224, 0.65);
    box-shadow:
      var(--shell-shadow),
      0 0 0 1px rgba(61, 242, 224, 0.2);
  }

  .nav-news:focus-visible {
    outline: 2px solid rgba(179, 255, 248, 0.88);
    outline-offset: 2px;
  }

  @media (max-width: 760px) {
    .nav-news {
      top: auto;
      bottom: max(1rem, env(safe-area-inset-bottom));
    }
  }
</style>
