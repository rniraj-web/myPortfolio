import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'motion/react'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
            initial={{opacity:0, y:-100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 1}}
            className='my-20 text-center text-4xl text-zinc-500'>Experience</motion.h2>
        <div>
            {
                EXPERIENCES.map((ex, i)=>(
                    <div key={i} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div 
                            initial={{opacity:0, x:-100}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:1}}
                            className="w-full lg:w-1/4">
                            <p className='mb-2 text-sm text-neutral-400'>{ex.year}</p>
                        </motion.div>
                        <motion.div 
                            initial={{opacity:0, x:100}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:1}}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className='mb-2 font-semibold'>{ex.role} -{" "}<span className='text-sm text-purple-100'>{ex.company}</span></h6>
                            <p className='mb-4 text-neutal-400'>{ex.description}</p>
                            <div className='flex flex-wrap gap-2 mt-2'>
                                {ex.technologies.map((tech,i)=>(
                                    <span key={i} className='mt -4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>{tech}</span>   
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Experience