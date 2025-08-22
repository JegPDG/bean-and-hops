import React from 'react'

const PostItem = ({image, caption}) => {
  return (
    <div className='w-full aspect-square bg-blue-700 overflow-hidden relative'>
      <img className='w-full h-full object-cover' src={image} alt="" />
      <div className='bg-gradient-to-t from-black/80 to-black/0 w-full h-20 absolute bottom-0'></div>
      
      <div className='absolute bottom-0 pl-4 pb-2 w-full'>
        <p className='text-xs pt-2 limited-text'>{caption}</p>
      </div>
    </div>
  )
}

export default PostItem