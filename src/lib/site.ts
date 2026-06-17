// Public origin of the deployed site. Used for canonical URLs, the RSS feed,
// the sitemap and social-card metadata. Override at build time with
// PUBLIC_SITE_URL, otherwise this constant is used. No trailing slash.
export const SITE_URL = (
  import.meta.env.PUBLIC_SITE_URL ?? 'https://ubermensch.it.com'
).replace(/\/$/, '');

export const SITE_NAME = 'Übermensch Framework';
export const SITE_TAGLINE = 'An open-weight-first cognitive runtime that remembers, returns, revises and overcomes itself.';
