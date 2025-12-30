import React from 'react'
import { useState } from 'react'
import SideNav from './SideNav';

const navDatas=[{id:1,title:"Fresh"},{id:2,title:"MX Player"},{id:3,title:"Sell"},{id:4,title:"Bestsellers"},{id:5,title:"Mobiles"},{id:6,title:"Today's Deals"},{id:7,title:"Customer Service"},{id:8,title:"Prime",hasDropDown:true},{id:9,title:"New Releases"},{id:10,title:"Amazon Pay"},{id:11,title:"Fashion"}]


const SecNav = () => {
  const [open,setOpen]=useState(false);

  return (<>
    <div className='relative min-h-10  flex gap-4 items-center bg-black text-white '>
      <div className='relative flex gap-1 items-center text-[13px] hover:border hover:border-white py-1 px-1' onClick={()=>setOpen(!open)} >
        <i className='bx bx-menu'></i>
        <h1>All</h1>
      </div>

      <div className='flex items-center text-[13px] leading-tight gap-4'>
        {navDatas.map((nav,index)=>(
          <h1 key={index} className='hover:border py-2 px-1 '>{nav.title}

          {nav.hasDropDown==true && 
            (<i className='bx bx-caret-down'></i>)
          }
          
          </h1>

          
           
        ))}
        
      </div>
    </div>

    <SideNav open={open} setOpen={setOpen}/>

    </>
  )
}

export default SecNav