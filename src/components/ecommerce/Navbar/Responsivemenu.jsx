import { AnimatePresence,motion } from 'framer-motion'
import React, {  memo,useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import NavMenuItems from './NavMenuItems';


const Responsivemenu = memo(({openmenu,setOpenmenu,menuButtonRef,closeMenu ,languagesComponent}) => {

    const menuRef = useRef(null);
    const {t} = useTranslation();
    
     // Effect to close the menu when clicking outside
     useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(event.target)
        ) {
          setOpenmenu(false);
        }
      };
  
      if (openmenu) {
        document.addEventListener("mousedown", handleClickOutside);
        document.body.classList.add("no-scroll");
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.classList.remove("no-scroll");
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.classList.remove("no-scroll");
      };
  
    }, [openmenu, setOpenmenu, menuButtonRef]);

  return <>
   <AnimatePresence mode='wait'>
    {
        openmenu && (
            <motion.div   initial={{opacity:0,x:-300}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-300}} transition={{duration:0.3}} className='absolute bg-primary text-secondary dark:bg-secondary dark:text-primary top-24 left-0 w-full h-screen z-20'>
            <div ref={menuRef} className='text-xl font-semibold uppercase p-8 h-full w-full'>
              <ul className='flex flex-col justify-center px-4 gap-6'>
              <NavMenuItems
              ulClassName="flex flex-col justify-center  gap-6"
              liClassName=""
              linkClassName="hover:text-gray-300"
              closeMenu={closeMenu}
            />
              </ul>
            <div className="mt-8 absolute" style={{bottom:"25%"}}>{languagesComponent}</div>
            </div>
            </motion.div>
        )
    }
   </AnimatePresence>
  </>
})

export default Responsivemenu
