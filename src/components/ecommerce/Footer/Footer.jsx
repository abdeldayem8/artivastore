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
        {/* terms and conditions */}
        <div className='mb-4'>
            <div>
                <h2 className='mb-2'>Quick Links</h2>
                <div className='flex items-center justify-center gap-4 text-sm'>
                    <p>Exchange Policy</p>
                    <p>Shipping Policy</p>
                    <p>Refund Policy</p>
                </div>
                <div>
                    <h2 className='my-4'>Stay Connected</h2>
                    <ul className='flex gap-4 items-center justify-center text-smxl'>
                        <li><FaFacebook/></li>
                        <li><FaTiktok/></li>
                        <li><FaInstagram/></li>
                    </ul>
                </div>
            <div className='my-4'>
            <div>
            <h2 className="mb-4">NEED ASSISTANCE?</h2>
            <div className='flex items-center gap-4 justify-center'>
            <p>{data.phone}</p>
            <p>{data.email}</p>
            </div>
            </div>
             </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
