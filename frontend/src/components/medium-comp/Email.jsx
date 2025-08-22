import React from 'react'
import { Button } from '../small-comp/Button'

const Email = () => {
  return (
    <div className='w-full pt-8 '>
      <div className='w-full max-w-2xl m-auto border border-white rounded-4xl pl-16 pr-16 pt-8 pb-8'>
        <form action="">
          <p>You can message us here through the form or send directly through: <span className='font-bold'>beanandhops@gmail.com</span> </p>
          
          <div className='pt-4 w-full'>
            <div className='w-full'>
              <p>Name</p>
              <input className='bg-bg-dark-400 p-2 rounded-lg w-full' type="text" placeholder='Name' />
            </div>

            <div className='w-full grid grid-cols-2 gap-2 pt-2'>
              <div>
                <p>Email</p>
                <input className='bg-bg-dark-400 p-2 rounded-lg w-full' type="text" placeholder='Email' />
              </div>

              <div>
                <p>Phone</p>
                <input className='bg-bg-dark-400 p-2 rounded-lg w-full' type="text" placeholder='Email' />
              </div>
            </div>

            <div className='w-full pt-2'>
              <p>Subject</p>
              <input className='bg-bg-dark-400 p-2 rounded-lg w-full' type="text" placeholder='Name' />
            </div>

            <div className='w-full pt-2'>
              <p>Subject</p>
              <textarea className='bg-bg-dark-400 rounded-lg w-full min-h-[100px] max-h-[200px] overflow-y-auto' name="" id=""></textarea>
            </div>

            <div className='pt-4 flex justify-center'>
              <Button 
              className='text-[14px] h-[36px]'
              >Send message</Button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Email