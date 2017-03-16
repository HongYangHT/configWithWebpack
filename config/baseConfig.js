import * as product from './product.config';
import * as develop from './develop.config';
import path from 'path';

module.exports = {
	build: {
		env: product.NODE_ENV,
		sourceRoot: path.resolve(__dirname, '../src/app/'),
		distRoot: path.resolve(__dirname, '../dist/'),
		publicPath: path.resolve(__dirname, '/'),
		sourceMap: false
	},
	dev: {
		env: develop.NODE_ENV,
		sourceRoot: path.resolve(__dirname, '../src/app/'),
		distRoot: path.resolve(__dirname, '../dev/'),
		publicPath: path.resolve(__dirname, '/'),
		sourceMap: true
	}
};