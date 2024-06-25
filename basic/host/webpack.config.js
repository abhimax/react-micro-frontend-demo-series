const HtmlWebPackPlugin = require("html-webpack-plugin"); 
const path = require("path");
const {ModuleFederationPlugin} = require("webpack").container;

const mfObject = new ModuleFederationPlugin({
    name: "",
    filename: "remoteEntry.js",
    remotes: {
        MFRemote: "mfRemote@http://localhost:3001/remoteEntry.js"
    },
  })


const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
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
    htmlPlugin,
    mfObject
  ]
};
