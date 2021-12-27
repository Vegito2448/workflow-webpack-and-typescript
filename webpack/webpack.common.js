const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

/**@type{import('webpack').Configuration} */
module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/[name].[contenthash].js",
    publicPath: "",
    assetModuleFilename: "[name].[ext]",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(hbs|handlebars)$/i,
        use: "handlebars-loader",
      },
      {
        type: "asset",
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.hbs",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-style.css",
    }),
  ],
};
