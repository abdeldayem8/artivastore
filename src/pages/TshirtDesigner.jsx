import React, { useEffect, useRef, useState } from 'react';
import { color, motion } from 'framer-motion';
import ColorPicker from '../components/ecommerce/Tshirtdesigner/ColorPicker';
import DesignPreview from '../components/ecommerce/Tshirtdesigner/DesignPreview';
import DesignTools from '../components/ecommerce/Tshirtdesigner/DesignTools';
import ProductSelector from '../components/ecommerce/Tshirtdesigner/ProductSelector';
import ProductCustomization from '../components/ecommerce/Tshirtdesigner/ProductCustomization';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcustomshirts } from '../store/thunks/customshirtthunk';
import Loading from '../components/common/Loading/Loading' 
import { useNavigate } from 'react-router-dom';
import { fileToBase64 } from '../utils/imageUtils';
import { addToCart } from '../store/slices/cartslice';
import html2canvas from 'html2canvas';


function TshirtDesigner() {

  const [selectedColor, setSelectedColor] = useState('white');
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedCategory, setSelectedCategory] = useState('T-Shirts'); // Default category
  const [typedText, setTypedText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [frontDesignImage, setFrontDesignImage] = useState(null); // For front preview on tshirt
  const [backDesignImage, setBackDesignImage] = useState(null); // For back preview on tshirt
  const [frontDesignImagePreview, setFrontDesignImagePreview] = useState(null); // For front preview on other pages
  const [backDesignImagePreview, setBackDesignImagePreview] = useState(null); // For back preview on other pages
  const [frontDesignImageFile, setFrontDesignImageFile] = useState(null); // For front file to send to backend
  const [backDesignImageFile, setBackDesignImageFile] = useState(null); // For back file to send to backend
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
    } else {
      setBackDesignImage(base64String);
    }
  };

  const handleRemoveDesign = () => {
    if (view === 'front') {
      setFrontDesignImage(null);
      setFrontDesignImageFile(null);
      setFrontDesignImagePreview(null);
    } else {
      setBackDesignImage(null);
      setBackDesignImageFile(null);
      setBackDesignImagePreview(null);
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

      // Update all states at once
      await Promise.all([
        new Promise(resolve => {
          setFrontDesignImagePreview(frontPreview);
          setFrontDesignImageFile(frontFile);
          resolve();
        }),
        new Promise(resolve => {
          setBackDesignImagePreview(backPreview);
          setBackDesignImageFile(backFile);
          resolve();
        })
      ]);

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
        price: pricing,
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
          quantity: quantity,
          price: pricing,
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
                basePrice={(pricing +  additionalPricing) * (quantity)}
                onSizeChange={setSelectedSize}
                onQuantityChange={setQuantity}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-secondary text-primary py-3 rounded-lg flex items-center justify-center gap-2"
              onClick={handleAddToCart} 
            >
              Add To Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-Transparent text-secondary border border-gray-500 py-3 rounded-lg flex items-center justify-center gap-2"
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
