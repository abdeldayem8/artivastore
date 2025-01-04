import React, {  useCallback, useRef, useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import Responsivemenu from './Responsivemenu';
import Headerbasket from '../../common/HeaderBasket/Headerbasket';
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';
import NavMenuItems from './NavMenuItems';

const Navbar = () => {

 const [openmenu,setOpenmenu] =useState(false);
 const [dropdownOpen, setDropdownOpen] = useState(false);
 const menuButtonRef = useRef(null);
 const { t } = useTranslation();
 const selectedLanguage = localStorage.getItem('i18nextLng') || "en";


 
 const toggleMenu = useCallback(() => {
  setOpenmenu((prevState) => !prevState);
}, []);

const toggleDropdown = () => {
  setDropdownOpen((prevState) => !prevState); // Toggle dropdown visibility
};
const closeDropdown = () => {
  setDropdownOpen(false); // Close dropdown
};
const closeMenu = useCallback(() => {
  setOpenmenu(false);
}, []);


const handleLanguageChange = (language) => {
  i18n.changeLanguage(language); // Update the language in i18n
  localStorage.setItem('i18nextLng', language); // Persist language choice
  closeDropdown();
};

const languages = [
  { code: 'en', name: 'En', flag: 'https://flagcdn.com/us.svg' },
  { code: 'ru', name: 'Ru', flag: 'https://flagcdn.com/ru.svg' },
];

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
       

            {/* language */}
            <div className='mobile-screen-nav flex justify-between items-center'>
        <Headerbasket/>

            <div className="relative inline-block">
              <button
                className="flex items-center space-x-2 bg-transparent border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={toggleDropdown} // Toggle dropdown on click
              >
                <img
                  src={languages.find((lang) => lang.code === selectedLanguage)?.flag}
                  alt="flag"
                  className="w-5 h-5 rounded-full"
                />
                <span>{selectedLanguage.toUpperCase()}</span>
              </button>
              {dropdownOpen && ( // Conditionally render the dropdown
                <div className="absolute mt-2 bg-transparent border border-gray-300 rounded-lg shadow-lg z-10">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      <img src={lang.flag} alt={lang.name} className="w-5 h-5 rounded-full" />
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
        {/* mobile hamburger menu section  and cart */}
        <div className='lg:hidden cursor-pointer' onClick={toggleMenu} ref={menuButtonRef} >
        {openmenu ? <MdClose className='text-4xl' /> : <MdMenu className='text-4xl' />} 
        </div>
        </div>
      </div>
     </nav>
     {/* mobile sidebar section */}
     <Responsivemenu openmenu={openmenu} setOpenmenu={setOpenmenu} menuButtonRef={menuButtonRef} closeMenu={closeMenu}/>
    </>
}

export default Navbar
