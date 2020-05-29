const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
	},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
		  MiniCssExtractPlugin.loader, 'css-loader',
		],
      },
    ],
  },	
	
	plugins: [
	  new HtmlWebpackPlugin({
        hash: true,
        template: './src/index.html',
        filename: './index.html'
	  }),
      new MiniCssExtractPlugin({
		filename:'style.css'
      }),	  
	]
	
}
	