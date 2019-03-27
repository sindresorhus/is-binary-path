'use strict';
const path = require('path');
const binaryExtensions = require('binary-extensions');

const extensions = new Set(binaryExtensions);

module.exports = filepath => extensions.has(path.extname(filepath).slice(1).toLowerCase());
