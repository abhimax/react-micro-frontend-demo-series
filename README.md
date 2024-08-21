# React Micro Frontend Demo Series

This monorepo demonstrates various approaches to building micro frontend (MF) applications using React. It includes four different projects, each showcasing a unique method of setting up micro frontends. All projects share a common structure: a "remote" app that contains a button component, which is exposed as a micro frontend, and a "host" app that consumes and integrates this remote component.

## Projects Overview

### 1. Basic Micro Frontend

A foundational project starting from scratch. It demonstrates setting up a React app and rendering components with React and ReactDOM.
Micro Frontend Setup: Implemented using Webpack and Module Federation.
Purpose: Ideal for understanding the basic setup of micro frontends.

### 2. Create-MF-App

    A TypeScript-based React app with a micro frontend setup.
    Micro Frontend Setup: Built with Webpack and Module Federation, showcasing TypeScript integration.
    Purpose: For developers interested in using TypeScript with micro frontends.

### 3. CRA App with Craco

    A Create React App (CRA) converted into a micro frontend.
    Micro Frontend Setup: Uses CRACO to enable Module Federation.
    Purpose: Demonstrates how to convert a standard CRA project into a micro frontend.

### 4. Vite App with vite-plugin-federation

    A Vite-based project utilizing Module Federation for micro frontends.
    Micro Frontend Setup: Integrates Vite with Module Federation, offering a modern alternative to Webpack.
    Purpose: Showcases how to set up micro frontends with Vite.

## Getting Started

To explore any of the projects:

    - Navigate to the project directory of your choice.
    - Install dependencies using npm install or yarn.
    - Run the project with npm start or yarn start.

Each project is self-contained and can be run independently to demonstrate its specific micro frontend implementation.
Purpose of the Monorepo

This monorepo provides developers with examples of different ways to set up and build micro frontend applications using React. Whether you're just starting out or exploring more advanced setups.
