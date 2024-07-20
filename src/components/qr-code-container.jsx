import React from "react";

const QRCodeContainer = () => {
  return (
    <div className="flex flex-col-reverse mt-20 justify-center text-center items-center m-auto md:flex-row md:max-w-4xl">
      <div className="w-full md:w-2/3 mr-24">
        <h1 className="text-3xl mb-5 md:text-4xl">QR Code Generator</h1>
        <p className="mb-4">
          QR Code makes accessing your website easy with just a scan form your
          phone camera.
        </p>
        <p>Enter URL to generate QR Code and download it!</p>
      </div>
      <div className="w-full md:w-1/3">Div 2</div>
    </div>
  );
};

export default QRCodeContainer;
