const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Shortly',
			template: path.resolve(__dirname, './src/template.html'),
			filename: 'index.html', // Output file
		}),

		new CleanWebpackPlugin(),
	],
};
