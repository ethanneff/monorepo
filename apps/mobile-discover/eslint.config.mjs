import eslintBase from '@tooling/eslint/base';

export default [...eslintBase, { ignores: ['dist/*'] }];
