import React from 'react'
import {motion} from 'motion/react'
import { useState } from 'react'
import { navItems } from '../../assets'

const Nav2 = () => {

  const [hover,setHover]=useState(false);
  const [open,setOpen]=useState(false);

  return (<>
    <motion.div className="h-8 bg-white py-2 rounded-md flex flex-row items-center group " 
    style={hover ? { outline: '3px solid orange' } :{}}>

      <button className='bg-neutral-200 h-8 w-15 rounded-l-md text-md text-neutral-700 hover:bg-neutral-300 hover:text-neutral-600 focus:outline-3 focus:outline-orange-400 flex items-center justify-center relative'>All
        <i className='bx bx-caret-down relative' onClick={()=>setOpen(!open)}></i>
      </button>

      <form className='flex text-center justify-center'>

        <motion.input type='text' placeholder='Search Amazon.in ' className="max-w-220 lg:w-130  px-2 border border-neutral-400 focus:outline-none" onFocus={()=>setHover(true)} onMouseOut={()=>setHover(false)}></motion.input>

        <button className='bg-yellow-400 hover:bg-yellow-500 h-8 w-18 py-1 rounded-r-md '><i className='bx bx-search bx-sm'></i></button>
      </form>

      
    </motion.div>

    {open && (
      <div className="absolute mt-12 bg-white w-48 h-42 shadow-lg  top-3 left-86 z-10 overflow-y-auto">
        {navItems.map((item,index)=>(
          <div key={index} className='text-gray-500 hover:text-white hover:bg-blue-400 w-full px-3'>{item.name}</div>
        ))}
      </div>
    )}
    </>
  )
}

export default Nav2