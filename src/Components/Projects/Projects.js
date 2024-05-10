import React from 'react';
import img1 from '../Images/Getaquote.jpg';
import img2 from '../Images/newpaper.jpg';
import img3 from '../Images/1993burgers.jpg';
import img4 from '../Images/myadventure.jpg';
import img5 from '../Images/iamfoodie.jpg';
import './Project.css'
import { motion } from 'framer-motion';
const Images = [ img2, img3,img1, img4, img5];

const descriptions = [
 
  "NewPaperBoy: News Online",
  "1992 Burger: Burger Delivery",
  "Get a Quote: Cost Management",
  "My Adventure: Tourism",
  "I am Foodie: Restaurant Booking",
];

const Live = [
 
  "https://nikhilthachattil.github.io/newspaperboy/",
  "https://nikhilthachattil.github.io/1992_burger/",
  "https://getaquote-threeonefour.onrender.com",

];

const Git =[
  "https://github.com/Nikhilthachattil",
  "https://github.com/Nikhilthachattil",
  "https://github.com/Nikhilthachattil",
  "https://github.com/Nikhilthachattil",
  "https://github.com/Nikhilthachattil",
]

function Projects() {
  return (
    <section className='justify-center text-center align-middle' >
    <h2 className='text-[2rem] '>Projects</h2>
     <div className=' sm:flex   px-5 py-5'>
     {Images.map((image, index) => (
        <motion.div whileHover={{
                  scale: 1.1,
                }} key={index} className="project-container max-w-sm rounded overflow-hidden shadow-lg px-2 mb-4 mx-1 cursor-pointer">
          <img className="object-fill p-2 rounded-lg shadow-lg" src={image} alt={`Project ${index + 1}`} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-black text-base text-center">
            {descriptions[index]}</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-center ">
            <a href={Git[index]} target="_blank" rel="noopener noreferrer" className="inline-block bg-black rounded-full px-3 py-1 xs:text-xs text-xs font-semibold text-white mr-2 mb-2">code</a>
            <a href={Live[index]} target="_blank" rel="noopener noreferrer" className="inline-block bg-black rounded-full px-3 py-1 xs:text-xs text-xs font-semibold text-white mr-2 mb-2">Live Demo</a>
          </div>
        </motion.div>
      ))}
      
     </div>
    </section>
  );
}

export default Projects;
