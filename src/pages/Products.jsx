import React from 'react'
import cover from '../assets/cover.png'
import ProductList from '../components/ecommerce/ProductList/ProductList'


const Products = () => {
  return (
   <>
   <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
    <div className='pt-5 text-center'>
      <h1 className='uppercase  text-7xl mx-auto text-primary'>Ultimate</h1>
      <h1 className='uppercase leading-none' style={{"WebkitTextFillColor":"white","WebkitTextStroke":"1px rgb(72,72,72)","fontSize":"120px"}}>Sale</h1>
      <p className='uppercase py-3 text-xl font-medium tracking-widest'>New Collection</p>
    </div>
    <div className='bg-primary rounded-lg px-3'>
      <img src={cover} alt='Top Cover image for home page' className='mx-auto' />
    </div>
   </div>
   <ProductList/>
   </>
  )
}

export default Products
