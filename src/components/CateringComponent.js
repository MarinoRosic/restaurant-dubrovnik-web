import React from 'react'
import { motion } from 'framer-motion'
import {fadeIn} from '../variants'
import { Link } from 'react-router-dom'

const CateringComponent = () => {
  return (
    <>
        <section className='relative z-10 top-96 lg:top-72 min-h-[550px]'>
            <motion.div 
            variants={fadeIn('down','tween', 0.5, 0.9)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.6}}
            className='flex flex-col'>
                <h1 className='mx-auto h2  text-red-800 font-tangerine text-6xl lg:text-7xl'>Catering</h1>
                <div className='mx-auto max-w-[1350px]'>
                    <p className='px-8 pt-8 text-dark text-center md:text-justify font-garamond text-xl'>Intuitive service, always ready and top quality at Dubrovnik prime locations – this is the short description of our catering services. We respect your desire for different, personalized experiences. We love it! Every step you take in the city of Dubrovnik reveals cozy and beautiful places with a stunning view. 
                        We are ready to provide our ultimate catering service for all those unique places. And for all your special occasions – private or corporate events, intimate dining, luxury meals or cocktail receptions at most magical places in Dubrovnik. Because magic has no boundaries.</p>
                </div>
                <div className="mx-auto pt-10">
                    <Link to="/catering" onClick={() => { 
                        setTimeout(() => {window.scroll(0,0);}, 300)  }}>
                        <button className='btn w-[275px]'>Find out more</button>
                    </Link>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default CateringComponent
