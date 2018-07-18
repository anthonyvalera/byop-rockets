const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			}
		]
	},

	plugins: [],
	entry: './src/index.js',

	output: {
		filename: 'main.js',
		chunkFilename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'development'
};
