<script lang="ts">
  import { browser } from '$app/environment';
  import { getSite, ui, type Lang, type SiteMode } from '../site.config';
  import { SITE_URL, SITE_NAME, SITE_TAGLINE, OG_IMAGE } from '$lib/site';
  import { LANG_KEY, detectLang } from '$lib/lang';
  import Hero from '$lib/components/Hero.svelte';
  import Litany from '$lib/components/Litany.svelte';
  import Enemy from '$lib/components/Enemy.svelte';
  import Pillars from '$lib/components/Pillars.svelte';
  import Pipeline from '$lib/components/Pipeline.svelte';
  import Foundations from '$lib/components/Foundations.svelte';
  import Lexicon from '$lib/components/Lexicon.svelte';
  import Quote from '$lib/components/Quote.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ModeToggle from '$lib/components/ModeToggle.svelte';
  import LangSwitcher from '$lib/components/LangSwitcher.svelte';
  import NavMenu from '$lib/components/NavMenu.svelte';
  import SlopGate from '$lib/components/SlopGate.svelte';

  let mode = $state<SiteMode>('normal');
  let lang = $state<Lang>('en');
  let screenshotMode = $state(false);
  let showGate = $state(false);

  let activeSite = $derived(getSite(lang, mode));
  let t = $derived(ui[lang]);

  const orgLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    sameAs: [] as string[],
  });

  const siteLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ['en', 'de', 'es'],
  });

  $effect(() => {
    const params = new URLSearchParams(window.location.search);
    screenshotMode = params.has('screenshot');
    if (params.get('mode') === 'slop') mode = 'slop';
    lang = detectLang();
  });

  $effect(() => {
    if (!browser) return;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
  });

  function selectMode(next: SiteMode) {
    if (next === 'slop') {
      if (mode !== 'slop') showGate = true;
      return;
    }
    mode = 'normal';
  }

  function confirmSlop() {
    mode = 'slop';
    showGate = false;
  }

  function cancelSlop() {
    showGate = false;
  }
</script>

<svelte:head>
  <title>Übermensch Framework — An Open-Weight-First Cognitive Runtime</title>
  <meta
    name="description"
    content="A local, open-weight-first cognitive runtime. A persistent artificial mind that remembers, returns, revises and overcomes itself."
  />
  <meta
    name="keywords"
    content="cognitive runtime, open weight, local-first, persistent memory, artificial mind, self-improving, Übermensch, Nietzsche, SQLite, open weights"
  />
  <meta name="author" content="Übermensch" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href={SITE_URL} />
  <link rel="alternate" type="application/rss+xml" title="Übermensch — News" href={`${SITE_URL}/feed.xml`} />

  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:title" content={SITE_NAME} />
  <meta property="og:description" content={SITE_TAGLINE} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={SITE_URL} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:locale:alternate" content="de_DE" />
  <meta property="og:locale:alternate" content="es_ES" />

  <meta property="og:image" content={OG_IMAGE} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={SITE_NAME} />
  <meta name="twitter:description" content={SITE_TAGLINE} />
  <meta name="twitter:image" content={OG_IMAGE} />

  {@html `<script type="application/ld+json">${orgLd}</` + 'script>'}
  {@html `<script type="application/ld+json">${siteLd}</` + 'script>'}
</svelte:head>

<LangSwitcher {lang} label={t.langSwitcherLabel} slop={mode === 'slop'} onChange={(l) => (lang = l)} />
<NavMenu {lang} slop={mode === 'slop'} />
<ModeToggle {mode} labels={t.modeLabels} label={t.modeToggleLabel} onSelect={selectMode} />

<main class:theme-slop={mode === 'slop'} class:theme-normal={mode === 'normal'} class:screenshot-mode={screenshotMode}>
  <Hero hero={activeSite.hero} {mode} />
  <Litany lines={activeSite.litany} />
  <Enemy enemy={activeSite.enemy} />
  <Pillars kicker={activeSite.pillarsKicker} pillars={activeSite.pillars} cycle={activeSite.cycle} />
  <Pipeline pipeline={activeSite.pipeline} />
  {#if activeSite.foundations}
    <Foundations foundations={activeSite.foundations} />
  {/if}
  <Lexicon lexicon={activeSite.lexicon} />
  <Quote quote={activeSite.quote} />
  <Footer footer={activeSite.footer} />
</main>

<SlopGate open={showGate} copy={t.slopGate} onConfirm={confirmSlop} onCancel={cancelSlop} />

<style>
  :global(main.screenshot-mode .will-reveal) {
    opacity: 1;
    transform: none;
    transition: none;
  }

  :global(main.screenshot-mode .step::before) {
    transform: none;
  }
</style>
