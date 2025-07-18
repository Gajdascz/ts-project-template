/**
 * cjs is used over typescript for
 * compatibility with vscode settings and
 * manual path/plugin specification.
 */

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
module.exports = {
  pluginSearchDirs: ['.'],
  arrowParens: 'always',
  endOfLine: 'lf',
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  experimentalTernaries: true,
  experimentalOperatorPosition: 'start',
  objectWrap: 'collapse'
};
