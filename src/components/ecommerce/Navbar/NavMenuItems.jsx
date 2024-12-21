import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Navbarmenu } from './Navbarmenuitems';
import { Link, useLocation } from 'react-router-dom';

const NavMenuItems = ({ ulClassName, liClassName, linkClassName, closeMenu }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const [activelink,setActivelink] = useState(location.pathname);

    useEffect(() => {
      // Update active link whenever the location changes
      const handleLocationChange = () => setActivelink(location.pathname);
      handleLocationChange(); // Call it initially for current path
  
      return () => {};
    }, [location]);
  
  
  
    const handleLinkClick = (path) => {
      setActivelink(path); // Set active link immediately on click
      closeMenu(); // Close menu when link is clicked
    };
  
  return (
    <ul className={ulClassName}>
    {Navbarmenu.map((item) => (
      <li key={item.id} className={liClassName}>
      <Link
        onClick={() => {
          closeMenu(); // Close menu on link click
          handleLinkClick(item.link); // Set active link
        }}
        to={item.link}
        className={`${linkClassName} ${activelink === item.link ? 'text-orange-500 border-b-2 border-orange-500' : 'hover:text-orange-500'} transition-all duration-300 `}
      >
        {t(item.titleKey)}
      </Link>
    </li>
    ))}
  </ul>
  )
}

export default NavMenuItems
