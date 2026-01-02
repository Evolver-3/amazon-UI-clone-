import React from 'react'
import { useState } from 'react'
import assets from '../../assets';

const langItems=[{id:1,code:"EN"},{id:2,code:"HI"},{id:3,code:"FR"},{id:4,code:"DE"},{id:5,code:"IT"}]

const Nav3 = () => {
  const[open,setOpen]=useState(false);
  const [update,setUpdate]=useState();

  return (<>
    <div onMouseEnter={()=>setOpen(!open)} className='flex flex-row hover:border hover:border-white py-2 px-2'>
      <img src={assets.map} className='w-6'></img>
      <h2 className='text-[15px] font-bold text-white'>EN{update}</h2>
      <i className='bx bx-caret-down text-neutral-400'></i>

    </div>

    {open && (
      <div className='absolute top-20 right-60 w-40 shadow-lg rounded-md z-50 text-sm bg-white flex flex-col py-2 px-2'>


      </div>
    )}
    </>

  )
}

export default Nav3