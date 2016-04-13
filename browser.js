'use strict';
var md5Hex = require('md5-hex');
var mousePosition = require('mouse-position');
var objectAssign = require('object-assign');

module.exports = function (opts) {
	opts = objectAssign({length: 500}, opts);

	var mouse = mousePosition();
	var arr = [];

	return new Promise(function (resolve) {
		mouse.on('move', function () {
			arr.push(String([mouse[0], mouse[1]]));

			if (arr.length >= opts.length) {
				resolve(md5Hex(arr));
			}
		});
	});
};
