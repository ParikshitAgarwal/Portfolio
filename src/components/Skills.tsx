import React from 'react'
import { FaCss3Alt, FaDocker, FaHtml5, FaJsSquare, FaNode, FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri';
import { SiMongodb } from "react-icons/si";
const skillIcons = [
  {icon: <FaReact size={110} />, label: "React"},
  {icon: <FaNode size={110} />, label: "Node"},
  {icon: <SiMongodb size={110} />, label: "mongoDB"},
  {icon: <RiNextjsFill size={110} />, label: "Next.Js"},
  {icon: <FaDocker size={110} />, label: "Docker"},
  {icon: <FaHtml5 size={140} />, label: "HTML"},
  {icon: <FaCss3Alt size={140} />, label: "CSS"},
  {icon: <FaJsSquare size={140} />, label: "Javascript"},
 
]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-8 md:py-32'>
      <div className='text-white md:max-w-[1000px] mx-auto p-8 text-center'>
        <h2 className='text-5xl md:text-6xl font-bold mb-4'>What I Do</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
          {skillIcons.map((skill,index)=>(
            <div
            key={index}
            className='h-[140px] w-[140px] md:h-[180px] md:w-[180px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'
            >
              {skill.icon}
              <p className='mt-2'>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills