const { merge } = require("webpack-merge");
const Common = require("./webpack.common");

/**@type{import('webpack').configuration}*/
const devConfig = {
  mode: "development",
  devServer: {
    contentBase: "build",
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
module.exports = merge(Common, devConfig);
