import React, { useState } from 'react'
import MenuSideBar from '../components/medium-comp/MenuSideBar'
import { assets } from '../assets/assets'
import MenuItem from '../components/medium-comp/MenuItem'
import { useQuery } from '@tanstack/react-query'
import api from '../services/api'
import { Outlet, useOutletContext } from 'react-router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Menu = () => {
  const {menuOpen, setMenuOpen} = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState("Coffee")
  const [selectedSubtype, setSelectedSubtype] = useState(null)
  const [categ, setCateg] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    const el = document.getElementById(subtype);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
      <button
        className={`${menuOpen && 'hidden'} md:hidden fixed top-20 left-4 z-50 bg-bg-dark-400 p-2 rounded`}
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <ChevronRightIcon className='size-5'></ChevronRightIcon>
      </button>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className='w-full max-w-5xl m-auto flex flex-row min-h-screen pb-8 relative'>
        <div
          className={`
          fixed top-0 left-0 h-full  bg-bg-dark-400 z-50 transform
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300
          md:sticky md:top-16 md:translate-x-0 md:w-auto md:bg-transparent
        `}
        >
          <div className=''>
            <MenuSideBar
              onMenuSelect={ category => {
                handleMenuSelect(category)
                setSidebarOpen(false);
              }}
              onSubtypeSelect={subtype => {
              handleSubtypeSelect(subtype);
              setSidebarOpen(false);
            }}
            ></MenuSideBar>

          </div>
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