import React from 'react'
import { assets } from '../assets/assets'
import { Button } from '../components/small-comp/Button'
import ImagePost from '../components/medium-comp/ImagePost'
import VideoPost from '../components/medium-comp/VideoPost'
import Posts from '../components/medium-comp/Posts'


const Home = () => {
  const post = [
    {
      type: "image",
      src: assets.sample_1,
      title: "Dark Chocolate hazelnut Cookie",
      caption: "𝙁𝙧𝙤𝙢 𝘽𝙚𝙖𝙣 𝙩𝙤 𝘽𝙧𝙚𝙬 𝙞𝙣 10 𝙨𝙚𝙘𝙤𝙣𝙙𝙨  | Watch the magic unfold as Bean and Hops takes you from roasting fresh coffee beans to pouring the perfect cup."
    },
     {
      type: "image",
      src: assets.sample_2,
      title: "Pizza Dos Ala King Burger",
      caption: "Rich Hawaiian pizza sourced from the Hawii Archipelago in the UNited States of America"
    },
     {
      type: "image",
      src: assets.sample_3,
      title: "Ceremonial Matcha",
      caption: "Leaves personally hervested from the mountains of Fuji, High quality matcha leaves"
    },
    {
      type: "video",
      src: assets.sample_3,
      title: "Ceremonial Matcha",
      caption: "Leaves personally hervested from the mountains of Fuji, High quality matcha leaves"
    },
  ]

  const places = [
    {
      img: assets.place_1
    },
     {
      img: assets.place_2
    },
     {
      img: assets.place_3
    },
     {
      img: assets.place_4
    },
     {
      img: assets.place_5
    },
  ]

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden"
          style={{height: "calc(100vh - 64px)"}}
        >
        {/* Blurred background */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-xs"
          style={{ backgroundImage: `url(${assets.bah_bg_img})`}}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative w-full max-w-5xl m-auto h-screen flex items-center  flex-col ">
          <img className='size-40'
            src={assets.bean_and_hops_white} alt="" />

          <p className='font-bold text-8xl tracking-wider'>
            BEAN &amp; HOPS
          </p>
          <p className='text-4xl tracking-[16px]'>
            COFFEE AND ROASTERY
          </p>

          <p className='w-full max-w-2xl text-center mt-16 italic text-2xl'>
            From bold brews to flavorful bites — Bean and Hops is where coffee meets craft and every craving finds its match.
          </p>

          <div className='flex gap-[20px] mt-16'>
            <Button>
              Visit Menu
            </Button>

            <Button>
              Reservations
            </Button>
          </div>
        </div>
      </div>

      <div className='w-full '>
        <div className='w-full box-border p-[20px]'>
          <p className='text-5xl mt-[32px] font-bold'>
            WHAT'S NEW?
          </p>

          <div>
            <ul className="mt-[20px] flex gap-[20px] overflow-x-scroll scrollbar-style">
              {post.map((imgpost, index) =>
                <li
                className='mb-[20px]'
                key={index}>
                  <Posts
                    type={imgpost.type}
                    src={imgpost.src}
                    title={imgpost.title}
                    caption={imgpost.caption}
                  ></Posts>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      
      <div className='w-full bg-white pb-6'>
        <div className='w-full max-w-5xl m-auto mb-8 '>
          <div className='mt-4 pt-8 w-full m-auto flex items-baseline gap-4'>
              <p className='text-5xl font-bold text-(--color-bg-dark-500) mr-16'>Our Place</p>
              <p className='text-(--color-bg-dark-500) text-xl '>Location</p>
              <p className='text-(--color-bg-dark-500) text-xl'>Reservations</p>
          </div>
          
          <ul className='flex flex-wrap gap-2 h-[60vh] overflow-y-auto mt-4 no-scrollbar '>
            {places.map((place, index) => 
              <li 
                className=''
                key={index}>
                <img className='h-[300px] w-auto' src={place.img} alt="" />
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home