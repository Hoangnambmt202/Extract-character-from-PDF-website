import React, { useState } from "react";
import { FaCloudUploadAlt, FaCamera, FaBook, FaDownload, FaSearch, FaSpinner } from "react-icons/fa";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";

const PDFExtractor = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewData, setPreviewData] = useState("Initial preview data");
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    processFile(uploadedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
    processFile(droppedFile);
  };

  const processFile = (file) => {
    setIsLoading(true);
    // Simulating file processing
    setTimeout(() => {
      setPreviewData((prevData) => prevData + "\n\nSample extracted data from PDF");
      setIsLoading(false);
    }, 2000);
  };

  const handleCameraCapture = () => {
    // Implement camera capture logic here
    alert("Camera capture functionality to be implemented");
  };

  const handleSaveToLibrary = () => {
    // Implement save to library logic here
    alert("Save to library functionality to be implemented");
  };

  const handleDownload = () => {
    // Implement download logic here
    alert("Download functionality to be implemented");
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 10, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 10, 50));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">PDF Data Extractor</h1>
      
      <div
        className="border-dashed border-2 border-gray-400 rounded-lg p-8 mb-6 text-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="hidden"
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          <FaCloudUploadAlt className="mr-2" />
          Upload PDF
        </label>
        <p className="mt-2 text-gray-600">or drag and drop your file here</p>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={handleCameraCapture}
          className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out"
        >
          <FaCamera className="mr-2" />
          Capture
        </button>
        <button
          onClick={handleSaveToLibrary}
          className="flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 ease-in-out"
        >
          <FaBook className="mr-2" />
          Save to Library
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          <FaDownload className="mr-2" />
          Download
        </button>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center mb-6">
          <FaSpinner className="animate-spin text-4xl text-blue-600" />
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Preview</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex justify-between mb-2">
            <div className="flex space-x-2">
              <button
                onClick={handleZoomIn}
                className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
              >
                <BsZoomIn />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
              >
                <BsZoomOut />
              </button>
            </div>
            <div className="text-gray-600">{zoomLevel}%</div>
          </div>
          <div
            className="bg-white p-4 rounded-md shadow-inner overflow-auto"
            style={{ maxHeight: "300px", fontSize: `${zoomLevel}%` }}
          >
            <pre>{previewData}</pre>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600">
        <p>Need help? <a href="#" className="text-blue-600 hover:underline">Contact support</a></p>
      </div>
    </div>
  );
};

export default PDFExtractor;
