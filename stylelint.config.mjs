/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-prettier/recommended', 'stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
};
