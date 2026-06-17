import type { Lang, UiStrings } from './types';

export const ui: Record<Lang, UiStrings> = {
  en: {
    langCode: 'EN',
    langName: 'English',
    langSwitcherLabel: 'Language',
    modeToggleLabel: 'Copy mode',
    modeLabels: { normal: 'Normal', slop: 'Slop' },
    nav: { home: 'Home', news: 'News', status: 'Status' },
    slopGate: {
      title: 'Are you sure?',
      body: 'Slop Mode floods the page with hyperagentic synergy buzzwords and venture-scale moat theater. Your taste may not survive. You really want to do this?',
      confirm: 'Unleash the slop',
      cancel: 'Keep my dignity',
    },
  },
  de: {
    langCode: 'DE',
    langName: 'Deutsch',
    langSwitcherLabel: 'Sprache',
    modeToggleLabel: 'Textmodus',
    modeLabels: { normal: 'Normal', slop: 'Slop' },
    nav: { home: 'Start', news: 'News', status: 'Status' },
    slopGate: {
      title: 'Bist du sicher?',
      body: 'Der Slop-Modus überflutet die Seite mit hyperagentischen Synergie-Buzzwords und Burggraben-Theater im Risikokapital-Maßstab. Dein Geschmack überlebt das vielleicht nicht. Willst du das wirklich tun?',
      confirm: 'Slop entfesseln',
      cancel: 'Meine Würde behalten',
    },
  },
  es: {
    langCode: 'ES',
    langName: 'Español',
    langSwitcherLabel: 'Idioma',
    modeToggleLabel: 'Modo de texto',
    modeLabels: { normal: 'Normal', slop: 'Slop' },
    nav: { home: 'Inicio', news: 'Noticias', status: 'Estado' },
    slopGate: {
      title: '¿Estás seguro?',
      body: 'El Modo Slop inunda la página con palabras de moda hiperagénticas, sinérgicas y teatro de foso defensivo a escala de capital riesgo. Puede que tu buen gusto no sobreviva. ¿De verdad quieres hacer esto?',
      confirm: 'Desatar el slop',
      cancel: 'Conservar mi dignidad',
    },
  },
};
