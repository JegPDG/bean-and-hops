import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='h-[30vh] bg-(--color-white-500) pt-10 relative'>
      <div className='w-full max-w-5xl m-auto flex justify-between relative'>
          <div>
            <img src={assets.bean_and_hops_black} alt="" />
            <p className='text-xl font-bold text-(--color-bg-dark-500)'>BEAN &amp; HOPS</p>
            <p className='text-(--color-bg-dark-500) text-xs'>COFFEE AND ROASTERY</p>
            <p className='text-(--color-bg-dark-500) text-xs w-100 mt-2'>
              Crafting artisan coffee with passion, one cup at a time.
            </p>
          </div>

          <div className='grid grid-cols-3 gap-2 '>
            <div className='flex flex-col gap-2'>
              <p className='text-(--color-bg-dark-500) text-md font-bold'>MENU</p>
              <p className='text-(--color-bg-dark-500) text-md font-bold'>CONTACT</p>
              <p className='text-(--color-bg-dark-500) text-md font-bold'>LOCATION</p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-(--color-bg-dark-500) text-md font-bold'>POSTS</p>
              <p className='text-(--color-bg-dark-500) text-md font-bold'>REVIEWS</p>
              <p className='text-(--color-bg-dark-500) text-md font-bold'>ABOUT US</p>
            </div>

              <div className='flex flex-col gap-2'>
              <p className='text-(--color-bg-dark-500) text-md font-bold'>TERMS OF SERVICE</p>
              <p className='text-(--color-bg-dark-500) text-md '>Terms of Use</p>
              <p className='text-(--color-bg-dark-500) text-md '>Privacy Policy</p>
            </div>
          </div>
      </div>
          <p className='text-(--color-bg-dark-500) text-xs absolute bottom-2 left-[50%]'>Copyright © Bean and Hops 2025</p>
    </div>
  )
}

export default Footer