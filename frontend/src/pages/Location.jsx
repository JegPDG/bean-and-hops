import { MapPinIcon } from '@heroicons/react/24/outline'
import React from 'react'
import CafeLocationMap from '../components/medium-comp/CafeLocationMap'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

const Location = () => {
  return (
    <div className='w-full min-h-[80vh]'>
      <div className='w-full max-w-5xl m-auto '>
        <div className=' w-full mt-8 flex items-center flex-col'>
          
          <p className='text-4xl font-bold'>STORE LOCATION</p>
          
          <a 
            href="https://www.google.com/maps/search/?api=1&query=11.7177845,122.3769846" 
            target='_blank'  
            rel="noopener noreferrer">
            <div className='flex flex-row items-center gap-2 cursor-pointer mt-4 '>
              <p className='hover:text-blue-400'>use Google Maps </p>
              <ArrowUpRightIcon className='size-4 '></ArrowUpRightIcon>
            </div>
          </a>
          
          <div className='flex items-center justify-center mt-4'>
            <MapPinIcon className='size-6'></MapPinIcon>
            <p className=''>Old Buswang Road, Kalibo, Philippines, 5600</p>
          </div>

          <div>
            <CafeLocationMap></CafeLocationMap>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Location