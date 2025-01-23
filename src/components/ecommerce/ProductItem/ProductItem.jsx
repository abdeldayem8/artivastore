import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const { id, images, name, price } = product; // Destructure the product properties

  return (
    <Link
      className="overflow-hidden my-4 block"
      to={`/artivastore/collection/${id}`} // Use product.id
    >
      {/* Product Image */}
      {images && images.length > 0 ? (
        <div>
          <img
            src={images[0]} // Display the first image
            alt={`${name} main image`}
            className="aspect-[4/5] w-full h-full object-cover hover:scale-90 transition-transform"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center bg-gray-200 text-secondary">
          No image available
        </div>
      )}

      {/* Product Details */}
      <div className="pt-1">
        <h3 className="text-sm pt-3 pb-1  font-medium">{name}</h3>
        <p className="text-sm font-medium ">{price} EGP</p>
      </div>
    </Link>
  );
};

export default ProductItem;
