import { AnimatePresence,motion } from 'framer-motion'
import React, {  memo,useEffect, useRef } from 'react'
import Headerbasket from '../../common/HeaderBasket/Headerbasket'
import { useTranslation } from 'react-i18next'
import NavMenuItems from './NavMenuItems';

const Responsivemenu = memo(({openmenu,setOpenmenu,menuButtonRef,closeMenu}) => {

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
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openmenu, setOpenmenu, menuButtonRef]);

  return <>
   <AnimatePresence mode='wait'>
    {
        openmenu && (
            <motion.div   initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-100}} transition={{duration:0.3}} className='absolute top-20 left-0 w-full h-screen z-20'>
            <div ref={menuRef} className='text-xl font-semibold uppercase bg-secondary text-white py-8 m-6 rounded-3xl'>
              <ul className='flex flex-col justify-center items-center gap-6'>
              <NavMenuItems
              ulClassName="flex flex-col justify-center items-center gap-6"
              liClassName=""
              linkClassName="hover:text-gray-300"
              closeMenu={closeMenu}
            />
              </ul>
            </div>
            
            </motion.div>
        )
    }
   </AnimatePresence>
  </>
})

export default Responsivemenu
