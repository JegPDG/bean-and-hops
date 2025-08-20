import React from 'react'

export const Button = ({children, onClick, className = " "}) => {
  return (
      <button 
        onClick={onClick}
        className={`h-[48px] w-[200px] cursor-pointer bg-white-500/10 font-bold text-xl rounded-lg outline hover:bg-white-500/40 ${className}`}
        >
        {children}
      </button>
  )
}
