import React from 'react'
import { assets } from '../assets/assets'

const AboutUs = () => {
  return (
    <div className='w-full'>
      <div className='w-full max-w-2xl m-auto pb-16'>
        <div className='w-full flex items-center flex-col'>
          
          <div className='flex items-center'>
            <img className='size-24' src={assets.bean_and_hops_white} alt="" />
            <div>
              <p className='text-4xl font-bold tracking-wider'>BEAN &amp; HOPS</p>
              <p className='text-lg tracking-[3px]'>COFFEE AND ROASTERY</p>
            </div>
          </div>

          <div className='w-full max-w-2xl'>
            <p className='text-center pt-8 italic'>Crafting Coffee, Building Community</p>

            <p className='pt-4 text-center'>At <span className='font-bold'>Bean & Hops Coffee Roastery</span>, we believe every cup tells a story. Founded with a passion for quality and a love for bringing people together, we roast our beans in-house to deliver rich, unforgettable flavors in every sip.</p>
          </div>

          <div className='flex pt-8 gap-8 items-center'>
            <img className='h-[400px]' src={assets.about_us_1} alt="" />
            <div>
              <p> <span className='font-bold'>Our Journey</span> <br />
                What started as a dream to blend artisanal coffee craftsmanship with a warm, welcoming space has grown into a beloved local hub. From our carefully sourced beans to our signature drinks, we pour dedication into every detail.</p>
            </div>
          </div>

          <div className='flex pt-8 gap-8 items-center'>
            <div>
              <p> <span className='font-bold'>Why Us?</span> <br />
                ✔ Small-Batch Roasted – Freshness you can taste. <br />
                ✔ Community First – Live music, workshops, and a place to connect. <br />
                ✔ Sustainable & Ethical – Supporting farmers and eco-friendly practices.</p>
            </div>
            <img className='h-[400px]' src={assets.about_us_2} alt="" />
          </div>

          <div className='flex pt-8 flex-col items-center'>
            <div className='pb-8'>
              <p>Visit us to experience coffee done right.</p>
              <p className='pt-4'>"Brewed for you, crafted with passion."</p>
            </div>
             <img className='h-[400px]' src={assets.about_us_3} alt="" />
          </div>

        </div>
      </div>  
    </div>
  )
}

export default AboutUs