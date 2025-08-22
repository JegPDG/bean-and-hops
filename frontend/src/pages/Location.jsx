import { MapPinIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Location = () => {
  return (
    <div className='w-full min-h-[80vh]'>
      <div className='w-full max-w-5xl m-auto '>
        <div className=' w-full mt-8 flex items-center flex-col'>
          
          <p className='text-4xl font-bold'>STORE LOCATION</p>
          
          <p className='mt-4'>location link to directly use the phones maps</p>
          
          <div className='flex items-center justify-center mt-4'>
            <MapPinIcon className='size-6'></MapPinIcon>
            <p className=''>Old Buswang Road, Kalibo, Philippines, 5600</p>
          </div>

          <div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Location