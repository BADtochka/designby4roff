import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      isProd: mode === 'production',
      isDev: mode === 'development',
    },
    plugins: [
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
          manualChunks(id: string) {
            if (id.indexOf('node_modules') !== -1) {
              const basic = id.toString().split('node_modules/')[1];
              const sub1 = basic.split('/')[0];
              if (sub1 !== '.pnpm') {
                return `${sub1.toString()}-${Date.now()}`;
              }
              const name2 = basic.split('/')[1];
              return name2.split('@')[name2[0] === '@' ? 1 : 0].toString();
            }
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
