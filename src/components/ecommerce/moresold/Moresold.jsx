import React from 'react'
import useFetchmoresold from '../../../hooks/useFetchmoresold'
import API_ENDPOINTS from '../../../utils/API_ENDPOINTS'
import Loading from '../../common/Loading/Loading';
import Titlesection from '../../common/Titlesection/Titlesection';
import Productitem from '../Productitem/Productitem';


const Moresold = ({title}) => {
    const {data,loading,error} = useFetchmoresold(API_ENDPOINTS.More_Sold_Product);
    if (loading) return <p><Loading/></p>;
    if (error) return <p>Error: {error.message}</p>;
     

   const bestsellersdata = Array.isArray(data) ? data.slice(0, 4) : [];
   
  return (
    <div>
                <Titlesection title={title} />
               <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                   {bestsellersdata && bestsellersdata.length > 0 ? (
                       bestsellersdata.map((product) => (
                           <Productitem key={product.id} id={product.id} image={product.images} name={product.name} price={product.price} />
                       ))
                   ) : (
                       <p className="text-center text-gray-500">No products available</p>
                   )}
               </div>
           </div>
  )
}

export default Moresold
