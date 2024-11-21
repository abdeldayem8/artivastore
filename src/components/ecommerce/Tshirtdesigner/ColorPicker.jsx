import React from 'react';
import PropTypes from 'prop-types';

const COLORS = ['white', 'black', 'navy', 'red', 'gray', 'green'];

function ColorPicker({ selectedColor, onColorSelect }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Choose Color:</h3>
      <div className="flex gap-3">
        {COLORS.map((color) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor === color ? 'border-blue-500' : 'border-gray-200'
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
    </div>
  );
}

ColorPicker.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  onColorSelect: PropTypes.func.isRequired
};

export default ColorPicker;