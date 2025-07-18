import { defineConfig } from 'vitest/config';
const ROOT = import.meta.dirname;
export default defineConfig({
  cacheDir: `${ROOT}/.dev/.cache/`,
  test: {
    setupFiles: [`${ROOT}/.dev/__mocks__/index.ts`],
    typecheck: { enabled: true, tsconfig: `${ROOT}/tsconfig.test.json` },
    coverage: {
      provider: 'v8',
      enabled: true,
      thresholds: { 100: true, perFile: true },
      reporter: ['text'],
      ignoreEmptyLines: true,
      reportsDirectory: `${ROOT}/.dev/.cache/vitest/.coverage`,
      exclude: [
        // Dot Files
        '**/.*',

        // Directories
        '**/{dist,build,docs,bin,examples,node_modules,__tests__}/**',

        // Extensions
        '**/*.{md,json,yml,yaml,lock,tsbuildinfo}',

        // Types
        '**/*.d.ts',
        '**/types.ts',
        '**/types/**',

        // Constants
        '**/constants.ts',
        '**/constants/**',

        // By File's First Extension
        '**/*.{config,test,spec,bench,benchmark}.*'
      ]
    }
  }
});
