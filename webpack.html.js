const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom template",
      // Load a custom template (lodash by default)
      template: "src/base.html",
    }),
  ],
};
