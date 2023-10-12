import React from 'react'
import {Link} from 'react-router-dom'

const BestOfsuperheroes = ({superheroes}) => {
  return (
    <div className='md:pl-7 pl-1 pt-6'>
        
        <div className='text-white text-sm md:text-2xl font-bold pl-2'>Bset Of SuperHeroes</div>
        

        <div className='w-full md:overflow-hidden md:whitespace-normal md:pb-2 md:pl-2 md:pr-2 overflow-x-auto whitespace-nowrap md:flex md:gap-3 pt-4'>
            {
                superheroes.map(item => (
                  
                     <div  className='hover:scale-105 max-[767px]:inline-block max-[767px]:pl-1' key={item.id} >
                       <Link to={`/superheroes/${item.id}`}>
                        <img src={item.profile()}  className='md:w-full w-40 hover:border-2 hover:border-white rounded-md ' alt={item.id} />
                        </Link>
                    </div>
                  
                ))
            }
        </div>
    </div>
  )
}

export default BestOfsuperheroes