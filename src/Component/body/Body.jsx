import React, { useState } from 'react'
import assets, { boxes, newBars } from '../../assets'
import { scrolls } from '../../assets'
import {motion} from 'motion/react'
import { useRef } from 'react'

const Body = () => {
  const IMAGE_WIDTH = 160; // w-40 ≈ 160px
const GAP = 16;         // gap-4 ≈ 16px
const STEP = IMAGE_WIDTH + GAP;

const MAX_SCROLL =
  -(scrolls.length * STEP - window.innerWidth + 32);

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);



  const ref=useRef(null);

  const [value,setValue]=useState(0)

  const scrollLeft = () => {
  setValue((p) => clamp(p + STEP, MAX_SCROLL, 0));
};

const scrollRight = () => {
  setValue((p) => clamp(p - STEP, MAX_SCROLL, 0));
};

  return (<>

    <div className='grid grid-cols-3 md:grid-cols-4 ' >
      {boxes.map((section)=>(
        <div key={section.id} className='bg-white py-4 px-2 mx-4 my-3 flex flex-col justify-around'>
          <h2 className='text-lg font-semibold text-neutral-800'>{section.section}</h2>

          <ul className='grid grid-cols-2 gap-2'>
            {section.items.map((item)=>(
              <div key={item.id} className=''>
                <img src={item.image} className='w-35 '></img>
                <p className='text-[12px] text-neutral-600'>{item.text}</p>
              </div>
            ))}
          </ul>

          <p className='text-[12px] text-blue-700'>{section.links}</p>


        </div>
      ))}
    </div>

    <div className='mx-4 bg-neutral-200  h-60 relative overflow-hidden'>

      <div className='flex items-center gap-4'>
        <h2 className='text-lg font-semibold text-neutral-800'>Starting 70,348 | From daily commutes to weekend thrills </h2>
        <h3 className='text-[10px] text-blue-500 hover:text-blue-200 hover:underline'>See all offers</h3>
      </div>

        <button className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded shadow-lg ' onClick={scrollLeft}>
           <i className='bx bx-caret-big-left'></i> 
        </button>

        <div className='overflow-hidden '>
       
          <motion.div
          ref={ref}
          animate={{x:value}}
          transition={{type:"spring",stiffness:100
          }}
          drag="x"
          dragConstraints={{left: 0, right:600}}
          className="flex ">

            {scrolls.map((scroll)=>(
      
             <img key={scroll.id} src={scroll.image} className='w-50 flex-shrink-0 '></img>
          
            ))}
          </motion.div>

        </div>

        <button className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-md ' onClick={scrollRight}>
          <i className='bx  bx-caret-big-right'></i> 
        </button>
      


    </div>

    <div className=' '>
      <div className='flex gap-10 items-center justify-center px-3'>

        {newBars.map((bar)=>(

          <div key={bar.id}
          className='flex flex-col items-center w-72 p-4 border rounded-lg'>

            <h1 className='text-md font-semibold mb-2 '>{bar.title}</h1>

            <ul className='flex gap-4 w-70 h-60 overflow-x-auto overflow-y-hidden'>
              {bar.items.map(((item)=>(
                <li key={item.id} className='min-w-[160px] flex justify-ceter'>
                <img src={item.image} className=' w-60 h-50 ml-10 '></img>
                </li>
              )))}
            </ul>

            <h2 className='line-clamp-3 my-2 text-sm text-neutral-700'>{bar.text}</h2>
            <div className='flex items-center gap-4'>
            <h2 className='text-sm font-bold'>{bar.rate}</h2>
            <span className='text-[10px] line-through text-neutral-500'>{bar.prevrate}</span>
            </div>
          </div>
        ))}

      </div>
    </div>

    </>
  )
}

export default Body