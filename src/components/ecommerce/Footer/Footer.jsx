import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-primary text-white p-8 text-center '>
      <div className='flex items-center justify-around flex-col sm:flex-row'>
        <div className='mb-4'>
            <div>
                <p className='text-lg font-bold mb-4'>Artiva Store</p>
            </div>
            <div>
            <h2 class="text-xl font-semibold mb-2">Our Store</h2>
            <div className='mb-4 space-y-1'>
            <p class="cursor-pointer">Home</p>
            <p class="cursor-pointer">Collections</p>
            <p class="cursor-pointer">Make Your T-shirt</p>
            </div>
            </div>
            <div>
            <h2 class="text-xl font-semibold mb-4">NEED ASSISTANCE?</h2>
            <p class="mb-2">123-456-789</p>
            <p>artiva@gmail.com</p>
            </div>
        </div>
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
        <div className='mb-4'>
        <div className="p-8 rounded-lg  max-w-sm w-full">
        <h2 className="text-2xl font-bold  mb-4 text-center">Be Our Friend</h2>
        <div className='text-center'>
        <label htmlFor='email' className=" mb-2">Enter Your Email Here <span className="text-red-500">*</span></label>
        <input
          id='email'
          type="email"
          className="w-full px-4 py-2  bg-transparent border-b-2 border-gray-500 focus:outline-none focus:ring-0 "
        />
        </div>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg  transition duration-200"
        >
          Subscribe Now 
        </button>
      </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
