const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
module.exports = {
  mode: "development",
  devServer: {
    port: 3003,
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "hostApp",
        remotes: {
          mfRemote: "mfRemote@http://localhost:3002/remoteEntry.js",
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
    ],
    configure: {
      output: {
        publicPath: "auto",
      },
    },
  },
};
