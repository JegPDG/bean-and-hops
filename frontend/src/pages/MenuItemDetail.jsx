import React from 'react'
import { useOutletContext, useParams } from 'react-router'
import { assets } from '../assets/assets';
import Review from '../components/medium-comp/Review';
import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

const MenuItemDetail = () => {
  let { itemname } = useParams();
  const {selectedCategory, category, selectedSubtype} = useOutletContext();
  // console.log(itemName)

  const getMenuItemDetail = async() => {
    const res = await api.get(`item-detail/?mnu_name=${itemname}`)
    console.log(res.data)
    return res.data
  }

  const {data: meniItem, isLoading, error} = useQuery({
    queryKey : ['menuDetail'],
    queryFn: getMenuItemDetail,
    keepPreviousData: true

  })

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




  // console.log(category)
  return (
    <div className='pb-16 '>
      <div>
        <ul className='animate-[fadeInUp_0.5s_ease-out] '>
          {meniItem?.map((item, index) => 
            <li key={index}>
              <div className='w-full pt-4'>
                  <p className='text-5xl font-bold'>{item.mnu_category}</p>
              </div>

              <div className='w-full flex justify-center pt-12'>
                <p className='text-3xl'>{item.mnu_subtype}</p>
              </div>

              <div className='w-full pl-4 mt-4' >
                {/* Item Card */}
                <div className='ITEMCARD w-[100%] bg-bg-dark-400 h-[400px] flex shrink-0'>
                  {/* LeftSide images */}
                  <div className='w-[60%] bg-amber-800 h-full shrink-0'>
                    <img className='w-full h-full object-cover' src={item.mnu_image} alt="" />
                  </div>

                  {/* Right side */}
                  <div className='p-4 w-full'>
                    <p className='text-4xl font-bold'>{item.mnu_name}</p>
                    <p>{item.mnu_description}</p>

                    <p className='font-bold text-xl pt-16' >Price:</p>

                    <ul className='w-full'>
                      {item.mnu_prices.map((price, index) => 
                        <li key={index} className='flex flex-col items-center w-full pt-4'>
                          <p>{price.label}</p>
                          <p className='text-2xl font-bold'>${price.price}</p>
                        </li>
                      )}
                    </ul>


                  </div>
                </div>
{/* 
                <div className='mt-8 w-full'>
                  <p className='text-2xl font-bold'>Review</p>
                  <div className='w-full h-[1px] mt-2 bg-white'></div>

                  <div className='div-full' >


                  <ul>
                    {item.reviews.map((review, index) => 
                      <li key={index}>
                        <Review
                          profilePic={review.rvw_icon}
                          username={review.rvw_name}
                          rate={review.rvw_rate}
                          // itemReviewed={review.rvw_item}
                          text={review.rvw_text}
                          image={review.rvw_image}
                          dateTime={review.rvw_date}
                          replies={review.rvw_replies}
                        ></Review>

                      </li>
                    )}
                  </ul>
                  </div>

                  <div className='w-full m-auto flex max-w-lg gap-4  shrink-0 bg-bg-dark-400 h-12 rounded-xl mt-4 items-center justify-center hover:bg-white/10 cursor-pointer'>
                    <p>Add Review</p>
                  </div>

                </div> */}


              </div>

            </li>
          )}

        </ul>
      </div>
    </div>
  )
}

export default MenuItemDetail