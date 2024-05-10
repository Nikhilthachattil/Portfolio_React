import React from 'react'
import './About.css'
import img from '../../Images/profile.jpg'
import { FaBehance, FaFacebook, FaGithub, FaStar, FaTwitter, FaWhatsapp,FaInstagram } from 'react-icons/fa'
import { motion} from 'framer-motion';

const icons = [
    { icon: <FaFacebook />, link: 'https://www.facebook.com/thachattilnikhil/' },
    { icon: <FaTwitter />, link: 'https://twitter.com/NThachattil' },
    { icon: <FaBehance />, link: 'https://www.behance.net/thachattilnikhil' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/08907117188' },
    { icon: <FaGithub />, link: 'https://github.com/Nikhilthachattil'},
    { icon: <FaInstagram />, link: 'https://www.instagram.com/nikhilbabuthachattil/' }
];

function About() {
    return (
        <div className='justify-center text-center align-middle '>
            <h2 className='md:text-[2rem] '>About Me</h2>
            <section className='sm:flex justify-center'>
                <div className='sm:flex justify-center align-middle text-center sm:mx-5 sm:p-10 max-w-5xl'>
                    <div className="sm:grid grid-cols-2 mx-5">
                        <div className="col-span-1 px-5 flex justify-center p-2 border border-dark-400">
                            <img src={img} className='rounded-full w-[20rem]' alt="Profile" />
                        </div>
                        <div className="sm:col-span-1 border border-dark-400 ">
                            <p className='text-justify p-2 align-middle mt-5 sm:first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black dark:first-letter:text-black first-letter:me-3 first-letter:float-start'>
                                Hello! My name is Nikhil Babu Thachattil, I'm a focused and driven UI developer with expertise in customer relation and Design.
                                I have two years of practical experience as a Production design engineer in a signage manufacturing company and 4 years as a
                                Graphic Designer in Creative castle. I firmly believe that each line of code has the power to create something beautiful and
                                meaningful.
                            </p>
                        </div>
                        <div className="col-span-1 sm:flex justify-center border border-dark-400 xs:text-sm">
                            <ul className='text-start sm:p-2 sm:px-3 '>
                                <li className='flex'><span className='text-yellow-400 px-2'><FaStar/></span> Nikhil Babu Thachattil</li>
                                <li className='flex'><span className='text-yellow-400 px-2'><FaStar/></span> B.E Computer Science</li>
                                <li className='flex'><span className='text-yellow-400 px-2'><FaStar/></span> DOB: 11-July-1992</li>
                                <li className='flex'><span className='text-yellow-400 px-2'><FaStar/></span> Place: Thrissur,Kerala</li>
                                <li className='flex'><span className='text-yellow-400 px-2'><FaStar/></span> Country: India</li>
                                <li className='flex'><span className='text-yellow-400 px-2'><FaStar/></span> Phone: +918907117188</li>
                                <li className='flex hidden xs:inline'><span className='text-yellow-400 px-2 '><FaStar/></span> Thachattilnikhil@gmail.com</li>
                            </ul>
                        </div>
                        <div className="xs:flex justify-center align-middle col-span-1 border p-5 border-dark-400 items-center">
                            <p className='flex xs:gap-6 text-2xl cursor-pointer items-center text-center'>
                            {icons.map((item, index) => (
                <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.4 }}
                    className='xs:px-3 px-1 xs:text-3xl md:text-lg xl:text-2xl text-gray-400 py-5 '
                >
                    {item.icon}
                </motion.a>
            ))}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About