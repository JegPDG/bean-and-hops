import React from 'react'
import NavigationBar from '../components/medium-comp/NavigationBar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='relative'>
      <div className='fixed top-0 left-0 w-full z-50'>
        <NavigationBar />
      </div>
      <div className='pt-16'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout