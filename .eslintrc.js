/* eslint-disable @typescript-eslint/no-var-requires */

const defaultConfig = require('./.eslintrc-defaults.node.js');

module.exports = {
  ...defaultConfig,
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    ...(defaultConfig.rules || {}),
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['cypress'],
      rules: {
        'max-len': 'off',
        'no-empty': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'no-underscore-dangle': 'off',
      },
    },
  ],
  ignorePatterns: ['cypress.config.js', 'cypress/index.d.ts'],
};
