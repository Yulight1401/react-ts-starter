const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
module.exports = merge(common, {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    overlay: true
  },
  mode: "development"
});
