import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MdAdd, MdClose, MdRemove } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProductModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.size || "");
  const [selectedColor, setSelectedColor] = useState(product?.color || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (product?.size?.length > 0) {
      setSelectedSize(product.size[0]);
    }
  }, [product]);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  // Close modal if clicked outside
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;
  // use portal pattern for modal
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
      onClick={handleModalClick}
    >
      <div
        className="bg-primary w-full max-w-md md:max-w-3xl h-3/5 p-6 rounded-md relative flex flex-col md:flex-row overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-secondary hover:text-gray-700 z-10"
        >
          <MdClose className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row gap-6 h-full w-full overflow-y-auto">
          {/* Product Image */}
          <div>
            <img
              src={product?.images[0]}
              alt={product?.name}
              className="aspect-[4/5] w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Product Information */}
          <div className="w-full md:w-1/2 space-y-6 text-secondary flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">{product?.name}</h3>
              <p className="text-xl font-medium text-gray-300 mt-2">
                {product?.price} EGP
              </p>

              {/* Size Selection */}
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Sizes:</p>
                <select
                  value={selectedSize}
                  onChange={handleSizeChange}
                  className="border rounded-md text-primary py-2 px-3 w-full"
                >
                  {product?.size?.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Colors */}
            <div>
              <p className="text-secondary">Available Colors</p>
              <div className="flex items-center gap-4 my-4">
                {product?.color?.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 transition ${
                      selectedColor === color
                        ? "border-gray-500"
                        : "border-orange-500"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            {/* Quantity */}
            <div className="space-y-4">
              <div>
                <p className="text-lg text-gray-400">Quantity:</p>
                <div className="flex items-center border rounded-md text-secondary w-fit">
                  <button
                    className="p-2"
                    onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                  >
                    <MdRemove className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    className="p-2"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <MdAdd className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onAddToCart({
                    ...product,
                    size: selectedSize,
                    quantity,
                    color: selectedColor,
                  });
                  onClose();
                }}
                className="bg-secondary text-black text-lg font-semibold py-3 px-4 rounded-md w-full hover:bg-gray-400"
              >
                Add to Cart
              </button>

              <button
                onClick={() => {
                  onClose();
                  navigate(`/artivastore/collection/${product?.id}`);
                }}
                className="text-secondary text-lg font-semibold w-full text-center border border-gray-500 py-3 rounded-md hover:bg-gray-700"
              >
                View Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ProductModal;
