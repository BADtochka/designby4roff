import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: '/',
    define: {
      isProd: mode === 'production',
      isDev: mode === 'development',
    },
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
        verboseFileRoutes: false,
      }),
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      tailwindcss(),
    ],
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunks/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
          manualChunks(id) {
            if (!id.includes('node_modules')) return;
            const p = id.split('node_modules/')[1]?.split('/');
            if (!p?.length) return;
            if (p[0] === '.pnpm') return p[1]?.split('+')[0]?.replace(/@/g, '_');
            return p[0].startsWith('@') && p[1] ? `${p[0]}/${p[1]}` : p[0];
          },
        },
      },
    },
    server: {
      host: '0.0.0.0',
      allowedHosts: mode === 'development' || undefined,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
