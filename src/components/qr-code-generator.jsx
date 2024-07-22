import React from "react";
import QRCode from "react-qr-code";
//import QRCode from "qrcode.react";

const QRCodeGenerator = ({ value, size }) => {
  return (
    <div className="border-2 p-3 rounded border-gray-700">
      <QRCode value={value} size={size} />
    </div>
  );
};

export default QRCodeGenerator;
