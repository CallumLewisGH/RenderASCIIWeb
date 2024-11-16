import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias for @ to src/
    }
  },
  build: {
    // Customize the output directory (optional, default is 'dist')
    outDir: 'dist',

    // Enable file hashing for cache-busting in production builds
    assetsDir: 'assets', // specify a directory for assets like images, fonts, etc.
    chunkSizeWarningLimit: 500, // Optional: Increase the limit for large chunks in production

    // Minify code in production builds for performance
    minify: 'terser', // Terser is a good minifier for JS, can switch to 'esbuild' for faster builds
    terserOptions: {
      compress: {
        drop_console: true, // Optionally, remove console logs in production
      },
    },

    // Output specific file names (e.g., includes file hashing for cache busting)
    rollupOptions: {
      output: {
        // Customize the name of the entry chunk if necessary
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },

  server: {
    // Optional: Define server settings if needed (like port, host)
    port: 3000, // Adjust the port to fit your needs
    open: true, // Automatically open the browser when the server starts
  },

  base: '/RenderASCIIWeb', // Set base URL if deploying to a subdirectory (e.g., '/my-app/')
})
