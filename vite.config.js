import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import fs from 'fs'

export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: fs.readFileSync('../../ssl/panicbot.xyz.key'),
      cert: fs.readFileSync('../../ssl/panicbot_xyz.crt'),
    },
    hmr: {
      host: '192.168.0.20',
      port: 3009,
      protocol: 'wss',
    },
  },
  define: {
    'process.env': {}
  }
})

// export default defineConfig({
//   plugins: [vue()] 
// })

