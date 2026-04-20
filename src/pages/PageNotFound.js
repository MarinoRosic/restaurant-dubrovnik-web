import React from 'react'
import { Link } from 'react-router-dom'
import transition from '../transition'
import { fadeIn, staggerContainer } from '../variants'
import { motion } from 'framer-motion'

const PageNotFound = () => {
  return (
    <>
        <motion.section 
        variants={staggerContainer(0.3,1)} 
        initial='hidden' whileInView={'show'} viewport={{once: true, amount: 0.6}} 
        className='pt-48 pb-10 flex flex-col justify-center items-center gap-y-4'>
            <motion.h1 
            variants={fadeIn('down', 'tween', 0.1, 0.9)} viewport={{once: true, amount: 0.6}}
            className='text-gray-400 font-garamond text-8xl md:text-9xl'>
                404
            </motion.h1>
            <motion.h2 
            variants={fadeIn('down', 'tween', 0.2, 0.9)} viewport={{once: true, amount: 0.6}}
            className='text-dark font-baskerville text-5xl md:text-7xl'>
                page not found
            </motion.h2>
            <motion.div 
            variants={fadeIn('down', 'tween', 0.3, 0.9)} viewport={{once: true, amount: 0.6}}
            className='mx-10 mt-4'>
               <p className='font-garamond lg:mx-auto text-dark text-center text-xl md:text-2xl'>The page you are looking for might have been removed or had its name changed or is temporarily unavailable. </p>
            </motion.div>
            <motion.div
            variants={fadeIn('up', 'tween', 0.4, 0.9)} viewport={{once: true, amount: 0.6}}
            >
                <Link to="/" onClick={() => { 
                    setTimeout(() => {window.scroll(0,0);}, 300)  }}>
                    <button className='btn w-[230px] mt-8'>Go to homepage</button>
                </Link>
            </motion.div>
        </motion.section>
    </>
  )
}

export default transition(PageNotFound)
