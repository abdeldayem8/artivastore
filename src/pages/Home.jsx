import React, { useEffect } from 'react'
import Cover  from '../assets/homeimages/cover.png';
import exchange  from '../assets/homeimages/exchangepolicy.png';
import returnpolicy  from '../assets/homeimages/returnpolicy.png';
import customer  from '../assets/homeimages/customer.png';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../store/thunks/productsThunks';
import { CiHeart } from 'react-icons/ci';
import Loading from '../components/common/Loading/Loading';

const Home = () => {
  const dispatch = useDispatch()
   const {products,loading,error} = useSelector((state)=>state.products)
    const {t} =useTranslation();

    useEffect(()=>{
      dispatch(fetchproducts())
    },[dispatch])

    if (loading) return <p><Loading/></p>;
    if (error) return <p>Error: {error.message}</p>;

    const homeProducts = products.slice(0,8);
    console.log(homeProducts);
  return <>
  <div className="flex flex-col sm:flex-row border border-gray-400">
        <div className="pt-5 text-center w-full flex items-center justify-center flex-col">
          <h1 className="uppercase text-7xl mx-auto text-primary">{t('wear')}</h1>
          <h1
            className="uppercase leading-none"
            style={{
              WebkitTextFillColor: 'white',
              WebkitTextStroke: '1px rgb(72, 72, 72)',
              fontSize: '120px',
            }}
          >
            {t('the')}
          </h1>
          <p className="uppercase py-3 text-xl font-medium tracking-widest">{t('difference')}</p>
        </div>
        <div className="bg-primary px-3 w-full">
          <img src={Cover} alt="Top Cover image for home page" className="mx-auto" />
        </div>
      </div>

      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold text-primary">Our Featured Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
        {homeProducts && homeProducts.length > 0 ? (
          homeProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden my-8">
              <img
                src={product.image}
                alt={product.title || 'Product Image'}
                className="h-48 w-full object-contain p-4"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{product.title?.split(' ').slice(0, 2).join(' ')}</h3>
                <p className="text-blue-600 font-bold text-lg mt-4">{product.price} EGP</p>
              </div>
              <div className="flex justify-center space-x-4 my-4">
                <button
                  className="uppercase hover:bg-white text-white bg-primary font-semibold hover:text-primary rounded-md border-2 border-primary px-6 py-2"
                >
                  Add To Cart
                </button>
                <button className="text-gray-500">
                  <CiHeart className="text-2xl" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700 text-center">
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