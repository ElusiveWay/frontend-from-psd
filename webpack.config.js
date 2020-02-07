var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: './in.js',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, 'out')
  },
  module: {
    rules: [ 
      {
        test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  }, 
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};