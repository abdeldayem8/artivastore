import { AnimatePresence,motion } from 'framer-motion'
import {Navbarmenu} from './Navbarmenuitems'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Authbuttons from './Authbuttons'

const Responsivemenu = ({openmenu,setOpenmenu}) => {

    const menuRef = useRef();
     // Effect to close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenmenu(false);
      }
    };
       // Add event listener for clicks
       document.addEventListener('mousedown', handleClickOutside);
       return () => {
         // Clean up the event listener on component unmount
         document.removeEventListener('mousedown', handleClickOutside);
       };
     }, [setOpenmenu]);

  return <>
   <AnimatePresence mode='wait'>
    {
        openmenu && (
            <motion.div   initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-100}} transition={{duration:0.3}} className='absolute top-20 left-0 w-full h-screen z-20'>
            <div ref={menuRef} className='text-xl font-semibold uppercase bg-primary text-white py-8 m-6 rounded-3xl'>
              <ul className='flex flex-col justify-center items-center gap-6'>
              {Navbarmenu.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} className="hover:text-gray-300">
                    {item.title}
                  </Link>
                </li>
              ))}
              </ul>
               {/* Login and Register as links in the mobile menu */}
            <div className="mt-8 flex flex-col items-center gap-4">
              <Authbuttons additionalClasses="flex-col items-center gap-6" variant="link" />
            </div>
            </div>
            </motion.div>
        )
    }
   </AnimatePresence>
  </>
}

export default Responsivemenu
