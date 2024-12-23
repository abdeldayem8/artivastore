import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Loading from '../../common/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../../../store/thunks/productsThunks';
import Productitem from '../Productitem/Productitem'

const ProductList = () => {
    
   const dispatch = useDispatch()
   const {products,loading,error} = useSelector((state)=>state.products)
    const {t} =useTranslation();

    useEffect(()=>{
      dispatch(fetchproducts())
    },[dispatch])

    if (loading) return <p><Loading/></p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
     <div className="max-w-7xl mx-auto my-4 px-4 py-8">
            <h2 className="text-2xl text-center font-semibold mb-6">{t('products')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id}>
                        <Productitem 
                          id={product.id} 
                          image={product.images} 
                          name={product.name} 
                          price={product.price} 
                        />
                        <div className="flex justify-center my-4">
                          <button
                            className="uppercase bg-secondary cursor-pointer text-white font-semibold rounded-md border-2 border-primary px-6 py-2"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products available</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;