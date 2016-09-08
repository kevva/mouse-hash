'use strict';
const md5Hex = require('md5-hex');
const mousePosition = require('mouse-position');

module.exports = opts => {
	opts = Object.assign({length: 500}, opts);

	const mouse = mousePosition();
	const arr = [];

	return new Promise(resolve => {
		mouse.on('move', () => {
			arr.push(String([mouse[0], mouse[1]]));

			if (arr.length >= opts.length) {
				resolve(md5Hex(arr));
			}
		});
	});
};
