const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  devServer: {
    open: process.platform === 'darwin',
    disableHostCheck: false,
    host: '0.0.0.0',
    port: 8020,
    https: false,
    hotOnly: false,
    proxy: null,
    before: app => {}
  }
}
