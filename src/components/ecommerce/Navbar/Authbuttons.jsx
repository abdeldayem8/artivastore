import React from 'react'

const Authbuttons = ({ additionalClasses = '', variant = 'button' }) => {

    const isLinkStyle = variant === 'link';

  return (
    <div className={`flex gap-4 ${additionalClasses}`}>
    <button
        className={`${
          isLinkStyle
            ? 'text-white hover:text-gray-300 uppercase'
            : 'hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200'
        }`}
      >
        Login
      </button>
      <button
        className={`${
          isLinkStyle
            ? 'text-white hover:text-gray-300 uppercase'
            : 'hover:bg-white text-white bg-primary font-semibold hover:text-primary rounded-md border-2 border-primary px-6 py-2 duration-200'
        }`}
      >
        Register
      </button>
  </div>
  )
}

export default Authbuttons
