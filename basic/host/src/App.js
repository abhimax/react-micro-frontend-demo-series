import React from 'react';
const MFRemoteApp = React.lazy(() => import("MFRemote/MFRemoteApp"))
const MFRemoteButton = React.lazy(() => import("MFRemote/MFRemoteButton"))

const App = () => {
    return <div className='container'>
        <h1>This is Host MF</h1>
        <MFRemoteApp/>
        <MFRemoteButton>This Button Comes from Remote MF</MFRemoteButton>
    </div>
}
export default App;