import React, { useEffect } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSocialData } from '@store/Thunks/SocialThunk';

const Footer = () => {

  const {data} = useSelector((state)=>state.social)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchSocialData())
  },[dispatch])

  return (
    <footer className="text-center">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Quick Links Section */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
        <div className="flex flex-col items-center  gap-2 text-sm">
          <a href="#" className="hover:underline">Exchange Policy</a>
          <a href="#" className="hover:underline">Shipping Policy</a>
          <a href="#" className="hover:underline">Refund Policy</a>
        </div>
      </div>
  
      {/* Stay Connected Section */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Stay Connected</h2>
        <ul className="flex gap-6 justify-center">
          <li className="text-2xl hover:text-accent">
            <FaFacebook />
          </li>
          <li className="text-2xl hover:text-accent">
            <FaTiktok />
          </li>
          <li className="text-2xl hover:text-accent">
            <FaInstagram />
          </li>
        </ul>
      </div>
  
      {/* Assistance Section */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Need Assistance?</h2>
        <div className="flex flex-col items-center gap-2 text-sm">
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
  
    <div className="mt-8 text-xs text-primary dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} Artiva Store. All rights reserved.</p>
    </div>
  </footer>
  
  )
}

export default Footer
