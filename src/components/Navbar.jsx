import React from 'react'
import logo from '../assets/nirajrawatlogo1.png'
import { FaTools } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { FaPhone } from 'react-icons/fa'
import { FaFileAlt } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav className='mb-20 lg:mb-15 flex items-center justify-between py-6 lg:py-4'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='#'><img className='mix-blend-lighten mx-2 w-7' src={logo} alt="myLogo" /></a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <HashLink className='relative group text-xl text-zinc-500 hover:text-purple-500 transition' to='#tech'><FaTools/>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 text-xs bg-purple-500 text-white rounded opacity-0 group-hover:opacity-70 transition">Tech</span>
          </HashLink>
          
          <HashLink className='relative group text-xl text-zinc-500 hover:text-purple-500 transition' to='#experience'><FaRocket/>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 text-xs bg-purple-500 text-white rounded opacity-0 group-hover:opacity-70 transition">Experience</span>
          </HashLink>
          
          <HashLink className='relative group text-xl text-zinc-500 hover:text-purple-500 transition' to='#projects'><FaDiagramProject/>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 text-xs bg-purple-500 text-white rounded opacity-0 group-hover:opacity-70 transition">Projects</span>
          </HashLink>
          
          <HashLink className='relative group text-xl text-zinc-500 hover:text-purple-500 transition' to='#contact'><FaPhone/>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 text-xs bg-purple-500 text-white rounded opacity-0 group-hover:opacity-70 transition">Contact</span>
          </HashLink>

        </div>
    </nav>
  )
}

export default Navbar