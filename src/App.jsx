import React from "react";
import QRCodeContainer from "./components/qr-code-container";

const App = () => {
  return (
    <div>
      <header className="w-full  bg-gray-500 p-8">
        <div className="m-auto text-center text-white font-bold text-3xl">
          QR Code Generator
        </div>
      </header>
      <QRCodeContainer />
    </div>
  );
};

export default App;
