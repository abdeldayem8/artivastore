import React from 'react';
import { SIZES } from '@components/ecommerce/Constants/Customization';
import { MdAdd, MdRemove } from 'react-icons/md';

function ProductCustomization({ 
  selectedSize, 
  quantity,  
  basePrice, 
  onSizeChange, 
  onQuantityChange, 
  
}) {

  return (
    <div className="space-y-6 text-secondary">
      {/* Size Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Select Size:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <select
      value={selectedSize}
      onChange={(e) => onSizeChange(e.target.value)}
      className="border rounded-md text-primary py-2 px-3 w-full"
    >
      {SIZES.map((size) => (
        <option value={size.id} key={size.id} disabled={size.stock === 0}>
          {size.name} {size.stock < 50 ? '(Low Stock)' : ''}
        </option>
      ))}
    </select>
        </div>
      </div>

      {/* Quantity Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Quantity:</h3>
        <div className="flex items-center border rounded-md text-secondary w-fit">
                                <button
                                  className="p-2"
                                  onClick={() => quantity > 1 && onQuantityChange(quantity - 1)}
                                >
                                  <MdRemove className="w-4 h-4" />
                                </button>
                                <span className="w-12 text-center">{quantity}</span>
                                <button
                                  className="p-2"
                                  onClick={() => onQuantityChange(quantity + 1)}
                                >
                                  <MdAdd className="w-4 h-4" />
                                </button>
                              </div>
      </div>


      {/* Price Summary */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total Price:</span>
          <span className="text-2xl font-bold text-blue-600">
            {basePrice} EGP
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Includes base price and additional print Price
        </p>
      </div>
    </div>
  );
}

export default ProductCustomization;
