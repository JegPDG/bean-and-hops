import React from 'react'
import { useOutletContext } from 'react-router'
import { assets } from '../assets/assets';
import Review from '../components/medium-comp/Review';

const MenuItemDetail = () => {
  const {selectedCategory, category} = useOutletContext();






  // console.log(category)
  return (
    <div className='pb-16'>
      <div>
        <ul>
          {category.map((categ, index) => 
            <li key={index}>
              <div className='w-full pt-4'>
                  <p className='text-5xl font-bold'>{categ.Category}</p>
              </div>

              <div className='w-full flex justify-center'>
                <p className='text-3xl'>Base Coffee</p>
              </div>

              <div className='w-full pl-4 mt-4' >
                {/* Item Card */}
                <div className='ITEMCARD w-full bg-bg-dark-400 h-[400px] flex shrink-0'>
                  {/* LeftSide images */}
                  <div className='w-[60%] bg-amber-800 h-full shrink-0'>
                    <img className='w-full h-full object-cover' src={assets.affogato} alt="" />
                  </div>

                  {/* Right side */}
                  <div className='p-4 w-full'>
                    <p className='text-4xl font-bold'>Name</p>
                    <p>Description</p>

                    <p className='font-bold text-xl pt-16' >Price:</p>
                    <div className='flex flex-col items-center w-full'>
                      <p>Single Shot</p>
                      <p className='text-2xl font-bold'>$78</p>
                    </div>


                  </div>
                </div>

                <div className='mt-8 w-full'>
                  <p className='text-2xl font-bold'>Review</p>
                  <div className='w-full h-[1px] mt-2 bg-white'></div>

                  <div className='div-full' >

                    <Review></Review>
                  </div>

                  <div className='w-full m-auto flex max-w-lg gap-4  shrink-0 bg-bg-dark-400 h-12 rounded-xl mt-4 items-center justify-center'>
                    <p>Add Review</p>
                  </div>

                </div>


              </div>

            </li>
          )}

        </ul>
      </div>
    </div>
  )
}

export default MenuItemDetail