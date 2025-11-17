import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiNodejsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { DiJsBadge } from 'react-icons/di'
import { SiDocker } from "react-icons/si";
import { SiGithub } from "react-icons/si";

import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { motion } from 'motion/react'
import { animate } from 'motion'

const duration = 2;
const icon_count = 8; //you can change the count based on the number of icons

const iconVariants = (i)=>({

    initial: {y: i % 2 ? 10 : -10},
    animate: {
        y: i % 2 ? [-10, 10] : [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: "reverse",
            delay: (i * duration) / icon_count
        }
    }
})

const Technologies = () => {
  return (
    <div id='tech' className='border-b border-neutral-900 pb-24'>
        <motion.h2 
            initial={{opacity: 0, y: -100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className='my-20 text-center text-4xl text-zinc-500'>Technolgies</motion.h2>
        <motion.div 
            whileInView={{opacity:1, x: 0}}
            initial= {{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap justify-center items-center gap-5">
            
            <motion.div 
                variants={iconVariants(0)} 
                initial = "initial" 
                animate = "animate"
                className="rounded-2xl border-0 border-neutral-800 p-4">
                <DiJsBadge className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div 
                variants={iconVariants(1)} 
                initial = "initial" 
                animate = "animate"
                className="rounded-2xl border-0 border-neutral-800 p-4">
                <SiTypescript className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial = "initial"
                animate = "animate"
                className="rounded-2xl border-0 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial = "initial"
                animate = "animate"
                className="rounded-2xl border-0 border-neutral-800 p-4">
                <RiNextjsLine className='text-7xl text-black-400'/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)} 
                initial = "initial" 
                animate = "animate"
                className="rounded-2xl border-0 border-neutral-800 p-4">
                <RiNodejsLine className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)} 
                initial = "initial" 
                animate = "animate"
                className="rounded-2xl border-0 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-700'/>
            </motion.div>
            <motion.div 
                variants={iconVariants(6)} 
                initial = "initial" 
                animate = "animate"
                className="rounded-2xl border-0 border-neutral-800 p-4">
                <SiGithub className='text-7xl text-black-600'/>
            </motion.div>
            <motion.div 
                variants={iconVariants(7)} 
                initial = "initial" 
                animate = "animate"
                className="rounded-2xl border-0 border-neutral-800 p-4">
                <SiDocker className='text-7xl text-blue-600'/>
            </motion.div>
            {/* <motion.div 
                variants={iconVariants(6)} 
                initial = "initial" 
                animate = "animate"
                className="rounded-2xl border-0 border-neutral-800 p-4">
                <DiHtml5 className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)} 
                initial = "initial" 
                animate = "animate"
                className="rounded-2xl border-0 border-neutral-800 p-4">
                <DiCss3 className='text-7xl text-blue-500'/>
            </motion.div> */}
            
        </motion.div>
    </div>
  )
}

export default Technologies