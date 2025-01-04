import React, {  useState } from 'react';
import { RotateCcw, RotateCw, X } from 'lucide-react';
import { Rnd } from 'react-rnd';

const DesignPreview = ({ 
  selectedColor,
  selectedProduct ,
  frontDesignImage,
  backDesignImage,
  view,
  setView,
  typedText,
  textColor,
  onRemoveDesign,
  onDesignChange,
  onTextChange,
}) => {
  const [designPosition, setDesignPosition] = useState({ x: 150, y: 150 });
  const [designSize, setDesignSize] = useState({ width: 120, height: 120 });
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });

  const getCurrentDesignImage = () => {
    return view === 'front' ? frontDesignImage : backDesignImage;
  };
 

  const handleDragStop = (e, d) => {
    setDesignPosition({ x: d.x, y: d.y });
    onDesignChange && onDesignChange({ position: { x: d.x, y: d.y }, size: designSize });
  };

  const handleResize = (e, direction, ref, delta, position) => {
    setDesignSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
    setDesignPosition(position);
    onDesignChange && onDesignChange({ position, size: { width: ref.offsetWidth, height: ref.offsetHeight } });
  };

  const handleTextDragStop = (e, d) => {
    setTextPosition({ x: d.x, y: d.y });
    onTextChange && onTextChange({ color: textColor, position: { x: d.x, y: d.y } });
  };

  const getCurrentProductImage = () => {
    if (!selectedProduct) return null;
    return view === 'front'
      ? selectedProduct?.image_forward
      : selectedProduct?.image_back || selectedProduct?.image_forward; // Fallback to front image if back is unavailable
  };


  return (
    <div className="relative">
      <div className="aspect-square relative flex items-center justify-center rounded-lg overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
          {getCurrentProductImage() ? (
            <img
              src={getCurrentProductImage()}
              alt={`${selectedProduct || 'Product'} ${view} view in ${selectedColor}`}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">No product image available</p>
            </div>
          )}

          {getCurrentDesignImage() && (
            <Rnd
              position={designPosition}
              size={designSize}
              onDragStop={handleDragStop}
              onResize={handleResize}
              bounds="parent"
              className="absolute"
            >
              <div className="relative">
                <img
                  src={getCurrentDesignImage()}
                  alt="Custom design"
                  className="w-full h-full object-contain"
                  style={{ pointerEvents: 'none' }}
                />
                <button
                  onClick={onRemoveDesign}
                  className="absolute -top-5 -right-5 bg-red-500 text-white rounded-full p-1"
                >
                  <X size={16} />
                </button>
              </div>
            </Rnd>
          )}

          {typedText && (
            <Rnd
              position={textPosition}
              onDragStop={handleTextDragStop}
              bounds="parent"
              className="absolute"
            >
              <div
                className="text-xl font-bold"
                style={{ color: textColor }}
              >
                {typedText}
              </div>
            </Rnd>
          )}

          {!getCurrentDesignImage() && !typedText && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
                <p className="text-sm text-gray-500">Design Area</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          onClick={() => setView('front')}
          className={`p-2 rounded-full ${view === 'front' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} shadow-lg`}
        >
          <RotateCcw size={20} />
        </button>
        <button
          onClick={() => setView('back')}
          className={`p-2 rounded-full ${view === 'back' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} shadow-lg`}
        >
          <RotateCw size={20} />
        </button>
      </div>
    </div>
  );
};

export default DesignPreview;
