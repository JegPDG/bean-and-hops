import React from 'react'
import { assets } from '../../assets/assets'

const NavigationBar = () => {
  const links = [
    {
      label: "Menu",
    },
    {
      label: "Contact",
    },
    {
      label: "Location",
    },
    {
      label: "Posts",
    },
     {
      label: "About Us",
    },
    
  ]

  return (
    <>
      <div className='bg-bg-dark-500 h-16 border-b-white border-b w-screen flex justify-center items-center'>
        <div className='flex w-full max-w-5xl items-center justify-between'>
          <div className='flex items-center'>
            <img className='size-16' 
              src={assets.bean_and_hops_white} alt="" />
            <p className='text-2xl font-bold'>BEAN AND HOPS</p>
          </div>

          <div>
            <ul className='flex gap-[60px] text-xl'>
              {links.map((link, index) => 
                <li key={index}>
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