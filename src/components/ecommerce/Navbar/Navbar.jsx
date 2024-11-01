import React, { useRef, useState } from 'react'
import { FaArtstation } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import {Navbarmenu} from './Navbarmenuitems'
import { Link } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import Responsivemenu from './Responsivemenu';
import Authbuttons from './Authbuttons';

const Navbar = () => {
 const [openmenu,setOpenmenu] =useState(false);
 const menuButtonRef = useRef(null);

 const toggleMenu = ()=>{
  setOpenmenu(prevState => !prevState);
 }
 const closeMenu = () => {
  setOpenmenu(false);
};
  return <>
     <nav>
      <div className='flex items-center justify-between border-b-2 border-slate-200 mb-4'>
        {/* logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold py-6 uppercase'>
          <FaArtstation/>
          <p>Artiva</p>
          <p className='text-primary'>Store</p>
        </div>
        {/* menu section */}
        <div className='hidden lg:block'  > 
          <ul className='flex items-center gap-4 text-gray-600'>
            {Navbarmenu.map((item)=>{
              return(
                <li key={item.id} >
                  <Link onClick={closeMenu} to={item.link} className='hover:text-primary font-semibold'>{item.title}</Link>
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
          <div className="hidden lg:flex">
              <Authbuttons />
            </div>
        </div>
        {/* mobile hamburger menu section */}
        <div className='lg:hidden cursor-pointer' onClick={toggleMenu} ref={menuButtonRef} >
        {openmenu ? <MdClose className='text-4xl' /> : <MdMenu className='text-4xl' />} 
        </div>
      </div>
     </nav>
     {/* mobile sidebar section */}
     <Responsivemenu openmenu={openmenu} setOpenmenu={setOpenmenu} menuButtonRef={menuButtonRef} closeMenu={closeMenu}/>
    </>
}

export default Navbar
