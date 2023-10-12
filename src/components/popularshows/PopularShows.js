import React from 'react'
import { Link } from 'react-router-dom'


const PopularShows = ({popularshows}) => {

   const slicing = popularshows.slice(0, 5)

  return (
    <div className='md:pl-8  pl-1 pr-1'>
         <div className='flex text-white justify-between items-center'>
        <div className='text-white text-sm  md:text-2xl font-bold pl-2'>Popular Shows</div>
        <Link to="/popularshowsall">
        <div className='md:absolute md:right-8 text-sm md:text-lg cursor-pointer'><button>View All</button></div>
        </Link>
        </div>

        <div className='w-full md:overflow-hidden md:pb-2 md:px-2 md:whitespace-normal overflow-x-auto whitespace-nowrap md:flex md:gap-3 pt-4'>
            {
                slicing.map(item => (
                  
                     <div  className='hover:scale-105 md:w-full  max-[767px]:inline-block max-[767px]:pl-1'  key={item.id} >
                       <Link to={`popularshows/${item.id}`}>
                        <img src={item.profile()}  className=' hover:border-2 md:w-full w-40  hover:border-white rounded-md ' alt={item.id} />
                        </Link>
                    </div>
                  
                ))
            }
        </div>
    </div>
  )
}

export default PopularShows