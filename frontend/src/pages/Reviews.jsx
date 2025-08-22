import React from 'react'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarOutline, ArrowTurnDownRightIcon  } from '@heroicons/react/24/outline'

const Reviews = () => {
  return (
    <div className='w-full'>  
      <div className='w-full max-w-2xl m-auto flex flex-col items-center '>
        <p className='mt-8 text-4xl font-bold'>REVIEWS</p>
        <div className='w-full h-[1px] mt-2 bg-white'></div>


        <div className='w-full flex flex-col justify-baseline pt-4 pb-16'>

        {/* This is where you itereate */}

          <div className='w-full m-auto flex max-w-lg gap-4 pt-4'>
            <div className='size-12 aspect-square rounded-[50%] bg-amber-50 flex '></div>
            <div className='w-full '> 
              <div className='flex'>
                <p className='font-bold'>Anonymouse</p> 
                <p> &nbsp; | &nbsp;</p>
                <div className='flex items-center'>
                  <StarSolid className='size-4'></StarSolid>
                  <StarSolid className='size-4'></StarSolid>
                  <StarSolid className='size-4'></StarSolid>
                  <StarOutline className='size-4'></StarOutline>
                  <StarOutline className='size-4'></StarOutline>
                </div>
              </div>

              <div>
                <p className='text-sm'> I recently purchased a new phone from [Store Name], and I'm very happy with it. The camera quality is excellent, and the battery life is impressive. However, the phone is a bit heavier than I expected.</p>

                <div className='mt-4 rounded-2xl w-full h-68 bg-bg-dark-400 flex items-center justify-center'>
                  This is an image
                </div>

                <div className='ReplyMain w-full flex mt-6 ml-8 gap-2'>
                  {/* Icon */}
                  <div className='size-8'>
                    <ArrowTurnDownRightIcon className='size-8'></ArrowTurnDownRightIcon>
                  </div>

                  {/* Reply*/}
                  <div>
                    <div className='Anoto flex gap-4'>

                      <div className='size-8 aspect-square rounded-[50%] bg-amber-50 flex '></div>

                      <div> 
                        {/* Name */}
                        <div className='flex items-center gap-4'>
                          <p className='font-bold'>Anonymouse</p> 
                        </div>
                        {/* Text */}

                        <div>
                           <p className='text-sm'> I recently purchased a new phone from [Store Name], and I'm very happy with it. The camera quality is excellent, and the battery life is impressive. However, the phone is a bit heavier than I expected.</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>



                </div>

              </div>

            </div>
          </div>

          {/* Review number 2 */}
          <div className='w-full m-auto flex max-w-lg gap-4 pt-4'>
            <div className='size-12 aspect-square rounded-[50%] bg-amber-50 flex '></div>
            <div className='w-full '> 
              <div className='flex'>
                <p className='font-bold'>Anonymouse</p> 
                <p> &nbsp; | &nbsp;</p>
                <div className='flex items-center'>
                  <StarSolid className='size-4'></StarSolid>
                  <StarSolid className='size-4'></StarSolid>
                  <StarSolid className='size-4'></StarSolid>
                  <StarOutline className='size-4'></StarOutline>
                  <StarOutline className='size-4'></StarOutline>
                </div>
              </div>

              <div>
                <p className='text-sm'> I recently purchased a new phone from [Store Name], and I'm very happy with it. The camera quality is excellent, and the battery life is impressive. However, the phone is a bit heavier than I expected.</p>

                <div className='mt-4 rounded-2xl w-full h-68 bg-bg-dark-400 flex items-center justify-center'>
                  This is an image
                </div>

                <div className='ReplyMain w-full flex mt-6 ml-8 gap-2'>
                  {/* Icon */}
                  <div className='size-8'>
                    <ArrowTurnDownRightIcon className='size-8'></ArrowTurnDownRightIcon>
                  </div>

                  {/* Reply*/}
                  <div>
                    <div className='Anoto flex gap-4'>

                      <div className='size-8 aspect-square rounded-[50%] bg-amber-50 flex '></div>

                      <div> 
                        {/* Name */}
                        <div className='flex items-center gap-4'>
                          <p className='font-bold'>Anonymouse</p> 
                          <p> &nbsp; | &nbsp;</p>
                          <div className='flex items-center'>
                            <StarSolid className='size-4'></StarSolid>
                            <StarSolid className='size-4'></StarSolid>
                            <StarSolid className='size-4'></StarSolid>
                            <StarOutline className='size-4'></StarOutline>
                            <StarOutline className='size-4'></StarOutline>
                          </div>
                        </div>
                        {/* Text */}

                        <div>
                           <p className='text-sm'> I recently purchased a new phone from [Store Name], and I'm very happy with it. The camera quality is excellent, and the battery life is impressive. However, the phone is a bit heavier than I expected.</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>



                </div>

              </div>

            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Reviews