import React from 'react'
import { FaBehance, FaFacebook, FaGithub, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion';


const icons = [
    { icon: <FaFacebook />, link: 'https://www.facebook.com/thachattilnikhil/' },
    { icon: <FaTwitter />, link: 'https://twitter.com/NThachattil' },
    { icon: <FaBehance />, link: 'https://www.behance.net/thachattilnikhil' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/08907117188' },
    { icon: <FaGithub />, link: 'https://github.com/Nikhilthachattil' },
    { icon: <FaPhoneAlt />, link: 'tel:+918907117188' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/nikhilbabuthachattil/' }
];

function Contact() {
    return (
        <div className='justify-center text-center items-center pt-5'>
            <section className='sm:flex justify-center items-center shadow-2xl px-5 bg-black'>
                <h2 className='xs:text-2xl text-gray-400 '>Contact :</h2>
                <div className='text-gray-400 md:py-5 md:text-right mx-5'>
                    Thachattil House <br />
                    P.O Poothole <br />
                    Thrissur, Kerala,<br />
                    India, 680004
                </div>
                <div className='flex justify-center'>
                    {icons.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.4 }}
                            className='lg:px-3 px-2 md:text-3xl text-gray-400 py-5 '
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Contact