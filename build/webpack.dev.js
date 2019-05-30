const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const devConfig = {
  mode: 'development', // 打包环境
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: 'dist',
    port: 9200,
    hot: true,
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(commonConfig, devConfig)
