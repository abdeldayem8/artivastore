import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const PRODUCTS = [
    { 
      id: 'tshirt', 
      name: 'T-Shirt', 
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      // These properties will be used when implementing 3D functionality
      modelPath: '/models/tshirt.glb', // 3D model path (to be implemented)
      defaultRotation: { x: 0, y: 0, z: 0 }, // Default rotation values
    },
    { 
      id: 'hoodie', 
      name: 'Hoodie', 
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
      modelPath: '/models/hoodie.glb', // 3D model path (to be implemented)
      defaultRotation: { x: 0, y: 0, z: 0 }, // Default rotation values
    }
  ];

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
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2">
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
      image: PropTypes.string.isRequired
    }).isRequired,
    onProductSelect: PropTypes.func.isRequired
  };
  
  export default ProductSelector;
