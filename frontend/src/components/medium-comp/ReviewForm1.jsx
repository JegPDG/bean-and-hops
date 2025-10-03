import React, { useState } from 'react'
import { StarIcon as StarOutline, ArrowTurnDownRightIcon  } from '@heroicons/react/24/outline'
import { PlusIcon, StarIcon as StarSolid } from '@heroicons/react/24/solid'

import Reply from './Reply'
import { useAuth} from '../../context/AuthContext'
import { reviewsAPI } from '../../services/api'
import GoogleSignIn from './GoogleSignIn'


const ReviewForm1 = ({itemReviewed, onReviewSubmitted}) => {
  // {profilePic, username, rate, itemReviewed, text, image, dateTime, replies}
  // user in seralizers 'id', 'first_name', 'last_name', 'email'

  const { user, isAuthenticated } = useAuth();
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false);
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

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      alert('Please sign in first');
      return;
    }

    if (!formData.rvw_text.trim()) {
      alert('Please write a review');
      return;
    }

    if (!formData.rvw_rate) {
      alert('Please select a rating');
      return;
    }

    setLoading(true);
    try {
      const submitData = new FormData();
      submitData.append('rvw_item', formData.rvw_item);
      submitData.append('rvw_rate', parseInt(formData.rvw_rate));
      submitData.append('rvw_text', formData.rvw_text);
      
      if (formData.rvw_image) {
        submitData.append('rvw_image', formData.rvw_image);
      }

      await reviewsAPI.createReview(submitData);
      
      // Reset form
      setFormData({
        rvw_item: itemReviewed || '',
        rvw_rate: '',
        rvw_text: '',
        rvw_image: null
      });
      setPreviewImage(null);
      setShowForm(false);
      
      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
      
      alert('✅ Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('❌ Error submitting review');
    } finally {
      setLoading(false);
    }
  };

  const handleTextChange = (e) => {
    setFormData({
      ...formData,
      rvw_text: e.target.value,
    });
  };


  const handleCancel = () => {
    setFormData({
      rvw_item: itemReviewed || '',
      rvw_rate: '',
      rvw_text: '',
      rvw_image: null
    });
    setPreviewImage(null);
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <div className="w-full max-w-lg m-auto pt-4">
        {isAuthenticated ? (
          <button 
            type="button"
            onClick={() => setShowForm(true)}
            className="w-full m-auto flex max-w-lg gap-4  shrink-0 bg-bg-dark-400 h-12 rounded-xl mt-4 items-center justify-center hover:bg-white/10 cursor-pointer"
          >
            ✍️ Write a Review
          </button>
        ) : (
          <div className="text-center p-4 bg-bg-dark-400 rounded-lg">
            <p className="text-white text-lg font-bold">Sign in with Google to write a Review</p>
            <GoogleSignIn></GoogleSignIn>
          </div>
        )}
      </div>
    );
  }
  

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '>
      <div className='bg-bg-dark-400 min-w-[300px] max-w-[800px] w-full box-border p-4 rounded-2xl'>
        <form action="">
          <div className='flex justify-center'>
            <p className='text-3xl font-bold'>Write a review!</p>
          </div>
          
          
          <div className='flex justify-center mt-2 bg-bg-dark-500 flex-col items-center p-2 rounded-lg'>
            <p className='text-xl'>How was it?</p>
            <select
              name="rvw_rate"
              value={formData.rvw_rate}
              onChange={(e) => setFormData({...formData, rvw_rate: e.target.value})}
              required
              className='bg-bg-dark-400 max-w-[300px] p-2 rounded-lg mt-2'
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
              <img className='size-12 object-cover shrink-0' src={user?.picture} alt="" />
            </div>

            <div className='w-full '> 
              <div className='flex shrink-0'>

                {/* Username */}
                <p className='font-bold'>{user?.first_name}</p> 
                {/* <p> &nbsp; | &nbsp;</p> */}

              </div>

              <div>

                  {/* text review */}
                  <textarea 
                    name="comment" 
                    id="review-input"
                    onChange={handleTextChange}
                    className='w-full bg-bg-dark-500 text-sm resize-none p-[4px] min-h-[100px] mt-2 rounded-lg'
                    ></textarea>
                  {/* <p className='text-sm'> {text} </p> */}

                  {/* Image preview */}
                  {previewImage && (
                    <div className='mt-4 rounded-2xl w-full bg-bg-dark-400 flex items-center justify-center overflow-hidden relative'>
                      <img className='w-full h-full object-cover' src={previewImage} alt="Preview" />
                      <button
                        onClick={() => {
                          setPreviewImage(null);
                          setFormData({...formData, rvw_image: null});
                        }}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  
                  {/* Line  */}
                  <div className='w-full h-[0.5px] mt-2 bg-white/10'></div>

                  {/* Button */}
                  <div className='flex flex-row gap-2 justify-end'>
                    {/* <button 
                      className='bg-bg-dark-400  pl-4 pr-4 pt-2 pb-2 mt-1 rounded-md text-xs cursor-pointer bg-bg-dark-500/80 hover:bg-white/10 flex gap-2'>
                      <PlusIcon className='size-4'></PlusIcon>
                      Add Image 
                    </button> */}



                    <div className='flex border border-white/10 mt-1 rounded-md'>
                      <input 
                        type="file" 
                        accept='image/*'
                        className='hidden'
                        onChange={handleImageChange}
                        id='image-upload'
                        >
                      </input>

                      <label 
                        htmlFor="image-upload"
                        className="flex flex-row items-center bg-bg-dark-500/80 px-3 py-1 rounded-md text-xs cursor-pointer hover:bg-white/10 transition-colors "
                      >
                        <PlusIcon className='size-4'></PlusIcon>
                        Add Photo
                      </label>
                    </div>
                    

                    <button 
                      type='button'
                      onClick={handleSubmit}
                      className='bg-bg-dark-500/80 pl-4 pr-4 pt-2 pb-2 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10 border border-white/10'>
                      {loading ? 'Submitting...' : 'Submit'}
                    </button>
                    <button 
                      onClick={handleCancel}
                      className=' bg-bg-dark-500/80 pl-4 pr-4 pt-2 pb-2 mt-1 rounded-md text-xs cursor-pointer hover:bg-white/10 border border-white/10'>
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