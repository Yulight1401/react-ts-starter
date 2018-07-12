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
      template: "index.html"
    }),
    new webpack.HashedModuleIdsPlugin()
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
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
