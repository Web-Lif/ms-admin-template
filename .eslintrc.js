module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'plugin:import/typescript',
    ],
    globals: {
        JSX: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'indent': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/require-default-props': 'off',
        'import/no-extraneous-dependencies': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],
        'no-shadow': 'off',
        
        '@typescript-eslint/no-shadow': 'error'
    }
}
