// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jeff8287.github.io',
  base: '/beer',
  output: 'static',
  vite: {
    server: {
      watch: {
        ignored: ['!../../recipes/**'],
      },
    },
  },
});
