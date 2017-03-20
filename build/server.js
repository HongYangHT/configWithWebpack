// 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config')
var baseConfig = require('../config/baseConfig.js');

// 创建一个express实例
var app = express()

// 调用webpack并把配置传递过去
var compiler = webpack(config)
console.log(baseConfig.dev.serverPath);
// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    contentBase:baseConfig.dev.serverPath,
    publicPath: '/app',
    stats: {
        colors: true,
        chunks: false
    }
})

// 注册中间件
app.use(devMiddleware)

// 监听 8888端口，开启服务器
app.listen(8888, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:8888')
})