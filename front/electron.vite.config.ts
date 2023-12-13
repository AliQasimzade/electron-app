import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin,splitVendorChunkPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build:{
      outDir:'dist/main',
      rollupOptions:{
       external: ['sqlite3'],
        output:{
          manualChunks(id): string | void {
            if (id.includes('foo')) {
              return 'foo'
            }
          }
        }
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build:{
      outDir:'dist/preload'
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    
    plugins: [react(), splitVendorChunkPlugin()],
    build:{
      outDir:'dist/renderer'
    }
  },
  
})
