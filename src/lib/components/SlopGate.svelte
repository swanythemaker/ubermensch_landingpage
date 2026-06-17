<script lang="ts">
  interface GateCopy {
    title: string;
    body: string;
    confirm: string;
    cancel: string;
  }

  let {
    open,
    copy,
    onConfirm,
    onCancel,
  }: {
    open: boolean;
    copy: GateCopy;
    onConfirm: () => void;
    onCancel: () => void;
  } = $props();

  let dialogEl = $state<HTMLDivElement | null>(null);
  let confirmEl = $state<HTMLButtonElement | null>(null);
  let restoreEl: HTMLElement | null = null;

  $effect(() => {
    if (open) {
      restoreEl = document.activeElement as HTMLElement | null;
      queueMicrotask(() => confirmEl?.focus());
    } else if (restoreEl) {
      restoreEl.focus();
      restoreEl = null;
    }
  });

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      onCancel();
      return;
    }
    if (event.key !== 'Tab' || !dialogEl) return;

    const focusable = dialogEl.querySelectorAll<HTMLElement>('button');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
</script>

{#if open}
  <div
    class="gate-backdrop"
    role="presentation"
    onclick={(e) => e.target === e.currentTarget && onCancel()}
  >
    <div
      class="gate"
      role="dialog"
      aria-modal="true"
      aria-labelledby="slop-gate-title"
      aria-describedby="slop-gate-body"
      tabindex="-1"
      bind:this={dialogEl}
      onkeydown={onKeydown}
    >
      <span class="gate-slash" aria-hidden="true"></span>
      <p class="gate-kicker">Slop Mode</p>
      <h2 id="slop-gate-title" class="fraktur">{copy.title}</h2>
      <p id="slop-gate-body" class="gate-body">{copy.body}</p>
      <div class="gate-actions">
        <button type="button" class="ghost" onclick={onCancel}>{copy.cancel}</button>
        <button type="button" class="confirm" bind:this={confirmEl} onclick={onConfirm}>
          {copy.confirm}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .gate-backdrop {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: grid;
    place-items: center;
    padding: var(--space-gutter);
    background: rgba(5, 8, 12, 0.74);
    backdrop-filter: blur(8px) saturate(0.9);
    animation: gate-fade 0.24s var(--ease-out);
  }

  .gate {
    position: relative;
    width: min(34rem, 100%);
    overflow: hidden;
    padding: clamp(1.6rem, 4vw, 2.6rem);
    border: 1px solid var(--color-cyan);
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(15, 22, 31, 0.98), rgba(9, 14, 20, 0.98));
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.55),
      0 0 0 1px rgba(61, 242, 224, 0.08),
      inset 0 1px 0 rgba(61, 242, 224, 0.18);
    animation: gate-rise 0.3s var(--ease-out);
  }

  .gate-slash {
    position: absolute;
    top: -40%;
    right: -10%;
    width: 3px;
    height: 180%;
    transform: rotate(18deg);
    background: linear-gradient(180deg, transparent, var(--color-cyan), transparent);
    opacity: 0.5;
    pointer-events: none;
  }

  .gate-kicker {
    font-size: var(--text-kicker);
    font-weight: 600;
    letter-spacing: var(--tracking-kicker);
    text-transform: uppercase;
    color: var(--color-cyan);
    margin-bottom: 0.6rem;
  }

  h2 {
    font-size: clamp(1.9rem, 4.6vw, 2.7rem);
    line-height: 1.1;
    color: var(--color-ink);
    margin-bottom: 0.85rem;
  }

  .gate-body {
    color: var(--color-ink-dim);
    font-size: var(--text-body);
    line-height: 1.6;
    max-width: 40ch;
    margin-bottom: 1.8rem;
  }

  .gate-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .gate-actions button {
    flex: 1 1 auto;
    min-width: 9rem;
    font: inherit;
    font-size: var(--text-kicker);
    font-weight: 640;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.95rem 1.4rem;
    border-radius: 999px;
    cursor: pointer;
    transition:
      background 0.24s var(--ease-out),
      color 0.24s var(--ease-out),
      box-shadow 0.24s var(--ease-out),
      transform 0.18s var(--ease-out);
  }

  .ghost {
    border: 1px solid var(--color-line);
    background: transparent;
    color: var(--color-ink-dim);
  }

  .ghost:hover,
  .ghost:focus-visible {
    color: var(--color-ink);
    border-color: var(--color-ink-dim);
  }

  .confirm {
    border: 0;
    background: linear-gradient(120deg, #3df2e0 0%, #7ffff2 100%);
    color: var(--color-void);
    box-shadow: 0 8px 22px rgba(36, 170, 160, 0.32);
  }

  .confirm:hover,
  .confirm:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(55, 230, 215, 0.42);
  }

  .gate-actions button:focus-visible {
    outline: 2px solid rgba(179, 255, 248, 0.9);
    outline-offset: 2px;
  }

  @keyframes gate-fade {
    from {
      opacity: 0;
    }
  }

  @keyframes gate-rise {
    from {
      opacity: 0;
      transform: translateY(14px) scale(0.98);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .gate-backdrop,
    .gate {
      animation: none;
    }

    .confirm:hover,
    .confirm:focus-visible {
      transform: none;
    }
  }

  @media (max-width: 480px) {
    .gate-actions button {
      flex-basis: 100%;
    }
  }
</style>
