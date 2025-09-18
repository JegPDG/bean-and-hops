import React from 'react'
import { useNavigate } from 'react-router'

const MenuItem = ({name, image, prices, description, onNameSelect}) => {
  const navigate = useNavigate();
  
  const goToMenuItemDetail = (itemname) => {
    navigate(`/menu/item-detail/${itemname}`)
    window.scrollTo(0, 0);
    console.log(itemname)
  }

  return (
    <div 
      onClick={ () => {
        goToMenuItemDetail(name)
        onNameSelect(name)
      }}
    className='aspect-square overflow-hidden border-2 border-white/40 bg-bg-dark-400  rounded-2xl relative hover:scale-[1.01] cursor-pointer'>
      <div className='absolute bg-bg-dark-500 rounded-br-2xl'>
        <p className='left-4 font-bold text-xl p-2 '>{name}</p>
      </div>
      
      <img className='w-full h-full object-cover' src={image} alt="" />
      
      <div className='bg-gradient-to-t from-black to-black/0 w-full h-44 absolute bottom-0'></div>
      
      <div className='absolute bottom-0 pl-4 pb-2 w-full'>
        <p className='text-sm font-bold'>Price:</p>
        
        <ul className='grid grid-cols-3 gap-2 w-full'>
          {prices.map((price, index) => 
            <li key={index}>
              <div>
                <p className='text-sm'>{price.label}</p>
                <p className='text-2xl font-bold'>${price.price}</p>
              </div>
            </li>
          )}
        </ul>

        <p className='text-xs pt-2'>{description}</p>
      </div>
    </div>
  )
}

export default MenuItem