import React from 'react'
import { boxes } from '../../assets'

const Body = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4'>
      {boxes.map((section)=>(
        <div key={section.id} className='bg-white py-4 px-2 mx-2 my-3 flex flex-col gap-2 justify-around'>
          <h2 className='text-lg font-semibold text-neutral-800'>{section.section}</h2>

          <ul className='grid grid-cols-2 gap-2'>
            {section.items.map((item)=>(
              <div key={item} className=''>
                <img src={item.image} className='w-35 '></img>
                <p className='text-[12px] text-neutral-600'>{item.text}</p>
              </div>
            ))}
          </ul>

          <p className='text-[12px] text-blue-700'>{section.links}</p>


        </div>
      ))}
    </div>
  )
}

export default Body