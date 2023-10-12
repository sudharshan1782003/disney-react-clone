import React from 'react'
import { Link } from 'react-router-dom'


const LatestReleases = ({LatestReleasesData}) => {
    const slicing = LatestReleasesData.slice(0, 5)
  return (
    <div className='md:pl-8 pl-1  pb-3 pr-2' >
        <div className='flex text-white justify-between pb-2 items-center'>
        <div className='text-white text-sm md:text-2xl font-bold pl-2'>Latest Releases</div>
        <Link to="/latestreleasesAll">
        <div className='md:absolute md:right-8 text-xs md:text-lg cursor-pointer'><button>View All</button></div>
        </Link>
        </div>
        <div className=' md:gap-3 md:flex md:pt-5 w-full md:overflow-hidden md:whitespace-normal md:pb-2 md:px-2 overflow-x-auto whitespace-nowrap'>
            {
               
                slicing.map(item => (
                    <div key={item.id} className='hover:scale-105 max-[767px]:inline-block max-[767px]:pl-1 hover:border-2 hover:border-white rounded-md'>
                        <Link to={`/latestreleases/${item.id}`}>
                        <img src={item.profile()} className='md:w-full w-40  rounded-md' />
                    </Link>
                    </div>
               )
                )
            }
        </div>
    </div>
    
  )
}

export default LatestReleases