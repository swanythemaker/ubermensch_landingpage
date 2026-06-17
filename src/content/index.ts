import type { Lang, SiteConfig, SiteMode } from './types';
import { normal as en } from './en';
import { normal as de } from './de';
import { normal as es } from './es';
import { slop } from './slop';

export * from './types';
export { ui } from './ui';

export const normalContent: Record<Lang, SiteConfig> = { en, de, es };

export const slopContent: SiteConfig = slop;

export function getSite(lang: Lang, mode: SiteMode): SiteConfig {
  return mode === 'slop' ? slopContent : normalContent[lang];
}
