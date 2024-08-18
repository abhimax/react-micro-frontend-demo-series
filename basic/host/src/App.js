import React from "react";
const MFRemoteButton = React.lazy(() => import("mfRemote/Button"));

const App = () => {
  return (
    <div className="container">
      <h1>Host MF</h1>
      <MFRemoteButton>From Remote MF</MFRemoteButton>
    </div>
  );
};
export default App;
