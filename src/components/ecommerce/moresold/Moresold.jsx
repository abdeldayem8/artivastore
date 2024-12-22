import React from 'react'
import useFetchmoresold from '../../../hooks/useFetchmoresold'
import API_ENDPOINTS from '../../../utils/API_ENDPOINTS'
import Loading from '../../common/Loading/Loading';
import { Link } from 'react-router-dom';


const Moresold = () => {
    const {data,loading,error} = useFetchmoresold(API_ENDPOINTS.More_Sold_Product);
    if (loading) return <p><Loading/></p>;
    if (error) return <p>Error: {error.message}</p>;
     

   const bestsellersdata = Array.isArray(data) ? data.slice(0, 4) : [];
   
  return (
    <div>
               <h2 className="text-2xl text-center font-semibold  mb-6">Best Sellers</h2>
               <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                   {bestsellersdata && bestsellersdata.length > 0 ? (
                       bestsellersdata.map((product) => (
                           <Link key={product.id} to={`/artivastore/collection/${product.id}`} className="rounded-lg overflow-hidden my-8">
                               {product.images.length > 0 ? (
                     <img
                       src={product.images[0]} 
                       alt={`${product.name} main image`}
                       className='h-48 w-full'
                     />
                   ) : (
                     <p>No image available</p>
                   )}
                               <div className="pt-1">
                                   <h3 className="text-sm pt-3 pb-1">{product.name}</h3>
                                   <p className="text-sm font-medium">{product.price} EGP</p>
                               </div>
                           </Link>
                       ))
                   ) : (
                       <p className="text-center text-gray-500">No products available</p>
                   )}
               </div>
           </div>
  )
}

export default Moresold
