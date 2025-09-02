import React from 'react'
import { assets } from '../assets/assets'
import { Button } from '../components/small-comp/Button'
import ImagePost from '../components/medium-comp/ImagePost'
import VideoPost from '../components/medium-comp/VideoPost'
import Posts from '../components/medium-comp/Posts'
import { Link, useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import api from '../services/api'


const Home = () => {
  const navigate = useNavigate();
  
  const handleNavButt = (page) => {
    navigate(`/${page}`)
    window.scrollTo(0, 0);

  } 

  const getPosts = async() => {
    const res = await api.get('post/')
    return res.data
  }

  const {data: postItem, isLoading, error} = useQuery({
    queryKey: ['post'],
    queryFn: getPosts,
    keepPreviousData: true
    
  })

  console.log(postItem)

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
      <div className="relative w-full min-h-screen overflow-hidden animate-[fadeInUp_0.5s_ease-out]"
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

          <p className=' font-bold text-4xl tracking-wider sm:text-6xl lg:text-8xl'>
            BEAN &amp; HOPS
          </p>
          <p className='text-lg tracking-[2px] sm:text-xl md:text-4xl lg:text-4xl'>
            COFFEE AND ROASTERY
          </p>

          <p className='w-full max-w-xl text-center mt-16 italic text-xs sm:text-lg'>
            From bold brews to flavorful bites — Bean and Hops is where coffee meets craft and every craving finds its match.
          </p>

          <div className='flex gap-[20px] mt-16'>
            <Button
              onClick={ () => handleNavButt("menu/items")}
            className='sm:text-sm'
            >
              Visit Menu
            </Button>

            <Button
            onClick={ () => handleNavButt("contact")}
            className='sm:text-sm'
            >
              Reservations
            </Button>
          </div>
        </div>
      </div>

      <div className='w-full '>
        <div className='w-full box-border p-[20px]'>
          <p className='text-3xl mt-[32px] font-bold md:text-5xl'>
            WHAT'S NEW?
          </p>

          <div>
            <ul className="mt-[20px] flex gap-[20px] overflow-x-scroll scrollbar-style">
              {postItem?.map((imgpost, index) =>
                <li
                className='mb-[20px]'
                key={index}>
                  <Posts
                    type={'image'}
                    src={imgpost.pst_image}
                    title={imgpost.title}
                    caption={imgpost.pst_caption}
                    menuitem={imgpost.pst_menu_item}
                  ></Posts>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      
      <div className='w-full bg-white pb-6 pl-4 pr-4 '>
        <div className='w-full max-w-5xl m-auto mb-8 '>
          <div className='mt-4 pt-8 w-full m-auto flex items-baseline flex-col'>
              <p className='text-3xl font-bold text-(--color-bg-dark-500) mr-16 md:text-5xl'>Our Place</p>
                <Link to={'/location'} onClick={() =>  window.scrollTo(0, 0)}>
                  <p className='text-(--color-bg-dark-500) text-xl '>Location</p>
                </Link>
                <Link to={'/contact'} onClick={() =>  window.scrollTo(0, 0)}>
                  <p className='text-(--color-bg-dark-500) text-xl'>Reservations</p>
                </Link>
          </div>
          
          <ul className='flex flex-wrap gap-2 h-[60vh] overflow-y-auto mt-4 no-scrollbar md:items-center md:justify-center sm:justify-center'>
            {places.map((place, index) => 
              <li 
                className=''
                key={index}>
                <img className='h-[300px] w-auto object-cover' src={place.img} alt="" />
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home