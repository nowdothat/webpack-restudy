const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');


module.exports = {
	// 入口文件，指向app.js
	entry: './src/app.js',
	// 出口文件
	output: {
		// 文件名，将打包好的导出为bundle.js
		filename: 'public/[name].js',
		path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              root: __dirname + '/static/',
              // url: true, // default true
              alias: {
                '@': __dirname + '/static/'
              },
              import: false,
              modules: false,
              minimize: false,
              sourceMap: true,
              camelCase: false
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
    }
    ]
  },
	plugins: [
		new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    })
	]
}