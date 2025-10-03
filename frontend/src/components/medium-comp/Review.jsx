import React, { useState } from 'react'
import { StarIcon as StarOutline, ArrowTurnDownRightIcon  } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid, XMarkIcon } from '@heroicons/react/24/solid'

import Reply from './Reply'
import ReplyForm from './ReplyForm'
import { useAuth } from '../../context/AuthContext'
import GoogleSignIn from './GoogleSignIn'
import { useQueryClient } from '@tanstack/react-query'


const Review = ({profilePic, username, rate, itemReviewed, text, image, dateTime, replies, reviewID}) => {
  //Used in MenuItemDetail.jsx
  // prof-pic, username, rate [int], item-reviewed [default none], text, image [array],  datetime, reply [array], 

  // Reply Forms variables
  const [showReplyForm, setReplyForm] = useState(false);
  const {isAuthenticated} = useAuth();
  const queryClient = useQueryClient();

  // Replies renders variables
  const [showAll, setShowAll] = useState(false)

  // if (!replies || replies.length === 0) return null;



  // Reply Form Functions
  const handleReplyButton = (e) => {
    e.preventDefault();
    setReplyForm(true)
  }

  const handleReplySubmitted = () => {
    setReplyForm(false)
    queryClient.invalidateQueries(['menuDetail']);
  }

  const handleCancel = () =>{
    setReplyForm(false)
  }


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
            <button 
              onClick={handleReplyButton}
              className='bg-bg-dark-400  pl-4 pr-4 pt-1 pb-1 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10'>
              Reply
            </button>
          </div>


          {/* Replies Render */}
          <div>
            {/* Accepts username, text, prof-pic */}
            {showAll ? (
              replies?.length > 0 && (
                <ul>
                  {replies.map((reply, index) => (
                    <li key={index}>
                      <Reply
                        username={reply.rply_name}
                        profilePic={reply.rply_icon}
                        dateTime={reply.rply_date}
                        text={reply.rply_text}
                        user={reply.user}
                      />
                    </li>
                  ))}

                  <div className='w-full flex items-center justify-center mt-2'>
                    <button
                       onClick={() => setShowAll(false)} 
                       className='text-blue-500 text-sm cursor-pointer'
                      >
                      Hide Replies
                    </button>
                  </div>
                </ul>
                
              )
            ) : (
              <div className='w-full flex items-center justify-center'>
                <button 
                  onClick={() => setShowAll(true)} 
                  className="text-blue-500 text-sm cursor-pointer">
                  Show replies
                </button>
              </div>
            )}

          </div>
          
          {/* Reply Form  */}
          {showReplyForm ? (
            isAuthenticated ? (
              <div className="w-full mt-2">
                <ReplyForm 
                  reviewId={reviewID} 
                  onReplySubmitted={handleReplySubmitted}
                  onCancel={handleCancel}
                  />
              </div>
            ) : (
              <div className="text-center p-4 bg-bg-dark-400 rounded-lg mt-2 relative">
                <button
                  onClick={() => setReplyForm(false)}
                  className='absolute top-2 right-2 bg-white/40 size-5 text-bg-dark-500 font-bold rounded-[50%] items-center justify-center'
                >
                  <XMarkIcon fill='black'></XMarkIcon>
                </button>

                <p className="text-white text-lg font-bold">
                  Sign in with Google to write a Reply
                </p>
                <GoogleSignIn />
              </div>
            )
          ) : null}

          {/* <div className='w-full'>
            <ReplyForm
              reviewId={reviewID}
            ></ReplyForm>
          </div> */}

        </div>

      </div>
    </div>
  )
}

export default Review