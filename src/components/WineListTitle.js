import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import  ModelBlackImg  from '../assets/img/model-black.png'

const WineListTitle = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <motion.div 
    ref={ref}
    style={{
        transform: isInView ? "none" : "translateX(-100%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    className='pb-5 mx-auto pt-14'>
        <h2 className='text-dark font-hmApple text-4xl text-center'>{props.title}</h2>
        <div className='pt-12'>
          <img className='mx-auto' src={ModelBlackImg} alt="" loading="lazy" decoding="async"/>
        </div>
    </motion.div>
  )
}

export default WineListTitle
