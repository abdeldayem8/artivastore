import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Authbuttons = ({ additionalClasses = '', variant = 'button' ,closemenu}) => {
  
    const {t} = useTranslation();
     const location = useLocation();
    const [activelink,setActivelink] = useState(location.pathname);
    const isLinkStyle = variant === 'link';
  
      useEffect(() => {
           // Update active link whenever the location changes
           const handleLocationChange = () => setActivelink(location.pathname);
           handleLocationChange(); // Call it initially for current path
       
           return () => {};
         }, [location]);
       
       
       
         const handleLinkClick = (path) => {
           setActivelink(path); // Set active link immediately on click
           closemenu(); // Close menu when link is clicked
         };

  return (
    <div className={`flex gap-4 ${additionalClasses}`}>
    <button
      aria-label={t('login')}
      className={`${
        isLinkStyle ? 'uppercase' : 'font-semibold'
      } ${
        activelink === '/artivastore/login'
          ? 'text-orange-500 border-b-2 border-orange-500' // Tailwind active link styling
          : 'hover:text-orange-500'
      } transition-all duration-300`}
    >
      <Link
        onClick={() => handleLinkClick('/artivastore/login')} // Set active state on click
        to="/artivastore/login"
      >
        {t('login')}
      </Link>
    </button>
    <button
      aria-label={t('register')}
      className={`${
        isLinkStyle ? 'uppercase' : 'font-semibold'
      } ${
        activelink === '/artivastore/register'
          ? 'text-orange-500 border-b-2 border-orange-500' // Tailwind active link styling
          : 'hover:text-orange-500'
      } transition-all duration-300`}
    >
      <Link
        onClick={() => handleLinkClick('/artivastore/register')} // Set active state on click
        to="/artivastore/register"
      >
        {t('register')}
      </Link>
    </button>
  </div>
  )
}

export default Authbuttons
