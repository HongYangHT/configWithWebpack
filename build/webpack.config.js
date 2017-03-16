import * as webpackBase from './webpack.config.base.js';
import * as production from '../config/product.config.js';
import * as webpackMerge from 'webpack-merge';
import webpack from 'webpack';
import path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';


const env = process.env.NODE_ENV;

if(env == webpackBase.build.env){
	module.exports = webpackMerge(webpackBase,{
		plugins:[
			new HtmlWebpackPlugin({
				filename: config.build.distRoot + 'index.html',
				template: config.build.distRoot + 'index.html',
				inject: true,
				hash: true
			})
		]
	});
}else{
	module.exports = webpackMerge(webpackBase,{
		devtool: '#cheap-module-eval-source-map',
		plugins:[
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				filename: config.dev.distRoot + 'index.html',
				template: config.dev.distRoot + 'index.html',
				inject: true,
				hash: true
			})
		]
	});
}