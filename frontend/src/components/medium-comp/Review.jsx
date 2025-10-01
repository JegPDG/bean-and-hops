import React from 'react'
import { StarIcon as StarOutline, ArrowTurnDownRightIcon  } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'

import Reply from './Reply'


const Review = ({profilePic, username, rate, itemReviewed, text, image, dateTime, replies}) => {
 
  // prof-pic, username, rate [int], ite,-reviewed [default none], text, image [array],  datetime, reply [array], 

  return (
    <div className='w-full m-auto flex max-w-lg gap-4 pt-4 shrink-0'>

      {/* Profile picture */}
      <div className='size-12 aspect-square rounded-[50%] bg-amber-50 flex overflow-hidden shrink-0'>
        <img className='size-12 object-cover shrink-0' src={profilePic} alt="" />
      </div>

      <div className='w-full '> 
        <div className='flex shrink-0'>

          {/* Username */}
          <p className='font-bold'>{username}</p> 
          <p> &nbsp; | &nbsp;</p>

          {/* Rate */}
          <div className='flex items-center'>
            {[...Array(5)].map((_, index) =>
              index < rate ? (
                <StarSolid key={index} className="size-4 text-yellow-500 fill-yellow-500" />
              ) : (
                <StarOutline key={index} className="size-4 text-gray-400" />
              )
            )}
            <p className="ml-2">{rate}</p>
          </div>
        </div>

        <div>

          {/* Item reviewed */}
          <p className='cursor-pointer'> 
            <span className='font-bold'>{itemReviewed}</span> 
            {itemReviewed && (
              <span className='text-white/50 text-xs italic'>&nbsp; View in Menu</span>
            )}
          </p>

          {/* text review */}
          <p className='text-sm'> {text} </p>

          {/* Image for the review */}
          { image &&
            (
              <div className='mt-4 rounded-2xl w-full h-68 bg-bg-dark-400 flex items-center justify-center overflow-hidden'>
              <img className='w-full h-full object-cover' src={image} alt="" />
            </div>
            )
          }
          

          {/* Time */}
          <div className='mt-1'>
            <p className='text-xs text-white/50'>{dateTime}</p>
          </div>

           <div className='w-full h-[0.5px] mt-2 bg-white/10'></div>

          {/* Reply button */}
          <div className=''>
            <button className='bg-bg-dark-400  pl-4 pr-4 pt-1 pb-1 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10'>
              Reply
            </button>
          </div>

          {/* Store reply here */}
          <div>
            {/* Accepts username, text, prof-pic */}
            {replies?.length > 0 &&
              (
                <ul>
                  {replies?.map((reply, index) =>
                    <li key={index}>
                      <Reply
                        username={reply.rply_name}
                        profilePic={reply.rply_icon}
                        text={reply.rply_text}
                      ></Reply>
                    </li>
                  )}
                </ul>
              )
            }
          </div>


        </div>

      </div>
    </div>
  )
}

export default Review