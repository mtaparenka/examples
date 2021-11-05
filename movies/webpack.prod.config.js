const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { ENTRY, OUTPUT, MODULE, PLUGINS } = require('./webpack.config.common');

module.exports = {
    mode: 'production',
    entry: ENTRY,
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: 'all'
      }
    },
    output: OUTPUT,
    performance: {
      hints: false
    },
    devServer: {
        compress: true,
        port: 9081
    },
    module: MODULE,
    plugins: PLUGINS
  };