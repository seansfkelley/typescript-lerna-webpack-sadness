const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  output: {
    filename: '[name].js',
    path: 'build/'
  },
  resolve: {
    extensions: [ '', '.js', '.ts' ],
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
    ]
  }
};
