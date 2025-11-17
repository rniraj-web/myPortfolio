import React from 'react'
import aboutMe from '../assets/Nirajprofilepic.jpg'
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
                    {/* <img className='opacity-65 rounded-xl w-3/4 h-full' src={aboutMe} alt="" /> */}
                    <motion.img 
                        initial={{x: -100, opacity: 0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay: 0}}
                        className='rounded-xl opacity-65' width='75%' height= '50%' src={aboutMe} alt='aboutme'/>
                </div>
            </motion.div>
            <motion.div
                 animate={{ rotateX: 90 }}
                 whileInView={{rotateX: 0}}
                 transition={{
                    type: "spring",
                    visualDuration: 1,
                    bounce: 0.4}}
                className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="flex justify-center items-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6' style={{opacity: '0.7'}}>{ABOUT_TEXT}</p>
                    </div>
            </motion.div>
        </div>
        
    </div>
  )
}

export default About