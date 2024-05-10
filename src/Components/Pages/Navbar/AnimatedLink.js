import React from "react";
import { motion } from "framer-motion";

const linkVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const AnimatedLink = ({ title }) => {
  return (
    <motion.a
      variants={linkVariants}
      whileHover="hover"
      className="text-black font-medium"
      href="#"
    >
      {title}
    </motion.a>
  );
};

export default AnimatedLink;
