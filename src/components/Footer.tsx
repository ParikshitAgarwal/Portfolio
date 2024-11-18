import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 md: text-white/70 py-8 max-w-[350px] md:max-w-[1000px] container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Parikshit Agarwal</h1>    
        <div className='flex space-x-6 md:mt-4'>
            <a href="https://www.linkedin.com/in/parikshit-agarwal-37b533202/" target="_blank" className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>
            {/* <a href="#" target="_blank" className='hover:text-gray-300'>
                <FaTwitter size={24} />
            </a> */}
            <a href="https://github.com/ParikshitAgarwal" target="_blank" className='hover:text-gray-300'>
                <FaGithub size={24} />
            </a>
        </div>
    </div>
  )
}

export default Footer