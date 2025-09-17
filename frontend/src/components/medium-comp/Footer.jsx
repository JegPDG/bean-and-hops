import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className=' bg-(--color-white-500) pt-10 relative pl-4 pr-4'>
      <div className='w-full max-w-5xl m-auto flex justify-between relative flex-col gap-4 md:flex-row'>
          <div className='flex flex-col items-center'>
            <img className='size-32' src={assets.bean_and_hops_black} alt="" />
            <p className='text-xl font-bold text-(--color-bg-dark-500) md:text-2xl'>BEAN &amp; HOPS</p>
            <p className='text-(--color-bg-dark-500) text-xs md:text-sm'>COFFEE AND ROASTERY</p>
            <p className='text-(--color-bg-dark-500) text-xs  mt-2 md:text-sm'>
              Crafting artisan coffee with passion, one cup at a time.
            </p>
          </div>

          <div className='grid grid-cols-3 gap-2 '>
            <div className='flex flex-col gap-2'>
              <Link to={'/menu/items'} onClick={() =>  window.scrollTo(0, 0)}>
                <p className='text-(--color-bg-dark-500) text-xs font-bold md:text-lg'>MENU</p>
              </Link>
              <Link to={'/contact'} onClick={() =>  window.scrollTo(0, 0)}>
                <p className='text-(--color-bg-dark-500) text-xs font-bold md:text-lg'>CONTACT</p>
              </Link>
              <Link to={'/location'} onClick={() =>  window.scrollTo(0, 0)}>
                <p className='text-(--color-bg-dark-500) text-xs font-bold md:text-lg'>LOCATION</p>
              </Link>
            </div>

            <div className='flex flex-col gap-2'>
              <Link to={'/posts'} onClick={() =>  window.scrollTo(0, 0)}>
                <p className='text-(--color-bg-dark-500) text-xs font-bold md:text-lg'>POSTS</p>
              </Link>
              {/* <p className='text-(--color-bg-dark-500) text-md font-bold'>REVIEWS</p> */}
              <Link to={'/about-us'} onClick={() =>  window.scrollTo(0, 0)}>
                <p className='text-(--color-bg-dark-500) text-xs font-bold md:text-lg'>ABOUT US</p>
              </Link>
            </div>

              <div className='flex flex-col gap-2'>
              <p className='text-(--color-bg-dark-500) text-xs font-bold md:text-lg'>TERMS OF SERVICE</p>
              <p className='text-(--color-bg-dark-500) text-xs md:text-lg'>Terms of Use</p>
              <p className='text-(--color-bg-dark-500) text-xs md:text-lg'>Privacy Policy</p>
            </div>
          </div>
      </div>
      <div className='flex justify-center mt-4'>
          <p className='text-(--color-bg-dark-500) text-xs bottom-2 left-[50%] '>Copyright © Bean and Hops 2025</p>
      </div>
    </div>
  )
}

export default Footer