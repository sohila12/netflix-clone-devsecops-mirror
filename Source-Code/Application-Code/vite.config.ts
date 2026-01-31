/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isTest = mode === "test";

  return {
    plugins: [
      react({
        // disable react refresh during tests (fix file:///@react-refresh on Windows)
        fastRefresh: !isTest,
      }),
    ],

    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: "./src/setupTests.ts",
      coverage: {
        provider: "v8",
        reporter: ["text", "lcov"],
        reportsDirectory: "coverage",
        include: ["src/**/*.{ts,tsx}"],
        exclude: [
          "src/**/*.test.{ts,tsx}",
          "src/**/*.spec.{ts,tsx}",
          "src/setupTests.ts",
          "src/vite-env.d.ts",
        ],
      },
    },
  };
});
