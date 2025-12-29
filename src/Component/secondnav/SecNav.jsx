import React from 'react'
import { useState } from 'react'

const SecNav = () => {
  const [open,setOpen]=useState(false);

  return (
    <div className='relative min-h-10  flex gap-4 items-center bg-black text-white '>
      <div className='relative flex gap-1 items-center text-[13px] hover:border hover:border-white py-1 px-1' onClick={()=>setOpen(!open)} open={open}>
        <i className='bx bx-menu'></i>
        <h1>All</h1>
      </div>

      <div className='flex items-center text-[13px] leading-tight gap-4'>
        <h1 className='hover:border hover:border-white py-1 px-1'>Fresh</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>MX Player</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Sell</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Bestsellers</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Mobiles</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Today's Deals</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Customer Service</h1>
        <h1 className='flex items-center py-1 px-1'>Prime<i className='bx bx-caret-down '></i></h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>New Releases</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Amazon Pay</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Fashion</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Electronics</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Home & Kitchen</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Books</h1>
        <h1 className='hover:border hover:border-white py-1 px-1'>Computers</h1>
        <h1 className='hover:border hover:border-white px-1 py-1'>Gift Cards</h1>
      </div>
    </div>
  )
}

export default SecNav