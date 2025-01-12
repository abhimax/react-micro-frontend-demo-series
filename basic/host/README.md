# React Micro Frontend Host App From scratch

A foundational project starting from scratch. It demonstrates setting up a React app and rendering components with React and ReactDOM.

## Steps to setup the project

### 1. Initialize the Project

Run the following command to initialize a new Node.js project:

```bash
npm init
```

This command will create a package.json file on the project folder based on your inputs.

### Step 2: Install React and React DOM

Install the core dependencies for React:

```bash
npm install react react-dom
```

### Step 3: Install Development Dependencies

Install the necessary development dependencies for Babel and Webpack:

```bash
npm install -D @babel/core @babel/plugin-proposal-class-properties @babel/preset-react babel-loader babel-preset-react html-webpack-plugin webpack webpack-cli webpack-dev-server
```

### Step 4: Create Project Structure

Create the following folders and files:

```
public/
  index.html
src/
  index.js
  App.js
```

### Step 5: Configure Webpack

Create a `webpack.config.js` file in the root directory

### Step 6: Configure Babel

Create a `.babelrc` file in the root directory with the following content:

```json
{
  "presets": ["@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

### Step 7: Add Start Script

Update the `scripts` section of your `package.json` file to include a start command:

```json
"scripts": {
  "start": "webpack serve --config ./webpack.config.js"
}
```

## Convert to Module Federation

### Step 9: Update Webpack Configuration

## Start the Development Server

### Step 9: Update Webpack Configuration

Modify the `webpack.config.js` file to include Module Federation settings:

```javascript
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

const mfObject = new ModuleFederationPlugin({
  name: "",
  filename: "remoteEntry.js",
  remotes: {
    mfRemote: "mfRemote@http://localhost:4001/remoteEntry.js",
    /* his is the key used to refer to the remote module in your application. It acts as an alias for the remote app and can be used in your code to import modules or components exposed by the remote app.*/
  },
});

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});
module.exports = {
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 4000,
    historyApiFallback: {
      index: "/public/index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [htmlPlugin, mfObject],
};
```

### 10. Use Remote Component in App

To use the `Button` component exposed by the remote app, update `App.jsx` as follows:

```javascript
import React from "react";
const MFRemoteButton = React.lazy(() => import("mfRemote/Button"));

const App = () => {
  return (
    <div className="container">
      <h1>Host MF</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MFRemoteButton>From Remote MF</MFRemoteButton>
      </React.Suspense>
    </div>
  );
};

export default App;
```

Run the following command to start your application:

```bash
npm start
```

Your application will be served at `http://localhost:4000`.

## Verify Module Federation

To ensure that Webpack Module Federation is working and your application is exposed as a microfrontend, open the following URL in your browser:

```
http://localhost:4000/remoteEntry.js
```

You should see the module federation manifest file load successfully.
