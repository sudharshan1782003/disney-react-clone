import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import playlogoblack from "../../logos/play-icon-black.png"
import playlogowhite from "../../logos/play-icon-white.png"
import watchlists from "../../logos/watchlist-icon.svg"
import { UserAuth } from '../../contextAPI/UseContext';

const LatestReleasesPage = ({ LatestReleasesData }) => {
  const { id } = useParams();
  const itemId = parseInt(id);
  const item = LatestReleasesData.find((item) => item.id === itemId);
  const {User} = UserAuth()
  const navigate = useNavigate()

  return (
    <div className='text-white pb-96'>
      {
        item ? (
          <div className='md:pl-8 md:block flex flex-col   pt-12'>
            <video autoPlay loop  className='md:w-screen md:h-screen md:object-cover w-auto h-auto videos' >
              <source src={item.videos()} type='video/mp4' />
            </video>
           <div className='md:w-1/2  flex flex-col absolute md:top-48 top-24 md:ml-16 ml-2 md:gap-6 '>
            <img src={item.dineyplusimage()} className=' md:w-48 hidden ' />

          <div className='flex pt-64 md:pt-5'>
        {
          User ? (
           <>
            <div className=' md:py-5 md:w-32 w-24 h-5  flex items-center justify-center rounded-sm gap-3 bg-white text-black px-3 cursor-pointer'>
            <div><img src={playlogoblack} className='md:h-9 h-4' /></div>
            <div className='font-bold md:text-md text-xs'><span>Play</span></div>
          </div>

          <Link to={`/playvideo/${item.id}`}>
            <div className=' bg-slate-950 md:py-5 ml-2 h-5 md:w-36 w-24 border-2 border-white flex items-center justify-center rounded-sm gap-3 bg-transparent hover:bg-slate-800 md:px-4 px-2 cursor-pointer'>
              <div><img src={playlogowhite} className='md:h-8 h-4' /></div>
              <div className='font-bold md:text-md text-xs'><span>Trailer</span></div>
            </div>
          </Link>
           </>
          ) : (
          <div className='bg-gray-400 text-black flex justify-center items-center px-4 rounded-md cursor-pointer'>
            <div className='md:text-lg text-sm text-center' onClick={() => navigate('/login')}>Login To Watch</div>
          </div>
          )
        }

            <div className='border-2 md:px-3 w-7 md:w-12 md:py-3 ml-4 px-1 py-1 bg-slate-950 -mb-1 border-white rounded-full '>
              <img src={watchlists} className='md:w-5 md:h-5 h-3 w-5' />
            </div>
          </div>

            <div className='w-full flex md:flex-row flex-col  max-[767px]:mt-2 md:gap-2 gap-3 pt-2 md:text-lg max-[767px]:text-sm'>
             <div>{item.releasedYear}</div>
              <div>{item.duration ? <span> {item.duration}</span> : <span>{item.season}</span>}</div>
              <div>{item.language}</div>
              <div>{item.category}</div>
             
            </div>
            <p className=' pt-1 md:text-lg max-[767px]:text-sm md:w-full w-4/5 max-[767px]:mt-2'>{item.Description}</p>
            </div>
          </div>
        ) : <p>nothing...</p>
      }
    </div>
  );
};

export default LatestReleasesPage;
