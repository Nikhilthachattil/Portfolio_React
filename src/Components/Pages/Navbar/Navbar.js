import { React, useState } from "react";
import './navbar.css'
import logo from '../../Images/logo314.png'
import { Link } from 'react-router-dom'

import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleNavLinkClick = () => {
    setOpen(false); 
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:py-4 px-2">
        <div className="flex items-center gap-[1ch]"> 
       <img src={logo} className="w-[20rem] px-2" alt="logo"/>
        </div>
        <div
          className="cursor-pointer text-[2rem] px-2 pt-3 text-black"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars}/>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-10 left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-black px-2 py-1"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
              <img src={logo} className="w-[20rem] px-2 py-1" alt="logo2"/>
                <p
                  className="cursor-pointer text-[2rem] px-2 pt-3 text-black"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={faXmark}/>
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                        onClick={handleNavLinkClick}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href, onClick }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
       <Link to={`${href}`} onClick={onClick}>{title}</Link>
    </motion.div>
  );
};