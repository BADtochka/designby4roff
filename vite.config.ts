import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      isProd: mode === 'production',
      isDev: mode === 'development',
    },
    plugins: [react(), tailwindcss()],
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
