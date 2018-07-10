const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[hash].js",
    path: __dirname + "/dist",
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ProvidePlugin({
      react: "React",
      "react-dom": "ReactDom"
    })
  ],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
