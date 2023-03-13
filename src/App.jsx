import axios from "axios";
import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Html5QrcodePlugin from "./Qr";
import Config from "./config";
function App() {
  const [data,setData] = useState(null)
  const [results,setResult] = useState(null)
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
    console.log(decodedText)
    setData(JSON.parse(decodedText))

    axios.post(Config.baseUrl+"/verify",option).then((res) => {
      console.log(res);
      setResult(res)
    });
  };
  

  return (
    <div className="App">
      <h1>
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        ></Html5QrcodePlugin>
      </h1>
      <p>
        {results != null ? <p>Verification: ${results.verification}</p>:<p>Verification: ${false}</p>}
      </p>
    </div>
  );
}

export default App;
