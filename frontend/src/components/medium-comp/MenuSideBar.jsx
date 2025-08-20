import React, { useState } from 'react'
import {ChevronLeftIcon} from '@heroicons/react/24/solid'


const MenuSideBar = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const menuElements = [
    {
      text: "Coffee",
      subTexts: [
        {kind: "Base Coffee", },
        {kind: "Frappes (Coffee-Based)", },
      ]
    },
    {
      text: "Non-Coffee",
      subTexts: [
        {kind: "Frappes (Non-Cofee Based)", },
        {kind: "Smoothies | Shakes", },
        {kind: "Matcha Series", },
        {kind: "Milk-Based", },
        {kind: "Tea", },
        {kind: "Other Drinks", },
      ]
    },
    {
      text: "Rolled Ice Cream",
      subTexts: [
      ]
    },
    {
      text: "Pastries",
       subTexts: [
        {kind: "Croffles", },
        {kind: "Cinnamon Rolls", },
        {kind: "Cookies", },
        {kind: "Brownies|Cupcakes|Muffins", },
      ]
    },
    {
      text: "Cakes",
      subTexts: [
        {kind: "Starters", },
        {kind: "Sandwich", },
        {kind: "Pizza", },
        {kind: "Pasta", },
      ]
    },
    {
      text: "All-day Favourites",
       subTexts: [
        {kind: "Cake-in-a-tub",},
        {kind: "Whole Cakes", },
      ]
    },
    {
      text: "Lunch Plates",
      subTexts: [
        {kind: "Rice Meals",},
      ]
    },
    {
      text: "Add-ons",
      subTexts: [
      ]
    },
    
  ]

  return (
    <div className='w-[300px] '>
      <div className='p-4'>
        <p className='text-lg font-bold'>Menu</p>
        <ul >
          {menuElements?.map((element, index) => 
            <li 
                key={index}
              >
              <div className='flex w-full rounded-sm justify-between p-[2px] pr-2 items-center cursor-pointer hover:bg-white/10'
                  onClick={ () => toggleOpen(index)}
              >
                <p className='pl-2 '>{element.text}</p>
                {element.subTexts.length > 0 && 
                  <ChevronLeftIcon className={`h-5 ${
                    openIndex === index ? "rotate-[-90deg]" : ""
                  }`}></ChevronLeftIcon>
                }
              </div>
              {openIndex === index && (
               <ul>
                {element?.subTexts.map((kind, i) => 
                  <li 
                    className='text-sm pl-8 cursor-pointer hover:bg-white/10 rounded-sm p-[2px]'
                    key={i}>
                    {kind.kind}
                  </li>
                )}
               </ul>
              )}
            </li>
          )}
        </ul>

      </div>
    </div>
  )
}

export default MenuSideBar