'use strict';
const path = require('path');
const binaryExtensions = require('binary-extensions');

const exts = new Set(binaryExtensions);

module.exports = filepath => exts.has(path.extname(filepath).slice(1).toLowerCase());
