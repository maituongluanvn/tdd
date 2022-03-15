/** @type {import("@types/prettier").Options} */
const options = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 4,
      },
    },
  ],
};

module.exports = options;
