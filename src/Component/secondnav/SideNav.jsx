import React from 'react'

const sidebarData = [
  {
    section: "Hello, Sign in",
    type: "header",
    items: [
      {id:1,title:"Account & Lists"}
    ]
  },

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
      {id:1,title:"Echo & Alexa"},
      {id:2,title:"Fire TV"},
      {id:3,title:"Kindle E-readers & eBooks"},
      {id:4,title:"Audible Audiobooks"},
      {id:5,title:"Amazon Prime Video"},
      {id:6,title:"Amazon Prime Music"}
    ]
  },

  {
    section:"Shop by Category",
    type:"category",
    items: [
      {id:1,title:"Mobiles, Computers"},
      {id:2,title:"TV, Appliances, Electronics"},
      {id:3,title:"Men's Fashion"},
      {id:4,title:"Women's Fashion"},
      {id:5,title:"Cameras & Photography"},
      {id:6,title:"Computer Peripherals"}
    ]
  },

  {
    section: "Fashion",
    type: "category",
    items: [
      {id:1,title:"Men’s Clothing"},
      {id:2,title:"Women’s Clothing"},
      {id:3,title:"Kids’ Clothing"},
      {id:4,title:"Footwear"},
      {id:5,title:"Watches"},
      {id:6,title:"Bags & Luggage"}
    ]
  },

  {
    section:"Home, Kitchen & Living",
    type:"category",
    items: [
      {id:1,title:"Home Décor"},
      {id:2,title:"Furniture"},
      {id:3,title:"Kitchen & Dining"},
      {id:4,title:"Home Improvement"},
      {id:5,title:"Lighting & Electricals"}
    ]
  },

  {
    section:"Beauty, Health & Personal Care",
    type:"category",
    items: [
      {id:1,title:"Makeup"},
      {id:2,title:"Skincare"},
      {id:3,title:"Hair Care"},
      {id:4,title:"Fragrances"},
      {id:5,title:"Health & Wellness"}
    ]
  },

  {
    section:"Toys, Baby & Kids",
    type:"category",
    items: [
      {id:1,title:"Toys & Games"},
      {id:2,title:"Baby Products"},
      {id:3,title:"School Supplies"}
    ]
  },

  {
    section:"Programs & Features",
    type:"list",
    items: [
      {id:1,title:"Amazon Pay"},
      {id:2,title:"Gift Cards"},
      {id:3,title:"Amazon Business"},
      {id:4,title:"Subscribe & Save"},
      {id:5,title:"Try Prime"}
    ]
  },

  {
    section: "Help & Settings",
    type: "settings",
    items: [
      {id:1,title:"Your Orders"},
      {id:2,title:"Your Wish List"},
      {id:3,title:"Your Prime Membership"},
      {id:4,title:"Language: English / हिन्दी"},
      {id:5,title:"Location: Kanpur"},
      {id:6,title:"Customer Service"},
      {id:7,title:"Sign Out",danger:true}
    ]
  }
];


const SideNav = ({open}) => {

  return (
    <div>
      {open && (
        <div className='absolute top-20 right-10 w-80 shadow-lg rounded-md z-50 text-sm bg-black flex flex-col py-2 px-2'>

        </div>
      )}
    </div>
  )
}

export default SideNav