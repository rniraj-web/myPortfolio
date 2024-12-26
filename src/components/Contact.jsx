import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'motion/react'

const Contact = () => {
  return (
    <div id='contact' className='.border-b border-neutral-900 pb-20'>
        <h2 className='my-10 text-center text-4xl text-zinc-500'>Contact Details</h2>
        <div className="text-center tracking-tighter">
            <a href='#' className='border-b'>{CONTACT.email}</a>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
        </div>
    </div>
  )
}

export default Contact