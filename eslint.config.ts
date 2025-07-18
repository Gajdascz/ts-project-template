import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import * as importPlugin from 'eslint-plugin-import';
import tsdoc from 'eslint-plugin-tsdoc';
import tseslint, { type ConfigWithExtends } from 'typescript-eslint';

const rules: {
  strict: ConfigWithExtends['rules'];
  relaxed: ConfigWithExtends['rules'];
} = {
  strict: {
    /** tsdoc syntax errors are not significant and/or mature enough to require immediate attention */
    'tsdoc/syntax': 'warn',

    /** Specifying fix option */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports', prefer: 'type-imports' }
    ],

    /** Specifying fix option */
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true }
    ],
    /**
     * ensures tsCompiler --verbatimModuleSyntax
     * can effectively transpile import declarations
     * and easily remove all imports with a top-level
     * type qualifier and any import specifiers
     * with an inline type qualifier
     *
     * @example
     * ```ts
     * Valid:
     *  import type { A } from 'mod';
     *  import type { A as AA } from 'mod';
     *  import type { A, B } from 'mod';
     *  import type { A as AA, B as BB } from 'mod';
     *  import T from 'mod';
     *  import type T from 'mod';
     *  import * as T from 'mod';
     *  import type * as T from 'mod';
     *  import { T } from 'mod';
     *  import type { T } from 'mod';
     *
     * Invalid:
     *  import { type T } from 'mod';
     *  import { type T as TT } from 'mod';
     *  import { type T, type X } from 'mod';
     *  import { type T as TT, type X as XX } from 'mod';
     * ```
     */
    '@typescript-eslint/no-import-type-side-effects': 'error',

    /** Simplifies debug logging. */
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true, allowBoolean: true, allowNever: true }
    ],
    /**
     * This rule can be trouble in some niche cases.
     *
     * @example Creating a JSON.parse utility
     * function
     * ```ts
     * export default function stringify<T>(value: T) {
     *   return JSON.stringify(value);
     * }
     * ```
     */
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',

    /**
     * ESLint's no-duplicate-imports is less reliable
     * then eslint-plugin-import's import/
     * no-duplicates.
     */
    'no-duplicate-imports': 'off',
    'import/no-duplicates': 'error',

    /** Specify fixToUnknown */
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],

    /**
     * Personal preference, I prefer the ability
     * to use bother Record and indexed object types
     * interchangeably.
     *
     * @example
     * ```ts
     * Record<string,string>
     * { [string:string]: string }
     * ```
     */
    '@typescript-eslint/consistent-indexed-object-style': 'off',

    /**
     * Personal preference, I prefer the ability
     * to improve clarity/documentation when dealing
     * with dynamic/unreliable data using TypeScript
     * when possible.
     *
     * @example
     * ```ts
     * interface Person{
     *   name: string | unknown; // should be string but could be unknown
     *   method: () => void;
     * };
     */
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    /**
     * Personal preference, I prefer the
     * ability shorthand functions like
     * ```ts
     * ():void => fn()
     * ```
     */
    '@typescript-eslint/no-confusing-void-expression': 'off',

    /**
     * Disable ESLint's no-shadow to enable
     * TSESlint's extended version
     */
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    /**
     * Align TSEslint's expectations with TypeScript's
     * strictFunctionTypes
     */
    '@typescript-eslint/method-signature-style': ['error', 'property']
  },
  relaxed: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  }
};

const shared: {
  ignores: ConfigWithExtends['ignores'];
  plugins: ConfigWithExtends['plugins'];
  settings: ConfigWithExtends['settings'];
  extends: ConfigWithExtends['extends'];
  rules: ConfigWithExtends['rules'];
} = {
  ignores: [
    '**/dist/**',
    '**/build/**',
    '**/docs/**',
    '**/node_modules/**',
    '**/**/*.d.ts'
  ],
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    import: importPlugin,
    tsdoc
  },
  settings: {
    'import/resolver': {
      typescript: { project: './tsconfig.json' },
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    }
  },
  extends: [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    prettierConfig
  ],
  rules: rules.strict
};

export default tseslint.config(
  {
    name: 'src',
    files: ['./src/**/*.{ts,tsx,js,jsx}'],
    ignores: shared.ignores,
    plugins: shared.plugins,
    settings: shared.settings,
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: shared.rules,
    extends: shared.extends
  },
  {
    name: 'tests',
    files: ['./__tests__/**/*.{ts,tsx,js,jsx}'],
    ignores: shared.ignores,
    plugins: shared.plugins,
    settings: shared.settings,
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.test.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    extends: shared.extends,
    rules: { ...shared.rules, ...rules.relaxed }
  },
  {
    name: 'configs',
    files: ['./*.ts', './bin/**/*.ts'],
    ignores: shared.ignores,
    plugins: shared.plugins,
    settings: shared.settings,
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.config.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    extends: shared.extends,
    rules: { ...shared.rules, ...rules.relaxed }
  }
);
