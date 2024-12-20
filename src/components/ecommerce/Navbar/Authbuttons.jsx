import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Authbuttons = ({ additionalClasses = '', variant = 'button' ,closemenu}) => {
  
    const {t} = useTranslation();
    const isLinkStyle = variant === 'link';
  

  return (
    <div className={`flex gap-4 ${additionalClasses}`}>
    <button
        aria-label={t('login')}
        className={`${
          isLinkStyle
            ? 'uppercase'
            : 'font-semibold rounded-md text-secondary pl-4 py-2 duration-200'
        }`} 
      >
        <Link onClick={closemenu} to={'/artivastore/login'}>
        {t('login')}
        </Link>
      </button>
      <button
        aria-label={t('register')}
        className={`${
          isLinkStyle
            ? 'uppercase'
            : ' font-semibold  rounded-md text-secondary  py-2 duration-200'
        }`}
      >
        <Link onClick={closemenu} to={'/artivastore/register'}>
        {t('register')}        
        </Link>
      </button>
  </div>
  )
}

export default Authbuttons
