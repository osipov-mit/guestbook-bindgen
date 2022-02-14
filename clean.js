const { readdirSync, rmSync } = require('fs');
const { resolve, join } = require('path');

const files = readdirSync('./pkg');
files.forEach((name) => {
  if (!['env.js', 'index.js'].includes(name)) {
    rmSync(resolve(join('pkg', name)));
  }
});
