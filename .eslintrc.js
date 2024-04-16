module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
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
    {
      files: ['**/*.cy.js', 'cypress.config.js'],
      env: { 'cypress/globals': true },
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
      rules: {
        'cypress/no-unnecessary-waiting': 'off',
        'jest/valid-expect': 'off',
        'jest/expect-expect': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
}
