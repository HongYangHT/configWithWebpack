import path from 'path';
import * as config from '../config/baseConfig';
import webpack from 'webpack';
import * as FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
/**
 * config doc https://webpack.js.org/concepts/ 
 * chunkhash: http://www.cnblogs.com/ihardcoder/p/5623411.html
 * demo : http://blog.csdn.net/sinat_17775997/article/details/52825890
 */
module.exports = {
	entry: {
		main: config.build.sourceRoot + 'app.js'
	},
	output: {
		path: config.build.distRoot,
		publicPath: config.build.publicPath,
		filename: '[name][hash:8].js',
		chunkFilename: '[id][chunkhash:8].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue', '.json']
	},
	modules: {
		rules: [{
			test: /\.vue$/,
			use: [{
				loader: 'vue-loader',
				options: {

				}
			}]
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin()
	]
};