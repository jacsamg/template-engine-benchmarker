import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin({
    dev: false,
    hot: false,
    solid: {
      generate: 'ssr',
      hydratable: false
    }
  })],
  build: {
    ssr: true,
    lib: {
      entry: './src/test-01.jsx',
      fileName: 'test-01',
      formats: ['es']
    }
  }
});
