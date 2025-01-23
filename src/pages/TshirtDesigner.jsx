import React, { useEffect, useRef, useState } from 'react';
import {  motion } from 'framer-motion';
import ColorPicker from '@components/ecommerce/TshirtDesigner/ColorPicker';
import DesignPreview from '@components/ecommerce/TshirtDesigner/DesignPreview';
import DesignTools from '@components/ecommerce/TshirtDesigner/DesignTools';
import ProductSelector from '@components/ecommerce/TshirtDesigner/ProductSelector';
import ProductCustomization from '@components/ecommerce/TshirtDesigner/ProductCustomization';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcustomshirts } from '@store/Thunks/CustomShirtThunk';
import Loading from '@components/common/Loading/Loading' 
import { useNavigate } from 'react-router-dom';
import { fileToBase64 } from '@utils/ImageUtils';
import { addToCart } from '@store/Slices/Cartslice';
import html2canvas from 'html2canvas';


function TshirtDesigner() {

  const [selectedColor, setSelectedColor] = useState('white');
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedCategory, setSelectedCategory] = useState('T-Shirts'); // Default category
  const [typedText, setTypedText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);
  const [frontDesignImage, setFrontDesignImage] = useState(null); // For front preview on tshirt
  const [backDesignImage, setBackDesignImage] = useState(null); // For back preview on tshirt
  const [frontImage,setFrontImage]=useState(null);
  const [backImage,setBackImage]=useState(null)
  const [view, setView] = useState('front'); // Track current view (front/back)
  const navigate= useNavigate()
  // Refs for capturing the T-shirt views
  const previewRef = useRef(null);

const {data ,loading ,error} = useSelector((state)=>state.customshirts)
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchcustomshirts())
  },[dispatch]) 
    
// Extract models and pricing from data
const models = data?.data.models || {};
const pricing = parseFloat(data?.data.pricing || '0');
const additionalPricing = parseFloat(data?.data.additional_pricing || '0');

const endPrice = (frontImage  && backImage) ? (pricing + additionalPricing) * quantity : pricing * quantity;
const unitPrice = endPrice /quantity;
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

  const handleDesignUpload = async(file) => {
    const base64String = await fileToBase64(file);
    if (view === 'front') {
      setFrontDesignImage(base64String);
      setFrontImage(base64String)
    } else {
      setBackDesignImage(base64String);
      setBackImage(base64String)
    }
  };

  

  const handleRemoveDesign = () => {
    if (view === 'front') {
      setFrontDesignImage(null);
    } else {
      setBackDesignImage(null);
    }
  };
 

  const captureTshirtPreview = async () => {
    if (!previewRef.current) return null;

    try {
      // Store current view to restore later
      const currentView = view;

      // Capture front view
      setView('front');
      // Wait longer for the view change to complete
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const frontCanvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        onclone: function(clonedDoc) {
          // Ensure all images are loaded in the cloned document
          const images = clonedDoc.getElementsByTagName('img');
          return Promise.all(Array.from(images).map(img => {
            return new Promise((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = resolve;
              }
            });
          }));
        }
      });
      
      const frontPreview = frontCanvas.toDataURL('image/png');
      const frontBlob = await fetch(frontPreview).then(res => res.blob());
      const frontFile = new File([frontBlob], 'front-preview.png', { type: 'image/png' });

      // Capture back view
      setView('back');
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const backCanvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        onclone: function(clonedDoc) {
          const images = clonedDoc.getElementsByTagName('img');
          return Promise.all(Array.from(images).map(img => {
            return new Promise((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = resolve;
              }
            });
          }));
        }
      });
      
      const backPreview = backCanvas.toDataURL('image/png');
      const backBlob = await fetch(backPreview).then(res => res.blob());
      const backFile = new File([backBlob], 'back-preview.png', { type: 'image/png' });

   

      // Restore original view
      setView(currentView);

      return {
        frontPreview,
        backPreview,
        frontFile,
        backFile
      };
    } catch (error) {
      console.error('Error capturing preview:', error);
      return null;
    }
  };

  const handleAddToCart = async () => {
    if (!selectedCategory || !selectedSize || !selectedColor) {
      toast.error("Please select all required options before adding to cart.");
      return;
    }

    const previews = await captureTshirtPreview();
    if (!previews) {
      toast.error("Failed to capture t-shirt preview");
      return;
    }
    console.log({
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: endPrice, // Log the calculated price here
      previews,
    });
    dispatch(
      addToCart({
        isCustom: true,
        size: selectedSize,
        color: selectedColor,
        quantity,
        category: selectedCategory,
        frontDesignImageFile: previews.frontFile,
        backDesignImageFile: previews.backFile,
        frontPreview: previews.frontPreview,
        backPreview: previews.backPreview,
        price: unitPrice,
      })
    );
  };

  const handleCheckout = async () => {
    if (!selectedCategory || !selectedSize || !selectedColor) {
      toast.error("Please select all required options before checkout.");
      return;
    }

    const previews = await captureTshirtPreview();
    if (!previews) {
      toast.error("Failed to capture t-shirt preview");
      return;
    }

    const orderData = {
      items: [
        {
          category: selectedCategory,
          front: previews.frontFile,
          back: previews.backFile,
          image:previews.frontPreview ? previews.frontPreview :previews.backPreview,
          size: selectedSize,
          color: selectedColor,
          quantity,
          price: unitPrice,
        },
      ],
    };

    navigate('/artivastore/order', {
      state: {
        ...orderData,
        from: "fromCustom",
      },
    });
  };

  if (loading) return <Loading/>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold  mb-8"
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
              <div ref={previewRef}>
                  <DesignPreview
                    selectedColor={selectedColor}
                    selectedProduct={filteredProducts[0] || null}
                    frontDesignImage={frontDesignImage}
                    backDesignImage={backDesignImage}
                    view={view}
                    setView={setView}
                    typedText={typedText}
                    textColor={textColor}
                    onRemoveDesign={handleRemoveDesign}
                  />
                </div>
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
                basePrice={endPrice}
                onSizeChange={setSelectedSize}
                onQuantityChange={setQuantity}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-secondary dark:bg-secondary dark:text-primary py-3 rounded-lg flex items-center justify-center gap-2"
              onClick={handleAddToCart} 
            >
              Add To Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-Transparent border border-gray-500 py-3 rounded-lg flex items-center justify-center gap-2"
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
