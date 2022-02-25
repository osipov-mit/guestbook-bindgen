const { readdirSync, rmSync } = require('fs');
const { resolve, join } = require('path');

readdirSync('./pkg').forEach((name) => {
  if (!['env.js', 'index.js'].includes(name)) {
    rmSync(resolve(join('pkg', name)));
  }
});

readdirSync('./').forEach((name) => {
  if (name.match(/.*.wasm/)) {
    rmSync(resolve(name));
  }
});

rmSync('./target', { recursive: true, force: true });
