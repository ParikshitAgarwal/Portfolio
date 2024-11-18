import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 md: text-white/70 py-8 max-w-[350px] md:max-w-[1000px] container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Parikshit Agarwal</h1>    
        <div className='flex space-x-6 md:mt-4'>
            <a href="#" className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>
            <a href="#" className='hover:text-gray-300'>
                <FaTwitter size={24} />
            </a>
            <a href="#" className='hover:text-gray-300'>
                <FaInstagram size={24} />
            </a>
        </div>
    </div>
  )
}

export default Footer