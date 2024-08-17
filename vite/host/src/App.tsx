import "./App.css";
import Button from "remoteApp/Button";

function App() {
  return (
    <>
      <h1>Host MF</h1>
      <Button />
    </>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Button from "remoteApp/Button";

// // ErrorBoundary Component using React hooks
// const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     // Error handling logic for ErrorEvent
//     const handleErrorEvent = (event: ErrorEvent) => {
//       console.error("ErrorBoundary caught an error:", event.error);
//       setHasError(true);
//     };

//     // Error handling logic for unhandled PromiseRejectionEvent
//     const handlePromiseRejectionEvent = (event: PromiseRejectionEvent) => {
//       console.error("ErrorBoundary caught a promise rejection:", event.reason);
//       setHasError(true);
//     };

//     window.addEventListener("error", handleErrorEvent);
//     window.addEventListener("unhandledrejection", handlePromiseRejectionEvent);

//     return () => {
//       window.removeEventListener("error", handleErrorEvent);
//       window.removeEventListener(
//         "unhandledrejection",
//         handlePromiseRejectionEvent
//       );
//     };
//   }, []);

//   if (hasError) {
//     return <h1>Something went wrong.</h1>;
//   }

//   return <>{children}</>;
// };

// function App() {
//   return (
//     <>
//       <h1>Host MF</h1>
//       <ErrorBoundary>
//         <Button />
//       </ErrorBoundary>
//     </>
//   );
// }

// export default App;
