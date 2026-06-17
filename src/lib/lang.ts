import { LANGS, type Lang } from '../site.config';

export const LANG_KEY = 'um-lang';

export function detectLang(): Lang {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored && (LANGS as string[]).includes(stored)) return stored as Lang;
  const nav = navigator.language?.slice(0, 2).toLowerCase();
  if (nav && (LANGS as string[]).includes(nav)) return nav as Lang;
  return 'en';
}
