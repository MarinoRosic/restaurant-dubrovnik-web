import React from 'react';

import { heroData } from '../data';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../variants'

// import header_slika from '../assets/img/about/header-illustration.png'

const Hero = () => {
  const {pretitle, title, subtitle } = heroData;
  return(
    <section className='h-[100vh] bg-cover bg-bottom lg:bg-center' style={{ backgroundImage: "url('/img/hero/main_bg.webp')" }}>
        {/* <Header /> */}
        {/* <motion.img 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          ease: "linear",
          duration: 1.1,
          x: { duration: 1.1, type: "tween" }
        }} 
        src={header_slika} className='h-[50vh] absolute bottom-0  w-full object-cover lg:hidden opacity-90 z-10'/> */}
        <div className='mx-auto h-[100vh] flex justify-center items-center'>
          <motion.div variants={staggerContainer(0.3,1)} 
          initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.6}} className='flex flex-col items-center text-center'>
            <motion.h1  
            variants={fadeIn('down', 'tween', 0.2, 1.1)} viewport={{once: true, amount: 0.6}} className='pt-16 mb-10 lg:mb-5 h1 font-garamond font-extrabold'>
              {title}
            </motion.h1 >
            <motion.h1 
             variants={fadeIn('down', 'tween', 0.3, 1.1)} viewport={{once: true, amount: 0.6}}
            className='text-white text-xl lg:text-[28px]
            font-primary lg:font-medium mb-2 z-30 px-8'>{pretitle}</motion.h1>
            <motion.p 
             variants={fadeIn('down', 'tween', 0.4, 1.1)} viewport={{once: true, amount: 0.6}} className='text-white max-w-[540px] mb-10 lg:mb-8 pt-1 z-30 font-garamond text-xl px-8 text-center'>{subtitle}
             </motion.p>
             {/* <motion.div
             variants={fadeIn('down', 'tween', 0.5, 1.1)}
             className=''>
              <button className='btn'>{btnText}</button>
             </motion.div> */}
          </motion.div>
        </div>
    </section>
  );
};

export default Hero;
