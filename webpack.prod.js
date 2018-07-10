const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // 修改环境，以防框架中有console之类混入
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  mode: "production"
});
