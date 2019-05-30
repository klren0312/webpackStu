const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const configs = {
  entry: {
    index: './src/index.js', // 入口
    list: './src/list.js',
    detail: './src/detail.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'imports-loader?this=>window'
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'initial'
    }
  },
  plugins: [
    new cleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash'
    })
  ],
  output: { // 输出
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  }
}
const makeHtmlPlugins = function (config) {
  const htmlPlugins = []
  Object.keys(configs.entry).forEach(v => {
    htmlPlugins.push(
      new htmlWebpackPlugin({
        template: 'src/index.html',
        filename: `${v}.html`,
        chunks: [v]
      })
    )
  })
  return htmlPlugins
}

configs.plugins = configs.plugins.concat(makeHtmlPlugins(configs))
module.exports = configs
