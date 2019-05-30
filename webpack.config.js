const path = require('path')
const Fiber = require('fibers')

module.exports = {
  mode: 'development', // 打包环境
  entry: {
    main: './index.js' // 入口
  },
  output: { // 输出
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {// https://github.com/webpack-contrib/sass-loader#examples
        test: /\.(sass|scss)$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            fiber: Fiber
          }
        }, 'postcss-loader']
      }
    ]
  }
}