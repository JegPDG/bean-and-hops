import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router'
import MenuItem from '../components/medium-comp/MenuItem'


const MenuItemsAll = () => {
  const { selectedcategory, category, itemName} = useOutletContext();
  const [menuItemName, setMenuItemName] = useState(null);
  const navigate = useNavigate();
  
  
  const handleNameSelect = (name) => {
    setMenuItemName(name)
    // itemName(name)
    console.log(name)
  }

  return (
    <div>
      {category && (
          <ul className='w-full min-h-[100vh] mt-12 md:mt-4 flex flex-col animate-[fadeInUp_0.6s_ease-out] '>
            {category?.map((categ, index) => 
              <li key={index} className='w-full'>
                <div className='w-full pt-4 pr-4 pl-4'>
                  <p className='text-4xl md:text-5xl font-bold'>{categ.Category}</p>
                </div> 

                <ul className='w-full pl-4'>
                  {categ?.Subtypes.map((subtype, index) => 
                    <li key={index} id={subtype.Subtype}>
                      <p className='mt-4 text-xl md:text-2xl'>{subtype.Subtype}</p> 
                      
                      <ul className='grid grid-cols-1 gap-2 w-full md:grid-cols-1 lg:grid-cols-2 p-4'>
                        {subtype.Items?.map((item, index) => 
                          <li key={index} >
                            {/* name, image, prices, description */}
                            <MenuItem
                              onNameSelect={handleNameSelect}
                              
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

    </div>
  )
}

export default MenuItemsAll