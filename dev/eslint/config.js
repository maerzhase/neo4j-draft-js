/* eslint-disable quote-props */
module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: false,
    node: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          ImportDeclaration: true,
          VariableDeclarator: true,
        },
      },
    ],
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'class-methods-use-this': 'off',
    'max-len': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-unused-prop-types': 'off',
  },
  globals: {
    '__DEV__': true,
  },
};
