import React from 'react';

const DPMSHS = ({ disney }) => {
  const [hoveredItemId, setHoveredItemId] = React.useState(null);

  return (
    <div className='flex md:flex-row flex-col pt-10 justify-center md:w-full  items-center  gap-4 pb-2'>
      {disney.map(item => (
        <div
          key={item.id}
          className='img-box relative w-56 cursor-pointer hover:scale-105'
          onMouseEnter={() => setHoveredItemId(item.id)}
          onMouseLeave={() => setHoveredItemId(null)}
        >
          <img
            src={item.img()}
            className='w-full h-full object-cover'
            alt='Disney Image'
            style={{ position: 'relative', zIndex: 1 }}
          />
          {hoveredItemId === item.id && (
            <div className='video-overlay absolute top-0 left-0 w-full h-full' style={{ zIndex: 0 }}>
              <video autoPlay loop controls={false} muted preload='auto' className='w-full h-full object-cover'>
                <source src={item.video()} type='video/mp4' />
              </video>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DPMSHS;
