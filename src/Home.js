import React from 'react';
import LatestReleases from './LatestReleases';
import { Routes, Route } from 'react-router-dom';
import Testimonials from './Testimonials';
import LatestReleasesPage from './LatestReleasesPage';
import PopularShows from './PopularShows';
import DPMSHS from './DPMSHS';
import BestOfsuperheroes from './BestOfsuperheroes';
import TestimonialsBtn from './TestimonialsBtn';

const Home = ({ TestimonialsData, LatestReleasesData, popularshows, disney, superheroes }) => {
  return (
    <div className='flex flex-col pb-80'>
      <div className='md:relative md:right-0'>
        <div className=''>
          <Testimonials TestimonialsData={TestimonialsData} />
        </div>
      </div>
      <div className='relative'>
        <div className='max-[767px]:pt-2'>
          <LatestReleases LatestReleasesData={LatestReleasesData} />
        </div>
        <div className=''>
          <PopularShows popularshows={popularshows} />
        </div>
        <div className=''>
          <DPMSHS disney={disney} />
        </div>
        <div className=''>
          <BestOfsuperheroes superheroes={superheroes} />
        </div>
      </div>
    </div>
  );
};

export default Home;
