import React from 'react';

import { teamData } from '../data'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Team = () => {
  // sub1, sub2, signatureImg
  const {pretitle, title, name, occupation, chefImg} = teamData;
  return (
  <section className='relative z-10 top-80 lg:top-40 min-h-[720px]'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row lg:gap-x-[120px] items-center '>
        <motion.div 
        variants={fadeIn('down', 'tween', 0.3, 1.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.6}}
        className='flex-1 text-center lg:text-left lg:pt-16'>
          <div className='pretitle font-tangerine text-5xl'>{pretitle}</div>
          <h2 className='h2 font-baskerville'>{title}</h2>
          <p className='mb-10 mt-8 text-dark font-light font-garamond text-xl text-center md:text-justify'>At the helm of Restaurant Dubrovnik's culinary artistry 
            is <span className='font-bold'>Dalibor Vidović</span>, known as <span className='font-bold'>Chef Dado</span>. With a deep passion for cooking and an innovative approach, 
            Chef Dado has been instrumental in elevating our restaurant to new heights.
            <br /> <br /> His philosophy revolves around the use of fresh, local ingredients to create dishes that are both flavorful and aesthetically pleasing. 
            His modern Mediterranean cuisine is a harmonious blend of tradition and innovation, making each meal a memorable experience.
            </p>
            <p className='text-dark font-light font-garamond text-xl text-center md:text-justify'>With nearly ten years of dedication and hard work, 
              Chef Dado has perfected his craft, earning Restaurant Dubrovnik its esteemed Michelin recommendation. 
              His commitment to excellence and his ability to inspire his team are evident in every dish that leaves our kitchen.</p>
        <div className='my-[26px]'>
          <div className='text-2xl capitalize font-semibold text-red-800 font-baskerville text-center md:text-justify'>{name}</div>
          <div className='text-[15px] font-semibold capitalize text-gray/70 '>{occupation}</div>
        </div>
        <div className='flex justify-center md:justify-start mb-6 lg:mb-0'>
          <span className='font-extrabold font-tangerine text-4xl text-dark'>Dalibor Vidovic</span>
        </div>
      </motion.div>	 
      <motion.div 
      variants={fadeIn('up','tween', 0.3, 1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.6}}
      className='mx-2 flex content-center justify-center my-10'>
        <img className='md:h-[600px] lg:h-[760px]' src={chefImg} alt="Chef Dalibor Vidović - Executive Chef at Restaurant Dubrovnik" loading="lazy" decoding="async"/>
      </motion.div> 
      </div>
    </div>
  </section>
  );
};

export default Team;
