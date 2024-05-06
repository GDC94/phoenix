/// <reference types="vitest" />
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import {resolve} from "path";
import dts from "vite-plugin-dts";
import {configDefaults} from "vitest/config";
import {env} from "process";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV)
  },
  plugins: [
    react(),
    dts({
      outDir: "dist",
      include: ["src/index.ts"],
      exclude: ["src/**/__tests__/**"]
    })
  ],

  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setup.ts",
    coverage: {
      include: ["src/ui/**/*.{ts,tsx}"],
      exclude: [
        ...configDefaults.exclude,
        "src/ui/**/**/*.stories.{ts,tsx}",
        ".eslintrc.json",
        "vite.config.ts",
        "commitlint.config.cjs",
        "src/vite-env.d.ts"
      ],
      thresholds: {
        lines: 30,
        functions: 30,
        branches: 30,
        statements: 30
      }
    },
    env: {
      NODE_ENV: "development"
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
