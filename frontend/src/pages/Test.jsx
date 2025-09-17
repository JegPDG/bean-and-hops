import { useState, useRef } from 'react';

const SwipeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const images = [assets.place_1, assets.place_2, assets.place_3];
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
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

  return (
    <div className='flex flex-col md:flex-row gap-8'>
      {/* Swipe Slider */}
      <div className='flex-1 relative'>
        <div 
          className='relative overflow-hidden rounded-lg h-64 md:h-80 cursor-grab active:cursor-grabbing'
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className='flex transition-transform duration-300 ease-out h-full'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Place ${index + 1}`}
                className='w-full h-full object-cover flex-shrink-0 select-none'
                draggable={false}
              />
            ))}
          </div>
          
          {/* Navigation Arrows - Hidden on mobile for better swipe experience */}
          <button
            onClick={goToPrevious}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-800 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition-all z-10 hidden md:block'
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-800 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition-all z-10 hidden md:block'
          >
            →
          </button>
        </div>
        
        {/* Dots with Swipe Instruction */}
        <div className='flex justify-center items-center mt-4 space-x-2'>
          {images.map((_, index) => (
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

      {/* Content */}
      <div className='flex-1 pl-0 md:pl-8 md:text-lg'>
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
  );
};