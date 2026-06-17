import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: { port: 5777, strictPort: true },
  preview: { port: 5777, strictPort: true },
});
