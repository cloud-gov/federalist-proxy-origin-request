module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: [
    'mocha',
  ],
  rules: {
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
  },
};
