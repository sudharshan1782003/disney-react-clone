import React from 'react'
import { Link } from 'react-router-dom'
import { FcCheckmark } from "react-icons/fc";
import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import Playstore from "../disney logo/playstore.png"
import Appstore from "../disney logo/appstore.png"
const Footer = () => {
  return (
<div className='md:grid md:grid-cols-3 pt-6'>
<div className='grid grid-cols-2 md:block absolute left-0 right-0 md:pl-7 pl-9'>
<div className='flex flex-col gap-1 md:block'>
<div className='text-white md:text-lg text-sm'>Company</div>
<div className='text-gray-400 md:text-lg text-sm'>About Us</div>
<div className='text-gray-400 md:text-lg text-sm'> Careers</div>
</div>
<div className='flex flex-col gap-1 md:block right-0'>
  <div className='text-gray-400 md:text-lg text-xs'>&copy; 2023 STAR. All Rights Reserved.</div>
  <div className='text-gray-400 md:text-lg text-xs'>Terms of Use</div>
  <div className='text-gray-400 md:text-lg text-xs'>Privacy Policy</div>
  <div className='text-gray-400 md:text-lg text-xs'>FAQ</div>
</div>
</div>
  <div className='grid grid-cols-2 absolute right-0 left-0 max-[767px]:pt-5 md:left-28 max-[767px]:pl-9'>
  <div className='md:pl-72  md:mt-0 mt-20 flex flex-col gap-1'>
    <div className='text-white md:text-lg text-sm'>View Website in</div>
    <div className='text-gray-400 text-sm md:text-lg flex items-center'><FcCheckmark className='text-white ' />English</div>
   </div>
   <div className='md:pl-16  md:mt-0 mt-20 flex flex-col gap-1'>
    <div className='text-white md:text-lg text-sm'>Need Help?</div>
    <div className='text-gray-400 text-sm md:text-lg'>Visit Help Center</div>
    <div className='text-gray-400 text-sm md:text-lg'>Share Feedback</div>
   </div>
  </div>
  <div className='flex flex-col justify-center items-center gap-5 max-[767px]:pt-48 md:absolute md:right-16'>

    <div className='text-sm md:text-lg text-white'>Connect With Us</div>
    <div className='flex justify-center text-white gap-4 md:gap-7 mt-2 cursor-pointer'>

      <LuFacebook size={20} />
      <LuTwitter size={20} />
      </div>
      <div className='flex justify-center items-center cursor-pointer'>
        <img src={Playstore} className="md:w-36 md:h-16 w-20 h-10" />
        <img src={Appstore} className="md:w-36 md:h-12 w-20 h-8" />
      </div>

  </div>
</div>
    
  )
}

export default Footer  