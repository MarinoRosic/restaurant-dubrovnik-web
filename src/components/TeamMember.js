import React from 'react'
import { motion } from 'framer-motion'
import { teamData } from '../data'

const TeamMember = () => {
    const {togetherImg} = teamData;
  return (
    <>
    <div className='flex flex-col lg:flex-row mt-10'>
      <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1.5, type: "tween" }
          }}
          viewport={{once: true, amount: 0.6}}
          className='lg:w-[50%] flex justify-center mx-3'>
              <img src={togetherImg} className='h-[550px] items-center' alt='Together, both chef Dalibor Vidovic and Sous Chef Ivan, posing and smiling in Restaurant Dubrovnik - Restoran Dubrovnik' loading="lazy" decoding="async"/>
          </motion.div>
          <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1, type: "tween" }
          }} 
          viewport={{once: true, amount: 0.6}}
          className='w-full lg:w-[50%] flex'>
              <p className='text-dark content-center font-garamond text-xl text-center md:text-justify mx-8 mt-10'>
              Restaurant Dubrovnik's culinary excellence is our dynamic duo, <span className='font-extrabold text-lg'>Chef Dalibor</span>  and <span className='font-extrabold text-lg'>Sous Chef Ivan</span>.
            They share a deep passion for culinary artistry, and their synergy in the kitchen is palpable. Together,
            they bring a unique blend of creativity and precision to our menu, ensuring that each dish is a
            harmonious blend of flavors and textures.
              </p>
          </motion.div>
    </div>
    </>
  )
}

export default TeamMember
