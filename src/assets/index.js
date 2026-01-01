import logo from './logo.png'
import map from './map.jpg'
import backimage1 from './backimage1.jpg'
import backimage2 from './backimage2.jpg'
import backimage3 from './backimage3.jpg'
import backimage4 from './backimage4.jpg'
import img1_1 from './img1_1'
import img1_2 from './img1_2'
import img1_3 from './img1_3'
import img1_4 from './img1_4'




const assets={
  logo,map,backimage1,backimage2,backimage3,backimage4,img1_1,img1_2,img1_3,img1_4
}

export const navItems=[{id:1,name:"ALL"},{id:2,name:"Amazon miniTV"},{id:3,name:"Sell"},{id:4,name:"Best Sellers"},{id:5,name:"Mobiles"},{id:6,name:"Customer Service"},{id:7,name:"Today's Deals"},{id:8,name:"Electronics"},{id:9,name:"Fashion"},{id:10,name:"New Releases"},{id:11,name:
"Books"},{id:12,name:"Home & Kitchen"},{id:13,name:"Amazon Pay",},{id:14,name:"Computers"},{id:15,name:"Beauty"}]

export default assets


export const boxes=[
  {
    section:"Revamp your home in style",
    type:"category",
    items:[
      {id:1,image:assets.img1_1,text:"Cushion covers, bedsheets & more"},
      {id:2,image:assets.img1_2,text:"Figurines, vases & more"},
      {id:3,image:assets.img1_3,text:"Home storage"},
      {id:4,image:assets.img1_4,text:"Lighting solutions"}
    ],
    links:"Explore all"
  },
   {
    section:"Bulk order discounts + Up to 18% GST savings",
    type:"category",
    items:[
      {id:1,image:assets.img1_1,text:"Up to 45% off | Laptops"},
      {id:2,image:assets.img1_2,text:"Up to 60% off | Kitchen appliances"},
      {id:3,image:assets.img1_3,text:"Min. 50% off | Office furniture"},
      {id:4,image:assets.img1_4,text:"Up to 60% off | for Business Purchases"}
    ],
    links:"Create a free account"
  },
    {
    section:"Appliances for your home | Up to 55% off",
    type:"category",
    items:[
      {id:1,image:assets.img1_1,text:"Air conditioners"},
      {id:2,image:assets.img1_2,text:"Refrigerator"},
      {id:3,image:assets.img1_3,text:"Microwaves"},
      {id:4,image:assets.img1_4,text:"Washing machines"}
    ],
    links:"See more"
  },
    {
    section:"Starting ₹49 | Deals on home essentials",
    items:[
      {id:1,image:assets.img1_1,text:"Cleaning supplies"},
      {id:2,image:assets.img1_2,text:"Bathroom accessories"},
      {id:3,image:assets.img1_3,text:"Home tools"},
      {id:4,image:assets.img1_4,text:"Wallpapers"}
    ],
    links:"Explore all"
  },
    {
    section:"Starting ₹149 | Headphones",
    type:"category",
    items:[
      {id:1,image:assets.img1_1,text:"Starting 249 | boAt"},
      {id:2,image:assets.img1_2,text:"Starting 349 | boult"},
      {id:3,image:assets.img1_3,text:"Starting 649 | Noise"},
      {id:4,image:assets.img1_4,text:"Starting 149 Zebronics"}
    ],
    links:"See all offers"
  },
    {
    section:"Automotive essentials | Up to 60% off",
    type:"category",
    items:[
      {id:1,image:assets.img1_1,text:"Cleaning accessories"},
      {id:2,image:assets.img1_2,text:"Tyre & rim care"},
      {id:3,image:assets.img1_3,text:"Helmets"},
      {id:4,image:assets.img1_4,text:"Vacuum cleaner"}
    ],
    links:"Explore all"
  },
    {
    section:"Starting ₹199 | Amazon Brands & more",
    type:"category",
    items:[
      {id:1,image:assets.img1_1,text:"Starting 199 | Bedshees"},
      {id:2,image:assets.img1_2,text:"Starting 199 | Curtains"},
      {id:3,image:assets.img1_3,text:"Minimum 40% off | Ironing board & more"},
      {id:4,image:assets.img1_4,text:"Up to 60% off | Home decor"}
    ],
    links:"See more"
  },
    {
    section:"Up to 50% off | Baby care & toys | Amazon Brands",
    type:"category",
    items:[
      {id:1,image:assets.img1_1,text:"Up to 50% off | Baby diapers & wipes "},
      {id:2,image:assets.img1_2,text:" Up to 50% off | Ride ons"},
      {id:3,image:assets.img1_3,text:"Starting 649 | RC car"},
      {id:4,image:assets.img1_4,text:"Up to 50% off | Baby safety essentials"}
    ],
    links:"See all essentials"
  }
]