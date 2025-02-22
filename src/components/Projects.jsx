import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'motion/react'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
            initial={{opacity:0, y:-100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 1}}
            className='my-20 text-center text-4xl text-zinc-500'>Projects</motion.h2>
        <div>
            {
                PROJECTS.map((proj, i)=>(
                    <div key={i} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div 
                            initial={{opacity:0, x:-100}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:1}}
                            className="w-full lg:w-1/4">
                            <img src={proj.image} alt={proj.title} width={200} height={300} className='mb-6 rounded'/>
                        </motion.div>

                        <motion.div 
                            initial={{opacity:0, x:100}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:1}}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className='mb-2 font-semibold'>{proj.title}</h6>
                            <p className='mb-4 text-neutral-400'>{proj.description}</p>
                            {proj.technologies.map((tech, i)=>(
                                <span key={i} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects