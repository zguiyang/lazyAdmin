/**
 * config for lint-staged
 * **/
module.exports = {
  '*.css': ['stylelint --fix', 'npm run format'],
  '*.{js,jsx}': ['eslint --fix', 'npm run format'],
  '!(*.css|*.js|*.jsx)': ['npm run format'],
};
