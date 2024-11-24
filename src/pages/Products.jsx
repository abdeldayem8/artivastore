import React from 'react'
import Cover  from '../assets/cover.png';
import ProductList from '../components/ecommerce/ProductList/ProductList'
import { useTranslation } from 'react-i18next'


const Products = () => {
  const {t} = useTranslation();
  return (
   <>
   <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
    <div className='pt-5 text-center'>
      <h1 className='uppercase  text-7xl mx-auto text-primary'>{t('wear')}</h1>
      <h1 className='uppercase leading-none' style={{"WebkitTextFillColor":"white","WebkitTextStroke":"1px rgb(72,72,72)","fontSize":"120px"}}>{t('the')}</h1>
      <p className='uppercase py-3 text-xl font-medium tracking-widest'>{t('difference')}</p>
    </div>
    <div className='bg-primary rounded-lg px-3'>
      <img src={Cover} alt='Top Cover image for home page' className='mx-auto' />
        </div>
   </div>
   <ProductList/>
   </>
  )
}

export default Products
