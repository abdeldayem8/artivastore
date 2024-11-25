import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import {PRODUCTS} from '../constants/products.js'

function ProductSelector({ selectedProduct, onProductSelect }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Choose Style:</h3>
      <div className="grid grid-cols-2 gap-4">
        {PRODUCTS.map((product) => (
          <motion.button
            key={product.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onProductSelect(product)}
            className={`relative rounded-lg overflow-hidden aspect-square ${
              selectedProduct.id === product.id ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-full object-contain p-4"
            />
            <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-40 p-2">
              <span className="text-white text-sm font-medium">{product.name}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

ProductSelector.propTypes = {
  selectedProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  }).isRequired,
  onProductSelect: PropTypes.func.isRequired
};

export default ProductSelector;