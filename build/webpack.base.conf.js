const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const config = {
  entry: [
    path.join(__dirname, "/../src/main.js")
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ole',
      filename: 'index.html',
      template: './index.html'
    }),
    new ExtractTextWebpackPlugin('[name].[chunkhash].css')
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback:'style-loader',
          use:[{
            loader: 'css-loader'
          },{
            loader: 'postcss-loader'
          }]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}


module.exports = config;