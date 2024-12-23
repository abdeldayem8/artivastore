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
import { Link } from 'react-router-dom';
import Featuredcollection from '../components/ecommerce/somecollection/Featuredcollection';

const Home = () => {

         const {t} =useTranslation();
 
  
  return <>
  <div className="flex flex-col sm:flex-row border-t-2 border-gray-400">
        <div className="w-full">
          <img src={Cover} alt="Top Cover image for home page" className="mx-auto" />
        </div>
      </div>

      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold">Our Featured Collection</h2>
      </div>

       <Featuredcollection/>
      {/* best sellers */}
      <Moresold title="Best Sellers"/>
      {/* policy */}
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