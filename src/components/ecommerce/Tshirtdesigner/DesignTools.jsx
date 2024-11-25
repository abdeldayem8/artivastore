import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Upload, Palette, Wand2, Type, Undo, Redo, RotateCcw } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

function DesignTools({ activeTab, setActiveTab, onDesignUpload, onGenerateAI }) {
  
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onDesignUpload(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, [onDesignUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    multiple: false
  });

  const handleAIGenerate = async (prompt) => {
    if (prompt.trim()) {
      try {
        onGenerateAI(prompt);
      } catch (error) {
        console.error('Error generating AI design:', error);
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'upload':
        return (
          <div className="space-y-4">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed ${
                isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
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
      case 'design':
        return (
          <div className="space-y-4">
            <div className="flex gap-2 mb-4">
              <button className="p-2 hover:bg-gray-100 rounded">
                <Type size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Undo size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Redo size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <RotateCcw size={20} />
              </button>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
              <p className="text-gray-500">Design canvas will be implemented here</p>
            </div>
          </div>
        );
      case 'ai':
        return (
          <div className="space-y-4">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Describe your dream t-shirt design..."
              rows={4}
              onChange={(e) => handleAIGenerate(e.target.value)}
            />
            <button 
              onClick={() => handleAIGenerate(document.querySelector('textarea').value)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <Wand2 size={20} />
              Generate Design
            </button>
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
          onClick={() => setActiveTab('upload')}
          className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
            activeTab === 'upload' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          <Upload size={20} /> Upload
        </button>
        <button
          onClick={() => setActiveTab('design')}
          className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
            activeTab === 'design' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          <Palette size={20} /> Design
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
            activeTab === 'ai' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          <Wand2 size={20} /> AI Design
        </button>
      </div>

      <div className="border-t border-gray-200 pt-6">
        {renderTabContent()}
      </div>
    </div>
  );
}

DesignTools.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  onDesignUpload: PropTypes.func.isRequired,
  onGenerateAI: PropTypes.func.isRequired
};

export default DesignTools;