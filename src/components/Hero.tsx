"use client"

import cursor from '../assets/icon1.png'
import lightning from '../assets/icon2.png'
import profilepic from '../assets/profilepic.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>

            <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[450px] md:top-[425px] left-[50%] -translate-x-1/2
             bg-[radial-gradient(closest-side,#000_80%,#2b1942)]'></div>
            <div className='relative'>
                <div className='text-4xl md:text-5xl font-bold text-center'>
                    <h1 className='text-[#98B4CE]'>Hi, I am</h1>
                    <h1 className='text-[#E48A57]'>Parikshit Agarwal</h1>
                </div>
                <motion.div
                    className='hidden md:block absolute left-[150px] top-[170px]'
                    drag
                >
                    <Image
                        src={cursor}
                        height="190"
                        width="190"
                        alt='cursor'
                        className=''
                        draggable="false" />
                </motion.div>
                <motion.div
                    className='hidden md:block absolute right-[220px] top-[20px]'
                    drag
                >
                    <Image
                        src={lightning}
                        height="120"
                        width="120"
                        alt='cursor'
                        className=''
                        draggable="false" />
                </motion.div>
                <p className='text-center text-xl md:text-2xl max-w-[320px] md:max-w-3xl mx-auto mt-4 md:mt-8 text-white/80'>
                    I am a full-stack developer focused on creating websites and app that provide the best experience for users
                </p>
                <Image src={profilepic} alt='profile pic' className='h-[365px] w-auto mx-auto' />
            </div>

        </div>
    )
}

export default Hero
