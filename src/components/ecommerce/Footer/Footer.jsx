import React, { useEffect } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSocialData } from '../../../store/thunks/social';

const Footer = () => {

  const {data} = useSelector((state)=>state.social)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchSocialData())
  },[dispatch])

  return (
    <footer className='bg-primary text-secondary p-8 text-center '>
      <div className='flex items-center justify-around flex-col sm:flex-row'>
        {/* our store */}
        <div className='mb-4'>
            <div>
                <p className='text-lg font-bold mb-4'>Artiva Store</p>
            </div>
            <div>
            <h2 class="text-xl font-semibold mb-2">Our Store</h2>
            <div className='mb-4 space-y-1 flex flex-col'>
             <Link to={'/artivastore/'}>Home</Link>
             <Link to={'/artivastore/collection'}>Collections</Link>
             <Link to={'/artivastore/maketshirt'}>Make Your T-shirt</Link>
            </div>
            </div>
            <div>
            <h2 class="text-xl font-semibold mb-4">NEED ASSISTANCE?</h2>
            <p class="mb-2">{data.phone}</p>
            <p>{data.email}</p>
            </div>
        </div>
        {/* terms and conditions */}
        <div className='mb-4'>
            <div>
                <h2 className='text-xl font-semibold mb-2'>Terms&amp;Conditions</h2>
                <div className='space-y-2'>
                    <p>Terms&amp;Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Shipping Policy</p>
                    <p>Refund Policy</p>
                </div>
                <div>
                    <h2 className='text-xl font-semibold my-4'>Stay Connected</h2>
                    <ul className='flex justify-around items-center text-2xl'>
                        <li><FaFacebook/></li>
                        <li><FaXTwitter/></li>
                        <li><FaTiktok/></li>
                        <li><FaInstagram/></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
