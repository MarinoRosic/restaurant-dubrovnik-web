import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import Socials from '../components/Socials';
import { Link } from 'react-router-dom';
import LogoWhite from '../assets/img/header/logo-red.svg';

import {motion} from 'framer-motion';

import {fadeIn, staggerContainer} from '../variants';

const headerVariants = {
  hidden: {
    padding: '30px 0 30px 0', //84 84
    background: 'rgba(255,255,255,0.1)',
  },
  show: {
    padding: '14px 0 14px 0',
    background: 'rgba(255,255,255,1)',
    transition: {
      type: 'spring',
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

const Header = () => {
  const[isActive, setIsActive] = useState(false);

  const[nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    window.addEventListener('scroll',() => {
      window.scrollY > 65 ? setIsActive(true)  : setIsActive(false);
    });
  });

  return <motion.header 
    variants={headerVariants}
    initial='hidden'
    animate={isActive ? 'show' : ''}
  className='fixed z-50 w-full py-4 bg-red-800/20'>
    <motion.div variants={staggerContainer(0.3, 1)} initial='hidden' animate={'show'} className='container mx-auto'>
      <div className='relative flex items-center justify-between px-4 text-red-800 lg:px-0'>
        <motion.div 
        variants={fadeIn('down', 'tween', 0.8, 1.2)}
        className={`${nav ? 'gap-y-0' : 'gap-y-2'} flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-red-800/70 border-2 rounded-full`}
        onClick={() => handleNav()}>
          <motion.div initial={
            {rotate: 0}
          } 
          animate={{rotate: nav ? -45 : 0, translateY: nav ? 2 : 0}}
          className='w-full h-[2px] bg-red-800'></motion.div>

          <motion.div initial={
            {rotate: 0}
          } 
          animate={{rotate: nav ? 45 : 0}}
          className='w-full h-[2px] bg-red-800'></motion.div>
          </motion.div>
        <motion.div variants={fadeIn('down', 'tween', 0.8, 1.2)} className='order-1 lg:order-none'>
          <Link to="/" onClick={() => {
              setTimeout(() => {window.scroll(0,0);}, 300)  }}>
            <img className={`${isActive ? 'w-[140px] h-[100px]' : 'w-[125px] h-[125px]'}`}  // 90 90 / 107 107
            src={LogoWhite} alt="Restaurant Dubrovnik logo" />
          </Link>
        </motion.div>
        <motion.div 
        variants={fadeIn('down', 'tween', 0.8, 1.2)}
        className='hidden lg:flex'>
          <Socials />
        </motion.div>
        <motion.div 
        variants={navVariants} 
        initial="hidden" 
        animate={nav ? 'show' : ''}
        className='absolute bg-red-800 lg:w-[330px] md:w-[330px] sm:w-[330px] w-full h-[50dvh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl'>
          <Nav onClick={handleNav} />
        </motion.div>
      </div>
    </motion.div>
    </motion.header>;
};

export default Header;
