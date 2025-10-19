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
  { rules: { 'react/jsx-no-literals': 'off' } },
];
