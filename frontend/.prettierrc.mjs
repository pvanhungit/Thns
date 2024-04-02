/** @type {import('prettier').Config} */
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const prettierConfig = {
  arrowParens: 'always',
  endOfLine: 'lf',
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  trailingComma: 'all',
  bracketSameLine: false,

  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILTIN_MODULES>', // Node.js built-in modules
    '',
    '^react$|^(react/(.*)$)|^react-dom/(.*)$|^react-router-dom$',
    '^next$|^(next/(.*)$)',
    '',
    '^@mui/material/styles(.*)$',
    '^@mui$|(mui/(.*)$)',
    '',
    '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
    '',
    '^(@/types/(.*)$)|^@/types',
    '^(@/constants/(.*)$)|^@/constants',
    '^(@/config/(.*)$)|^@/config',
    '^(@/utils/(.*)$)|^@/utils',
    '^(@/hooks/(.*)$)|^@/hooks',
    '^(@/locales/(.*)$)|^@/locales',
    '',
    '^(@/apis/(.*)$)|^@/apis',
    '^(@/services/(.*)$)|^@/services',
    '^(@/redux/(.*)$)|^@/redux',
    '',
    '^(@/themes/(.*)$)|^@/themes',
    '^(@/routes/(.*)$)|^@/routes',
    '^(@/assets/(.*)$)|^@/assets',
    '^(@/components/(.*)$)|^@/components',
    '',
    '^(@/features/(.*)$)|^@/features',
    '^(@/views/(.*)$)|^@/views',
    '^(@/layouts/(.*)$)|^@/layouts',
    '^(@/pages/(.*)$)|^@/pages',
    '^@/(.*)$',
    '',
    '^[.]', // relative imports
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};

export default prettierConfig;
