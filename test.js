import test from 'ava';
import isBinaryPath from '.';

test('main', t => {
	t.true(isBinaryPath('unicorn.png'));
	t.true(isBinaryPath('unicorn.zip'));
	t.true(isBinaryPath('unicorn.ZIP'));
	t.false(isBinaryPath('unicornzip'));
	t.false(isBinaryPath('unicorn.txt'));
});
