import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      pages: "/src/pages",
      service: "/src/service",
      hooks: "/src/hooks",
      styles: "/src/styles",
      containers: "/src/containers",
      utils: "/src/utils",
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});
