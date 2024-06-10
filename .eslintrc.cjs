/* eslint-env node */
module.exports = {
  plugins: ['@typescript-eslint', 'unicorn'],
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
    '.prettierrc.json',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'unicorn/empty-brace-spaces': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    'no-empty': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
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
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    semi: [
      'warn',
      'never'
    ],
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-console-spaces': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-lonely-if': 'off',
    'unicorn/no-negated-condition': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/no-this-assignment': 'off',
    'unicorn/no-useless-fallback-in-spread': 'off',
    'unicorn/no-useless-switch-case': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-array-find': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prefer-logical-operator-over-ternary': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-method-this-argument': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-empty-file': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/template-indent': 'off',
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