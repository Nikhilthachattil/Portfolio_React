// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import './MenuItems.css'
// const variants = {
//     open: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             y: { stiffness: 1000, velocity: -100 }
//         }
//     },
//     closed: {
//         y: 50,
//         opacity: 0,
//         transition: {
//             y: { stiffness: 1000 }
//         }
//     }
// };


// export const MenuItem = () => {
//     return (
//         <div className='link-container'>
//                 <motion.li  variants={variants}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}>
//                 <div>Home</div>
//                 <div>Contact</div>
//                 <div>About</div>
//                 </motion.li>
//         </div>
//     );
// };


// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import './MenuItems.css'
// const variants = {
//     open: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             y: { stiffness: 1000, velocity: -100 }
//         }
//     },
//     closed: {
//         y: 50,
//         opacity: 0,
//         transition: {
//             y: { stiffness: 1000 }
//         }
//     }
// };


// export const MenuItem = ({ i }) => {
//     return (
//         <div className="">
//             <motion.li
//             variants={variants}
//             >
//             <motion.div
                
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 <Link to='/' style={{ textDecoration: 'none'}} className="link-li">Home</Link>
//             </motion.div>
//             <motion.div
                
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 <Link to='/about' style={{ textDecoration: 'none'}} className="link-li">About</Link>
//             </motion.div>
//             <motion.div
                
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 <Link to='/contact' style={{ textDecoration: 'none'}} className="link-li">Contact</Link>
//             </motion.div>
//         </motion.li>
//         </div>
//     );
// };
