class copyWebpackPlugin {
  constructor (options) {
    console.log('hello, my plugin', options.name)
  }
  apply (compiler) {
  }
}
module.exports = copyWebpackPlugin
