import * as webpackBase from './webpack.config.base.js';
import * as production from '../config/product.config.js';
import * as webpackMerge from 'webpack-merge';
import webpack from 'webpack';
import path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';

const env = process.env.NODE_ENV;

if(env == webpackBase.build.env){
	module.exports = webpackMerge(webpackBase,{
		plugins:[
    		new webpack.NoEmitOnErrorsPlugin(),
    		new FriendlyErrorsPlugin()
		]
	});
}else{
	module.exports = webpackMerge(webpackBase,{
		devtool: '#cheap-module-eval-source-map',
		plugins:[
			new webpack.HotModuleReplacementPlugin(),
    		new webpack.NoEmitOnErrorsPlugin(),
    		new FriendlyErrorsPlugin()
		]
	});
}