import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      '**/node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'public/**',
      '**/*.config.js',
      '**/*.config.mjs',
    ],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:typescript-sort-keys/recommended',
  ),
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'import/no-unresolved': [2, { caseSensitive: false }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'import/no-unresolved': [2, { caseSensitive: false }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'warn',
        {
          groups: [['builtin'], 'external', 'internal', ['parent', 'sibling']],
          pathGroups: [
            {
              pattern:
                '@{redux,themes,assets,components,conf,hooks,navigation,storage,thunk,slice,screens,themes,colors,utils,interfaces,app,common,services,context,constants}/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: 'react**',
              group: 'builtin',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];

export default eslintConfig;
