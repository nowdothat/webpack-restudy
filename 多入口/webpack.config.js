const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');


module.exports = {
	// 入口文件，指向app.js
	entry: {
		first: './first_entry.js',
		second: './second_entry.js'
	},
	// 出口文件
	output: {
		// 文件名，将打包好的导出为bundle.js
		filename: 'public/[name].js',
		path: __dirname + '/dist'
	},
	plugins: [
		new CleanWebpackPlugin(),
		...['first', 'second'].map(item => new HtmlWebpackPlugin({
			inject: false,
			title: 'title', // html的title（就是title标签里的东西）（不使用自定义模板 template 的时候，这个属性才会生效）
			filename: item + '.html', // 重写后的html文件名，默认是index.html
			template: item + '.html', //
		}))
	]
}