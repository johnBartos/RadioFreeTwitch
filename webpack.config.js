const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/js/root.js',
  output: { path: __dirname, filename: './client/bundle.js' },
  module: {
    noParse: /\validate.js6$/,
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
