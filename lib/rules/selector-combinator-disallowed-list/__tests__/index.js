'use strict';

const { messages, ruleName } = require('..');

testRule({
	ruleName,
	config: ['>', ' '],

	accept: [
		{
			code: 'a {}',
		},
		{
			code: 'a, b {}',
		},
		{
			code: 'a /for/ b {}',
		},
		{
			code: 'a + b {}',
		},
		{
			code: 'a:not(b ~ c) {}',
		},
	],

	reject: [
		{
			code: 'a b {}',
			message: messages.rejected(' '),
			line: 1,
			column: 2,
		},
		{
			code: 'a\tb {}',
			message: messages.rejected(' '),
			line: 1,
			column: 2,
		},
		{
			code: 'a\n\tb {}',
			message: messages.rejected(' '),
			line: 1,
			column: 2,
		},
		{
			code: 'a,\nb c {}',
			message: messages.rejected(' '),
			line: 2,
			column: 2,
		},
		{
			code: 'a:not(b > c) {}',
			message: messages.rejected('>'),
			line: 1,
			column: 9,
		},
		{
			code: 'a > b {}',
			message: messages.rejected('>'),
			line: 1,
			column: 3,
		},
	],
});

testRule({
	ruleName,
	config: '>',

	accept: [
		{
			code: 'a {}',
		},
	],

	reject: [
		{
			code: 'a > b {}',
			message: messages.rejected('>'),
		},
	],
});
