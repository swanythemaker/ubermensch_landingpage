export interface LitanyLine {
  text: string;
  em: string;
}

export interface Pillar {
  number: string;
  name: string;
  title: string;
  paragraphs: string[];
  aside?: string;
  showCycle?: boolean;
}

export interface LexiconEntry {
  term: string;
  meaning: string;
}

export interface FoundationsSection {
  kicker: string;
  title: string;
  intro: string;
  layers: { name: string; tag: string; body: string }[];
  storageLabel: string;
  storage: { name: string; body: string }[];
  stackLabel: string;
  stack: { label: string; body: string }[];
}

export interface SiteConfig {
  hero: {
    kicker: string;
    wordmark: string;
    tagline: string;
    sub: string;
    scrollHint: string;
  };
  litany: LitanyLine[];
  enemy: {
    kicker: string;
    lead: string;
    ghosts: string[];
    counterTitle: string;
    counter: string;
  };
  pillarsKicker: string;
  pillars: Pillar[];
  foundations?: FoundationsSection;
  cycle: {
    nodes: string[];
    center: string;
  };
  pipeline: {
    kicker: string;
    name: string;
    intro: string;
    steps: string[];
    closing: string;
  };
  lexicon: {
    kicker: string;
    title: string;
    entries: LexiconEntry[];
  };
  quote: {
    text: string;
    attribution: string;
  };
  footer: {
    litany: string[];
    ctaLabel: string;
    ctaHref: string;
    stack: string;
    fineprint: string;
  };
}

export type SiteMode = 'normal' | 'slop';

export type Lang = 'en' | 'de' | 'es';

export const LANGS: Lang[] = ['en', 'de', 'es'];

export interface UiStrings {
  langCode: string;
  langName: string;
  langSwitcherLabel: string;
  modeToggleLabel: string;
  modeLabels: Record<SiteMode, string>;
  nav: {
    home: string;
    news: string;
    status: string;
  };
  slopGate: {
    title: string;
    body: string;
    confirm: string;
    cancel: string;
  };
}
