import React, {useRef} from 'react'
import { motion, useInView } from 'framer-motion'
import {CarouselComponent} from '../components/CarouselComponent'
import { slike } from "../teamCarousel"

const WholeTeam = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <section className='flex flex-col'>
        <motion.div 
        ref={ref} 
        style={{
          transform: isInView ? "none" : "translateX(100%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className='mx-10 my-10'>
            <p className='font-baskerville text-dark text-xl text-center'>
              We hope you will have a wonderful time, and our team can’t wait to welcome you!
            </p>
        </motion.div>
        <motion.div 
        ref={ref} 
        style={{
          transform: isInView ? "none" : "translateX(-100%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className='mx-8 my-10 flex justify-center'>
          <CarouselComponent img={slike}/>
        </motion.div>
    </section>
  )
}

export default WholeTeam
