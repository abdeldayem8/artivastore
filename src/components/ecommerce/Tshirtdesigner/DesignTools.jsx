import React, { useCallback, useState } from "react";
import { Upload, Palette, Type, Undo, Redo, RotateCcw } from "lucide-react";
import { useDropzone } from "react-dropzone";

function DesignTools({ activeTab, setActiveTab, onDesignUpload, onTextChange }) {
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("#000000");

  // Handle file upload via dropzone
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          onDesignUpload(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    [onDesignUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".gif"] },
    multiple: false,
  });

  // Handle text input and notify parent component
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText, textColor);
  };

  // Handle color input and notify parent component
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setTextColor(newColor);
    onTextChange(text, newColor);
  };

  // Render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "upload":
        return (
          <div className="space-y-4">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed ${
                isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
              } rounded-lg p-8 text-center cursor-pointer transition-colors`}
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                {isDragActive
                  ? "Drop your design here..."
                  : "Drag and drop your design here, or click to upload"}
              </p>
            </div>
          </div>
        );
      case "design":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Enter Text:</label>
              <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Type something..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Text Color:</label>
              <input
                type="color"
                value={textColor}
                onChange={handleColorChange}
                className="w-full p-2"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          onClick={() => setActiveTab("upload")}
          className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
            activeTab === "upload" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          <Upload size={20} /> Upload
        </button>
        <button
          onClick={() => setActiveTab("design")}
          className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
            activeTab === "design" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          <Palette size={20} /> Design
        </button>
      </div>
      <div className="border-t border-gray-200 pt-6">{renderTabContent()}</div>
    </div>
  );
}

export default DesignTools;

