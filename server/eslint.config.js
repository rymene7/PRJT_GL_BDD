// eslint.config.js
export default [
  {
    files: ['*.js'],
    rules: {
      // Add your custom rules here
      'no-unused-vars': 'warn', // Example rule
      'semi': ['error', 'always'], // Example rule
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        // Define your global variables here
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly'
      }
    },
    sourceType: 'module',
  },
];
