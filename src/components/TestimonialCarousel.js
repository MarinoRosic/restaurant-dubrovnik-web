import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../slider.css'

const TestimonialCarousel = ({slider}) => {
  return <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoop={true} className='w-full max-w-[1024px] flex items-center justify-center'>
    {slider.map((item, index)=> {
      const { message, name } = item;
      return <div className='max-w-[840px] mx-auto px-24 text-red-800' key={index}>
          <div className='text-lg leading-snug text-dark mb-9 lg:text-2xl lg:pt-5 font-garamond'>{message}</div>
          <div className='font-bold text-[22px] text-dark font-baskerville'>{name}</div>
        </div>
    })}
  </Carousel>;
};

export default TestimonialCarousel;
