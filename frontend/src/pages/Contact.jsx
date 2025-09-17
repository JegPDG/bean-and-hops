import React, { useState } from 'react'
import { assets} from '../assets/assets'
import { Button } from '../components/small-comp/Button';
import { Facebook, Instagram } from '../assets/icons';
import { ChevronLeftIcon, ChevronRightIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Email from '../components/medium-comp/Email';
import { Link } from 'react-router';

const Contact = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const placeImages = [assets.place_1, assets.place_2, assets.place_3, assets.place_4]

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === placeImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? placeImages.length - 1 : prevIndex - 1
    );
  };
  
  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrevious();
  };
  

  const handleSeeMore = () => {
    setSeeMore(prev =>  !prev)
  }


  return (
    <div className='w-full mb-16 animate-[fadeInUp_0.5s_ease-out]'>
      <div className='w-full max-w-5xl m-auto pt-8 pl-4 pr-4  flex items-center flex-col '>

        {/* upper reservations  */}
        <div className='w-full flex items-center flex-col pb-20'>
          <p className='text-xl font-bold md:text-3xl lg:text-4xl'>UPPER FLOOR RESERVATION</p>
          <p className='w-full max-w-2xl pt-4 text-center text-xs md:text-lg pl-2 pr-2'>Host your next gathering in comfort and style. Choose our cozy Mezzanine/Loft Area or the Entire Upper Floor -- perfect for small events, meetings, or private celebrations.</p>

          <div className='flex flex-col md:flex-row lg:gap-8 pt-8'>
          <div className='flex-1 relative '>
            <div 
              className='relative overflow-hidden rounded-lg h-64 md:h-80 cursor-grab active:cursor-grabbing'
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              >
              <div className='flex transition-transform duration-300 ease-out h-full'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {placeImages.map((image, index) =>
                  <img 
                    key={index}
                    src={image}
                    alt="" 
                    className='w-full h-full object-cover flex-shrink-0'
                    draggable={false}
                    />
                )}
              </div>

              {/* Navigation Arrows - Hidden on mobile for better swipe experience */}
              <button
                onClick={goToPrevious}
                className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/40 text-gray-800 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition-all z-10 hidden md:block'
              >
                <ChevronLeftIcon className='size-6' fill='#121212'></ChevronLeftIcon>
              </button>
              <button
                onClick={goToNext}
                className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/40 bg-opacity-90 text-gray-800 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition-all z-10 hidden md:block'
              >
                <ChevronRightIcon className='size-6' fill='#121212'></ChevronRightIcon>
              </button>
            </div>

            <div className='flex justify-center items-center mt-4 space-x-2'>
              {placeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <div className='text-center mt-2 text-xs text-gray-500 md:hidden'>
              Swipe to navigate
            </div>
          </div>



            {/* Right side  */}
            <div className='pl-8 md:text-lg h-full relative'>
              <div>
                <p className='text-xs md:text-sm'>Maximum of 5 hours <br />
                  25-30 guests <br />
                  $1,000 reservation fee <br />
                  $5,000 consumable requirement <br />
                  $200 per additional hour beyond 5 hours
                </p>
                <p className='pt-4 text-xs md:text-sm'>
                  <span className='font-bold'>RESERVATION TERMS:</span> <br />
                  50% down payment required to confirm booking <br />
                  Remaining 50% to be paid on the day of the reservation <br />
                  No outside food allowed (subject to corkage fees)
                </p>
              </div>
            </div>
          </div>

          <p className='pt-8 font-bold text-xs md:text-lg'>Plan your next memorable moment with us!</p>
          <p className='pt-4 pl-2 pr-2 w-full max-w-xl text-center text-xs md:text-lg'>Book in advance to secure your preferred date. Ask our staff for more details or to check availability</p>

        </div>


        {/* contacts */}
        <div className='w-full flex items-center flex-col pb-8'>
          <p className='text-4xl font-bold'>CONTACTS</p>
          
          <p className='pt-8 font-bold'>Visit us at:</p>
          
          <div className='flex gap-6 pt-8 flex-col md:flex-row'>

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
                  <p>Bean and Hops </p>
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
        <div className='p-4'>
          <Email></Email>
        </div>
          
      </div>
    </div>
  )
}

export default Contact