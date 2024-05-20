import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './BackdropG'
import './GraphicDesign.css'
import { FaTimesCircle } from 'react-icons/fa';

export const items = [
    { imgSrc: "https://i.ibb.co/yfzwdY0/bb-perfume-package.jpg", category: "GraphicDesign", label: "Designs" },
    { imgSrc: "https://i.ibb.co/yfzwdY0/bb-perfume-package.jpg", category: "illustration", label: "Designs" },

];

const GraphicDesign = ({ handleCloseTwo }) => {

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
        <Backdrop onClick={handleCloseTwo}>
            <motion.div
                onCanPlay={(e) => e.stopPropagation()}
                className='modalTwo'
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropIn}
            >
                <div className='modal-containerTwo'>
                    <div className='modal-rowTwo'>
                        {/* <div className='modal-category'><FaCheckCircle/>Frontend:</div> */}
                        {items.filter(skill => skill.category === "GraphicDesign").map((item, index) => (
                            <div key={index} className='modal-containerTwo'>
                                <div className='modal-divTwo'>
                                    <div className='flex '>
                                        <img src={item.imgSrc} className='rounded' alt={item.label} />
                                    </div>
                                    <div className='modal-labelTwo'>{item.label}</div>
                                </div>
                            </div>
                        ))}
                        {items.filter(skill => skill.category === "illustration").map((item, index) => (
                            <div key={index} className='modal-containerTwo'>
                                <div className='modal-divTwo'>
                                    <div className='flex '>
                                        <img src={item.imgSrc} className='rounded' alt={item.label} />
                                    </div>
                                    <div className='modal-labelTwo'>{item.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                    }}
                >  <div onClick={handleCloseTwo} ><FaTimesCircle className='button' /></div>
                </motion.div>
            </motion.div>
        </Backdrop>
    );
}

export default GraphicDesign;
