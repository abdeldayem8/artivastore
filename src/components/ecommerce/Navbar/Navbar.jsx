import React, { useState } from 'react'
import { FaArtstation } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import {Navbarmenu} from './Navbarmenuitems'
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import Responsivemenu from './Responsivemenu';
import Authbuttons from './Authbuttons';

const Navbar = () => {
 const [openmenu,setOpenmenu] =useState(false);

 const toggleMenu = ()=>{
  setOpenmenu(!openmenu);
 }
  return <>
     <nav>
      <div className='flex items-center justify-between'>
        {/* logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold py-6 uppercase'>
          <FaArtstation/>
          <p>Artiva</p>
          <p className='text-secondary'>Store</p>
        </div>
        {/* menu section */}
        <div className='hidden md:block'> 
          <ul className='flex items-center gap-4 text-gray-600'>
            {Navbarmenu.map((item)=>{
              return(
                <li key={item.id}>
                  <Link to={item.link} className='hover:text-primary font-semibold'>{item.title}</Link>
                  </li>
              )
            })}
          </ul>
        </div>
        {/* icons section */}
        <div className='flex items-center gap-4'>
          <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300'>
            <PiShoppingCart/>
          </button>
          <div className="hidden md:flex">
              <Authbuttons />
            </div>
        </div>
        {/* mobile hamburger menu section */}
        <div className='md:hidden cursor-pointer'onClick={toggleMenu} >
          <MdMenu className='text-4xl' />
        </div>
      </div>
     </nav>
     {/* mobile sidebar section */}
     <Responsivemenu openmenu={openmenu} setOpenmenu={setOpenmenu}/>
    </>
}

export default Navbar
