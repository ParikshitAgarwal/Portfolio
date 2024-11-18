import React from 'react'
import book from "../assets/book.png"
import pc from "../assets/pc.png"
import card from "../assets/card.png"
import finance from "../assets/finance.png"
import Image from 'next/image'

const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto mb-28' id='about'>
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>About <span className='text-orange-400'>Me</span></h1>
            <div className='px-6 md:px-0 grid md:grid-cols-8 gap-6 place-items-center'>

                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-col md:flex-row p-6'>
                        <Image src={book} alt='book' className='md:w-auto mx-auto md:mx-0 w-[120px] h-[130px] md:h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                            <p className='md:text-lg text-white/70 mt-2'>I hold a degree in Information and Communication Technology and i am focusing on technologies such as mern stack, next.js and React Native</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-col md:flex-row p-6'>
                        <Image src={pc} alt='pc' className='md:w-auto mx-auto md:mx-0 w-[120px] h-[130px] md:h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Problem Solving</h2>
                            <p className='md:text-lg text-white/70 mt-2'>Efficiently resolve complex challenges with innovative and practical solutions.</p>
                        </div>
                    </div>
                </div>

                

                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-col md:flex-row p-6'>
                        <Image src={finance} alt='finance' className='md:w-auto mx-auto md:mx-0 w-[120px] h-[130px] md:h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
                            <p className='md:text-lg text-white/70 mt-2'>Experienced with MERN Stack, Flutter, and TypeScript for building scalable web and app solutions.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-col md:flex-row p-6'>
                        <Image src={card} alt='card' className='md:w-auto mx-auto md:mx-0 w-[120px] h-[130px] md:h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
                            <p className='md:text-lg text-white/70 mt-2'>I have expertise in both web and app development. I’ve spent 1.5 years refining frontend solutions for a leading fintech company and building robust mobile applications with Flutter for two dynamic startups.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About