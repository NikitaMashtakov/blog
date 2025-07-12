import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

export default defineConfig(({ mode }) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const isDev = mode !== 'production';

  return {
    plugins: [
      react({
        babel: {
          plugins: isDev ? ['check-prop-types'] : [],
        },
      }),
    ],
    resolve: {
      alias: {
        components: path.resolve(__dirname, './src/components'),
        constants: path.resolve(__dirname, './src/constants'),
        hooks: path.resolve(__dirname, './src/hooks'),
        pages: path.resolve(__dirname, './src/pages'),
        utils: path.resolve(__dirname, './src/utils'),
        contexts: path.resolve(__dirname, './src/contexts'),
        reducers: path.resolve(__dirname, './src/reducers'),
        bff: path.resolve(__dirname, './src/bff'),
        actions: path.resolve(__dirname, './src/actions'),
        selectors: path.resolve(__dirname, './src/selectors'),
      },
    },
  };
});
