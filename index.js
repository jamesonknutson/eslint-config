/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    'node': true,
    'es6': true,
    'shared-node-browser': true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prefer-const': ['off'],
    'array-bracket-spacing': [1, 'always'],
    'object-curly-spacing': [1, 'always'],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    'quotes': [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'semi': ['warn', 'never'],
  },
}
