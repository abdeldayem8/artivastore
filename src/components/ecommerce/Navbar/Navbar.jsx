import React, {  lazy, Suspense, useCallback, useRef, useState } from 'react'
import { FaArtstation } from "react-icons/fa";
import { MdClose, MdMenu } from 'react-icons/md';
import Responsivemenu from './Responsivemenu';
const Authbuttons = lazy(() => import('./Authbuttons'));
import Headerbasket from '../../common/HeaderBasket/Headerbasket';
import Headerwishlist from '../../common/HeaderWishlist/Headerwishlist';
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';
import Loading from '../../common/Loading/Loading';
import NavMenuItems from './NavMenuItems';

const Navbar = () => {

 const [openmenu,setOpenmenu] =useState(false);
 const menuButtonRef = useRef(null);
 const { t } = useTranslation();
 const selectedLanguage = localStorage.getItem('i18nextLng');


 
 const toggleMenu = useCallback(() => {
  setOpenmenu((prevState) => !prevState);
}, []);

const closeMenu = useCallback(() => {
  setOpenmenu(false);
}, []);

// Handle language change when an option is clicked
const handleLanguageChange = (event) => {
  const selectedLanguage = event.target.value;
  i18n.changeLanguage(selectedLanguage); // Update the language in i18n
  localStorage.setItem('i18nextLng', selectedLanguage); // Persist language choice
};


  return <>
     <nav>
      <div className='flex items-center justify-between  mb-4'>
        {/* menu section */}
        <div className='hidden lg:block'>
           <NavMenuItems
        ulClassName="flex items-center gap-4 text-secondary"
        liClassName=""
        linkClassName="font-semibold"
        closeMenu={closeMenu}
      />
        </div>
        {/* icons section */}

        <div className="hidden lg:flex text-primary">
            <Suspense fallback={<Loading/>}>
              <Authbuttons closeMenu={closeMenu} />
              </Suspense>
            </div>

        <div className='flex items-center gap-4'>
          <div className='hidden lg:flex'>
          <Headerbasket/>
          <Headerwishlist/>
          </div>
         
          
            {/* language */}
            <select
  value={selectedLanguage || 'en'} // Fallback to 'en' if no language is set
  onChange={handleLanguageChange}
  className="bg-gray-100 border-2 border-gray-300 bg-transparent rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-200"
>
  <option value="en" className="text-gray-700">EN</option>
  <option value="ru" className="text-gray-700">RU</option>
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
