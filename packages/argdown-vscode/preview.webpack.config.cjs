/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  target: "web",
  devtool: "inline-source-map",
  entry: {
    htmlView: "./preview/htmlView.ts",
    dagreView: "./preview/dagreView.ts",
    vizjsView: "./preview/vizjsView.ts",
    pre: "./preview/pre.ts"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
              compilerOptions: {
                sourceMap: true,
                declaration: false
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
    },
    mainFields: ["module", "main"],
    fallback: {
      fs: false,
      stream: false,
      crypto: require.resolve("crypto-browserify"),
      path: require.resolve("path-browserify"),
      vm: require.resolve("vm-browserify")
    }
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/preview")
  },
  node: {
    global: false
  },
  plugins: [
    new NodePolyfillPlugin({
      additionalAliases: ["process"]
    }),
    new webpack.ProvidePlugin({
      path: "path-browserify"
    })
  ]
};
