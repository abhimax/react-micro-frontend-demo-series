const HtmlWebPackPlugin = require("html-webpack-plugin"); 
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback:{
      index:'/public/index.html'
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
    ]
  },
  plugins: [
    htmlPlugin 
  ]
};
