import React, { useEffect } from 'react'
import Cover  from '../assets/homeimages/cover.jpg';
import exchange  from '../assets/homeimages/exchangepolicy.png';
import returnpolicy  from '../assets/homeimages/returnpolicy.png';
import customer  from '../assets/homeimages/customer.png';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../store/thunks/productsThunks';
import Loading from '../components/common/Loading/Loading';
import Moresold from '../components/ecommerce/moresold/Moresold';

const Home = () => {

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
  <div className="flex flex-col sm:flex-row border-t-2 border-gray-400">
        <div className="w-full">
          <img src={Cover} alt="Top Cover image for home page" className="mx-auto" />
        </div>
      </div>

      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold">Our Featured Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
        {homeProducts && homeProducts.length > 0 ? (
          homeProducts.map((product) => (
            <div key={product.id} className="rounded-lg  overflow-hidden my-8">
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
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
      <Moresold/>
      <div className="flex flex-col sm:flex-row items-center justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base  text-center">
        <div>
          <img src={exchange} className="w-12 m-auto mb-5" alt="Easy Exchange Policy" />
          <p className="font-semibold">{t('easyExchange')}</p>
          <p className="text-gray-400">{t('hassleFreeExchange')}</p>
        </div>
        <div>
          <img src={returnpolicy} className="w-12 m-auto mb-5" alt="7 Days Return Policy" />
          <p className="font-semibold">{t('sevenDaysReturn')}</p>
          <p className="text-gray-400">{t('freeReturn')}</p>
        </div>
        <div>
          <img src={customer} className="w-12 m-auto mb-5" alt="24/7 Customer Support" />
          <p className="font-semibold">{t('customerSupport')}</p>
          <p className="text-gray-400">{t('twentyFourSevenSupport')}</p>
        </div>
      </div>
    </>
  
};

export default Home;