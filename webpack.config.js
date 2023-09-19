const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index-[fullhash].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: './client/index.html'
    })
  ],
  devServer:{
    port: 5559,
    static : {
        directory: path.join(__dirname, 'dist')
    }
  },
  module: {
    rules: [
        {
            test: /\.sass$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }
    ]
  }
};