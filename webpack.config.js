const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/app.ts',
	mode: 'development',
	devServer: {
		static: {
			directory: path.join(__dirname, './dist'),
		},
		compress: true,
		open: true,
		hot: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			// CSS, PostCSS, and Sass
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
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
