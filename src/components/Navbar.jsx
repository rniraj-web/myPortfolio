import React from 'react'
import logo from '../assets/nirajrawatlogo1.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa'
import { FaFileAlt } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='#'><img className='mix-blend-lighten mx-2 w-7' src={logo} alt="myLogo" /></a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href='https://www.linkedin.com/in/niraj-rawat/' target='_'><FaLinkedin/></a>
            <a href='https://github.com/rniraj-web' target='_'><FaGithub/></a>
            <HashLink to='#contact'><FaPhone/></HashLink>
            <a 
                href='/resume.pdf' 
                download 
                className="relative group text-white"
            >
                <FaFileAlt className="text-2xl" />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 text-xs bg-purple-500 text-white rounded opacity-0 group-hover:opacity-70 transition">
                    Resume
                </span>
            </a>
        </div>
    </nav>
  )
}

export default Navbar