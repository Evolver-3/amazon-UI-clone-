import React from 'react'
import {motion} from 'motion/react'
import { useState } from 'react'

const Nav2 = () => {

  const [hover,setHover]=useState(false);

  return (
    <motion.div className="h-10 bg-white py-2 rounded-md flex flex-row items-center group" 
    style={hover ? { outline: '3px solid orange' } :{}}>

      <button className='bg-neutral-200 h-10 w-15 rounded-l-md text-md text-neutral-700 hover:bg-neutral-300 hover:text-neutral-600 focus:outline-3 focus:outline-orange-400'>All
        <i className='bx bx-arrowi'></i>
      </button>

      <form className='flex text-center justify-center'>

        <motion.input type='text' placeholder='Search Amazon.in ' className="min-w-40 md:w-100 lg:w-240 h-10 px-2 border border-neutral-400 focus:outline-none" onFocus={()=>setHover(true)} onMouseOut={()=>setHover(false)}></motion.input>

        <button className='bg-yellow-400 hover:bg-yellow-500 h-10 w-18 py-2 rounded-r-md '><i className='bx bx-search bx-sm'></i></button>
      </form>

      
      

    </motion.div>
  )
}

export default Nav2