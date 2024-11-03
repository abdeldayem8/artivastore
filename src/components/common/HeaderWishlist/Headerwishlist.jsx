import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const Headerwishlist = () => {
  return (
    <div>
      <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300'>
            <AiOutlineHeart/>
          </button>
    </div>
  )
}

export default Headerwishlist
