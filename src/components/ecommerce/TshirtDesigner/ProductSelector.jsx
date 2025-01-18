import React from 'react';
import { motion } from 'framer-motion';

function ProductSelector({selectedCategory, onCategorySelect, models }) {
  const categories = Object.keys(models);
  
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Choose Style:</h3>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onCategorySelect(category); // Select category
            }}
            className="relative rounded-lg overflow-hidden aspect-square"
          >
            
            {models[category]?.[0]?.image_forward && (
              <img
                src={`${models[category][0].image_forward}`}
                alt={category}
                className="w-full h-full object-contain p-4"
              />
            )}
             <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-40 p-2">
              <span className="text-white text-sm font-medium">{category.slice(0,-1)}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default ProductSelector;