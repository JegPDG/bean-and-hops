import React from 'react'

const Posts = ({ type, src, title, caption }) => {
  // This is a Post that accepts videos or images
  return (
    <div
      className={`relative border rounded-2xl overflow-hidden shrink-[0] ${
        type === "video" ? "w-[225px] h-[400px]" : "w-[400px] h-[400px]" 
      }`}
    >
      {type === "image" ? (
        <img src={src} alt={title} className="w-full h-full object-cover" />
      ) : (
        <video
          src={src}
          controls
          className="w-full h-full object-cover"
        ></video>
      )}

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-white font-bold text-sm">{title}</p>
        <p className="text-white text-xs">{caption}</p>
      </div>
    </div>
  )
}

export default Posts