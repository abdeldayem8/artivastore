import React, {  useRef, useState } from 'react'
import { FaArtstation } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import Responsivemenu from './Responsivemenu';
import Authbuttons from './Authbuttons';
import Headerbasket from '../../common/HeaderBasket/Headerbasket';
import Headerwishlist from '../../common/HeaderWishlist/Headerwishlist';
import i18n from '../../../i18n';
// import getMenuForCurrentLanguage from '../../../utils/Menuutils/GetmenuforCurrentlanguage';
import { useTranslation } from 'react-i18next';
import { Navbarmenu } from './Navbarmenuitems';

const Navbar = () => {

 const [openmenu,setOpenmenu] =useState(false);
 const menuButtonRef = useRef(null);
 const selectedLanguage = localStorage.getItem('i18nextLng');
//  const menuitems = getMenuForCurrentLanguage();
 const { t } = useTranslation();

 
const toggleMenu = ()=>{
  setOpenmenu(prevState => !prevState);
 }

 const closeMenu = () => {
  setOpenmenu(false);
};

// Handle language change when an option is clicked
const handleLanguageClick = (lng) => {
    i18n.changeLanguage(lng); // Update the i18n language
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
                  <Link onClick={closeMenu} to={item.link} className='hover:text-primary font-semibold'>{t(item.titleKey)}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        {/* icons section */}
        <div className='flex items-center gap-4'>
          <div className='hidden lg:flex'>
          <Headerbasket/>
          <Headerwishlist/>
          </div>
         
          <div className="hidden lg:flex">
              <Authbuttons />
            </div>
            {/* language */}
        <select defaultValue={selectedLanguage} onClick={(e)=>handleLanguageClick(e.target.value)} className="bg-gray-100 border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-200">
          <option value="en" className="text-gray-700">EN</option>
          <option value="ru"className="text-gray-700">RU</option>
        </select>
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
