import React from 'react'
import Logo from '../../../assets/homeimages/cart.svg?react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Headerbasket = () => {
  const cart = useSelector((state)=>state.cart)
  return <>
   <Link to='/artivastore/cart' className='text-2xl p-2 cursor-pointer relative sm:mr-1'>
            <Logo/>
            <div className='basketquantity'>{cart.length}</div>
          </Link>
  </>
}

export default Headerbasket
