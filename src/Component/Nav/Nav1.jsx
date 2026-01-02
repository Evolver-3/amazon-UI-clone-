import { useState } from 'react'
import assets from '../../assets/index.js'

const Nav1 = () => {

  const [location,setLocation]=useState("");
  const [pin,setPin]=useState("");
  const[limit,setLimit]=useState(false);

  const handleClick=(e)=>{
    e.preventDefault();
    setPin(e.target[0].value);
    setLocation(false);
    setLimit(true);

  }

  return (
    <>
    <div className='flex flex-row items-center gap-3 h-[100%]]'>

      <div className='relative h-[50%] px-2 hover:border hover:border-white text-center'>
        <a href="#" className='relative'>
          <img src={assets.logo} alt="logo" className='w-25' ></img>
        </a>
        
        <span className='absolute top-[10px] left-24 text-md'>.in</span>
      </div>
        
      <div className='flex items-center px-1 py-1 gap-1 hover:border hover:border-white' onClick={()=>setLocation(!location)}>

        <span><i className='bx bx-location text-white'></i></span>
        
        <div className='leading-tight'>
          <p className='text-[12px]  text-neutral-200'>Delivering to {limit&&pin?pin:"Arundathi"}</p>
          
          <h2 className='text-[15px] font-bold text-white'>Update location</h2>
        </div>

      </div>

    </div>

    {location && (
        <div className='container w-80 h-60 bg-white rounded-xl shadow-lg flex flex-col fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>

          <div className='h-[30%] bg-neutral-200 rounded-t-xl flex justify-between px-5 items-center border-b-1 border-neutral-300'>
            <p className='text-md font-semibold leading-tight text-gray-700'>Choose your location</p>

            <i className='bx bx-x bx-sm border-1 border-neutral-400 px-3 py-3 rounded-xl text-neutral-900 hover:text-neutral-600' onClick={()=>setLocation(false)}></i> 

          </div>

          <div className='px-5 w-full flex flex-col items-center gap-3 justify-center mt-3'>
            <p className='text-[12px] text-neutral-500'>Select a delivery location to see product availability and delivery options</p>

            <button className='w-full bg-yellow-500 rounded-full text-black text-[15px] px-2 py-1'>Sign in to see your addresses</button>

          </div>

          <div className='flex flex-row items-center justify-center w-[100%] gap-2 mt-2'>
            <span className='border-neutral-400 border-1 w-[23%]'></span>
            <span className='text-[12px] text-neutral-500'>or enter an indian pincode</span>
            <span className='border-neutral-400 border-1 w-[20%]'></span>

          </div>

          <form className='mx-5 flex gap-3 mt-2' onSubmit={handleClick} >

            <input type="text" className=' border-1 border-neutral-400 px-2 py-1 rounded-md focus:outline-none'/>

            <button className='outline outline-neutral-400 rounded-full text-[15px] px-3 py-1 focus:outline-blue-400 focus:outline'>Apply</button>
          </form>

        </div>
      )}

      </>
    
  )
}

export default Nav1