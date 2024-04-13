// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 'latest', // or 2021 if you want to be specific
    sourceType: 'module',
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.test.js'],
      env: { jest: true },
      plugins: ['jest'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
}
