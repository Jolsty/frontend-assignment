const path = require('path');
const HTMLplugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',

	devServer: {
		compress: true,
		port: 3000,
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',

	resolve: {
		extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
	},

	entry: path.join(__dirname, 'src', 'index.tsx'),

	plugins: [
		new HTMLplugin({
			template: path.join(__dirname, 'src', 'public', 'index.html'),
			favicon: path.join(__dirname, 'src', 'public', 'favicon.ico'),
		}),
	],

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				loader: 'graphql-tag/loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
		],
	},
};
