import React from 'react'
import { useNavigate } from 'react-router'

const Posts = ({ type, src, title, caption, menuitem }) => {
  // This is a Post that accepts videos or images
  const navigate = useNavigate();

  const handleClick = () => {
    if (menuitem){
      navigate(`/menu/item-detail/${menuitem}`)
      window.scrollTo(0, 0);
    }
  }



  return (
    <div
      className={`relative border rounded-2xl overflow-hidden shrink-[0] ${
        type === "video" ? "w-[225px] h-[400px]" : "w-[400px] h-[400px]" 
      }`}
      onClick={handleClick}
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