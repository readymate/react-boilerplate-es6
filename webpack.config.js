require('@babel/polyfill');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const mode = process.env.NODE_ENV || 'development';

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

const config = {
	performance: { hints: false },
	mode,
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		publicPath: process.env.PATH_PRODUCTION
	},
	stats: 'minimal',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] }
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader']
			}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new webpack.DefinePlugin(envKeys),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([{ from: 'static' }])
	]
};

if (mode == 'development') {
	Object.assign(config, {
		devtool: 'inline-source-map',
		output: {
			publicPath: process.env.PATH_DEVELOPMENT
		},
		devServer: {
			// disableHostCheck: true, // only uncomment this if WDS can't connect and you can't fix it
			port: process.env.PORT || 3000,
			contentBase: './dist',
			hot: true,
			historyApiFallback: true,
			proxy: {
				'/postman': 'http://localhost:5555',
				'/v1': 'http://localhost:28080'
			}
		}
	});
}

module.exports = config;
