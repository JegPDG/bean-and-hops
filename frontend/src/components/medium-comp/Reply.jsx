import React from 'react'
import { StarIcon as StarOutline, ArrowTurnDownRightIcon  } from '@heroicons/react/24/outline'



const Reply = ({username, profilePic, text, dateTime}) => {

  // username, text, prof-pic, dateTime



  return (
     <div className='ReplyMain w-full flex mt-6 ml-8 gap-2'>
        {/* Icon */}
        <div className='size-6'>
          <ArrowTurnDownRightIcon className='size-6'></ArrowTurnDownRightIcon>
        </div>

        {/* Reply*/}
        <div>
          <div className='Anoto flex gap-4 shrink-0'>
            {/* Profile picture */}
            <div className='size-8 aspect-square rounded-[50%] flex overflow-hidden'>
              <img className='w-full h-full object-cover border-none' src={profilePic} alt="" />
            </div>

            <div> 
              {/* Name */}
              <div className='flex items-center gap-4'>
                <p className='font-bold'>{username}</p> 
              </div>
              {/* Text */}

              <div>
                  <p className='text-sm'>{text}</p>

                  <div className='mt-1'>
                    <p className='text-xs text-white/50'>{dateTime}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>

  )
}

export default Reply