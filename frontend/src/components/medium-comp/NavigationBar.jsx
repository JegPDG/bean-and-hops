import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router'

const NavigationBar = () => {
  const navigate = useNavigate();
  
  const links = [
    {
      label: "Menu",
      navigation: '/menu',
    },
    {
      label: "Contact",
      navigation: '/contact',

    },
     {
      label: "Location",
      navigation: '/menu',

    },
    {
      label: "Posts",
      navigation: '/menu',

    },
    {
      label: "Reviews",
      navigation: '/menu',

    },
     {
      label: "About Us",
      navigation: '/menu',

    },
    
  ]

  return (
    <>
      <div className='bg-bg-dark-500 h-16 border-b-white border-b w-screen flex justify-center items-center'>
        <div className='flex w-full max-w-5xl items-center justify-between h-full'>
          <div className='flex items-center cursor-pointer'
            onClick={ () => navigate('/')}
          >
            <img className='size-16' 
              src={assets.bean_and_hops_white} alt="" />
            <p className='text-2xl font-bold'>BEAN AND HOPS</p>
          </div>

          <div className='h-full'>
            <ul className='flex text-lg h-full'>
              {links.map((link, index) => 
                <li 
                onClick={() => navigate(`${link.navigation}`)}
                className='hover:bg-amber-50/10 cursor-pointer h-full flex justify-center items-center w-28 pl-[10px] pr-[10px]'
                key={index}>
                  {link.label}
                </li>
              )}
            </ul>

          </div>
        </div>

      </div>
    
    </>
  )
}

export default NavigationBar