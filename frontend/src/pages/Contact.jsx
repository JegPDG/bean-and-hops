import React, { useState } from 'react'
import { assets} from '../assets/assets'
import { Button } from '../components/small-comp/Button';
import { Facebook, Instagram } from '../assets/icons';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Email from '../components/medium-comp/Email';
import { Link } from 'react-router';

const Contact = () => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(prev =>  !prev)

  }


  return (
    <div className='w-full mb-16 animate-[fadeInUp_0.5s_ease-out]'>
      <div className='w-full max-w-5xl m-auto pt-8  flex items-center flex-col '>

        {/* upper reservations  */}
        <div className='w-full flex items-center flex-col pb-20'>
          <p className='text-4xl font-bold'>UPPER FLOOR RESERVATION</p>
          <p className='w-full max-w-2xl pt-4 text-center'>Host your next gathering in comfort and style. Choose our cozy Mezzanine/Loft Area or the Entire Upper Floor -- perfect for small events, meetings, or private celebrations.</p>

          <div className='flex pt-6'>
            <div className='w-[500px] flex flex-col gap-2'>
              <img src={assets.place_1} alt="" />
              
              { seeMore && 
                  <>
                    <img src={assets.place_2} alt="" />
                    <img src={assets.place_3} alt="" />
                  </>
              }
            </div>

            <div className='pl-8 relative'>
              <p className='text-sm'>Maximum of 5 hours <br />
                25-30 guests <br />
                $1,000 reservation fee <br />
                $5,000 consumable requirement <br />
                $200 per additional hour beyond 5 hours
              </p>
              <p className='pt-4 text-sm'>
                <span className='font-bold'>RESERVATION TERMS:</span> <br />
                50% down payment required to confirm booking <br />
                Remaining 50% to be paid on the day of the reservation <br />
                No outside food allowed (subject to corkage fees)
              </p>
              <div className='pt-8 sticky top-60'>
                <Button 
                  className='text-xs'
                  onClick={handleSeeMore}
                  > 
                  <span>{seeMore ? "See Less Images" : "See More Images"}</span>
                  </Button>
              </div>
            </div>
          </div>

          <p className='pt-8 font-bold'>Plan your next memorable moment with us!</p>
          <p className='pt-4 w-full max-w-xl text-center'>Book in advance to secure your preferred date. Ask our staff for more details or to check availability</p>

        </div>


        {/* contacts */}
        <div className='w-full flex items-center flex-col pb-8'>
          <p className='text-4xl font-bold'>CONTACTS</p>
          
          <p className='pt-8 font-bold'>Visit us at:</p>
          
          <div className='flex gap-6 pt-8'>

            <a href="https://www.instagram.com/beanandhops" target="_blank" >
              <div className='flex items-center cursor-pointer rounded-2xl border border-white hover:bg-white/10 p-4'>
                <Instagram 
                  fill="white"
                  className="w-16 h-16"/>
                <div className=''>
                  <p className='font-bold'>Instagram</p>
                  <p>@beanandhops</p>
                </div>
              </div>
            </a>

            <a href="https://www.facebook.com/Beanandhops1" target="_blank">
              <div className='flex items-center cursor-pointer rounded-2xl border border-white hover:bg-white/10 p-4'>
                <Facebook 
                  fill="white"
                  className="w-16 h-16"/>
                <div className=''>
                  <p className='font-bold'>Facebook</p>
                  <p>@beanandhops</p>
                </div>
              </div>
            </a>

              <div className='flex items-center rounded-2xl border border-white  p-4'>
                <PhoneIcon 
                  fill="white"
                  className="w-13 h-13 mr-2 ml-2"/>
                <div className=''>
                  <p className='font-bold'>Phone</p>
                  <p>+63 919 009 4501</p>
                </div>
              </div>

          </div>
        </div>

        {/* Email Component */}

        <Email></Email>
      </div>
    </div>
  )
}

export default Contact