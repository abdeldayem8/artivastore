import React from 'react'
import { Link } from 'react-router-dom'

const Productitem = ({id,image,name ,price}) => {
  return (
    <Link 
    className="rounded-lg overflow-hidden my-8 block" 
    to={`/artivastore/collection/${id}`}
  >
    {/* Product Image */}
    {image && image.length > 0 ? (
      <div className='overflow-hidden'>
      <img 
        src={image[0]} 
        alt={`${name} main image`} 
        className="hover:scale-90 transition-transform"
      />
      </div>
    ) : (
      <div className="flex items-center justify-center bg-gray-200 text-gray-500">
        No image available
      </div>
    )}

    {/* Product Details */}
    <div className="pt-1">
      <h3 className="text-sm pt-3 pb-1 text-gray-800 font-medium">{name}</h3>
      <p className="text-sm font-medium text-gray-600">{price} EGP</p>
    </div>
  </Link>
  )
}

export default Productitem
