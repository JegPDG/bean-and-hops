import React from 'react'
import { assets } from '../assets/assets'

const AboutUs = () => {
  return (
    <div className='w-full animate-[fadeInUp_0.6s_ease-out]'>
      <div className='w-full max-w-2xl m-auto pb-16'>
        <div className='w-full flex items-center flex-col pl-4 pr-4 mt-2'>
          
          <div className='flex items-center gap-2'>
            <img className='size-16 md:size-24' src={assets.bean_and_hops_white} alt="" />
            <div>
              <p className=' text-2xl md:text-4xl font-bold tracking-[6px] md:tracking-wider '>BEAN &amp; HOPS</p>
              <p className='text-sm md:text-lg tracking-[3px]'>COFFEE AND ROASTERY</p>
            </div>
          </div>

          <div className='w-full max-w-2xl'>
            <p className='text-sm text-center pt-8 italic'>Crafting Coffee, Building Community</p>

            <p className='pt-4 text-center text-sm md:text-lg'>At <span className='font-bold '>Bean & Hops Coffee Roastery</span>, we believe every cup tells a story. Founded with a passion for quality and a love for bringing people together, we roast our beans in-house to deliver rich, unforgettable flavors in every sip.</p>
          </div>

          <div className='flex pt-8 gap-8 items-center flex-col md:flex-row'>
            <img className='h-[400px]' src={assets.about_us_1} alt="" />
            <div>
              <p className='text-sm md:text-lg'> <span className='font-bold'>Our Journey</span> <br />
                What started as a dream to blend artisanal coffee craftsmanship with a warm, welcoming space has grown into a beloved local hub. From our carefully sourced beans to our signature drinks, we pour dedication into every detail.</p>
            </div>
          </div>

          <div className='flex pt-8 gap-8 items-center flex-col-reverse md:flex-row'>
            <div>
              <p className='text-sm md:text-lg'> <span className='font-bold'>Why Us?</span> <br />
                ✔ Small-Batch Roasted – Freshness you can taste. <br />
                ✔ Community First – Live music, workshops, and a place to connect. <br />
                ✔ Sustainable & Ethical – Supporting farmers and eco-friendly practices.</p>
            </div>
            <img className='h-[400px]' src={assets.about_us_2} alt="" />
          </div>

          <div className='flex pt-8 flex-col items-center'>
            <div className='pb-8 text-lg'>
              <p className='text-sm text-center'>Visit us to experience coffee done right.</p>
              <p className='pt-4 italic font-bold text-center'>"Brewed for you, crafted with passion."</p>
            </div>
             <img className='max-h-[400px] w-auto' src={assets.about_us_3} alt="" />
          </div>

        </div>
      </div>  
    </div>
  )
}

export default AboutUs