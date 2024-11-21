import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, RotateCw } from 'lucide-react';

const DesignPreview = ({ selectedColor, selectedProduct }) => {
    const [view, setView] = useState('front');
    const COLORS = ['white', 'black', 'navy', 'red', 'gray', 'green'];
  return (
    <div className="relative">
    <div className="aspect-square relative flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, rotateY: view === 'front' ? -180 : 180 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: view === 'front' ? 180 : -180 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex items-center justify-center"
        >
          <img 
            src={selectedProduct.image}
            alt={`${selectedProduct.name} ${view} view`}
            className="w-3/4 transition-all"
            style={{ filter: selectedColor === 'white' ? 'none' : `brightness(0.8) hue-rotate(${COLORS.indexOf(selectedColor) * 60}deg)` }}
          />
          
          {/* Design Area - Will be replaced with 3D texture mapping */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm text-gray-500">Design Area</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Rotation Controls - Will be enhanced with 3D rotation */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setView('front')}
        className={`p-2 rounded-full ${
          view === 'front' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
        } shadow-lg`}
      >
        <RotateCcw size={20} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setView('back')}
        className={`p-2 rounded-full ${
          view === 'back' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
        } shadow-lg`}
      >
        <RotateCw size={20} />
      </motion.button>
    </div>
  </div>
  )
}
DesignPreview.propTypes = {
    selectedColor: PropTypes.string.isRequired,
    selectedProduct: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  };
export default DesignPreview
