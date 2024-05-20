import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
import Skills from '../../Skills/Skills';
import Projects from '../../Projects/Projects'
import { Link } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ticker from '../../Images/tickershadow.png'
// import GraphicDesign from '../../Graphic Design/GraphicDesign';
import './Ticker.scss'
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [modalOpenTwo, setModalOpenTwo] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  // const closeTwo = () => setModalOpenTwo(false);
  // const openTwo = () => setModalOpenTwo(true);


  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgb(255, 254, 179, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgb(255, 254, 179, 1)"
    }
  };

  const projectSectionRef = useRef(null);

  const scrollToProjects = () => {
    const projectSection = document.getElementById('project');
    projectSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='Home'>
      <section >
        <div className='home-container my-5 px-5 py-6'>
          <div className='home-container2 mt-5'>
            <div>
              <h2 className='home-title2 text-yellow-500'>Nikhil Babu Thachattil</h2>
            </div>
          </div>
          <motion.h1
            className='home-title mt-5'
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 6, ease: "easeInOut" },
              fill: { duration: 6, ease: [1, 0, 0.8, 1] }
            }}
          >
            UI Developer
          </motion.h1>
          <div className='home-container3'>
            <div className='home-section'>
              <motion.div
                className='parent1'
                whileHover={{
                  scale: 1.1,
                }}
                onClick={() => (modalOpen ? close() : open())}
              >
                Skills
              </motion.div>
              <div className='child'></div>
              <motion.div
                className='parent2'
                whileHover={{
                  scale: 1.1,
                }}
                onClick={scrollToProjects}
              >
                <Link > Projects</Link>
              </motion.div>
              {/* <motion.div
                className='parent3'
                whileHover={{
                  scale: 1.1,
                }}
                onClick={() => (modalOpenTwo ? closeTwo() : openTwo())}
              >
                Graphic Designs
              </motion.div> */}
            </div>
          </div>
          <div className='flex justify-center mt-5' >
            <motion.div whileHover={{ scale: 1.1 }}><img src="https://i.ibb.co/7kdPJN8/character.jpg" className='w-[20rem] flex justify-center rounded-full' alt='character' whileHover={{
              scale: 1.1,
            }} /></motion.div>
          </div>
          <div className='ticker-wrap'>
            <div className='ticker'>
              <img src={ticker} className='item' alt='ticker' />
            </div>
          </div>
        </div>
        {/* Projects */}
        <section id="project" ref={projectSectionRef}>
          <Projects />
        </section>
        {/* About */}
        <section id="about" ref={projectSectionRef}>
          <About />
        </section>
        {/* Contact */}
        <section id="about" ref={projectSectionRef}>
          <Contact />
        </section>
        {/* Footer */}
        <section id="about" ref={projectSectionRef}>
          <Footer />
        </section>
      </section>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpen && <Skills modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
      {/* <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpenTwo && <GraphicDesign modalOpenTwo={modalOpenTwo} handleCloseTwo={closeTwo} />}
      </AnimatePresence> */}
    </div>
  );
};

export default Home;
