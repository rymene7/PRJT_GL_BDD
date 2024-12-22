// eslint.config.js
export default [
  {
    files: ['*.js'],
    rules: {
      // Add your custom rules here
      'no-unused-vars': 'warn', // Example rule
      'semi': ['error', 'always'], // Example rule
    },
    env: {
      node: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
    },
  },
];
