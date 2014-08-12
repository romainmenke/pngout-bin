'use strict';

var BinWrapper = require('bin-wrapper');
var path = require('path');
var pkg = require('../package.json');

/**
 * Variables
 */

var BASE_URL = 'https://raw.github.com/1000ch/node-pngout-bin/v' + pkg.version + '/vendor/';

/**
 * Initialize a new BinWrapper
 */

var bin = new BinWrapper()
  .src(BASE_URL + 'osx/pngout', 'darwin')
  .src(BASE_URL + 'linux/x86/pngout', 'linux', 'x86')
  .src(BASE_URL + 'linux/x64/pngout', 'linux', 'x64')
  .src(BASE_URL + 'freebsd/x86/pngout', 'freebsd', 'x86')
  .src(BASE_URL + 'freebsd/x64/pngout', 'freebsd', 'x64')
  .src(BASE_URL + 'win32/pngout.exe', 'win32')
  .dest(path.join(__dirname, '../vendor'))
  .use(process.platform === 'win32' ? 'pngout.exe' : 'pngout');

/**
 * Module exports
 */

module.exports = bin;