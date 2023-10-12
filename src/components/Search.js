import React from 'react';
import { RiSearchLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Search = ({ search, setsearch, searchResults }) => {
  return (
    <div className='pt-16 md:pt-36 pl-1 md:pl-7 pb-96'>
    
        <RiSearchLine className='text-gray-300 absolute mt-3 ml-2' />
        <input
          type='search'
          placeholder='Movies, Shows and more...'
          className='bg-zinc-700 search md:text-lg text-xs  rounded-md  text-white pl-10 h-10 outline-none border-none'
          value={search}
          
          onChange={(e) => setsearch(e.target.value)}
        />
      

      {search.length > 0 && (
        <div className='pt-6 md:pl-4'>
          <h1 className='text-white md:text-lg text-sm pb-2' >Top Results</h1>
          <div className='md:flex md:flex-wrap md:gap-8 md:pt-5 grid grid-cols-3 gap-1'>
            {searchResults.map(item => (
              <div key={item.id} className='hover:scale-105   hover:border-2 hover:border-white rounded-md '>
                <Link to={`/${item.special}/${item.id}`}>
                  <img src={item.profile()} className='rounded-md w-auto h-auto' />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
