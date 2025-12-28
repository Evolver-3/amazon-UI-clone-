import React from 'react'
import { useState } from 'react'
import assets from '../../assets';

const Nav3 = () => {
  const[open,setOpen]=useState(false);
  const [update,setUpdate]=useState();

  return (<>
    <div onMouseEnter={()=>setOpen(!open)} className='flex flex-row'>
      <img src={assets.map} className='w-6'></img>
      <h2 className='text-sm font-semibold text-neutral-300'>EN{update}</h2>
      <i className='bx bx-caret-down text-neutral-400'></i>

    </div>

    {open && (
      <div>

      </div>
    )}
    </>

  )
}

export default Nav3