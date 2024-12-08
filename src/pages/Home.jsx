import React from 'react'
import Cover  from '../assets/homeimages/cover.png';
import exchange  from '../assets/homeimages/exchangepolicy.png';
import returnpolicy  from '../assets/homeimages/returnpolicy.png';
import customer  from '../assets/homeimages/customer.png';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const {t} = useTranslation();
  return <>

    <div className='flex flex-col sm:flex-row  border border-gray-40'>
      <div className='pt-5 text-center w-full flex itmes-center justify-center flex-col'>
      <h1 className='uppercase  text-7xl mx-auto text-primary'>{t('wear')}</h1>
      <h1 className='uppercase leading-none' style={{"WebkitTextFillColor":"white","WebkitTextStroke":"1px rgb(72,72,72)","fontSize":"120px"}}>{t('the')}</h1>
      <p className='uppercase py-3 text-xl font-medium tracking-widest'>{t('difference')}</p>
    </div>
      <div className='bg-primary px-3 w-full'>
      <img src={Cover} alt='Top Cover image for home page' className='mx-auto' />
        </div>
    </div>
    <div className='flex flex-col sm:flex-row items-center justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700 text-center'>
      <div>
       <img src={exchange} className='w-12 m-auto mb-5'/>
       <p className='font-semibold'>Easy Exchange Policy</p>
       <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      <div>
       <img src={returnpolicy} className='w-12 m-auto mb-5'/>
       <p className='font-semibold'>7 Days Return Policy</p>
       <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>
      <div>
       <img src={customer} className='w-12 m-auto mb-5' />
       <p className='font-semibold'>Easy Exchange Policy</p>
       <p className='text-gray-400'>we provide 24/7 customer support</p>
      </div>
    </div>
    </>
}

export default Home
