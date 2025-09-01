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
          <ul className='w-full min-h-[100vh] flex flex-col animate-[fadeInUp_0.6s_ease-out] '>
            {category.map((categ, index) => 
              <li key={index} className='w-full'>
                <div className='w-full pt-4'>
                  <p className='text-5xl font-bold'>{categ.Category}</p>
                </div> 

                <ul className='w-full pl-4'>
                  {categ.Subtypes.map((subtype, index) => 
                    <li key={index} id={subtype.Subtype}>
                      <p className='mt-4 pb-4 text-3xl'>{subtype.Subtype}</p> 
                      
                      <ul className='grid grid-cols-2 gap-2 w-full'>
                        {subtype.Items.map((item, index) => 
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