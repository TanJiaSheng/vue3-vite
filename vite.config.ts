import { defineConfig } from 'vite'
import { resolve } from 'path'
import plugins from './presets/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    plugins()
  ],
})
