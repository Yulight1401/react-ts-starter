const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
module.exports = merge(common, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: "http://localhost:3000" })
  ],
  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  mode: "development"
});
