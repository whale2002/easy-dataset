module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
  bracketSpacing: true,
  endOfLine: 'auto',
  arrowParens: 'always',
  overrides: [
    {
      files: ['*.css', '*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};