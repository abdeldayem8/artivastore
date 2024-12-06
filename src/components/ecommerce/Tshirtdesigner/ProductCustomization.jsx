import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { SIZES, PRINT_LOCATIONS } from '../constants/customization';
import { motion } from 'framer-motion';

function ProductCustomization({ 
  selectedSize, 
  quantity, 
  selectedLocations, 
  basePrice, 
  onSizeChange, 
  onQuantityChange, 
  onLocationChange 
}) {
  const calculateTotalPrice = () => {
    const locationsPrices = PRINT_LOCATIONS
      .filter(loc => selectedLocations.includes(loc.id))
      .reduce((sum, loc) => sum + loc.price, 0);
    
    return (basePrice + locationsPrices) * quantity;
  };

  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Select Size:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {SIZES.map((size) => (
            <motion.button
              key={size.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSizeChange(size.id)}
              className={`py-2 px-4 rounded-lg border ${
                selectedSize === size.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {size.name}
              {size.stock < 50 && (
                <span className="ml-1 text-xs text-orange-500">
                  (Low Stock)
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quantity Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Quantity:</h3>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => quantity > 1 && onQuantityChange(quantity - 1)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            disabled={quantity <= 1}
          >
            <Minus size={20} className={quantity <= 1 ? 'text-gray-400' : ''} />
          </motion.button>
          <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onQuantityChange(quantity + 1)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>

      {/* Print Locations */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Print Locations:</h3>
        <div className="space-y-2">
          {PRINT_LOCATIONS.map((location) => (
            <label
              key={location.id}
              className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location.id)}
                  onChange={() => onLocationChange(location.id)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2">{location.name}</span>
              </div>
              {location.price > 0 && (
                <span className="text-sm text-gray-500">+${location.price.toFixed(2)}</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Price Summary */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total Price:</span>
          <span className="text-2xl font-bold text-blue-600">
            ${calculateTotalPrice().toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Includes base price and additional print locations
        </p>
      </div>
    </div>
  );
}

export default ProductCustomization;
