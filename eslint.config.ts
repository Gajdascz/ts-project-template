import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import * as importPlugin from "eslint-plugin-import";
import tsdoc from "eslint-plugin-tsdoc";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";

const rules: {
  strict: ConfigWithExtends["rules"];
  relaxed: ConfigWithExtends["rules"];
} = {
  strict: {
    "tsdoc/syntax": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports", prefer: "type-imports" },
    ],
    "@typescript-eslint/consistent-type-exports": [
      "error",
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      { allowNumber: true, allowBoolean: true, allowNever: true },
    ],
    "@typescript-eslint/no-unnecessary-type-parameters": "off",
    "@typescript-eslint/no-explicit-any": [
      "error",
      { fixToUnknown: true, ignoreRestArgs: true },
    ],
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
  },
  relaxed: {
    "@typescript-eslint/no-confusing-void-expression": "off",
    "no-duplicate-imports": "off",
    "import/no-duplicates": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
};

const shared: {
  ignores: ConfigWithExtends["ignores"];
  plugins: ConfigWithExtends["plugins"];
  settings: ConfigWithExtends["settings"];
  extends: ConfigWithExtends["extends"];
} = {
  ignores: [
    "**/dist/**",
    "**/build/**",
    "**/docs/**",
    "**/node_modules/**",
    "**/**/*.d.ts",
  ],
  plugins: {
    "@typescript-eslint": tseslint.plugin,
    import: importPlugin,
    tsdoc,
  },
  settings: {
    "import/resolver": {
      typescript: { project: "./tsconfig.json" },
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    },
  },
  extends: [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    prettierConfig,
  ],
};

export default tseslint.config(
  {
    name: "src",
    files: ["./src/**/*.{ts,tsx,js,jsx}"],
    ignores: shared.ignores,
    plugins: shared.plugins,
    settings: shared.settings,
    languageOptions: {
      parser: tseslint.parser,
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: rules.strict,
    extends: shared.extends,
  },
  {
    name: "tests",
    files: ["./__tests__/**/*.{ts,tsx,js,jsx}"],
    ignores: shared.ignores,
    plugins: shared.plugins,
    settings: shared.settings,
    languageOptions: {
      parser: tseslint.parser,
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.test.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: rules.relaxed,
    extends: shared.extends,
  },
  {
    name: "configs",
    files: ["./*.ts", "./bin/**/*.ts"],
    ignores: shared.ignores,
    plugins: shared.plugins,
    settings: shared.settings,
    languageOptions: {
      parser: tseslint.parser,
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.config.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: rules.relaxed,
    extends: shared.extends,
  },
);
