import React from 'react';

import {aboutData} from '../data'

import {motion} from 'framer-motion'

import {plateVariants, staggerContainer, fadeIn } from '../variants'

import { Link } from 'react-router-dom';

//import GaultMillau from "../assets/img/gaultMillau.png --- plateVariantsGaultMillau"

const About = () => {
  const {pretitle, title, subtitle, btnText, image} = aboutData;
  return (
    <section className='min-h-[620px]'>
      <div className='container mx-auto min-h-[620px] lg:pt-0 xs: pt-10'>
        <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.6}}
        className=' min-h-[620px] flex flex-col lg:flex-row items-center'>
          <motion.div 
          variants={fadeIn('right', 'tween', 0.2, 1.4)}
          className='flex-1 text-center lg:text-left'>
            <div className='pretitle text-5xl font-tangerine'>{pretitle}</div>
            <h2 className='h2 font-baskerville'>{title}</h2>
            <p className='mb-8 mx-3 max-w-[560px] text-xl text-center lg:text-justify text-dark font-garamond'>{subtitle}</p>
            <Link className='mx-auto btn lg:mx-0 w-[275px]' to='/aboutus' onClick={() => { 
              setTimeout(() => {window.scroll(0,0);}, 300)  }}>
              {btnText}
              </Link>
        </motion.div>
        <div className='flex flex-row gap-x-4'>
        {/* <motion.div 
          variants={plateVariantsGaultMillau}
          className='-mb-[170px] -mr-[120px] z-10'> 
            <img src={GaultMillau} alt="" className='h-[360px] w-[350px] mt-9'/> 
          </motion.div> */}
          <motion.div 
          variants={plateVariants}
          className='-mb-[180px] -mr-[5px] z-20'> 
            <img src={image} alt="Restaurant Dubrovnik - Michelin recommended restaurant since 2017" className='h-[400px] w-[390px] mt-9' loading="lazy" decoding="async" /> 
            <div className='flex justify-center'>
              <p className='font-garamond italic text-lg text-dark'>Michelin recommended since 2017...</p>
            </div>
          </motion.div>
        </div>
        </motion.div>
      </div> 
    </section>
  );
};

export default About;
