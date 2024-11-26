import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, RotateCw , Box} from 'lucide-react';
import { Rnd } from 'react-rnd';
import ThreeDPreview from './ThreeDPreview';

const DesignPreview = ({ selectedColor, selectedProduct, designImage, onDesignChange }) => {

  const [view, setView] = useState('front');
  const [is3DMode, setIs3DMode] = useState(false);
  const [designPosition, setDesignPosition] = useState({ x: 150, y: 150 });
  const [designSize, setDesignSize] = useState({ width: 120, height: 120 });

  const handleDragStop = (e, d) => {
    setDesignPosition({ x: d.x, y: d.y });
    if (onDesignChange) {
      onDesignChange({ position: { x: d.x, y: d.y }, size: designSize });
    }
  };

  const handleResize = (e, direction, ref, delta, position) => {
    setDesignSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight
    });
    setDesignPosition(position);
    if (onDesignChange) {
      onDesignChange({ position, size: { width: ref.offsetWidth, height: ref.offsetHeight } });
    }
  };

  const getMockupUrl = () => {
    return selectedProduct.mockups[view][selectedColor];
  };

  return (
    <div className="relative">
      {is3DMode ? (
        <ThreeDPreview
          selectedColor={selectedColor}
          designImage={designImage}
          productType={selectedProduct.id}
        />
      ) : (
        <div className="aspect-square relative flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${view}-${selectedColor}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center"
            >
              <img 
                src={getMockupUrl()}
                alt={`${selectedProduct.name} ${view} view in ${selectedColor}`}
                className="w-full h-full object-contain"
              />
              
              {designImage && (
                <Rnd
                  position={designPosition}
                  size={designSize}
                  onDragStop={handleDragStop}
                  onResize={handleResize}
                  bounds="parent"
                  className="absolute"
                >
                  <img 
                    src={designImage} 
                    alt="Custom design"
                    className="w-full h-full object-contain"
                    style={{ pointerEvents: 'none' }}
                  />
                </Rnd>
              )}

              {!designImage && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-sm text-gray-500">Design Area</p>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {!is3DMode && (
          <>
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
          </>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIs3DMode(!is3DMode)}
          className={`p-2 rounded-full ${
            is3DMode ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
          } shadow-lg`}
        >
          <Box size={20} />
        </motion.button>
      </div>
    </div>
  );
};

DesignPreview.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  selectedProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mockups: PropTypes.object.isRequired
  }).isRequired,
  designImage: PropTypes.string,
  onDesignChange: PropTypes.func
};

export default DesignPreview;