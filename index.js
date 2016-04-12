'use strict';
const hasha = require('hasha');
const objectAssign = require('object-assign');
const osxMouse = require('osx-mouse');
const winMouse = require('win-mouse');

module.exports = (opts, cb) => {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	opts = objectAssign({length: 500}, opts);

	const mouse = process.platform === 'darwin' ? osxMouse() : winMouse();
	const arr = [];

	mouse.on('move', (x, y) => {
		arr.push(String([x, y]));

		if (arr.length >= opts.length) {
			cb(null, hasha(arr));
			mouse.destroy();
		}
	});
};
