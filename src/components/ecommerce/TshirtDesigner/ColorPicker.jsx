import React from 'react';


function ColorPicker({ selectedColor, onColorSelect,colors}) {
  
  return (
    <div className="flex gap-2 my-4 bg-gray-500 p-4 rounded-md">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full ${
            selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </div>
  );
}

export default ColorPicker;