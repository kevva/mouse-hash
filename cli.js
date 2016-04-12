#!/usr/bin/env node
'use strict';
const meow = require('meow');
const mouseHash = require('./');

const cli = meow([
	'Usage',
	'  $ mouse-hash',
	'',
	'Options',
	'  --length  250. [Default: 500]'
]);

console.log('Move your mouse\n');

mouseHash(cli.flags, (err, hash) => {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(hash);
});
