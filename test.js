import test from 'ava';
import m from './';

test(t => {
	t.true(m('unicorn.png'));
	t.true(m('unicorn.zip'));
	t.true(m('unicorn.ZIP'));
	t.false(m('unicornzip'));
	t.false(m('unicorn.txt'));
});
