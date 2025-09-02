import React from 'react'
import { Button } from '../small-comp/Button'

const Email = () => {
  return (
    <div className='w-full pt-8 '>
      <div className='w-full max-w-2xl m-auto border border-white rounded-4xl p-8'>
        <form action="">
          <p className='text-xs '>You can message us here through the form or send directly through: <span className='font-bold'>beanandhops@gmail.com</span> </p>
          
          <div className='pt-4 w-full'>
            <div className='w-full'>
              <p className='text-xs'>Name</p>
              <input className='bg-bg-dark-400 p-2 rounded-lg w-full text-xs' type="text" placeholder='Name' />
            </div>

            <div className='w-full grid grid-cols-2 gap-2 pt-2'>
              <div>
                <p className='text-xs'>Email</p>
                <input className='bg-bg-dark-400 p-2 rounded-lg w-full text-xs' type="text" placeholder='Email' />
              </div>

              <div>
                <p className='text-xs'>Phone</p>
                <input className='bg-bg-dark-400 p-2 rounded-lg w-full text-xs' type="text" placeholder='Phone' />
              </div>
            </div>

            <div className='w-full pt-2'>
              <p className='text-xs'>Subject</p>
              <input className='bg-bg-dark-400 p-2 rounded-lg w-full text-xs' type="text" placeholder='Subject' />
            </div>

            <div className='w-full pt-2'>
              <p className='text-xs'>Message</p>
              <textarea className='bg-bg-dark-400 rounded-lg w-full min-h-[100px] max-h-[200px] overflow-y-auto text-xs' name="" id=""></textarea>
            </div>

            <div className='pt-4 flex justify-center'>
              <Button 
              className='text-xs h-[36px]'
              >Send message</Button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Email