/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom', // Use jsdom for DOM-based testing
        globals: true, // Support global APIs like `describe`, `it`
        // setupFiles: './setupVitest.js', // Optional: For global setup
    },
})
