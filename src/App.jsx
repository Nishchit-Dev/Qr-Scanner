import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Html5QrcodePlugin from './Qr'

function App() {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
    console.log("hello")
};

  return (
    <div className="App">
     <h1>
      <Html5QrcodePlugin
      fps={10}
      qrbox={250}
      disableFlip={false}
      qrCodeSuccessCallback={onNewScanResult}></Html5QrcodePlugin>
     </h1>
    </div>
  )
}

export default App
