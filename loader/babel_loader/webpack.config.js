const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');


module.exports = {
  // 入口文件，指向app.js
  entry: './app.js',
  // 出口文件
  output: {
    // 文件名，将打包好的导出为bundle.js
    filename: 'public/[name].js',
    path: __dirname + '/dist'
  },
  module: {
    // loader放在rules这个数组里面
    rules: [{
      test: /\.js$/,
      // 这里表示忽略的文件夹，正则语法
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
    })
  ]
}