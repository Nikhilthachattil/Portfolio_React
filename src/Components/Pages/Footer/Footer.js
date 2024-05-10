import React from 'react'
import { FaCopyright} from 'react-icons/fa'
import { motion} from 'framer-motion';

const icons = [
    { icon: <FaCopyright />, link: 'https://www.facebook.com' },
];

function Footer() {
  return (
    <div className='justify-center text-center align-middle'>
    <section className='flex justify-center shadow-2xl px-5 bg-black'>
    {icons.map((item, index) => (
                <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.4 }}
                    className='flex px-3 text-sm text-gray-400 py-5 '
                >
                    {item.icon}ThreeOneFour
                </motion.a>
            ))}
    </section>
</div>
  )
}

export default Footer

