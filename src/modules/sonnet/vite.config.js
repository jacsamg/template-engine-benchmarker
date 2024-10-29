import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    ssr: true,
    lib: {
      entry: './src/test-01.ts',
      fileName: 'test-01',
      formats: ['es']
    }
  }
});
