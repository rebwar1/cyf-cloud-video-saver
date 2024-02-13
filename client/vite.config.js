import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // tailwind
  optimizeDeps: {
    include: ["@headlessui/react"],
  },
  resolve: {
    alias: {
      "/src/main.jsx": "/src/main.tsx",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
  server: {
    host: "0.0.0.0",
  },
});
