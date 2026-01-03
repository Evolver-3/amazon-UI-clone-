import Navbar from "./Component/Nav/Navbar"
import SecNav from "./Component/secondnav/SecNav"

import Body from "./Component/body/Body";
import Footer from "./Component/footer/Footer";
import BackImage from "./Component/bodyImage/BackImage";

function App() {

 
  return (

    <div className="relative">
      <Navbar/>
      <SecNav/>
      <BackImage />
   
    <div className="mt-65 bg-gradient-to-b from-white to-neutral-300">
      <Body/>
      <Footer/>
    </div>
      
    </div>
  )
}

export default App
