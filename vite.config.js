import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpeg', '**/*.JPEG', '**/*.jpg', '**/*.JPG', '**/*.png', '**/*.webp'], // Add JPEG formats to assetsInclude
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Example chunking for React-related libraries
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Set the limit to 1000 kB if desired
  },
});
