
import Nav1 from './Nav1.jsx'
import Nav2 from './Nav2.jsx'
import Nav3 from './Nav3.jsx'
import Nav4 from './Nav4.jsx'
const Navbar = () => {
  return (
    <div className='w-full h-12 bg-neutral-600 py-1 px-1 flex items-center gap-3' id='Home'>

        <Nav1/>
        <Nav2/>
        <Nav3/>
        <Nav4/>
        
    </div>
  )
}

export default Navbar