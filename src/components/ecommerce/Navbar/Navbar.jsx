import React, {  useCallback, useRef, useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import Responsivemenu from './Responsivemenu';
import HeaderBasket from '@components/common/HeaderBasket/HeaderBasket';
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';
import NavMenuItems from './NavMenuItems';
import Languageswitcher from './Languageswitcher';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {

 const [openmenu,setOpenmenu] =useState(false);
 const menuButtonRef = useRef(null);
 const { t } = useTranslation();
 const selectedLanguage = localStorage.getItem('i18nextLng') || "en";
 const {data} = useSelector((state)=>state.social)

 
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
      <div className='flex items-center justify-between mb-4 sm:gap-8'>

      <div className='lg:hidden cursor-pointer' onClick={toggleMenu} ref={menuButtonRef} >
        {openmenu ? <MdClose className='text-2xl' /> : <MdMenu className='text-2xl' />} 
      </div>

        {/* menu section */}
        <div className='mx-4'>
        <Link to={'/artivastore/'} className='font-black text-2xl'>{data.name}</Link>
        </div>
        <div className='hidden lg:block'>
           <NavMenuItems
        ulClassName="flex items-center gap-4"
        liClassName=""
        linkClassName="font-semibold"
        closeMenu={closeMenu}
      />
        </div>
        
            {/* language */}
            <div className='flex justify-between items-center'>

              <div className="hidden lg:inline-block">
              <Languageswitcher
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
            </div>
            {/* cart */}
            <HeaderBasket/>
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
