module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['react-app'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'eslint-plugin-es', 'prettier'],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-curly-brace-presence': [1, 'never'],
        'global-require': 0,
        'no-throw-literal': 1,
        'no-underscore-dangle': 0,
        'dot-notation': 0,
        'react/forbid-prop-types': 0,
        'react/require-default-props': 0,
        'react/no-unused-prop-types': 0,
    },
};
