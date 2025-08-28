import React, { useState } from 'react'
import MenuSideBar from '../components/medium-comp/MenuSideBar'
import { assets } from '../assets/assets'
import MenuItem from '../components/medium-comp/MenuItem'
import { useQuery } from '@tanstack/react-query'
import api from '../services/api'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Coffee")
  const [selectedSubtype, setSelectedSubtype] = useState("Base Coffee")
  const [categ, setCateg] = useState(null)

  const getCategory = async(categ) => {
    const res = await api.get(`menuitem/grouped-category/${categ}/`)
    const data = res.data;
    console.log(typeof (data))
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

          {category && (
          <ul className='w-full min-h-[100vh] flex flex-col'>
            {category.map((categ, index) => 
              <li key={index} className='w-full'>
                <div className='w-full pt-4'>
                  <p className='text-5xl font-bold'>{categ.Category}</p>
                </div> 

                <ul className='w-full pl-4'>
                  {categ.Subtypes.map((subtype, index) => 
                    <li key={index}>
                      <p className='mt-4 pb-4 text-3xl'>{subtype.Subtype}</p> 
                      
                      <ul className='grid grid-cols-2 gap-2 w-full'>
                        {subtype.Items.map((item, index) => 
                          <li key={index}>
                            {/* name, image, prices, description */}
                            <MenuItem
                              name={item.mnu_name}
                              image={item.mnu_image}
                              prices={item.mnu_prices}
                              description={item.mnu_description}
                            >
                            </MenuItem>
                          </li>
                        )}
                      </ul>

                    </li>
                  )}

                </ul>    

              </li>
            )}
          </ul>
          )}




          <div className='w-full min-h-[100vh]'>
            <div className='w-full pt-4'>
              <p className='text-5xl font-bold'>COFFEE</p>
            </div>

            <div className='w-full pl-4'>
              <p className='mt-4 pb-4 text-3xl'>Base Coffee</p>

              <ul className='grid grid-cols-2 gap-2 w-full'>
                {menuItems.map((item, index) => 
                  <li key={index}>
                    {/* name, image, prices, description */}
                    <MenuItem
                      name={item.itemName}
                      image={item.image}
                      prices={item.prices}
                      description={item.description}
                    >
                    </MenuItem>
                  </li>
                )}
              </ul>
            </div>

          </div>
        </div>


      
      </div>
    </div>
  )
}

export default Menu