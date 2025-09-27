import React, { useState } from 'react'
import { StarIcon as StarOutline, ArrowTurnDownRightIcon  } from '@heroicons/react/24/outline'
import { PlusIcon, StarIcon as StarSolid } from '@heroicons/react/24/solid'

import Reply from './Reply'
import { useAuth } from '../../context/AuthContext'


const ReviewForm1 = ({itemReviewed}) => {
  // {profilePic, username, rate, itemReviewed, text, image, dateTime, replies}
  // user in seralizers 'id', 'first_name', 'last_name', 'email'

  const { user, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    rvw_item: itemReviewed || '',
    rvw_rate: '',
    rvw_text: '',
    rvw_image: null
  });

  const handleImageChange = (e) => {
  const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        rvw_image: file
      });
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => setPreviewImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
      <div className='bg-bg-dark-400 min-w-[300px] max-w-[600px] w-full box-border p-4 rounded-2xl'>
        <form action="">
          <div className='flex justify-center'>
            <p className='text-3xl font-bold'>Write a review!</p>
          </div>
          
          
          <div className='flex justify-center mt-2 bg-bg-dark-500 flex-col items-center p-2 rounded-lg'>
            <p className='text-xl'>How was it?</p>
            <select
              name="rvw_rate"
              value={formData.rvw_rate}
              // onChange={handleChange}
              required
              className='bg-bg-dark-400 max-w-[250px] p-2 rounded-lg mt-2'
            >
              <option value="">Select rating...</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>

          </div>

          <div className='w-full m-auto flex max-w-lg gap-4 pt-4 shrink-0'>
            {/* Profile picture */}
            <div className='size-12 aspect-square rounded-[50%] bg-amber-50 flex overflow-hidden shrink-0'>
              <img className='size-12 object-cover shrink-0' src={user?.first_name} alt="" />
            </div>

            <div className='w-full '> 
              <div className='flex shrink-0'>

                {/* Username */}
                <p className='font-bold'>Usernamee</p> 
                {/* <p> &nbsp; | &nbsp;</p> */}

              </div>

              <div>

                  {/* text review */}
                  <textarea 
                    name="comment" 
                    id="review-input"
                    className='w-full bg-bg-dark-500 text-sm resize-none p-[4px] min-h-[100px] mt-2 rounded-lg'
                    ></textarea>
                  {/* <p className='text-sm'> {text} </p> */}

                  
                  <div className='w-full h-[0.5px] mt-2 bg-white/10'></div>

                  {/* Button */}
                  <div className='flex flex-row gap-2 justify-end'>
                    <button className='bg-bg-dark-400  pl-4 pr-4 pt-2 pb-2 mt-1 rounded-md text-xs cursor-pointer bg-bg-dark-500/80 hover:bg-white/10 flex gap-2'>
                      <PlusIcon className='size-4'></PlusIcon>
                      Add Image 
                    </button>
                    {/* <input 
                      type="file" 
                      className='bg-bg-dark-400  pl-4 pr-4 pt-2 pb-2 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10 flex gap-2'

                      >
                        <PlusIcon className='size-4'></PlusIcon>
                        Add Image
                      </input> */}


                    <button className='bg-bg-dark-400 bg-bg-dark-500/80 pl-4 pr-4 pt-2 pb-2 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10'>
                      Submit
                    </button>
                    <button className='bg-bg-dark-400 bg-bg-dark-500/80 pl-4 pr-4 pt-2 pb-2 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10'>
                      Cancel
                    </button>

                  </div>

              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default ReviewForm1