import React from 'react';
import disneyLogo from "../disney logo/disney logo.svg";
import { MdClose, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiFilmSlateBold } from "react-icons/pi";
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { UserAuth } from '../contextAPI/UseContext';
import useravatar from "../logos/avataruser.webp"

const Navbar = () => {
  const location = useLocation();
  const path = ['/'];
  const path1 = ['/Search'];
  const path2 = ['/login'];
  const showBackground = path.some(path => matchPath(location.pathname, path));
  const showBckground = path1.some(path => matchPath(location.pathname, path));
  const showBckground1 = path2.some(path => matchPath(location.pathname, path));
  const [showNav, setshowNav] = React.useState(false);
  const {User} = UserAuth()
  const navigate = useNavigate()

  const HandleClick = () => {
    setshowNav(true);
  };
  const Handleremove = () => {
    setshowNav(false);
  };

  const navshow = {
    visibility: showNav ? "visible" : "hidden",
    transition: showNav ? "all" : null,
    transitionDuration: showNav ? "0.5s" : null,
    backdropFilter: showNav ? "blur(5px)" : null,
    padding: showNav ? "20px" : null,
    borderRadius: showNav ? "25px" : null
  };

  const styles = {
    border: showBackground ? "2px solid #fff" : null,
    borderRadius: showBackground && "50%",
    padding: showBackground && "4px 4px"
  };
  const styles1 = {
    border: showBckground ? "2px solid #fff" : null,
    borderRadius: showBckground && "50%",
    padding: showBckground && "4px 4px"
  };
const styles2 =  {
  border : showBckground1 ? "2px solid #fff" : null,
  borderRadius: showBckground1 && "50%",
  padding: showBckground1 && "4px 4px"
}
  return (
    <div className='w-full fixed left-0 top-0 bg-color pb-10 md:pb-20' style={{ zIndex : "100" }}>
      <div className='flex pt-3 gap-3 absolute left-2 md:gap-5'>
        <div className=''>
          <img src={disneyLogo} alt="Disney Logo" />
        </div>
        <div className='pt-3 flex h-fit'>
          <button className='text-yellow-400 border-2 border-yellow-400 text-sm md:text-md bg-transparent rounded-3xl px-3 flex justify-center items-center'>
            Subscribe <MdOutlineKeyboardArrowRight className='h-5' />
          </button>
        </div>
      </div>
      <nav className="hidden md:block">
        <ul className={`absolute left-1/2 -translate-x-1/2 pt-8 gap-6 flex cursor-pointer`}>
          <Link to="/login"><li className='flex flex-col items-center justify-center gap-2'><FaRegUserCircle className='text-gray-400 linkdiv' size={28} style={styles2} /><span className='links'>User</span></li></Link>
          <Link to="/"><li><GoHome className='text-gray-400 linkdiv' style={styles} size={28} /><span className='links -ml-2'>Home</span></li></Link>
          <Link to="/Search"><li><RiSearchLine className='text-gray-400 linkdiv' style={styles1} size={28} /><span className='links -ml-2'>Search</span></li></Link>
        </ul>
      </nav>

      <div className={`pt-6 md:hidden`}>
        <div className="text-gray-400 absolute right-0 mr-6">

          {!showNav ? <MdMenu size={28} onClick={HandleClick} /> : <AiOutlineCloseCircle size={28} onClick={Handleremove} />}

        </div>
        <ul className={` flex flex-col cursor-pointer gap-5 absolute right-0 mr-20 rounded-sm text-white`} style={navshow}  >
          <Link to="/login"><li className='flex items-center justify-center gap-2 '><FaRegUserCircle className='text-gray-400 ' size={28} style={styles2} /><span className=''>User</span></li></Link>
          <Link to="/"><li className='flex items-center justify-center gap-2 '><GoHome className='text-gray-400 linkdiv1' style={styles} size={28} /><span className=''>Home</span></li></Link>
          <Link to="/Search"><li className='flex items-center justify-center gap-2'><RiSearchLine className='text-gray-400 ' style={styles1} size={28} /><span className=' '>Search</span></li></Link>
         
        </ul>
      </div>

     {
      !User ? (
        <div className='pt-8 hidden md:block' onClick={() => navigate('/login')}>
        <button className='text-gray-300 absolute right-0 mr-10 border-2 border-gray-300 rounded-md px-5'>Login</button>
      </div>
      ) : (
        <div className='pt-5 hidden md:block cursor-pointer'>
          <img src={useravatar} className='h-10 absolute right-5' />
      </div>
      )
     }

    </div>
  );
};

export default Navbar;
