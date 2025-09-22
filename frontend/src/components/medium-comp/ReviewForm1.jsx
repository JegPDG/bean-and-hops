import React from 'react'
import { StarIcon as StarOutline, ArrowTurnDownRightIcon  } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'

import Reply from './Reply'


const ReviewForm1 = ({profilePic, username, rate, itemReviewed, text, image, dateTime, replies}) => {
  

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
            <StarSolid className='size-4'></StarSolid>
            <StarSolid className='size-4'></StarSolid>
            <StarSolid className='size-4'></StarSolid>
            <StarOutline className='size-4'></StarOutline>
            <StarOutline className='size-4'></StarOutline>
            <p>{rate}</p>
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
          <textarea 
            name="comment" 
            id="review-input"
            className='w-full bg-bg-dark-400 text-sm resize-none p-[4px]'
            ></textarea>
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
          <div className='flex flex-row gap-2'>
            <button className='bg-bg-dark-400  pl-4 pr-4 pt-1 pb-1 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10'>
              Reply
            </button>
            <button className='bg-bg-dark-400  pl-4 pr-4 pt-1 pb-1 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10'>
              Submit
            </button>
            <button className='bg-bg-dark-400  pl-4 pr-4 pt-1 pb-1 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10'>
              Cancel
            </button>
          </div>


        </div>

      </div>
    </div>
  )
}

export default ReviewForm1