import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment'
  },
  build: {
    lib: {
      entry: './src/test-01.jsx',
      fileName: 'test-01',
      formats: ['es']
    }
  }
});
