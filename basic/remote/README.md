# React Micro Frontend Remote App From scratch

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

## Start the Development Server

Run the following command to start your application:

```bash
npm start
```

Your application will be served at `http://localhost:3000`.
