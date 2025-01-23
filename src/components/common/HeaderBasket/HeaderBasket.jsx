import React from 'react'
import Logo from '@assets/cart.svg?react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const HeaderBasket = () => {
  const cart = useSelector((state)=>state.cart)
  return <>
   <Link to='/artivastore/cart' className='text-2xl p-2 cursor-pointer relative sm:mr-1'>
            <Logo/>
            <div className='basketquantity bg-primary text-secondary dark:bg-secondary dark:text-primary'>{cart.length}</div>
          </Link>
  </>
}

export default HeaderBasket
