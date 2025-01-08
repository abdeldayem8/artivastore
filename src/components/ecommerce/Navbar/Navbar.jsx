import React, {  useCallback, useRef, useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import Responsivemenu from './Responsivemenu';
import Headerbasket from '../../common/HeaderBasket/Headerbasket';
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';
import NavMenuItems from './NavMenuItems';
import Languageswitcher from './Languageswitcher';
import Logo from '../../../assets/homeimages/logo.webp'

const Navbar = () => {

 const [openmenu,setOpenmenu] =useState(false);
 const menuButtonRef = useRef(null);
 const { t } = useTranslation();
 const selectedLanguage = localStorage.getItem('i18nextLng') || "en";


 
 const toggleMenu = useCallback(() => {
  setOpenmenu((prevState) => !prevState);
}, []);


const closeMenu = useCallback(() => {
  setOpenmenu(false);
}, []);


const handleLanguageChange = (language) => {
  i18n.changeLanguage(language); // Update the language in i18n
  localStorage.setItem('i18nextLng', language); // Persist language choice
};



  return <>
     <nav>
      <div className='flex items-center justify-between mb-4'>
        {/* menu section */}
        <div className='hidden sm:block mx-4'>
         <img src={Logo} />
        </div>
        <div className='hidden lg:block'>
           <NavMenuItems
        ulClassName="flex items-center gap-4 text-secondary"
        liClassName=""
        linkClassName="font-semibold"
        closeMenu={closeMenu}
      />
        </div>
       
            {/* language */}
            <div className='mobile-screen-nav flex justify-between items-center'>
               {/* mobile hamburger menu section  and cart */}
        <div className='lg:hidden cursor-pointer text-secondary' onClick={toggleMenu} ref={menuButtonRef} >
        {openmenu ? <MdClose className='text-4xl' /> : <MdMenu className='text-4xl' />} 
        </div>
        <div className="hidden sm:inline-block">
              <Languageswitcher
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
            </div>
            <div className='block sm:hidden'>
            <img src={Logo} />
              </div>
            <Headerbasket/>
        </div>
      </div>
     </nav>
     {/* mobile sidebar section */}
     <Responsivemenu openmenu={openmenu} setOpenmenu={setOpenmenu} menuButtonRef={menuButtonRef} closeMenu={closeMenu} languagesComponent={
          <Languageswitcher
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        }  />
    </>
}

export default Navbar
