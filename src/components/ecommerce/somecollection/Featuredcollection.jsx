import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../../../store/thunks/productsThunks';
import Loading from '../../common/Loading/Loading';
import ProductItem from '../Productitem/Productitem';

const Featuredcollection = () => {
     const dispatch = useDispatch()
       const {products,loading,error} = useSelector((state)=>state.products)
        const {t} =useTranslation();
        
        
        useEffect(()=>{
          dispatch(fetchproducts())
        },[dispatch])
    
        if (loading) return <p><Loading/></p>;
        if (error) return <p>Error: {error.message}</p>;
      
    
        const homeProducts = Array.isArray(products) ? products.slice(0, 4) : [];

  return <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
        {homeProducts && homeProducts.length > 0 ? (
          homeProducts.map((product) => (
            <ProductItem product={product}/>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
  </>
}

export default Featuredcollection
