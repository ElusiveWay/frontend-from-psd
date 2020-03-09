const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BrowserSyncPlugin  = require('browser-sync-webpack-plugin')
module.exports = {
  entry: './in.js',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, 'out')
  },
  watch: true,
  module: {
    rules: [ 
      {
        test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'imgs-from-scss',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          //MiniCssExtractPlugin.loader,
          "sass-loader",
        ]
      }
    ],
  }, 
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: { baseDir: ['out'] }
    })
  ],
  devServer: {
    watchContentBase: true,
    hot: true,
  }
};