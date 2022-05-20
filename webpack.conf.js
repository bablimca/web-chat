const path = require("path");
const proxyTarget = "https://whitelabeling.gooddata.com/";

module.exports = {
  entry: "./src/setup.js",
  output: {
    path: path.resolve(__dirname, "demo"),
    filename: "react_components_bundle.js",
    library: "LEADBOX",
    libraryTarget: "window",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: "production",
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  devServer: {
    static: { directory: path.join(__dirname, "demo") },
    port: 3000,
  },
};
