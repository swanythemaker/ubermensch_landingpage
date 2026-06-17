<script lang="ts">
  import type { SiteConfig, SiteMode } from '../../site.config';
  import { reveal } from '../actions/reveal';

  let { hero, mode }: { hero: SiteConfig['hero']; mode: SiteMode } = $props();
  let fxCanvas = $state<HTMLCanvasElement | null>(null);

  function startSlopFx(canvas: HTMLCanvasElement): () => void {
    const ctx = canvas.getContext('2d');
    if (!ctx) return () => {};

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const count = 160;
    const depth = 920;
    const points = Array.from({ length: count }, () => {
      const px = (Math.random() - 0.5) * 620;
      const py = (Math.random() - 0.5) * 360;
      const pz = Math.random() * depth + 40;
      return {
        x: px,
        y: py,
        z: pz,
        vx: (Math.random() - 0.5) * 0.34,
        vy: (Math.random() - 0.5) * 0.22,
        vz: 1.7 + Math.random() * 0.9,
      };
    });

    const projected: { sx: number; sy: number; alpha: number; size: number }[] = [];
    let t = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const recycle = (p: (typeof points)[number]) => {
      p.x = (Math.random() - 0.5) * 640;
      p.y = (Math.random() - 0.5) * 380;
      p.z = depth + Math.random() * 180;
      p.vx = (Math.random() - 0.5) * 0.34;
      p.vy = (Math.random() - 0.5) * 0.22;
      p.vz = 1.7 + Math.random() * 0.9;
    };

    const onFrame = () => {
      raf = requestAnimationFrame(onFrame);
      t += 0.007;
      ctx.clearRect(0, 0, w, h);
      const centerX = w < 700 ? w * 0.5 : w * 0.67;
      const centerY = w < 700 ? h * 0.54 : h * 0.5;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(t * 0.9);
      for (let ring = 0; ring < 5; ring++) {
        const radius = 56 + ring * 46;
        const alpha = 0.16 - ring * 0.022;
        ctx.strokeStyle = `rgba(95, 221, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI * 2 * i) / 6;
          const x = Math.cos(a) * radius;
          const y = Math.sin(a) * radius * 0.72;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }
      ctx.restore();

      projected.length = 0;

      for (const p of points) {
        p.z -= p.vz;
        p.x += p.vx;
        p.y += p.vy;
        if (p.z < 40) recycle(p);
        if (Math.abs(p.x) > 350 || Math.abs(p.y) > 220) recycle(p);

        const spin = t * 0.42;
        const cs = Math.cos(spin);
        const sn = Math.sin(spin);
        const rx = p.x * cs - p.y * sn;
        const ry = p.x * sn + p.y * cs;
        const scale = 270 / p.z;
        const sx = centerX + rx * scale;
        const sy = centerY + ry * scale * 0.72;
        const alpha = Math.max(0, Math.min(1, 1 - p.z / (depth + 160)));
        const size = 0.7 + alpha * 2.1;
        projected.push({ sx, sy, alpha, size });
      }

      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.hypot(dx, dy);
          if (dist < 92) {
            const lineAlpha = ((92 - dist) / 92) * Math.min(a.alpha, b.alpha) * 0.36;
            if (lineAlpha > 0.01) {
              ctx.strokeStyle = `rgba(102, 216, 255, ${lineAlpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.sx, a.sy);
              ctx.lineTo(b.sx, b.sy);
              ctx.stroke();
            }
          }
        }
      }

      for (const p of projected) {
        if (p.alpha < 0.02) continue;
        ctx.fillStyle = `rgba(210, 244, 255, ${0.18 + p.alpha * 0.64})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(onFrame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      ctx.clearRect(0, 0, w, h);
    };
  }

  let stopFx: null | (() => void) = null;
  $effect(() => {
    if (mode === 'slop' && fxCanvas) {
      stopFx?.();
      stopFx = startSlopFx(fxCanvas);
      return () => {
        stopFx?.();
        stopFx = null;
      };
    }

    stopFx?.();
    stopFx = null;
  });
</script>

<section class="hero">
  <canvas class="slop-fx" class:active={mode === 'slop'} bind:this={fxCanvas} aria-hidden="true"></canvas>
  <svg class="thread" viewBox="0 0 1440 520" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <path
      class="thread-path"
      pathLength="1"
      d="M -24 400
         C 180 320, 330 470, 540 410
         S 790 280, 930 350
         C 1010 390, 1045 315, 992 292
         C 950 274, 925 335, 1000 362
         C 1110 401, 1260 350, 1380 368"
    />
    <circle class="thread-end" cx="1380" cy="368" r="4" />
  </svg>

  <div class="container hero-inner">
    <p class="kicker" use:reveal>{hero.kicker}</p>
    <h1 class="fraktur wordmark" use:reveal={{ delay: 120 }}>{hero.wordmark}</h1>
    <p class="tagline" use:reveal={{ delay: 280 }}>{hero.tagline}</p>
    <p class="sub" use:reveal={{ delay: 400 }}>{hero.sub}</p>
  </div>

  <div class="scroll-hint" aria-hidden="true">
    <span>{hero.scrollHint}</span>
    <i class="scroll-line"></i>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .slop-fx {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.38s var(--ease-out);
  }

  .slop-fx.active {
    opacity: 1;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    padding-block: 18vh;
    transition: padding 0.4s var(--ease-out);
  }

  .wordmark {
    font-size: var(--text-hero);
    margin-block: 0.35em 0.18em;
    letter-spacing: -0.01em;
  }

  .tagline {
    font-size: clamp(1.15rem, 2.2vw, 1.5rem);
    font-weight: 480;
    max-width: 38ch;
    line-height: 1.45;
  }

  .sub {
    margin-top: 1.25rem;
    color: var(--color-ink-dim);
    max-width: 52ch;
  }

  .thread {
    position: absolute;
    inset-inline: 0;
    bottom: 0;
    width: 100%;
    height: clamp(180px, 38vh, 420px);
    pointer-events: none;
    z-index: 0;
  }

  .thread-path {
    fill: none;
    stroke: var(--color-cyan);
    stroke-width: 1.5;
    opacity: 0.55;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: thread-draw var(--dur-thread) var(--ease-out) 0.5s forwards;
  }

  .thread-end {
    fill: var(--color-cyan);
    opacity: 0;
    animation: thread-dot 0.8s var(--ease-out) calc(var(--dur-thread) + 0.2s) forwards;
  }

  @keyframes thread-draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes thread-dot {
    to {
      opacity: 0.9;
    }
  }

  .scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: var(--space-gutter);
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--color-ink-dim);
    font-size: var(--text-small);
    letter-spacing: 0.08em;
  }

  .scroll-line {
    display: block;
    width: 56px;
    height: 1px;
    background: var(--color-cyan);
    transform-origin: left;
    animation: scroll-pulse 2.6s var(--ease-out) infinite;
  }

  @keyframes scroll-pulse {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    35% {
      transform: scaleX(1);
      opacity: 1;
    }
    100% {
      transform: scaleX(1) translateX(24px);
      opacity: 0;
    }
  }

  :global(main.theme-slop) .hero-inner {
    max-width: 78rem;
    padding-block: 17vh 15vh;
  }

  :global(main.theme-slop) .kicker {
    color: #8fd8ff;
  }

  :global(main.theme-slop) .wordmark {
    font-size: var(--text-hero);
    max-width: 11ch;
    text-shadow: 0 12px 38px rgba(55, 179, 255, 0.34);
    margin-bottom: 0.55rem;
  }

  :global(main.theme-slop) .tagline {
    max-width: 36ch;
    font-size: 1.28rem;
    font-weight: 640;
    line-height: 1.34;
  }

  :global(main.theme-slop) .sub {
    max-width: 66ch;
    font-size: 1rem;
    line-height: 1.68;
  }

  :global(main.theme-slop) .thread {
    height: clamp(220px, 43vh, 440px);
    opacity: 0;
    animation: slop-thread-float var(--dur-float) ease-in-out infinite;
    visibility: hidden;
  }

  :global(main.theme-slop) .thread-path {
    stroke-width: 2.2;
    filter: drop-shadow(0 0 14px rgba(93, 221, 255, 0.45));
  }

  :global(main.theme-slop) .scroll-hint {
    bottom: 1.4rem;
    color: #9fb8d5;
  }

  :global(main.theme-slop) .scroll-line {
    width: 64px;
    background: linear-gradient(90deg, #5dddff, #84b4ff);
  }

  @keyframes slop-thread-float {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, -8px, 0);
    }
  }

  @media (max-width: 760px) {
    :global(main.theme-slop) .hero {
      min-height: 92svh;
    }

    :global(main.theme-slop) .hero-inner {
      padding-block: 7.5rem 5.5rem;
    }

    :global(main.theme-slop) .wordmark {
      max-width: 9ch;
    }

    :global(main.theme-slop) .tagline {
      font-size: 1.02rem;
      line-height: 1.42;
    }

    :global(main.theme-slop) .sub {
      font-size: 0.84rem;
      line-height: 1.62;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .thread-path {
      stroke-dashoffset: 0;
      animation: none;
    }
    .thread-end {
      opacity: 0.9;
      animation: none;
    }
    :global(main.theme-slop) .thread {
      animation: none;
    }
  }
</style>
