// Using PDFKit fix from here: https://github.com/Pzixel/PDFKit-example/blob/master/webpack.config.js
// Using svg-to-pdfkit fix from here: https://github.com/alafr/SVG-to-PDFKit/issues/137
// transform-loader webpack 5: https://github.com/blikblum/pdfkit-webpack-example/issues/9
const TerserPlugin = require("terser-webpack-plugin");
// const { dirname } = require("path");
// const { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
//@ts-check

("use strict");

const path = require("path");
const webpack = require("webpack");
const { IgnorePlugin } = require("webpack");
const optionalPlugins = [];
if (process.platform !== "darwin") {
  optionalPlugins.push(new IgnorePlugin({ resourceRegExp: /^fsevents$/ }));
}

/**@type {import('webpack').Configuration}*/
module.exports = {
  target: "node", // vscode extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/
  entry: { "node-main": "./src/node-main.ts" }, // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, "dist/node"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
    devtoolModuleFilenameTemplate: "../[resource-path]"
  },
  devtool: "source-map",
  externals: {
    vscode: "commonjs vscode" // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
  },
  resolve: {
    // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
    extensions: [".ts", ".js", ".mjs"],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
    },
    mainFields: ["module", "main"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
              compilerOptions: {
                sourceMap: true
              }
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
    parser: {
      javascript: {
        commonjsMagicComments: true
      }
    }
  },
  optimization: {
    // splitChunks: {
    //   chunks: "all",
    //   cacheGroups: {
    //     svgtopdf: {
    //       name: "svgtopdf",
    //       test: /[\\/]node_modules[\\/]svg-to-pdfkit/,
    //       chunks: "all"
    //     }
    //   }
    // },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        exclude: /svgtopdf/,
        terserOptions: {
          ecma: 2017,
          keep_classnames: true,
          keep_fnames: true
        }
      })
    ]
  },
  plugins: [...optionalPlugins]
};
