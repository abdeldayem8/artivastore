import React from 'react'
import { motion } from 'framer-motion';
const OptionsBtn = ({onClick,children}) => {
  return (
    <motion.button
                  className="w-full mb-2 bg-transparent border border-primary dark:border-secondary  font-semibold py-2 sm:px-6 rounded transition-colors hover:bg-primary hover:text-secondary  dark:hover:bg-secondary dark:hover:text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClick}
                >
                  {children}
                </motion.button>
  )
}

export default OptionsBtn
