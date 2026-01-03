import React from 'react'

const Footer = () => {
  return (
    <div className=' flex flw-screen flex-col items-center justify-center' >

      <div className='flex flex-col justify-center items-center'>
        <h2>See personalized recommendations</h2>

        <button className='w-[30%] bg-yellow-500 rounded-md text-black text-[15px] px-2 py-1 cursor-pointer hover:bg-yellow-400'>Sign in
          
        </button>

        <h3>New customer ? <a href="" className='text-blue-500 underline'>Start here</a></h3>
      </div>
     
     <div>

        <a href='#Home'>Back to top</a>

      </div>
    </div>
  )
}

export default Footer