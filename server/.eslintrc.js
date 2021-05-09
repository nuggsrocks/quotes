module.exports = {
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'env': {
    'jest': true,
    'node': true,
    'es6': true,
  },
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'ignorePatterns': ['node_modules/*'],
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
