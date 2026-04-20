import React from 'react';

import TestimonialCarousel from '../components/TestimonialCarousel'

import {testimonialData} from '../data'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Testimonial = () => {
  const {title, subtitle, modelImg, slider} = testimonialData;

  return (
    <section className='relative top-[390px] lg:top-[280px] h-[700px] pt-[100px] md:pt-[70px] pb-10'> 
    {/* bg-testi  */}
      <div className="container mx-auto">
      <motion.div 
      variants={fadeIn('up','tween', 0.2, 1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.6}}
      className='flex flex-col items-center text-center md:text-justify'>
        <h2 className='text-red-800 h2 font-tangerine text-6xl lg:text-7xl'>{title}</h2>
        <p className='mb-8 capitalize text-dark font-garamond'>{subtitle}</p>
        <div className='mb-12'>
          <img src={modelImg} alt="" loading="lazy" decoding="async" />
        </div>
      </motion.div>
        <motion.div 
        variants={fadeIn('up','tween', 0.4, 1.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.6}}
        className='flex items-center justify-center'>
        <TestimonialCarousel slider={slider}/>
        </motion.div>
        <motion.div 
          variants={fadeIn('up','tween', 0.4, 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.6}}
          className='flex items-center justify-center mt-12'>
          <button className='btn mx-auto'><a href="https://shorturl.at/rv5pn" target='_blank' rel='noreferrer'>Share your experience</a></button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
