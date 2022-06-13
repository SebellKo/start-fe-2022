const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  devServer: {
    static: {
      directory: distPath,
    },
    compress: true,
    port: 9000,
  },
  output: {
    filename: 'app.js',
    path: distPath,
  },

  plugins: [
    // npm i html-webpack-plugin -D
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    // npm i css-loader style-loader -D
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
