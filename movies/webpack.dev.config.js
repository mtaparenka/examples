const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ENTRY, OUTPUT, MODULE, PLUGINS } = require('./webpack.config.common');

module.exports = {
    mode: 'development',
    entry: ENTRY,
    output: OUTPUT,
    devServer: {
        compress: true,
        port: 9080
    },
    module: MODULE,
    plugins: PLUGINS
  };