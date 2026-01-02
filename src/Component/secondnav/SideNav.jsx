import React from 'react'

const sidebarData = [
 
  {
    section: "Trending",
    type: "list",
    items: [
      {id:1,title:"Best Sellers"},
      {id:2,title:"New Releases"},
      {id:3,title:"Movers and Shakers"}
    ]
  },

  {
    section:"Digital Content and Devices",
    type:"category",
    items: [
      {id:1,title:"Echo & Alexa",submenu:true},
      {id:2,title:"Fire TV",submenu:true},
      {id:3,title:"Kindle E-readers & eBooks",submenu:true},
      {id:4,title:"Audible Audiobooks",submenu:true},
      {id:5,title:"Amazon Prime Video",submenu:true},
      {id:6,title:"Amazon Prime Music",submenu:true}
    ]
  },

  {
    section:"Shop by Category",
    type:"category",
    items: [
      {id:1,title:"Mobiles, Computers",submenu:true},
      {id:2,title:"TV, Appliances, Electronics",submenu:true},
      {id:3,title:"Men's Fashion",submenu:true},
      {id:4,title:"Women's Fashion",submenu:true},
      {id:5,title:"See all",bottomMenu:true}
    ]
  },

  {
    section:"Programs & Features",
    type:"list",
    items: [
      {id:1,title:"Gift Cards & Mobile Recharges",submenu:true},
      {id:2,title:"Amazon Launchpad"},
      {id:3,title:"Amazon Business"},
      {id:4,title:"Handloom and Handicrafts"},
      {id:5,title:"See all",bottomMenu:true}
    ]
  },

  {
    section: "Help & Settings",
    type: "settings",
    items: [
      {id:1,title:"Your Account"},
      {id:2,title:"Customer Service"},
      {id:3,title:"Sign in"}
    ]
  }
];


const SideNav = ({open,setOpen}) => {

  return (
    <div>
      {open && (
        <div className='fixed top-0 w-70 h-screen shadow-lg z-50 text-sm bg-white flex flex-col overflow-y-auto '>
          
          <div className='bg-neutral-800 flex items-center px-4 text-white text-[20px]  gap-3 py-3'>
            <i class='bxr bx-user-circle'></i>
            <h1>Hello, sign in</h1>
          </div>
          {sidebarData.map((data,index)=>(
            <div key={index} className='border-b border-gray-400 py-3'>

              <h3 className='font-bold text-sm px-4 mb-2 text-neutral-800'>{data.section}</h3>

              <ul className='flex flex-col'>
                {data.items.map((item)=>(
                  <li key={item.id} className='px-4 py-2 text-[14px]  cursor-pointer hover:bg-gray-200 flex justify-between items-center '
                  >{item.title}
                  
                  {item.submenu && (
                    <i className='bx bx-caret-right text-neutral-600 group'></i>
                  )}

                  {item.bottomMenu && (
                    <i className='bx bx-caret-down text-neutral-600 group-hover:text-neutral-800'></i>
                  )}
                  </li>
                ))}
              </ul>
            </div>
           
      ))}
    </div>
  )
}
</div>
)}

export default SideNav