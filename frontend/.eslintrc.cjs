/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  env: { browser: true },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['prettier', 'react'],
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    warnOnUnsupportedTypeScriptVersion: false,
    tsconfigRootDir: __dirname,
  },
  rules: {
    // @typescript-eslint
    'no-unused-vars': 'off', // off base rule, use @typescript-eslint/no-unused-vars instead
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/ban-types': 'off',

    // others
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'default-case': 'warn',
    'max-len': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-empty': 'warn',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-exports': 'off',
    'no-underscore-dangle': 'off',

    // import
    'import/prefer-default-export': 0,

    // prettier
    'prettier/prettier': 'error',

    // react-hooks
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'error',

    // react
    'react/button-has-type': 'warn',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-key': 'warn',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-constructed-context-values': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-children-prop': 'off',
    'react/no-inline-styles': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'off',
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'react/no-unused-prop-types': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/self-closing-comp': 'warn',
    'react/jsx-pascal-case': ['warn', { ignore: ['Icons.*'] }],
  },
};
