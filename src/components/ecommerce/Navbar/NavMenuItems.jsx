import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Navbarmenu } from './Navbarmenuitems';
import { Link, useLocation } from 'react-router-dom';

const NavMenuItems = ({ ulClassName, liClassName, linkClassName, closeMenu }) => {
  
    const { t } = useTranslation();
    const location = useLocation();
    const [activelink,setActivelink] = useState(location.pathname);

     // Check if the user is logged in
  const token = localStorage.getItem('token');
  const isLoggedIn = Boolean(token);

  const filteredmenu = Navbarmenu.filter((item)=>{
    if(isLoggedIn && ['navbar.login', 'navbar.register'].includes(item.titleKey)){
      return false;
    }
    if(!isLoggedIn && ['navbar.profile', 'navbar.logout'].includes(item.titleKey)){
      return false;
    }
    return true;
  })


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

    const handleLogout = ()=>{
      localStorage.removeItem("token")
      window.location.href = '/artivastore/login';
    }
  
  return (
    <ul className={ulClassName}>
    {filteredmenu.map((item) => (
     <li key={item.id} className={liClassName}>
     {item.titleKey === 'navbar.logout' ? (
       <button
         onClick={handleLogout}
         className={`${linkClassName}  transition-all duration-300`}
       >
         {t(item.titleKey)}
       </button>
     ) : (
       <Link
         onClick={() => {
           closeMenu(); // Close menu on link click
           handleLinkClick(item.link); // Set active link
         }}
         to={item.link}
         className={`${linkClassName} ${
           activelink === item.link
             ? 'border-b-2 border-white-500'
             : 'hover:text-gray-500'
         } transition-all duration-300`}
       >
         {t(item.titleKey)}
       </Link>
     )}
   </li>
    ))}
  </ul>
  )
}

export default NavMenuItems
