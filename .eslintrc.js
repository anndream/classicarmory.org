require('svelte/compiler')
module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    plugins: ['svelte3'],
    extends: ['eslint:recommended'],
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    rules: {
        'svelte3/lint-template': 2,
        'comma-dangle': 0,
        'svelte3/ignore-styles': 0,
  }
}
