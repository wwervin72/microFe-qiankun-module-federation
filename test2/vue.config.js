const packageName = require('./package.json').name;
const htmlWebpackPlugin = require('html-webpack-plugin');
const MyAwesomeWebpackPlugin = require('../plugin/html-plugin')

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${packageName}`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${packageName}`
    },
    plugins: [
      new MyAwesomeWebpackPlugin(htmlWebpackPlugin)
    ]
  }
};