import React from 'react'
import { useTranslation } from 'react-i18next';
import { Navbarmenu } from './Navbarmenuitems';
import { Link } from 'react-router-dom';

const NavMenuItems = ({ ulClassName, liClassName, linkClassName, closeMenu }) => {
    const { t } = useTranslation();
  return (
    <ul className={ulClassName}>
    {Navbarmenu.map((item) => (
      <li key={item.id} className={liClassName}>
        <Link onClick={closeMenu} to={item.link} className={linkClassName}>
          {t(item.titleKey)}
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default NavMenuItems
