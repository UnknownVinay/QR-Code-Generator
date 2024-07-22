import React, { useEffect, useState } from "react";
import QRCodeGenerator from "./qr-code-generator";

const QRCodeContainer = () => {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState(300);
  const [displayOutput, setDisplayOutput] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      alert("Please enter a valid url!");
    } else {
      setDisplayOutput(true);
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse mt-20 justify-center text-center items-center m-auto md:flex-row md:max-w-4xl">
        <div className="w-full m-auto md:w-2/3 mr-24 p-4">
          <h1 className="text-3xl mb-5 md:text-4xl">QR Code Generator</h1>
          <p className="mb-4">
            QR Code makes accessing your website easy with just a scan form your
            phone camera.
          </p>
          <p className="mb-4">Enter URL to generate QR Code and download it!</p>
          <form className="m-auto mb-4" onSubmit={handleFormSubmit}>
            <input
              type="url"
              className="w-full border-gray-400 rounded border-2 p-3 text-gray-dark mr-2 focus:outline-none mb-5"
              placeholder="Enter your URL..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <select
              name="size"
              className="w-full border-gray-400 rounded border-2 p-3 text-gray-dark mr-2 focus:outline-none mb-5"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="100">100x100</option>
              <option value="200">200x200</option>
              <option value="300">300x300</option>

              <option value="400">400x400</option>
              <option value="500">500x500</option>
            </select>
            <button
              type="submit"
              className="w-full bg-gray-500 p-3 border-2 rounded-md text-white hover:bg-gray-700"
            >
              Generate QR Code
            </button>
          </form>
          {displayOutput && (
            <button
              className="w-full bg-gray-500 p-3 border-2 rounded-md text-white hover:bg-gray-700"
              onClick={() => setDisplayOutput(false)}
            >
              Close
            </button>
          )}
        </div>

        <div className="w-full md:w-1/3 mr-2">
          <img
            src="/qr_image.png"
            alt="logo"
            className="w-1/2 m-auto md:w-full"
          />
        </div>
      </div>
      <div className="flex my-20 justify-center text-center items-center m-auto  md:max-w-4xl">
        {displayOutput && <QRCodeGenerator value={url} size={size} />}
      </div>
    </>
  );
};

export default QRCodeContainer;
