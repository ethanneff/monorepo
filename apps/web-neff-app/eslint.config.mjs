import eslintBase from '@tooling/eslint/base';

export default [
  ...eslintBase,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  {
    rules: {
      'no-plusplus': 'off',
      'react-you-might-not-need-an-effect/no-manage-parent': 'off',
      'react/jsx-no-literals': 'off',
      'sonarjs/pseudo-random': 'off',
    },
  },
];
