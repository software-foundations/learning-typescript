const path = require('path')

module.exports = {

	mode: 'development',
	entry: './src/section_19/19_exercise/exercise.ts',

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				////////////
				// CHANGE //
				////////////
				// use: 'ts-loader',
				loader: 'ts-loader',
				options: {
					configFile: 'tsconfig.frontend.json'
				},

				exclude: /node_modules/
			}
		]
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},

	output: {
		filename: 'bundle.js',

		////////////
		// CHANGE //
		////////////
		// path: path.resolve(_dirname, 'dist', 'assets', 'js')
		path: path.resolve(__dirname, 'frontend', 'assets', 'js')
	},

	devtool: 'source-map'
}