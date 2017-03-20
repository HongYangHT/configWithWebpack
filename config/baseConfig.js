var product = require('./product.config.js');
var develop = require('./develop.config.js');
var path = require('path');

module.exports = {
	build: {
		env: product.NODE_ENV,
		sourceRoot: path.resolve(__dirname, '../src/app'),
		distRoot: path.resolve(__dirname, '../dist'),
		// publicPath: path.resolve(__dirname, '../dist/app'),
		publicPath: '../dist/app',
		sourceMap: false
	},
	dev: {
		env: develop.NODE_ENV,
		sourceRoot: path.resolve(__dirname, '../src/app'),
		distRoot: path.resolve(__dirname, '../dev'),
		// publicPath: path.resolve(__dirname, '../dev/app'),
		publicPath: '../dev/app',
		sourceMap: true,
		serverPath: path.resolve(__dirname, '../dev')
	}
};