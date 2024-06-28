/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-prettier/recommended', 'stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
  ignoreFiles: ['./src/styles/tailwind.css'],
};
module.exports = config;
