var path = require('path');
var config = require('../config/baseConfig.js');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackMerge = require('webpack-merge');
var production = require('../config/product.config.js');
var webpackBase = require('./webpack.config.base.js');

var env = process.env.NODE_ENV;
console.log(env);
if(env == config.build.env){
	module.exports = webpackMerge(webpackBase,{
		output:{
			path: path.resolve(config.build.distRoot + '/app'),
			publicPath: config.build.publicPath
		},
		plugins:[
			new HtmlWebpackPlugin({
				filename: path.resolve(config.build.distRoot + '/index.html'),
				template: path.resolve(config.build.sourceRoot + '/index.html'),
				inject: true,
				hash: true
			})
		]
	});
}else{
	module.exports = webpackMerge(webpackBase,{
		devtool: '#cheap-module-eval-source-map',
		output:{
			path: path.resolve(config.dev.distRoot + '/app'),
			publicPath: config.dev.publicPath
		},
		plugins:[
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				filename: path.resolve(config.dev.distRoot + '/index.html'),
				template: path.resolve(config.dev.sourceRoot + '/index.html'),
				inject: true,
				hash: true
			})
		]
	});
}
