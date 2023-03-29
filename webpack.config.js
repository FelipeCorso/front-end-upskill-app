const { merge } = require("webpack-merge");
const devServer = require("./webpack.live");
const styles = require("./webpack.style");
const html = require("./webpack.html");
const assets = require("./webpack.assets");
const javascript = require("./webpack.javascript");
const magic = require("./webpack.magic");

const commonConfig = merge([
  styles.loadCSS(),
  assets.loadImages({ limit: 15000 }),
  javascript.loadJS(),
  magic.minifyJavaScript(),
  html,
]);

const productionConfig = merge([
  {
    entry: ["./src"],
  },
]);

const developmentConfig = merge([
  {
    watch: true,
    entry: ["./src", "webpack-plugin-serve/client"],
  },
  devServer.devServer(),
]);

const getConfig = (mode) => {
  switch (mode) {
    case "production":
      return merge(commonConfig, productionConfig, { mode });
    case "development":
      return merge(commonConfig, developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(process.env.ENV);
