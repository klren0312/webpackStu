const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: {
    main: './src/index.js' // 入口
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
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),
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