import axios from "axios";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Html5QrcodePlugin from "./Qr";

function App() {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
    console.log("hello");
  };
  useEffect(() => {
    let option = {
      publicKey: "0x85c3E62be3Fedc174b6DCc3F7c65e1b23eFA97EF",
      contractAddress: "0x1f8f2e94cfe82a31bb880d4ca212086737157ac7",
      tokenId: "1094",
      hash: "0x50b2c43fd39106bafbba0da34fc430e1f91e3c96ea2acee2bc34119f92b37750",
      signMessage:
        "0x645cf8784f6d0ff9b714d75ae5eac3dacfc6f1ff2a7e42bf77f1e2823404c0a77a40916fa281df9daec77ce655c12fa1adefba67eddbe14066ea129034388c8e1b",
    };
    axios.get("/verify",option).then((res) => {
      console.log(res);
    });
  }, []);

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
    </div>
  );
}

export default App;
