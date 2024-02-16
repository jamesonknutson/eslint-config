/* eslint-env node */
module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked'
  ],
  parserOptions: {
    project: true,
  },
  ignorePatterns: [
    'out',
    'dist',
    '.eslintrc.json',
    '.prettierrc.json'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'array-bracket-spacing': [
      1,
      'always'
    ],
    'no-unused-vars': 'off',
    'object-curly-spacing': [
      1,
      'always'
    ],
    'one-var': [
      'error',
      'never'
    ],
    'prefer-const': [
      'off'
    ],
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'require-await': [
      'error'
    ],
    semi: [
      'warn',
      'never'
    ],
    'unicorn/filename-case': 'off',
    'unicorn/no-array-method-this-argument': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-empty-file': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prevent-abbreviations': 'off'
  },
  settings: {
    componentWrapperFunctions: [
      'observer',
      {
        property: 'styled'
      },
      {
        object: 'Mobx',
        property: 'observer'
      },
      {
        object: '<pragma>',
        property: 'observer'
      }
    ],
    formComponents: [
      'CustomForm',
      {
        formAttribute: 'endpoint',
        name: 'Form'
      }
    ],
    linkComponents: [
      'Hyperlink',
      {
        linkAttribute: 'to',
        name: 'Link'
      }
    ],
    propWrapperFunctions: [
      'forbidExtraProps',
      {
        object: 'Object',
        property: 'freeze'
      },
      {
        property: 'myFavoriteWrapper'
      },
      {
        exact: true,
        property: 'forbidExtraProps'
      }
    ],
    react: {
      createClass: 'createReactClass',
      flowVersion: '0.53',
      fragment: 'Fragment',
      pragma: 'React',
      version: 'detect'
    }
  }
}