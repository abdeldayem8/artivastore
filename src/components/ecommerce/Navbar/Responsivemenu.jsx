import { AnimatePresence,motion } from 'framer-motion'
import React, { lazy, memo, Suspense,useEffect, useRef } from 'react'
const Authbuttons = lazy(() => import('./Authbuttons'));
import Headerbasket from '../../common/HeaderBasket/Headerbasket'
import Headerwishlist from '../../common/HeaderWishlist/Headerwishlist'
import { useTranslation } from 'react-i18next'
import Loading from '../../common/Loading/Loading';
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
               {/* Login and Register as links in the mobile menu */}
            <div className="mt-5 flex flex-col items-center">
              <Suspense fallback={<Loading/>}>
              <Authbuttons  additionalClasses="flex-col items-center gap-6" variant="link" closemenu={closeMenu} />
              </Suspense>
            </div>
            <div className='flex justify-center my-2'>
              <Headerbasket/>
              <Headerwishlist/>
            </div>
            </div>
            
            </motion.div>
        )
    }
   </AnimatePresence>
  </>
})

export default Responsivemenu
