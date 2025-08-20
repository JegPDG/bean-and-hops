import React from 'react'
import MenuSideBar from '../components/medium-comp/MenuSideBar'
import { assets } from '../assets/assets'

const Menu = () => {


  return (
    <div className='w-full'>
      <div className='w-full max-w-5xl m-auto flex flex-row'>
        <div>
          <MenuSideBar></MenuSideBar>
        </div>
        <div className='w-full min-h-[100vh]'>
          <div className='w-full pt-4'>
            <p className='text-5xl font-bold'>COFFEE</p>
          </div>

          <div className='w-full pl-4'>
            <p className='mt-4 pb-4 text-3xl'>Base Coffee</p>
            <div className='grid grid-cols-2 gap-2 w-full'>
              
              <div className='aspect-square overflow-hidden border-2 bg-amber-300 rounded-2xl relative'>
                <div className='absolute bg-bg-dark-500 rounded-br-2xl'>
                  <p className='left-4 font-bold text-xl p-2 '>Esspresso</p>
                </div>
                
                <img className='w-full h-full object-cover' src={assets.esspresso} alt="" />
                
                <div className='bg-gradient-to-t from-black to-black/0 w-full h-44 absolute bottom-0'></div>
                
                <div className='absolute bottom-0 pl-4 pb-2 w-full'>
                  <p className='text-sm font-bold'>Price:</p>
                  <div className='grid grid-cols-3 gap-2 w-full'>
                    <div>
                      <p className='text-md'>Single shot</p>
                      <p className='text-2xl font-bold'>$54</p>
                    </div>

                    <div>
                      <p className='text-md'>Double shot</p>
                      <p className='text-2xl font-bold'>$54</p>
                    </div>
                  </div>
                  <p className='text-xs pt-2'>Descriprion for the image bb gurl</p>
                </div>
              </div>

              <div className='aspect-square overflow-hidden border-2 bg-amber-300 rounded-2xl relative'>
                <div className='absolute bg-bg-dark-500 rounded-br-2xl'>
                  <p className='left-4 font-bold text-xl p-2 '>Matcha Latte</p>
                </div>
                
                <img className='w-full h-full object-cover' src={assets.iced_matcha} alt="" />
                
                <div className='bg-gradient-to-t from-black to-black/0 w-full h-44 absolute bottom-0'></div>
                
                <div className='absolute bottom-0 pl-4 pb-2 w-full'>
                  <p className='text-sm font-bold'>Price:</p>
                  <div className='grid grid-cols-3 gap-2 w-full'>
                    <div>
                      <p className='text-md'>Hot (8oz)</p>
                      <p className='text-2xl font-bold'>$54</p>
                    </div>

                    <div>
                      <p className='text-md'>Hot (12oz)</p>
                      <p className='text-2xl font-bold'>$54</p>
                    </div>

                    <div>
                      <p className='text-md'>Iced</p>
                      <p className='text-2xl font-bold'>$54</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className='aspect-square overflow-hidden border-2 bg-amber-300 rounded-2xl relative'>
                <div className='absolute bg-bg-dark-500 rounded-br-2xl'>
                  <p className='left-4 font-bold text-xl p-2 '>Creamy Oyster Pizza</p>
                </div>
                
                <img className='w-full h-full object-cover' src={assets.sample_2} alt="" />
                
                <div className='bg-gradient-to-t from-black to-black/0 w-full h-44 absolute bottom-0'></div>
                
                <div className='absolute bottom-0 pl-4 pb-2 w-full'>
                  <p className='text-sm font-bold'>Price:</p>
                  <div className='grid grid-cols-3 gap-2 w-full'>
                    <div>
                      <p className='text-md'></p>
                      <p className='text-2xl font-bold'>$320</p>
                    </div>
                  </div>

                  <p className='text-xs pt-2'>Fresh Oysters | Creamy white sauce | spices</p>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu