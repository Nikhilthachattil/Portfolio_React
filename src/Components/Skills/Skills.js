import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import './Skills.css'
import { FaBootstrap, FaCheckCircle, FaCss3, FaGit, FaHtml5, FaNodeJs, FaReact, FaStar, FaTimesCircle } from 'react-icons/fa'

export const item = [
  { icon: <FaCheckCircle />, label: "Frontend :", category: "Frontend" },
  { icon: <FaReact />, label: "React JS", category: "Frontend" },
  { icon: <FaHtml5 />, label: "HTML5", category: "Frontend" },
  { icon: <FaCss3 />, label: "CSS3", category: "Frontend" },
  { icon: <FaBootstrap />, label: "Bootstrap", category: "Frontend" },
  { icon: <FaGit />, label: "Git", category: "Frontend" },
  { icon: <FaStar />, label: "Tailwind CSS", category: "Frontend" },
  { icon: <FaCheckCircle />, label: "Backend :", category: "Backend" },
  { icon: <FaNodeJs />, label: "Node.js", category: "Backend" },
  { icon: <FaStar />, label: "Express", category: "Backend" },
  { icon: <FaStar />, label: "MongoDB", category: "Backend" },
  { icon: <FaCheckCircle />, label: "Design Tools :", category: "Design Tools" },
  { icon: <FaStar />, label: "Adobe Photoshop", category: "Design Tools" },
  { icon: <FaStar />, label: "Adobe Illustrator", category: "Design Tools" },
  { icon: <FaStar />, label: "Adobe Lightroom", category: "Design Tools" },
];

const Skills = ({ handleClose }) => {
   
    const dropIn = {
        hidden: {
          y: "-100vh",
          opacity: 0
        },
        visible: {
          y: "0",
          opacity: 1,
          transition: {
            duration: 0.2,
            type: "spring",
            damping: 50,
            stiffness: 500
          }
        },
        exit: {
          y: "100vh",
          opacity: 0
        }
    };
    
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onCanPlay={(e) => e.stopPropagation()}
                className='modal'
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropIn}
            >
                <div className='modal-container'>
                    <div className='modal-row'>
                        {/* <div className='modal-category'><FaCheckCircle/>Frontend:</div> */}
                        {item.filter(skill => skill.category === "Frontend").map((item, index) => (
                            <div key={index} className='modal-container'>
                                <div className='modal-div'>
                                    <div >{item.icon}</div>
                                    <div className='modal-label'>{item.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='modal-row'>
                        {/* <div className='modal-category'>Backend:</div> */}
                        {item.filter(skill => skill.category === "Backend").map((item, index) => (
                            <div key={index} className='modal-container'>
                                <div className='modal-div'>
                                    <div >{item.icon}</div>
                                    <div className='modal-label'>{item.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='modal-row'>
                        {/* <div className='modal-category'>Backend:</div> */}
                        {item.filter(skill => skill.category === "Design Tools").map((item, index) => (
                            <div key={index} className='modal-container'>
                                <div className='modal-div'>
                                    <div >{item.icon}</div>
                                    <div className='modal-label'>{item.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >  <div onClick={handleClose} ><FaTimesCircle className='button'/></div>
                </motion.div>
            </motion.div>
        </Backdrop>
    );
}

export default Skills;
