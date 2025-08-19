import React from 'react'
import { assets } from '../assets/assets'
import { Button } from '../components/small-comp/Button'
import ImagePost from '../components/medium-comp/ImagePost'

const Home = () => {
  const imgPost = [
    {
      image: assets.sample_1,
      title: "Dark Chocolate hazelnut Cookie",
      subtitle: "𝙁𝙧𝙤𝙢 𝘽𝙚𝙖𝙣 𝙩𝙤 𝘽𝙧𝙚𝙬 𝙞𝙣 10 𝙨𝙚𝙘𝙤𝙣𝙙𝙨  | Watch the magic unfold as Bean and Hops takes you from roasting fresh coffee beans to pouring the perfect cup."
    },
     {
      image: assets.sample_2,
      title: "Pizza Dos Ala King Burger",
      subtitle: "Rich Hawaiian pizza sourced from the Hawii Archipelago in the UNited States of America"
    },
     {
      image: assets.sample_3,
      title: "Ceremonial Matcha",
      subtitle: "Leaves personally hervested from the mountains of Fuji, High quality matcha leaves"
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
        <div className="relative w-full max-w-5xl m-auto h-screen flex items-center  flex-col mt-10 ">
          <img className='size-40'
            src={assets.bean_and_hops_white} alt="" />

          <p className='font-bold text-8xl tracking-wider'>
            BEAN &amp; HOPS
          </p>
          <p className='text-4xl tracking-[16px]'>
            COFFEE AND ROASTERY
          </p>

          <p className='w-full max-w-2xl text-center mt-8 italic text-2xl'>
            From bold brews to flavorful bites — Bean and Hops is where coffee meets craft and every craving finds its match.
          </p>

          <div className='flex gap-[20px] mt-[20px]'>
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
            <ul className="mt-[20px] flex gap-[20px] mb-[20px] overflow-x-scroll no-scrollbar">
              {imgPost.map((imgpost, index) =>
                <li key={index}>
                  <ImagePost
                    image={imgpost.image}
                    title={imgpost.title}
                    subtitle={imgpost.subtitle}
                  ></ImagePost>
                </li>
              )}
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home