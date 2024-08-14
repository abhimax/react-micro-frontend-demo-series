import React, { Suspense } from "react";
import "./App.css";
const RemoteMyComponent = React.lazy(() => import("mfRemote/Button"));
function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteMyComponent />
      </Suspense>
    </div>
  );
}

export default App;
