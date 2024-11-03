import React from 'react'
import { PiShoppingCart } from 'react-icons/pi'

const Headerbasket = () => {
  return <>
   <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300'>
            <PiShoppingCart/>
          </button>
  </>
}

export default Headerbasket
