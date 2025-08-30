import React, { useState } from 'react'
import MenuSideBar from '../components/medium-comp/MenuSideBar'
import { assets } from '../assets/assets'
import MenuItem from '../components/medium-comp/MenuItem'
import { useQuery } from '@tanstack/react-query'
import api from '../services/api'
import { Outlet } from 'react-router'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Coffee")
  const [selectedSubtype, setSelectedSubtype] = useState("Base Coffee")
  const [categ, setCateg] = useState(null)

  const getCategory = async(categ) => {
    const res = await api.get(`menuitem/grouped-category/${categ}/`)
    const data = res.data;
    // console.log(data)
    return data
  }



  const {data : category, isLoading, error} = useQuery({
    queryKey:['category', selectedCategory],
    queryFn: () => getCategory(selectedCategory),
    keepPreviousData: true,
    enabled: !!selectedCategory,
  })

  const handleMenuSelect = (category) => {
    setSelectedCategory(category);
    console.log("selected category", category)
  }

  const handleSubtypeSelect = (subtype) => {
    setSelectedSubtype(subtype)
    console.log("selected subtype ", subtype)
  }

    // Handle loading state
  if (isLoading) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <p>Loading...</p>
      </div>
    )
  }

    // Handle error state
  if (error) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <p>Error: {error.message} {console.log(error.message)}</p>
      </div>
    )
  }

  const gaog = [
    {
    Category: "Non-Coffee",
    Subtypes: [
        {
            Subtype: "Matcha Series",
            Items: [
               {
                  type: "Drink",
                  category: "Coffee",
                  subtype: "Base Coffee",
                  itemName: "Esspresso",
                  image: assets.esspresso,
                  prices: [
                    { size: "Single shot", price: 151,},
                    {size: "Double shot", price:477, },
                  ],
                  description: "Locally sourced from the bottom of my heart"
                },
                {
                  type: "Drink",
                  category: "Coffee",
                  subtype: "Base Coffee",
                  itemName: "Matcha Latte",
                  image: assets.iced_matcha,
                  prices: [
                    {
                      size: "Hot (8oz)",
                      price: 25,
                    },
                    {
                      size: "Hot (12oz)",
                      price: 50,
                    },
                    {
                      size: "Iced (16oz)",
                      price: 150,
                    },
                  ],
                  description: " "
                },
            ]
        }
    ]
}
  ]

  const menuItems = [
    {
      type: "Drink",
      category: "Coffee",
      subtype: "Base Coffee",
      itemName: "Esspresso",
      image: assets.esspresso,
      prices: [
        { size: "Single shot", price: 151,},
        {size: "Double shot", price: 44, },
      ],
      description: "Locally sourced from the bottom of my heart"
    },
    {
      type: "Drink",
      category: "Coffee",
      subtype: "Base Coffee",
      itemName: "Matcha Latte",
      image: assets.iced_matcha,
      prices: [
        {
          size: "Hot (8oz)",
          price: 25,
        },
        {
          size: "Hot (12oz)",
          price: 50,
        },
        {
          size: "Iced (16oz)",
          price: 150,
        },
      ],
      description: " "
    },
     {
      type: "Drink",
      category: "Coffee",
      subtype: "Base Coffee",
      itemName: "Matcha Latte",
      image: assets.iced_matcha,
      prices: [
        {
          size: "Hot (8oz)",
          price: 41,
        },
        {
          size: "Hot (12oz)",
          price: 33,
        },
        {
          size: "Iced (16oz)",
          price: 399,
        },
      ],
      description: " "
    },
  ]

  return (
    <div className='w-full'>
      <div className='w-full max-w-5xl m-auto flex flex-row'>
        <div>
          <MenuSideBar
            onMenuSelect={handleMenuSelect}
            onSubtypeSelect={handleSubtypeSelect}
          ></MenuSideBar>
        </div>

        <div className='flex  flex-col'>

          <Outlet
            context={{selectedCategory, category, selectedSubtype}}
          ></Outlet>

        </div>

      </div>
    </div>
  )
}

export default Menu