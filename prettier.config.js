const fs = require('fs');
const path = require('path');

// We want to order the imports thusly: 3rd party -> aliased imports -> absolute imports -> relative imports
const srcDirs = fs
    .readdirSync(path.resolve(__dirname, './src'))
    .map(n => n.split('.')[0])
    .filter(Boolean);

// @test(\\/|\\/.+|$) alias ensures that it doesn't match @testing-library,
// but can match @test and @test/**
const aliases = ['@root', '@test(\\/|\\/.+|$)'];

const importOrder = [
    '^react$',
    `^(?!(${srcDirs.join('|')}|${aliases.join('|')}))[@a-z]`,
    `^(${aliases.join('|')})`,
    `^(${srcDirs.join('|')})`,
    '^[./].*(?<!scss)$',
    '^[./]',
];

module.exports = {
    tabWidth: 4,
    arrowParens: 'avoid',
    singleQuote: true,
    printWidth: 120,
    endOfLine: 'auto',
    importOrder: importOrder,
    experimentalBabelParserPluginsList: ['jsx', 'classProperties'],
    overrides: [
        {
            files: ['*.json', '*.prettierrc'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
