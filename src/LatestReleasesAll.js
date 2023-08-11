import React from 'react'
import { Link } from 'react-router-dom'
const LatestReleasesAll = ({ LatestReleasesData}) => {
  return (
    <div>
    <div className='grid grid-cols-3 gap-1 md:flex md:flex-wrap md:gap-9 pt-28 md:pl-20'>
         {
                LatestReleasesData.map(item => (
                    <div key={item.id} className='hover:scale-105  hover:border-2 hover:border-white rounded-md'>
                        <Link to={`/latestreleases/${item.id}`}>
                        <img src={item.profile} className='md:w-full w-auto rounded-md' />
                    </Link>
                    </div>
                ))
            }
    </div>
    </div>
  )
}

export default LatestReleasesAll