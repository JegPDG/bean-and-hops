import React from 'react'
import { assets } from '../assets/assets'
import PostItem from '../components/medium-comp/PostItem'
import { useQuery } from '@tanstack/react-query'
import api from '../services/api'


const Posts = () => {

  const getPostItem = async() => {
    const res = await api.get('post/')
    // console.log(res)
    return res.data
  }

  const {data: postItem, isLoading, error} = useQuery({
    queryKey: ['post'],
    queryFn: getPostItem,
    keepPreviousData: true
  })

  console.log(postItem)

  const postitem = [
    {image: assets.americano, caption:"Espresso is a concentrated coffee beverage, popular in Italy and worldwide, made by forcing hot, pressurized water through finely ground coffee beans to extract intense flavor and aroma."},
    {image: assets.iced_matcha, caption:"Matcha is a finely ground powder of green tea specially processed from shade-grown tea leaves. Shade growing gives matcha its characteristic bright green color and strong umami flavor."},
    {image: assets.fruit_tea, caption:"Fruit tea is a beverage made by steeping dried fruits, flowers, herbs, and spices in hot or cold water"},
    {image: assets.sample_4, caption:""},

  ]


  return (
    <div className='w-full'>
      <div className='w-full max-w-4xl m-auto pt-8 pb-8'>
        <div>
          <div className='flex items-center'>
            <img className='size-24' src={assets.bean_and_hops_white} alt="" />
            <div>
              <p className='text-4xl font-bold tracking-wider'>BEAN &amp; HOPS</p>
              <p className='text-lg tracking-[3px]'>COFFEE AND ROASTERY</p>
            </div>
          </div>
        </div>

        {/* Posts */}

        <ul className='w-full pt-8 grid grid-cols-3 gap-1 animate-[fadeInUp_0.5s_ease-out]'>
          {postItem?.map((post, index) => 
            <li key={index}>
              {/* image, caption */}
              <PostItem 
                image={post.pst_image}
                caption={post.pst_caption}
              ></PostItem>
            </li>
          )}
        </ul>


      </div>
    </div>
  )
}

export default Posts