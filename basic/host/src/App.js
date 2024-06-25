import React from 'react';
const MFRemote = React.lazy(() => import("MFRemote/MFRemoteApp"))

const App = () => {
    return <div className='container'>
        <h1>This is Host MF</h1>
        <MFRemote/>
    </div>
}
export default App;