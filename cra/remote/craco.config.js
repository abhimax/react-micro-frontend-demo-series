const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "mfRemote",
        filename: "remoteEntry.js",
        exposes: {
          "./Button": "./src/components/Button",
        },
        shared: ["react", "react-dom"],
      }),
    ],
    configure: {
      output: {
        publicPath: "auto",
      },
    },
  },
};
