import { ArrowTurnDownRightIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { reviewsAPI } from '../../services/api';
import GoogleSignIn from './GoogleSignIn';

const ReplyForm = ({reviewId, onReplySubmitted, onCancel}) => {
  const {user, isAuthenticated} = useAuth();
  const [replyText, setReplyText] = useState('');
  const [showForm, setShowForm] = useState(false)

  const handleSubmitReply = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert('Please sign in to reply')
      return;
    }

    if(!replyText.trim()){
      alert('Please enter a reply')
      return;
    }

    try {
      await reviewsAPI.addReply(reviewId, replyText)

      setReplyText('');

      if (onReplySubmitted) {
        onReplySubmitted();
      }

      console.log('Reply submitted')
    } catch (error) {
      console.error('Error submitting reply:', error);
      alert('❌ Error submitting reply');
    } finally {

    }

  }


  const handleCancelReply = () => {
    setReplyText('')
    onCancel();
  }
  console.log('Review ID', reviewId)

  
  // if(!showForm){
  //   return (
  //     <div className="w-full max-w-lg m-auto pt-4">
  //       {isAuthenticated ? (
  //         <button 
  //           type="button"
  //           onClick={() => setShowForm(true)}
  //           className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
  //         >
  //           ✍️ Write a Review
  //         </button>
  //       ) : (
  //         <div className="text-center p-4 bg-bg-dark-400 rounded-lg">
  //           <p className="text-white text-lg font-bold">Sign in with Google to write a Reply</p>
  //           <GoogleSignIn></GoogleSignIn>
  //         </div>
  //       )}
  //     </div>
  //   )
  // }



  return (
    <div className='ReplyMain w-full flex mt-6 ml-8 gap-2 bg-bg-dark-400 p-2 rounded-md'>
        {/* Icon */}
        <div className='size-6'>
          <ArrowTurnDownRightIcon className='size-6'></ArrowTurnDownRightIcon>
        </div>

        {/* Reply*/}
        <div className='w-full'>
          <div className='Anoto flex gap-4 shrink-0 w-full'>
            {/* Profile picture */}
            <div className='size-8 aspect-square rounded-[50%] flex overflow-hidden bg-white shrink-0'>
              <img className='w-full h-full object-cover border-none' src={user?.picture} alt="" />
            </div>

            <div className='w-full'> 
              {/* Name */}
              <div className='flex items-center gap-4'>
                <p className='font-bold'>{user?.first_name || "Username"}</p> 
              </div>
              {/* Text */}

              <div className='w-full'>
                  <textarea 
                    name="comment" 
                    id="reply-input"
                    onChange={(e) => setReplyText(e.target.value)}
                    className='w-full bg-bg-dark-500 text-sm resize-none p-[4px] min-h-[100px] mt-2 rounded-lg'
                    ></textarea>

              </div>

              {/* Line  */}
              <div className='w-full h-[0.5px] mt-2 bg-white/10'></div>

                <div className='flex flex-row-reverse gap-2'>

                  <button 
                    onClick={handleCancelReply}
                    className=' bg-bg-dark-500/80 pl-4 pr-4 pt-2 pb-2 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10 border border-white/10'>
                    Cancel
                  </button>

                  <button 
                    onClick={handleSubmitReply}
                    className=' bg-bg-dark-500/80 pl-4 pr-4 pt-2 pb-2 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10 border border-white/10'>
                    Submit
                  </button>

                </div>

            </div>
          </div>
        </div>

      </div>
  )
}

export default ReplyForm