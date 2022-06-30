const packageName = require('./package.json').name;
const mfPackageName = require('../mf/package.json').name;
const { ModuleFederationPlugin } = require('webpack').container
const htmlWebpackPlugin = require('html-webpack-plugin');
const MyAwesomeWebpackPlugin = require('../plugin/html-plugin')

module.exports = {
  devServer: {
    port: 8082,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  publicPath: 'http://localhost:8082/',
  configureWebpack: config => {
    config.output.library = packageName
    config.output.libraryTarget = 'umd'
    config.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`
    config.plugins.push(new MyAwesomeWebpackPlugin(htmlWebpackPlugin))
    config.plugins.push(new ModuleFederationPlugin({
      name: packageName,
        remotes: {
          [mfPackageName]: `${mfPackageName}@http://localhost:8086/${mfPackageName}.js`
        },
        // shared: {
        //   moment: {
        //     // singleton: true
        //   },
        //   vue: {
        //     // singleton: true
        //   },
        // }
    }))
  },
  chainWebpack: config => {
    // config.optimization.delete('splitChunks')
  }
};