import { motion } from 'framer-motion'
import React from 'react'
import './BackdropG.css'

const BackdropG = ({ children, onClick }) => {
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

export default BackdropG
