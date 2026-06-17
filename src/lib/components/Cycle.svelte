<script lang="ts">
  import type { SiteConfig } from '../../site.config';

  let { cycle }: { cycle: SiteConfig['cycle'] } = $props();

  const SIZE = 380;
  const C = SIZE / 2;
  const RING = 122;
  const LABEL = 154;
  const VB = { x: -68, y: -8, w: 516, h: 396 };

  const nodes = $derived(cycle.nodes.map((label, i) => {
    const angle = ((-90 + (i * 360) / cycle.nodes.length) * Math.PI) / 180;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    let anchor: 'start' | 'middle' | 'end' = 'middle';
    if (cos > 0.3) anchor = 'start';
    else if (cos < -0.3) anchor = 'end';
    return {
      label,
      x: C + RING * cos,
      y: C + RING * sin,
      lx: C + LABEL * cos,
      ly: C + LABEL * sin + 4,
      anchor,
    };
  }));
</script>

<svg
  class="cycle"
  viewBox="{VB.x} {VB.y} {VB.w} {VB.h}"
  role="img"
  aria-label="The Eternal Return cycle: {cycle.nodes.join(', ')} — {cycle.center}"
>
  <circle class="ring" cx={C} cy={C} r={RING} pathLength="1" />
  {#each nodes as node, i (node.label)}
    <g style="--i: {i}">
      <circle class="halo" cx={node.x} cy={node.y} r="11" />
      <circle class="dot" cx={node.x} cy={node.y} r="3.5" />
      <text class="label" x={node.lx} y={node.ly} text-anchor={node.anchor}>{node.label}</text>
    </g>
  {/each}
  <text class="center" x={C} y={C + 8} text-anchor="middle">{cycle.center}</text>
</svg>

<style>
  .cycle {
    width: min(100%, 520px);
    margin-inline: auto;
    overflow: hidden;
  }

  .ring {
    fill: none;
    stroke: var(--color-line);
    stroke-width: 1;
    stroke-dasharray: 0.004 0.008;
  }

  .halo {
    fill: var(--color-cyan);
    opacity: 0;
    animation: halo-pulse var(--dur-cycle) infinite;
    animation-delay: calc(var(--i) * var(--dur-cycle) / 6);
  }

  .dot {
    fill: var(--color-ink-ghost);
    animation: dot-pulse var(--dur-cycle) infinite;
    animation-delay: calc(var(--i) * var(--dur-cycle) / 6);
  }

  .label {
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 540;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    fill: var(--color-ink-dim);
    animation: label-pulse var(--dur-cycle) infinite;
    animation-delay: calc(var(--i) * var(--dur-cycle) / 6);
  }

  .center {
    font-family: var(--font-quote);
    font-style: italic;
    font-size: 23px;
    fill: var(--color-ink);
  }

  :global(main.theme-slop) .cycle {
    width: min(100%, 460px);
    margin-inline: 0;
  }

  :global(main.theme-slop) .ring {
    stroke: rgba(109, 196, 255, 0.52);
    stroke-width: 1.4;
    stroke-dasharray: none;
    filter: drop-shadow(0 0 16px rgba(92, 202, 255, 0.22));
  }

  :global(main.theme-slop) .halo {
    animation-duration: 10s;
  }

  :global(main.theme-slop) .dot {
    animation-duration: 10s;
  }

  :global(main.theme-slop) .label {
    font-size: 11px;
    font-weight: 650;
    letter-spacing: 0.1em;
    animation-duration: 10s;
  }

  :global(main.theme-slop) .center {
    font-family: var(--font-body);
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
  }

  @keyframes halo-pulse {
    0%, 14% { opacity: 0.22; }
    20%, 100% { opacity: 0; }
  }

  @keyframes dot-pulse {
    0%, 14% { fill: var(--color-cyan); }
    20%, 100% { fill: var(--color-ink-ghost); }
  }

  @keyframes label-pulse {
    0%, 14% { fill: var(--color-cyan); }
    20%, 100% { fill: var(--color-ink-dim); }
  }

  @media (prefers-reduced-motion: reduce) {
    .halo, .dot, .label {
      animation: none;
    }
  }
</style>
