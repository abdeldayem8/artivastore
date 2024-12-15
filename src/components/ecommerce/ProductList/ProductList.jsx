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
            <h2 className="text-2xl text-center font-semibold text-primary mb-6">{t('products')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden my-8">
                            <img
                                src={product.image}
                                alt={product.title || 'Product Image'}
                                className="h-48 w-full object-contain p-4"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-800">{product.title?.split(' ').slice(0,2).join(' ')}</h3>
                                <p className="text-blue-600 font-bold text-lg mt-4">{product.price} EGP</p>
                            </div>
                            <div className="flex justify-center space-x-4 my-4">
                {/* Add to Cart Button */}
                <button
                    className="uppercase hover:bg-white text-white bg-primary font-semibold hover:text-primary rounded-md border-2 border-primary px-6 py-2"
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