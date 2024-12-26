import React from 'react'
import aboutMe from '../assets/aboutme.jpg'
import {ABOUT_TEXT} from '../constants/index.js'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
            initial={{opacity: 0, y: -100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            className='my-20 text-center text-4xl text-zinc-500	'>About
            <span className='text-neutral-300'> Me</span>
        </motion.h2>
        <div className="flex flex-wrap">
            <motion.div
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className='opacity-65 rounded-xl w-3/4 h-full' src={aboutMe} alt="" />
                </div>
            </motion.div>
            <motion.div
                initial={{opacity:0, x:100}}
                whileInView = {{opacity: 1, x:0}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
            </motion.div>
        </div>
        
    </div>
  )
}

export default About