import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@repo/ui": resolve(__dirname, "../../packages/ui/src"),
      "@repo/theme": resolve(__dirname, "../../packages/theme"),
    },
  },
});
