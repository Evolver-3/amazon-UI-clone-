import React, { useState } from 'react'
import { boxes } from '../../assets'
import { scrolls } from '../../assets'
import {motion} from 'motion/react'
import { useRef } from 'react'

const Body = () => {

  const ref=useRef(null);

  const [value,setValue]=useState(0)

  const scrollLeft=()=>{
    setValue((p)=>p+300)
  }

  const scrollRight=()=>{
    setValue((p)=>p-300)
  }
  return (<>

    <div className='grid grid-cols-3 md:grid-cols-4 '>
      {boxes.map((section)=>(
        <div key={section.id} className='bg-white py-4 px-2 mx-4 my-3 flex flex-col justify-around'>
          <h2 className='text-lg font-semibold text-neutral-800'>{section.section}</h2>

          <ul className='grid grid-cols-2 gap-2'>
            {section.items.map((item)=>(
              <div key={item} className=''>
                <img src={item.image} className='w-35 '></img>
                <p className='text-[12px] text-neutral-600'>{item.text}</p>
              </div>
            ))}
          </ul>

          <p className='text-[12px] text-blue-700'>{section.links}</p>


        </div>
      ))}
    </div>

    <div className='mx-4 bg-gray-400 w-full h-60 relative overflow-hidden'>

      <div className='flex items-center gap-4'>
        <h2 className='text-lg font-semibold text-neutral-800'>Starting 70,348 | From daily commutes to weekend thrills </h2>
        <h3 className='text-[10px] text-blue-500 hover:text-blue-200 hover:underline'>See all offers</h3>
      </div>

        <button className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded shadow-lg ' onClick={scrollLeft}>
           <i className='bx bx-caret-big-left'></i> 
        </button>

        <div className='overflow-x-scroll '>
       
          <motion.div
          ref={ref}
          animate={{value}}
          transition={{type:"spring",stiffness:100
          }}
          drag="x"
          dragConstraints={{left: -800, right:0}}
          className="flex gap-4 ">
          

            {scrolls.map((scroll)=>(
              
          
              <img key={scroll.id} src={scroll.image} className='w-40 flex-shrink-0 '></img>
          
              
              
            ))}
          </motion.div>

        </div>

        <button className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-md ' onClick={scrollRight}>
          <i className='bx  bx-caret-big-right'></i> 
        </button>
      


    </div>

    </>
  )
}

export default Body