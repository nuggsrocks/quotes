module.exports = {
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'env': {
    'jest': true,
    'browser': true,
    'node': true,
    'es6': true,
  },
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'ignorePatterns': ['node_modules/*', 'dist/*'],
  'rules': {
    'max-len': [
      2,
      120,
      4,
      {
        'ignoreUrls': true,
        'ignoreComments': true,
      },
    ],
    'no-console': 0,
  },
};
