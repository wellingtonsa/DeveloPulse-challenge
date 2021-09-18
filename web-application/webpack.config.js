

const path = require('path');

function srcPath(subdir) {
  return path.join(__dirname, 'src', subdir);
}
module.exports = {
  resolve: {
    alias: {
      'assets': srcPath('src/assets'),
      'components': srcPath('src/components'),
      'constants': srcPath('src/constants'),
      'pages': srcPath('src/pages'),
      'services': srcPath('src/services'),
      'utils': srcPath('src/utils'),
    },
    // ...
  },
  // ...
};