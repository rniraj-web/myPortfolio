import React from 'react'
import {HERO_CONTENT} from '../constants/index.js'
import profilePic from '../assets/IMG_9358.jpg'
import { motion } from "motion/react"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { FaFileAlt } from 'react-icons/fa'

const container = (delay)=>({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0, 
        opacity: 1, 
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => { 
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center lg:justify-end">
                {/* justify-end */}
                    <motion.img 
                    initial={{x: -100, opacity: 0}}
                    animate={{x:0, opacity:0.90}}
                    transition={{duration:1, delay: 0}}
                    className='rounded-xl opacity-65' width='75%' height= '50%' src={profilePic} alt="Niraj Rawat" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center">
                {/* lg:items-start */}
                    <motion.p 
                        variants={container(0.5)}
                        initial= "hidden"
                        animate = "visible"
                        className='mt-5 mb-2 lg:my-2 max-w-xl trackfont-lighting-tighter text-center'>Hello, I'm 
                    </motion.p>
                    
                    <motion.h1 
                        variants={container(1)}
                        initial= "hidden"
                        animate = "visible"
                        className='pb-5 text-6xl font-bold tracking-tight text-center'>Niraj Rawat</motion.h1>
                    <motion.span 
                        variants={container(1.25)}
                        initial= "hidden"
                        animate = "visible"
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer.
                    </motion.span> 

                    <motion.div 
                        variants={container(1.55)}
                        initial= "hidden"
                        animate = "visible"
                        className="m-8 flex items-center justify-center gap-4 text-2xl">
                                <a className="relative group text-white" href='https://www.linkedin.com/in/niraj-rawat/' target='_blank' rel="noopener noreferrer"><FaLinkedin/>
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 text-xs bg-purple-500 text-white rounded opacity-0 group-hover:opacity-70 transition">
                                        LinkedIn
                                    </span>
                                </a>
                    
                                <a className="relative group text-white" href='https://github.com/rniraj-web' target='_blank' rel="noopener noreferrer"><FaGithub/>
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 text-xs bg-purple-500 text-white rounded opacity-0 group-hover:opacity-70 transition">
                                        Github
                                    </span>
                                </a>
                                
                                {/* <a href='/Niraj_Rawat.pdf' target='_blank' rel="noopener noreferrer" download className="relative group text-white">
                                    <FaFileAlt className="text-2xl" />
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 text-xs bg-purple-500 text-white rounded opacity-0 group-hover:opacity-70 transition">
                                        Resume
                                    </span>
                                </a> */}
                    </motion.div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero