import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ColorPicker from '../components/ecommerce/Tshirtdesigner/ColorPicker';
import DesignPreview from '../components/ecommerce/Tshirtdesigner/DesignPreview';
import DesignTools from '../components/ecommerce/Tshirtdesigner/DesignTools';
import ProductSelector from '../components/ecommerce/Tshirtdesigner/ProductSelector';
import ProductCustomization from '../components/ecommerce/Tshirtdesigner/ProductCustomization';
import { PRODUCTS } from '../components/ecommerce/constants/products';

function TshirtDesigner() {

  const [selectedColor, setSelectedColor] = useState('white');
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [typedText, setTypedText] = useState(''); 
  const [textColor, setTextColor] = useState('#000000'); 
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedLocations, setSelectedLocations] = useState(['front']);
  const [frontDesignImage, setFrontDesignImage] = useState(null); // For front
const [backDesignImage, setBackDesignImage] = useState(null); // For back
const [view, setView] = useState('front'); // Track current view (front/back)

      
  const handleTextChange = (text, color) => {
    setTypedText(text);
    setTextColor(color); // Update the color as well
  };
  
  const handleDesignUpload = (imageData) => {
    if (view === 'front') {
      setFrontDesignImage(imageData);
    } else {
      setBackDesignImage(imageData);
    }
  };

  const handleRemoveDesign = () => {
    if (view === 'front') {
      setFrontDesignImage(null);
    } else {
      setBackDesignImage(null);
    }
  };
 

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-secondary mb-8"
        >
          Design Your Custom {selectedProduct.name}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <ProductSelector
                selectedProduct={selectedProduct}
                onProductSelect={setSelectedProduct}
              />
              <div className="design-preview">
                <DesignPreview
                 selectedColor={selectedColor}
                  selectedProduct={selectedProduct}
                  frontDesignImage={frontDesignImage}
                  backDesignImage={backDesignImage}
                  view={view} 
                  setView={setView}
                  typedText={typedText} 
                  textColor={textColor} 
                  onRemoveDesign={handleRemoveDesign}    
                />
              </div>
              <ColorPicker
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor}
              />
            </div>
          </motion.div>

          {/* Right Column - Tools & Customization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <DesignTools
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onDesignUpload={handleDesignUpload}
                onTextChange={handleTextChange}
              />
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <ProductCustomization
                selectedSize={selectedSize}
                quantity={quantity}
                selectedLocations={selectedLocations}
                basePrice={selectedProduct.basePrice}
                onSizeChange={setSelectedSize}
                onQuantityChange={setQuantity}
                onLocationChange={(location) =>
                  setSelectedLocations((prev) =>
                    prev.includes(location)
                      ? prev.filter((loc) => loc !== location)
                      : [...prev, location]
                  )
                }
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2"
            >
              Add To Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TshirtDesigner;
