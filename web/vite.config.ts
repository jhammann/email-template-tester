import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: {
    port: 3000,
    host: "127.0.0.1",
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:3001", // Default to local if not specified
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
