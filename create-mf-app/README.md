# Micro Frontend - create-mf-app

This monorepo contains two micro frontend applications created using `create-mf-app` https://github.com/jherr/create-mf-app. These applications demonstrate how to use Webpack Module Federation to share components between separate micro frontends.

## Project Structure

- **`/host`**: The host application that consumes the shared components.
- **`/remote`**: The remote application that exposes a button component.

## Overview

### 1. **Remote App**

- **Description**: The remote app contains a simple button component. This component is exposed as a micro frontend using Webpack Module Federation.
- **Technology**: Built with React, Webpack, and Module Federation.
- **Purpose**: To provide reusable components that can be integrated into other applications.

### 2. **Host App**

- **Description**: The host app consumes the button component exposed by the remote app. It integrates this component directly into its user interface.
- **Technology**: Built with React, Webpack, and Module Federation.
- **Purpose**: To demonstrate how to consume components from a remote micro frontend.

## Getting Started

### Prerequisites

- Node.js (v14.x or later recommended)
- npm or yarn

### Setup

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:abhimax/react-micro-frontend-demo-series.git
   cd create-mf-app
   ```

2. **Install Dependencies**:

   Navigate to each project folder and install the dependencies:

   For the host app:

   ```bash
   cd host
   npm install
   ```

   For the remote app:

   ```bash
   cd remote
   npm install
   ```

3. **Start the Applications**:

   Start the remote app first:

   ```bash
   cd remote
   npm start
   ```

   Then, start the host app:

   ```bash
   cd host
   npm start
   ```

   Both apps should now be running. You can access them in your web browser.

   - **Host App**: [http://localhost:3000](http://localhost:3000)
   - **Remote App**: [http://localhost:3001](http://localhost:3001)

## How It Works

1. **Remote App**:

   - Exposes the button component using Webpack Module Federation.
   - The Webpack configuration specifies the exposed component.

2. **Host App**:
   - Consumes the exposed button component from the remote app.
   - The Webpack configuration includes a remote entry that points to the remote app.

## Example Usage

In the host app, the button from the remote app is imported and used within a component. When you run both apps, you can see the button integrated seamlessly into the host app’s UI.

## Notes

- Ensure both the host and remote apps are running simultaneously for the micro frontend integration to work correctly.
- If you make changes to the button component in the remote app, restart the remote app server to see the changes reflected in the host app.

## Conclusion

This repo demonstrates a basic setup of micro frontends using React, Typescript and Webpack Module Federation. It shows how to expose components in one app and consume them in another, enabling scalable and modular development.
