const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
      entry: './src/index.js',
	    output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'bundle.js',
	    publicPath:'/'
	  },

   devServer:{
     	port:3000,
   	  historyApiFallback:true,
      headers: { "Access-Control-Allow-Origin": "*" },

   },
    module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude:/node_modules/ },
      { test: /\.(css)$/, use: ['style-loader','css-loader']},
       {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
           name: '[path][name].[ext]',
           publicPath: 'assets',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
  ]
}