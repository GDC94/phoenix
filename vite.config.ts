/// <reference types="vitest" />
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import {resolve} from "path";
import dts from "vite-plugin-dts";
import {configDefaults} from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({outDir: "dist", include: ["src/index.ts"], exclude: ["src/**/__tests__/**"]})],

  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./tests/setup.ts",
    coverage: {
      include: ["src/ui/**/*.{ts,tsx}"],
      exclude: [...configDefaults.exclude, "src/ui/**/**/*.stories.{ts,tsx}"],
      thresholds: {
        lines: 30,
        functions: 30,
        branches: 30,
        statements: 30
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "lvlup-components",
      formats: ["es", "umd"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
