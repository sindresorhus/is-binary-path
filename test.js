'use strict';
var test = require('ava');
var isBinaryPath = require('./');

test(function (t) {
	t.assert(isBinaryPath('unicorn.png'));
	t.assert(isBinaryPath('unicorn.zip'));
	t.assert(isBinaryPath('unicorn.ZIP'));
	t.assert(!isBinaryPath('unicornzip'));
	t.assert(!isBinaryPath('unicorn.txt'));
	t.end();
});
