import Navbar from "./Component/Nav/Navbar"
import SecNav from "./Component/secondnav/SecNav"
import { motion } from "motion/react"
import assets from "./assets"
import { useEffect, useState } from "react";
import Body from "./Component/body/Body";

function App() {

  const backImages=[assets.backimage1,assets.backimage2,assets.backimage3,assets.backimage4];

  const [index,setIndex]=useState(0)

  useEffect(()=>{
    const timer=setInterval(()=>{
      setIndex((p)=>(p+1) % backImages.length)
    },4000)

    return ()=>clearInterval(timer)
  },[])

  return (

    <div className="">
      <Navbar/>
      <SecNav/>
    <motion.div
    animate={{backgroundImage:`url(${backImages[index]})`}}
    transition={{duration:1}}
    className='min-w-[1324px] max-h-100vh h-screen bg-cover bg-no-repeat bg-center py-60'>
        <Body/>
  
    </motion.div>
      
    </div>
  )
}

export default App
