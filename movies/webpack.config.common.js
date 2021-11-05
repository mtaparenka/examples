const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

ENTRY = "./src/index.js"

OUTPUT = {
  path: path.resolve(__dirname, 'dist'),
  clean: true
}

MODULE = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-react']
        }
      }
    },
  ]
}

PLUGINS = [
  new HtmlWebpackPlugin({
      template: "./index.html",
  }),
]

module.exports = { ENTRY, OUTPUT, MODULE, PLUGINS }