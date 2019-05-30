const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production', // 打包环境
  entry: {
    main: './src/index.js' // 入口
  },
  devtool: 'source-map',
  optimization: {
    usedExports: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new cleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: { // 输出
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
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
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: 'dist',
    port: 9200,
    hot: true,
    hotOnly: true
  }
}