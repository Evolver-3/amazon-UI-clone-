import React,{useState,useEffect} from 'react'
import assets from '../../assets';
import { motion } from 'motion/react';

const BackImage = () => {

  const backImages=[assets.backimage1,assets.backimage2,assets.backimage3,assets.backimage4];

  const [index,setIndex]=useState(0)

   useEffect(()=>{
      const timer=setInterval(()=>{
        setIndex((p)=>(p+1) % backImages.length)
      },4000)
  
      return ()=>clearInterval(timer)
    },[])

  return (
    <motion.div animate={{backgroundImage:`url(${backImages[index]})`}}
    transition={{duration:1}}
    className='absolute -z-10 min-w-[1524px] max-h-100vh h-screen bg-cover bg-no-repeat bg-center py-60'>

      <button className='fixed '>
        <i className='bx bx-caret-big-left'></i> 
      </button>
      
      <button>
        <i class='bx bx-caret-big-right'></i> 
      </button>

    </motion.div>
  )
}

export default BackImage