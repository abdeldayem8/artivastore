import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ColorPicker from '../components/ecommerce/Tshirtdesigner/ColorPicker';
import DesignPreview from '../components/ecommerce/Tshirtdesigner/DesignPreview';
import DesignTools from '../components/ecommerce/Tshirtdesigner/DesignTools';
import ProductSelector from '../components/ecommerce/Tshirtdesigner/ProductSelector';
import ProductCustomization from '../components/ecommerce/Tshirtdesigner/ProductCustomization';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcustomshirts } from '../store/thunks/customshirtthunk';
import Loading from '../components/common/Loading/Loading' 
import { useNavigate } from 'react-router-dom';


function TshirtDesigner() {

  const [selectedColor, setSelectedColor] = useState('white');
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedCategory, setSelectedCategory] = useState('T-Shirts'); // Default category
  const [typedText, setTypedText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [frontDesignImage, setFrontDesignImage] = useState(null); // For front
  const [backDesignImage, setBackDesignImage] = useState(null); // For back
  const [view, setView] = useState('front'); // Track current view (front/back)
  const navigate= useNavigate()

const {data ,loading ,error} = useSelector((state)=>state.customshirts)
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchcustomshirts())
  },[dispatch]) 
    
// Extract models and pricing from data
const models = data?.data.models || {};
const pricing = parseFloat(data?.data.pricing || '0');
const additionalPricing = parseFloat(data?.data.additional_pricing || '0');


// Get products for the selected category
const products = models[selectedCategory] || [];

// Filter products by selected color
const filteredProducts = products.filter((product) => product.color === selectedColor);

// Get unique colors for the selected category
const availableColors = [...new Set(products.map((product) => product.color))];


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
 
  if (loading) return <Loading/>;
  if (error) return <p>Error: {error}</p>;
  const handleCheckout = () => {
    if (!selectedCategory || !selectedSize || !selectedColor) {
      toast.error("Please select a category, size, and color before proceeding.");
      return;
    }
  
    const orderData = {
      items: [
        {
          category: selectedCategory,
          front: frontDesignImage,
          back: backDesignImage,
          size: selectedSize,
          color: selectedColor,
          quantity: quantity,
          price: pricing,
        },
      ],
    };
    navigate('/artivastore/order', {
      state: {
        ...orderData,
        from: "fromCustom",  // Pass a specific word to indicate the origin
      },
    });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-secondary mb-8"
        >
          Design Your Custom {selectedCategory.slice(0, -1).toUpperCase()}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-xl">
              <ProductSelector
                onCategorySelect={setSelectedCategory}
                models={models}
                selectedCategory={selectedCategory}
              />
              <div className="design-preview">
                 <DesignPreview
                  selectedColor={selectedColor}
                  selectedProduct={filteredProducts[0] || null} // Show the first matching product
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
                colors={availableColors}
              />
            </div>
          </motion.div>

          {/* Right Column - Tools & Customization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-xl">
            <DesignTools
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onDesignUpload={handleDesignUpload}
                onTextChange={handleTextChange}
              />
            </div>

            <div className=" p-8 rounded-xl">
              <ProductCustomization
                selectedSize={selectedSize}
                quantity={quantity}
                basePrice={(pricing +  additionalPricing) * (quantity)}
                onSizeChange={setSelectedSize}
                onQuantityChange={setQuantity}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-secondary text-primary py-3 rounded-lg flex items-center justify-center gap-2"
              onClick={handleCheckout}
            >
              Buy It Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TshirtDesigner;
