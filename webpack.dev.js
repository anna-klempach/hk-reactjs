/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dev')
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'remove-comments-loader',
            options: { attrs: false }
          },
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
});
