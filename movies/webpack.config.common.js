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
    {
      test: /\.(png|jpe?g|gif)$/i,
      exclude: /css/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    {
      test: /\.css$/i,
      use: ["style-loader", {
        loader: "css-loader", options: {
          sourceMap: false
        }
      }]
    }
  ]
}

PLUGINS = [
  new HtmlWebpackPlugin({
    template: "./index.html",
  })
]

module.exports = { ENTRY, OUTPUT, MODULE, PLUGINS }