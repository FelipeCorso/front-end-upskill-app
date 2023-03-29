const TerserPlugin = require("terser-webpack-plugin");

exports.minifyJavaScript = () => ({
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({ minify: TerserPlugin.swcMinify, })]
	},
});
