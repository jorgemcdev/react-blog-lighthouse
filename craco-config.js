// craco.config.js
const path = require("path");
const fs = require("fs");
const glob = require("glob-all");
const webpack = require("webpack");
const zlib = require("zlib");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = function ({ env }) {
  const isProductionBuild = process.env.NODE_ENV === "production"
  const analyzerMode = process.env.REACT_APP_INTERACTIVE_ANALYZE ? "server" : "json"

  const plugins = [

    new PurgeCSSPlugin({
      paths: [
        resolveApp("public/index.html"),
        ...glob.sync(`${resolveApp("src")}/**/**/*`, { nodir: true })
      ]
    }),

    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),

    // new CompressionPlugin({
    //   filename: "[path][base].br",
    //   algorithm: "brotliCompress",
    //   test: /\.(js|css|html|svg)$/,
    //   compressionOptions: {
    //     params: {
    //       [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
    //     },
    //   },
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
  ]

  if (isProductionBuild) {
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode }))
  }

  return {
    webpack: {
      plugins,
    },
  }
}
