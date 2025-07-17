import { defineConfig } from "vitest/config";
const ROOT = import.meta.dirname;
export default defineConfig({
  cacheDir: `${ROOT}/.dev/.cache/`,
  test: {
    setupFiles: [`${ROOT}/.dev/__mocks__/index.ts`],
    typecheck: { enabled: true, tsconfig: `${ROOT}/tsconfig.test.json` },
    coverage: {
      provider: "v8",
      enabled: true,
      thresholds: { 100: true, perFile: true },
      reporter: ["text"],
      ignoreEmptyLines: true,
      reportsDirectory: `${ROOT}/.dev/.cache/vitest/.coverage`,
      exclude: [
        "**/coverage/**",
        "**/dist/**",
        "**/build/**",
        "**/docs/**",
        "**/dev/**",
        "**/node_modules/**",
        "**/__tests__/**",
        "**/[.]**",
        "**/*.d.ts",
        "test?(s)/**",
        "test?(-*).?(c|m)[jt]s?(x)",
        "**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)",
        "**/{vitest,build,eslint,prettier}.config.*",
        "**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
        "**/.cache/**",
        "**/coverage/**",
        "**/.github/**",
        "**/index.*",
        "**/README.*",
        "**/LICENSE*",
        "**/CHANGELOG*",
        "**/CONTRIBUTING*",
        "**/templates/**",
        "**/bin/**",
        "**/examples/**",
        "**/types.ts",
        "**/types/**",
        "**/string.js/**",
        // Ignore all type only packages
        "./packages/*-types/**",
        // Ignore Config Files
        "*.config.*",
        "bin/**/*",
        // Just organizes and exports fully tested internals
        "./packages/colors/src/api/api.ts",
        // Constants File
        "./packages/css-normalize/src/core/tokens/definitions.ts",
      ],
    },
  },
});
