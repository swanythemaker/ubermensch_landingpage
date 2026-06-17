import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ pages: 'dist', assets: 'dist', fallback: undefined, strict: true }),
    prerender: { entries: ['*', '/feed.xml', '/sitemap.xml'] },
  },
};
