const packageName = require('./package.json').name;

module.exports = {
  devServer: {
    port: 8086,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  publicPath: 'http://localhost:8086/',
  chainWebpack: config => {
    // 由于 webpack splitchunk 与 module federation 冲突
    // 组件资源提供方也就是 remote 放需要添加下面这行设置
    config.optimization.delete('splitChunks')
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: packageName,
        filename: `${packageName}.js`,
        library: {
          // 详情查看 https://github.com/umijs/qiankun/issues/1148
          // 在使用 qiankun 微前端的架构下
          // 如果使用 var 需要弃用 qiankun 得沙箱机制，需要设置
            // start({
            //   sandbox: false
            //   sandbox: { strictStyleIsolation: false },
            // });
          // 或者将 type 设置为 window，即可不对 qiankun 做调整
          type: 'window',
          name: packageName
        },
        exposes: {
          './Btn': './src/components/btn/index',
          './Content': './src/components/content/index',
        },
        // 使用共享依赖配置可能会出现 Shared module is not available for eager consumption 的错误
        // https://webpack.js.org/concepts/module-federation/#uncaught-error-shared-module-is-not-available-for-eager-consumption
        // 因为乾坤需要在入口文件暴露mounted, unmounted 等生命钩子，所以这里并不能使用官网给出的这套解决方案
        // shared: {
        //   moment: {
        //     // singleton: true
        //   },
        //   vue: {
        //     // singleton: true
        //   },
        // }
      }]
    )
  }
};