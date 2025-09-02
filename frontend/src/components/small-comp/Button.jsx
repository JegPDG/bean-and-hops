import React from 'react'

export const Button = ({children, onClick, className = " "}) => {
  return (
      <button 
        onClick={onClick}
        className={`h-12 w-40 cursor-pointer bg-white-500/10 font-bold text-xs rounded-lg outline hover:bg-white-500/40 ${className} md:h-16 md:w-40 md:text-lg`}
        >
        {children}
      </button>
  )
}
