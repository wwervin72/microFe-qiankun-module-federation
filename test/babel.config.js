const plugins = ['@vue/babel-plugin-transform-vue-jsx'];
// 生产环境移除console
if (process.env.NODE_ENV === 'production') {
  plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }]);
}

module.exports = {
  plugins,
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry',
      },
    ],
  ],
};
