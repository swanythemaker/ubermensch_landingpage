<script lang="ts">
  import { getSite, ui, LANGS, type Lang, type SiteMode } from './site.config';
  import Hero from './lib/components/Hero.svelte';
  import Litany from './lib/components/Litany.svelte';
  import Enemy from './lib/components/Enemy.svelte';
  import Pillars from './lib/components/Pillars.svelte';
  import Pipeline from './lib/components/Pipeline.svelte';
  import Foundations from './lib/components/Foundations.svelte';
  import Lexicon from './lib/components/Lexicon.svelte';
  import Quote from './lib/components/Quote.svelte';
  import Footer from './lib/components/Footer.svelte';
  import ModeToggle from './lib/components/ModeToggle.svelte';
  import LangSwitcher from './lib/components/LangSwitcher.svelte';
  import SlopGate from './lib/components/SlopGate.svelte';

  const LANG_KEY = 'um-lang';

  function detectLang(): Lang {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored && (LANGS as string[]).includes(stored)) return stored as Lang;
    const nav = navigator.language?.slice(0, 2).toLowerCase();
    if (nav && (LANGS as string[]).includes(nav)) return nav as Lang;
    return 'en';
  }

  const params = new URLSearchParams(window.location.search);
  const screenshotMode = params.has('screenshot');

  let mode = $state<SiteMode>(params.get('mode') === 'slop' ? 'slop' : 'normal');
  let lang = $state<Lang>(detectLang());
  let showGate = $state(false);

  let activeSite = $derived(getSite(lang, mode));
  let t = $derived(ui[lang]);

  $effect(() => {
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

<LangSwitcher {lang} label={t.langSwitcherLabel} slop={mode === 'slop'} onChange={(l) => (lang = l)} />
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
