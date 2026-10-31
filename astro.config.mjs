import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://journeyto.dev',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ['./src'],
        },
      },
    },
  },
});
