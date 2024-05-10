import { motion } from 'framer-motion'
import React from 'react'
import './Backdrop.css'

const Backdrop = ({ children, onClick }) => {
  const handleClick = (event) => {
    event.stopPropagation(); 
    onClick && onClick();
  };

  return (
    <motion.div className='backdrop' onClick={handleClick}>
      {children}
    </motion.div>
  )
}

export default Backdrop
