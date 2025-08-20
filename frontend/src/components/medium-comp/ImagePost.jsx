import React from 'react'

const ImagePost = ({image, title, caption}) => {
  return (
    <div className='w-[400px] h-[400px] bg-amber-400 border rounded-3xl relative overflow-hidden shrink-[0]'    >
    <img className='w-full h-full object-cover ' src={image} alt="" />

    <div className='w-full bg-gradient-to-t from-bg-dark-500 to-bg-dark-500/0 h-64 absolute bottom-0'></div>
      <div className='absolute bottom-0 pl-[24px] pr-[24px] pb-[16px]'>
        <p className='text-base font-bold mb-[5px]'>{title}</p>
        <p className='text-xs'>{caption}</p>
      </div>
    </div>
  )
}

export default ImagePost