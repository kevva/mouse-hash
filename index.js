'use strict';
const hasha = require('hasha');
const objectAssign = require('object-assign');
const mouse = process.platform === 'darwin' ? require('osx-mouse')() : require('win-mouse')();

module.exports = opts => {
	opts = objectAssign({length: 500}, opts);

	const arr = [];

	return new Promise(resolve => {
		mouse.on('move', (x, y) => {
			arr.push(String([x, y]));

			if (arr.length >= opts.length) {
				mouse.destroy();
				resolve(hasha(arr));
			}
		});
	});
};
