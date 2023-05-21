module.exports = {
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    env: {
        es2017: true,
        browser: true,
        node: true
    },
    extends: [
        'eslint:recommended'
    ],
    plugins: [
        'svelte3'
    ],
    ignorePatterns: [
        'public/build/'
    ],
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
}