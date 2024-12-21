import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Loading from '../../common/Loading/Loading';
import { CiHeart } from 'react-icons/ci';
import API_ENDPOINTS from '../../../utils/API_ENDPOINTS';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../../../store/thunks/productsThunks';

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className=" rounded-lg overflow-hidden my-8">
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
                            <div className="flex justify-center space-x-4 my-4">
                {/* Add to Cart Button */}
                <button
                    className="uppercase bg-btn text-white font-semibold rounded-md border-2 border-primary px-6 py-2"
                >
                    Add To Cart
                </button>

                {/* Add to Favourites Button */}
                <button
                    className={'text-gray-500'}
                >
                    <CiHeart className="text-2xl" />
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