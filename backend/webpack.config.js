const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    server: path.join(__dirname, "src/app.js"),
  },
  output: {
    filename: "app.js",
    path: path.join(__dirname, "/dist"),
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  target: "node",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(graphql|gql)$/,
        use: {
          loader: "graphql-tag/loader",
        },
      },
      {
        exclude: /node_modules/,
      },
    ],
  },
};
