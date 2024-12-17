import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Authbuttons = ({ additionalClasses = '', variant = 'button' }) => {
  
    const {t} = useTranslation();
    const isLinkStyle = variant === 'link';
  

  return (
    <div className={`flex gap-4 ${additionalClasses}`}>
    <button
        aria-label={t('login')}
        className={`${
          isLinkStyle
            ? 'text-white hover:text-gray-300 uppercase'
            : 'hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200'
        }`}
      >
        <Link to={'/artivastore/login'}>
        {t('login')}
        </Link>
      </button>
      <button
        aria-label={t('register')}
        className={`${
          isLinkStyle
            ? 'text-white hover:text-gray-300 uppercase'
            : 'hover:bg-white text-white bg-primary font-semibold hover:text-primary rounded-md border-2 border-primary px-6 py-2 duration-200'
        }`}
      >
        <Link to={'/artivastore/register'}>
        {t('register')}        
        </Link>
      </button>
  </div>
  )
}

export default Authbuttons
