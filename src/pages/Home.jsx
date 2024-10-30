import React from 'react'
import topcover from '../assets/topcover.png'
import bottomcover from '../assets/bottomcover.png'

const Home = () => {
  return (
   <>
   <div className='flex flex-col'>
    <div className='bg-primary rounded-lg px-3'>
      <img src={topcover} alt='Top Cover image for home page' className='mx-auto' />
    </div>
    <div className='pt-5 text-center'>
      <h1 className='uppercase  text-7xl mx-auto text-primary'>Ultimate</h1>
      <h1 className='uppercase leading-none' style={{"-webkit-text-fill-color":"white","-webkit-text-stroke":"1px rgb(72,72,72)","fontSize":"120px"}}>Sale</h1>
      <p className='uppercase py-3 text-xl font-medium tracking-widest'>New Collection</p>
    </div>
    <div className='bg-primary rounded-lg px-3'>
      <img src={bottomcover} alt='Bottom Cover image for home page' className='mx-auto'/>
    </div>
   </div>
   </>
  )
}

export default Home
