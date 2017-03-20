var path = require('path');
var config = require('../config/baseConfig.js');
var webpack = require('webpack');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
/**
 * config doc https://webpack.js.org/concepts/ 
 * chunkhash: http://www.cnblogs.com/ihardcoder/p/5623411.html
 * demo : http://blog.csdn.net/sinat_17775997/article/details/52825890
 */
module.exports = {
	entry: {
		main: path.resolve(config.build.sourceRoot +'/app.js')
	},
	output: {
		path: path.resolve(config.build.distRoot + '/app'),
		publicPath: config.build.publicPath,
		filename: '[name][hash:8].js',
		chunkFilename: '[id][chunkhash:8].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json']
	},
	module: {
		loaders: [
            {
                test: /\.vue$/, 
                loader: 'vue-loader'   
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                exclude: /node_modules/
            }
        ]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin()
	]
};