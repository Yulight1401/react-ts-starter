const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports =  merge(common, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  mode: "development"
});