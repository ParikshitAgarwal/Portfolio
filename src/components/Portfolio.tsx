"use client"
import React from 'react'
import { motion } from 'framer-motion'
import project3 from "../assets/proj3.png"
import project2 from "../assets/proj2.png"
import project1 from "../assets/proj1.png"
import Image from 'next/image';


const projects = [

    {
        title: "ResumeCraftr",
        desc: "A platform that allows users to create and customize professional resumes from multiple templates with seamless PDF generation",
        devStack: "React Js, Node Js, Express, Supabase, Taiwlind CSS",
        link: "https://www.resumecraftr.in/", // Add actual link here
        src: project1 // Add actual link here
    },
    {
        title: "Calendly-Zoho Integration",
        desc: "A nodejs service which on creating a booking over calendly stores information over zoho as a lead",
        devStack: "Node.js, Express, REST API, Webhooks",
        src: project2,
        git: 'https://github.com/ParikshitAgarwal/calendly_integration'
    },
    {
        title: "RentalHive",
        desc: "A platform that connects people looking for alike roommates, rooms/flats, or shared housing. It is a fully functional application with login authentication and a user-friendly design.",
        devStack: "ReactJs, Tailwind, Google Firebase, JavaScript, REST API",
        link: "https://rental-hive.vercel.app/", // Add actual link here
        git: "https://github.com/parikshit456/RentalHive", // Add actual link here
        src: project3 // Add actual link here
    },

    // {
    //     title: "Alphabell App",
    //     desc: "An agrofood product app focused on selling agriculture-related products online. Utilized GetX for state management and routing, handling extensive data calls and ensuring smooth navigation. Includes features like product catalog, cart, shipping, and order placement.",
    //     devStack: "Flutter, Dart, GetX, REST API",
    //     link: "Link to live application", // Add actual link here
    //     git: "Link to GitHub repository", // Add actual link here
    //     src: project1 // Add actual link here
    // }
];



const Portfolio = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-20 md:mt-52 ' id='portfolio'>
            <h1 className='text-white text-4xl md:text-6xl max-w-[320px] mx-auto font-semibold my-6 md:my-12 text-center'>
                Selected <span className='text-orange-400'>Projects</span></h1>

            <div className='max-w-[330px] md:max-w-[1250px] mx-auto space-y-8 md:space-y-24 md:mt-40'>
                {
                    projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className={`mt-0 md:mt-12 flex ${index % 2 === 1 ? "flex-col md:flex-row-reverse gap-4 md:gap-12" : "flex-col md:flex-row gap-4 md:gap-12"}`}
                        >
                            <div className='space-y-2 max-w-[550px] mx-2'>
                                <h2 className='text-5xl md:text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                                <h2 className='text-3xl md:text-4xl'>{project.title}</h2>
                                <p className='md:text-lg text-white/70 break-words p-4'>{project.desc}</p>
                                <p className='md:text-xl text-orange-400 font-semibold'>{project.devStack}</p>
                                <div className='w-64 h-[1px] bg-gray-400 my-4'>

                                </div>
                                <div>  {project?.link !== undefined && <a href={project.link} target='_blank' className='mr-6'>Link</a>}
                                    {project?.git !== undefined && <a href={project.git} target='_blank' >Git</a>}</div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image src={project.src} alt={project.title} className='h-[200px] w-[350px] md:h-[350px] md:w-[600px] object-fill border rounded border-gray-700' />
                            </div>

                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio