// eslint.config.js
import eslintConfigRecommended from 'eslint-config-recommended';

export default [
  eslintConfigRecommended,
  {
    files: ['*.js'],
    rules: {
      // Add your custom rules here
    },
    env: {
      node: true,
      es6: true,
    },
  },
];
