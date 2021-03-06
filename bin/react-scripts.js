#!/usr/bin/env node
const path = require('path');
const spawn = require('cross-spawn');

const script = process.argv[2];
const args = process.argv.slice(3);

switch (script) {
  case 'build':
  case 'start':
  case 'test':
  case 'test:watch':
    const result = spawn.sync(
      'node',
      [require.resolve(path.join('../scripts', script))].concat(args),
      { stdio: 'inherit' }
    );
    process.exit(result.status);
    break;
  default:
    console.log(`Unknown script "${script}".`);
    break;
}
