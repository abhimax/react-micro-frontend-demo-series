# React with Vite TypeScript Micro Frontend

This project demonstrates a micro frontend architecture using Vite, TypeScript, and the Vite Plugin Federation. It includes two applications:

- **Remote App**: A standalone micro frontend that exposes a `Button` component.
- **Host App**: A main application that consumes the `Button` component from the remote app.

## Project Structure

- **`/host`**: The host application that integrates the micro frontend from the remote app.
- **`/remote`**: The remote application that exposes a component using Vite Plugin Federation.

## Overview

### 1. Remote App

- **Description**: The remote app contains a `Button` component. This component is exposed as a micro frontend using Vite Plugin Federation.
- **Technology**: Built with Vite, TypeScript, React, and Vite Plugin Federation.
- **Purpose**: To provide reusable components that can be integrated into other applications.

### 2. Host App

- **Description**: The host app consumes the `Button` component exposed by the remote app. It integrates this component directly into its user interface.
- **Technology**: Built with Vite, TypeScript, React, and Vite Plugin Federation.
- **Purpose**: To demonstrate how to consume components from a remote micro frontend.

## Getting Started

### Prerequisites

- Node.js (v14.x or later recommended)
- npm or yarn

### Setup

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:abhimax/react-micro-frontend-demo-series.git
   cd vite
   ```

2. **Install Dependencies**:

   Navigate to each project folder and install the dependencies:

   For the remote app:

   ```bash
   cd remote
   npm install
   ```

   For the host app:

   ```bash
   cd host
   npm install
   ```

3. **Start the Applications**:

   Start the remote app first:

   ```bash
   cd remote
   npm run dev
   ```

   Then, start the host app:

   ```bash
   cd host
   npm run dev
   ```

   Both apps should now be running. You can access them in your web browser:

   - Host App: [http://localhost:5000](http://localhost:5000)
   - Remote App: [http://localhost:5001](http://localhost:5001)

## How It Works

1. **Remote App**:

   - Uses Vite Plugin Federation to expose the `Button` component.
   - The Vite configuration file specifies the exposed component and the remote entry point.

2. **Host App**:
   - Consumes the `Button` component from the remote app.
   - The Vite configuration includes a remote entry that points to the remote app.

## Example Usage

In the host app, the `Button` component from the remote app is imported and used within a component. When you run both apps, you will see the `Button` integrated seamlessly into the host app’s UI.

## Notes

- Ensure both the host and remote apps are running simultaneously for the micro frontend integration to work correctly.
- If you make changes to the `Button` component in the remote app, restart the remote app server to see the changes reflected in the host app.

## Conclusion

This project provides a simple setup of micro frontends using Vite, TypeScript, and Vite Plugin Federation. It demonstrates how to expose components from one app and consume them in another, allowing for scalable and modular development.
