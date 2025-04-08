// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ourStory: resolve(__dirname, 'our-story.html'),
        ourProduct: resolve(__dirname, 'our-product.html'),
      },
    },
  },
});
