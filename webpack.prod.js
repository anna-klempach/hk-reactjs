const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 8000
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
            loader: 'html-loader',
            options: {
                minimize: true
            }
          }
        ]
      }
    ],
  },
});