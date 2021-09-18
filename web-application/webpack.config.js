

import { join } from 'path';

function srcPath(subdir) {
  return join(__dirname, 'src', subdir);
}
export const resolve = {
  alias: {
    'assets': srcPath('src/assets'),
    'components': srcPath('src/components'),
    'constants': srcPath('src/constants'),
    'pages': srcPath('src/pages'),
    'services': srcPath('src/services'),
    'utils': srcPath('src/utils'),
  },
  // ...
};