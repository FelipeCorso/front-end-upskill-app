const path = require("path");
const APP_SOURCE = path.join(__dirname, "src");

exports.loadJS = () => ({
  module: {
    rules: [{ test: /\.(js|jsx)$/, include: APP_SOURCE, use: "babel-loader" }],
  },
});
