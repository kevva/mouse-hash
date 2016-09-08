'use strict';
const hasha = require('hasha');
const mouse = process.platform === 'darwin' ? require('osx-mouse')() : require('win-mouse')();

module.exports = opts => {
	opts = Object.assign({length: 500}, opts);

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
