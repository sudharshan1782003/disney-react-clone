import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Testimonials = ({ TestimonialsData }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? TestimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === TestimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  const onTestimonialClick = (value, id) => {
    console.log(value, 'value');
    console.log(id, 'id');
    navigate(`/testimonials/${id}`);
  };

  return (
    
    <div className='flex flex-col justify-center items-center gap-96 md:gap-96 md:pt-56' >
      <div className='flex'>
        {TestimonialsData.map((testimonial, index) => (
          <div key={testimonial.id}>
            <img
              onClick={() => onTestimonialClick(testimonial, testimonial.id)}
              className={`${testimonial.id} img-testimonials cursor-pointer rounded-sm transition-opacity text-white textcenter absolute top-56 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0'
              }`}
              src={testimonial.image}
              alt={`Testimonial ${testimonial.id}`}
            />
          </div>
        ))}
      </div>
    
      
      <div className='flex justify-center gap-4 md:pt-24' style={{ zIndex: 1 }}>
        <button onClick={handlePrevSlide} className='border-none'>
          &lt;
        </button>
        {TestimonialsData.map((testimonial, index) => (
          <button
            key={testimonial.id}
            className={`md:w-2 md:h-2 btn border-gray-400 border-2 rounded-full cursor-pointer`}
            onClick={() => handleDotClick(index)}
            style={{ backgroundColor: index === activeIndex ? 'white' : 'transparent' }}
          />
        ))}
        <button onClick={handleNextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Testimonials;
