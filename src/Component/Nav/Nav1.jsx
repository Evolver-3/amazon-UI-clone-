import { useState } from 'react'
import assets from '../../assets/index.js'

const Nav1 = () => {

  const [location,setLocation]=useState("")

  return (
    <>
    <div className='flex flex-row items-center gap-3 '>

      <div className='relative px-2 hover:border hover:border-white text-center'>
        <a href="#" className='relative'>
          <img src={assets.logo} alt="logo" className='w-30 h-15 ' ></img>
        </a>
        
        <span className='absolute top-[20px] left-28 text-md'>.in</span>
      </div>
        
      <div className='flex items-center py-3 gap-3 hover:border hover:border-white' onClick={()=>setLocation(!location)}>
        <span><i className='bx bx-location text-white'></i></span>
        
        <div>
          <p className='text-sm  text-neutral-200'>Delivering to </p>
          
          <h2 className='text-sm font-semibold text-neutral-300'>Update location</h2>
        </div>

      </div>

      

    </div>

    {location && (
        <div className='container w-80 h-50 bg-white rounded-xl shadow-lg flex flex-col fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>

          <div className='h-[30%] bg-neutral-200 rounded-t-xl flex justify-between px-3 items-center border-b-1 border-neutral-300'>
            <p className='text-md font-semibold leading-tight'>Choose your location</p>

            <i className='bx bx-x bx-sm border-1 border-neutral-400 px-3 py-3 rounded-xl text-neutral-900 hover:text-neutral-600' onClick={()=>location(false)}></i> 

          </div>

          <div className=''>
            <p className='text-[15px]'>Select a delivery location to see product availability and delivery options</p>

            <button className='bg-yellow-500 w-full rounded-full mx-5 text-black text-md'>Sign in to see your addresses</button>

        
          </div>


        </div>
      )}

      </>
    
  )
}

export default Nav1