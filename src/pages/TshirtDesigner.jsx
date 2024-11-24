import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { toPng } from 'html-to-image';
import ColorPicker from '../components/ecommerce/Tshirtdesigner/ColorPicker';
import DesignPreview from '../components/ecommerce/Tshirtdesigner/DesignPreview';
import DesignTools from '../components/ecommerce/Tshirtdesigner/DesignTools';
import ProductSelector from '../components/ecommerce/Tshirtdesigner/ProductSelector';

function TshirtDesigner() {
  const [selectedColor, setSelectedColor] = useState('white');
  const [activeTab, setActiveTab] = useState('upload');
  const [designImage, setDesignImage] = useState(null);
  const [designState, setDesignState] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState({
    id: 'tshirt',
    name: 'T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800'
  });

  const handleDesignUpload = (imageData) => {
    setDesignImage(imageData);
  };

  const handleGenerateAI = async (prompt) => {
    // Here you would integrate with an AI service
    console.log('Generating design with prompt:', prompt);
    // For now, we'll just use a placeholder image
    setDesignImage('https://via.placeholder.com/150');
  };

  const handleDesignChange = (newState) => {
    setDesignState(newState);
  };

  const handleSaveDesign = async () => {
    try {
      const previewElement = document.querySelector('.design-preview');
      if (previewElement) {
        const dataUrl = await toPng(previewElement, {
          quality: 1.0,
          backgroundColor: 'white'
        });
        
        const link = document.createElement('a');
        link.download = `${selectedProduct.name}-design.png`;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error('Error saving design:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Design Your Custom {selectedProduct.name}
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <ProductSelector 
              selectedProduct={selectedProduct}
              onProductSelect={setSelectedProduct}
            />
            <div className="design-preview">
              <DesignPreview 
                selectedColor={selectedColor}
                selectedProduct={selectedProduct}
                designImage={designImage}
                onDesignChange={handleDesignChange}
              />
            </div>
            <ColorPicker 
              selectedColor={selectedColor} 
              onColorSelect={setSelectedColor} 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <DesignTools 
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
              onDesignUpload={handleDesignUpload}
              onGenerateAI={handleGenerateAI}
            />

            <div className="mt-8">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSaveDesign}
                className="w-full bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Save Design
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TshirtDesigner;