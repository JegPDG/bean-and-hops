import React from 'react'
import NavigationBar from '../components/medium-comp/NavigationBar'
import { Outlet } from 'react-router'
import Footer from '../components/medium-comp/Footer'

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  


  return (
    <div className='relative'>
      <div className='fixed top-0 left-0 w-full z-50'>
        <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
      <div className='pt-16 min-h-[70vh]'>
        <Outlet context={{ menuOpen, setMenuOpen }} />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default MainLayout