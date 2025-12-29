import React from 'react'
import { useState } from 'react'



const Nav4 = () => {
  const leftbar=[{id:1,title:"Create a Wish List"},
  {id:2,title:"Wish from Any Website"},
  {id:3,title:"Baby Wishlist"},
  {id:4,title:"Discover Your Style"},
  {id:5,title:"Explore Showroom"}
]

const rightbar=[{id:1,title:"Your Account"},{id:2,title:"Your Orders"},{id:3,title:"Your Wish List"},{id:4,title:"Keep shopping for"},{id:5,title:"Your Recommendation"},{id:6,title:"Your Prime Membership"},{id:7,title:"Your Prime Video"},{id:8,title:"Your Subscribe & Save items"},{id:9, title:"Membershops & Subscriptions"},{id:10,title:"Your Seller Account"},{id:11,title:"Manage Your Content and Devices"},{id:12,title:"Register for a free Business Account"}]

  

  const [open, setOpen]=useState(false);

  return (<>
    <div className='flex gap-3 items-center relative'>

      <div className='flex flex-col text-left hover:border hover:border-white px-1' onClick={()=>setOpen(!open)}>
        <h3 className='text-sm  text-neutral-200'>Hello, sign in</h3>
        <div className='flex'>
          <h2 className='text-sm font-semibold text-neutral-300'>Account & Lists</h2>
          <i className='bx bx-caret-down text-neutral-400'></i>
        </div>


      </div>

      <div className='flex flex-col text-left hover:border hover:border-white px-1'>
        <h3 className='text-sm  text-neutral-200'>Returns</h3>
        <h2 className='text-sm font-semibold text-neutral-300'>& Orders</h2>
      </div>

      <div className='flex hover:border hover:border-white px-2 py-2'>
        <i className='bx bx-cart bx-sm text-white'></i>
        <p className='text-white text-md '>Cart</p>
      </div>
      

    </div>

    {open && (
      <div className='absolute top-20 right-10 w-80 shadow-lg rounded-md z-50 text-sm bg-white flex flex-col py-2 px-2'>

        <div className='flex items-center flex-col gap-1'>

          <button className='w-[80%] bg-yellow-500 rounded-md text-black text-[15px] px-2 py-1 hover:underline cursor-pointer'>Sign in</button>
          <h2 className=''>New customer?<a href='#' className='text-[13px] hover:text-blue-500 hover:underline'>Start here</a></h2>

        </div>

        <div className='flex  items-start text-gray-600 gap-4'>
          <div className=''>
            Your Lists
            {leftbar.map((item)=>(
              <div key={item.id} className='hover:text-red-400 hover:underline'>{item.title}</div>
            ))}
          </div>

          <div >
            Your Account
            {rightbar.map((data)=>(
              <div key={data.id} className='hover:text-red-400 hover:underline'>{data.title}</div>
            ))}
          </div>

        </div>
      </div>
    )}
    </>
  )
}

export default Nav4