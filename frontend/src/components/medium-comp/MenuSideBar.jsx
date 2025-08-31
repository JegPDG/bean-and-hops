import React, { useState } from 'react'
import {ChevronLeftIcon} from '@heroicons/react/24/solid'
import { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../services/api';
import { useNavigate } from 'react-router';


const MenuSideBar = ({ onMenuSelect, onSubtypeSelect }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [subType, setSubType] = useState(null);
  const navigate = useNavigate()

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const getSideBarElement = async() => {
    const res = await api.get('category/')

    return res.data
  }

  const {data: menuelements, isLoading, error} = useQuery({
    queryKey: ['menuSidebar'],
    queryFn: getSideBarElement,
  })


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
        {kind: "Cake-in-a-tub",},
        {kind: "Whole Cakes", },
      ]
    },
    {
      category: "All-day Favourites",
       subTexts: [
        {kind: "Starters", },
        {kind: "Sandwich", },
        {kind: "Pizza", },
        {kind: "Pasta", },
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
          {menuelements?.map((element, index) => 
            <li 
                key={index}
              >
              <div className='flex w-full rounded-sm justify-between p-[2px] pr-2 items-center cursor-pointer hover:bg-white/10'
                  onClick={ () => {
                    onMenuSelect(element.name)
                    toggleOpen(index)
                    navigate('menu/items')
                    window.scrollTo(0, 0);
                  }}
              >
                <p className='pl-2 '>{element.name}</p>
                {element.subtypes.length > 0 && 
                  <ChevronLeftIcon className={`h-5 ${
                    openIndex === index ? "rotate-[-90deg]" : ""
                  }`}></ChevronLeftIcon>
                }
              </div>
              {openIndex === index && (
               <ul>
                {element?.subtypes.map((kind, i) => 
                  <li 
                    onClick={ () => onSubtypeSelect(kind.name)}
                    className='text-sm pl-8 cursor-pointer hover:bg-white/10 rounded-sm p-[2px]'
                    key={i}>
                    {kind.name}
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