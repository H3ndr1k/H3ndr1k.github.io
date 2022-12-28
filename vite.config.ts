import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Myphz/",
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@use "/src/assets/sass/variables" as *\n'
      }
    }
  },
})
