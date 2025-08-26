import React from 'react'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarOutline, ArrowTurnDownRightIcon  } from '@heroicons/react/24/outline'
import Reply from '../components/medium-comp/Reply'
import Review from '../components/medium-comp/Review'
import { assets } from '../assets/assets'

const Reviews = () => {
  const reviewItems = [
    {
      profilepic: assets.affogato,
      username: "Monkey",
      rate: 5,
      itemReviewed: "Matcha latte",
      text:"The place is so nice like what the helly",
      image: assets.fruit_tea,
      datetime: "9:10 PM August 25",
      replies:[
        {username: "Zebra", profilepic: assets.about_us_3, text:"I really like the place too", dateTime:"9:10AM 21 Aug 25"}
      ]
    },
      {
      profilepic: assets.affogato,
      username: "Halla burapika",
      rate: 5,
      // itemReviewed: "Ameracano",
      text:"The place is so nice like what the helly",
      datetime: "9:10 PM August 25",
    }
  ]




  return (
    <div className='w-full'>  
      <div className='w-full max-w-2xl m-auto flex flex-col items-center '>
        <p className='mt-8 text-4xl font-bold'>REVIEWS</p>
        <div className='w-full h-[1px] mt-2 bg-white'></div>


        <div className='w-full flex flex-col justify-baseline pt-4 pb-16 '>

        {/* This is where you itereate */}
          
          {/* prof-pic, username, rate [int], item-reviewed [default none], text, image [array],  datetime, reply [array],  */}
          <ul>
            {reviewItems.map((item, index) =>
              <li key={index}>
                <Review
                  profilePic={item.profilepic}
                  username={item.username}
                  rate={item.rate}
                  itemReviewed={item.itemReviewed}
                  text={item.text}
                  image={item.image}
                  dateTime={item.datetime}
                  replies={item.replies}
                ></Review>
              </li>
            )}
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Reviews