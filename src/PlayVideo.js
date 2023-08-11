import React from 'react'
import playtrailer from "./movietrailers/goodnighttrialer.mp4"
import { useParams } from 'react-router-dom'

const PlayVideo = ({LatestReleasesData, popularshows, superheroes}) => {
  const {id} = useParams()
  const Itemid = parseInt(id)
  const items = LatestReleasesData.find(item => item.id === Itemid);
  const items1 = popularshows.find(item => item.id === Itemid);
  const items2 = superheroes.find(item => item.id === Itemid)
  const allItems = [items, items1, items2].filter(Boolean); // Filtering out any undefined/null values

  return (
    <div className='pb-80 pt-40'>
      {allItems.map((singleItem) => (
        <video
          key={singleItem.id}
          autoPlay={false}
          className='md:w-screen md:h-full w-auto h-full object-cover'
          controls={true}
        >
          <source src={singleItem.videos} type='video/mp4' />
        </video>
      ))}
    </div>
  )
}

export default PlayVideo





