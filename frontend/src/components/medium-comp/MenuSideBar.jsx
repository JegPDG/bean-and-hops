import React, { useState } from 'react'
import {ChevronLeftIcon} from '@heroicons/react/24/solid'
import { use } from 'react';


const MenuSideBar = ({ onMenuSelect, onSubtypeSelect }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [subType, setSubType] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const menuElements = [
    {
      category: "Coffee",
      subTexts: [
        {kind: "Base Coffee", },
        {kind: "Frappes (Coffee-Based)", },
      ]
    },
    {
      category: "Non-Coffee",
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
      category: "Rolled Ice Cream",
      subTexts: [
      ]
    },
    {
      category: "Pastries",
       subTexts: [
        {kind: "Croffles", },
        {kind: "Cinnamon Rolls", },
        {kind: "Cookies", },
        {kind: "Brownies|Cupcakes|Muffins", },
      ]
    },
    {
     category: "Cakes",
      subTexts: [
        {kind: "Starters", },
        {kind: "Sandwich", },
        {kind: "Pizza", },
        {kind: "Pasta", },
      ]
    },
    {
      category: "All-day Favourites",
       subTexts: [
        {kind: "Cake-in-a-tub",},
        {kind: "Whole Cakes", },
      ]
    },
    {
      category: "Lunch Plates",
      subTexts: [
        {kind: "Rice Meals",},
      ]
    },
    {
      category: "Add-ons",
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
                  onClick={ () => {
                    onMenuSelect(element.category)
                    toggleOpen(index)}}
              >
                <p className='pl-2 '>{element.category}</p>
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
                    onClick={ () => onSubtypeSelect(kind.kind)}
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