import React, {useRef} from 'react'
import { motion, useInView } from 'framer-motion'
import {CarouselComponent} from '../components/CarouselComponent'
import HeaderComponent from '../components/HeaderComponent'
import transition from '../transition'
import { slike } from "../aboutUsCarousel"

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <>
      <HeaderComponent translate="translateX(-100%)" heading="About us"/>
      <section className='flex flex-col sm:px-5 xl:mx-48'>
        <motion.div 
        initial={{ x: "150%" }}
        animate={{ x: 0 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 2, type: "tween" }
        }}
        viewport={{once: true, amount: 0.6}}
        className='max-w-[1200px] mx-auto'>
            <h1 className='mx-8 my-10 text-3xl lg:text-5xl text-center md:text-start text-dark font-baskerville lg:text-center'>
            Situated literally <span className='text-red-800'> minutes from </span>the main street Stradun
            </h1>
        </motion.div>
        <motion.div
        initial={{opacity: 0, y: -100}}
        whileInView={{ opacity: 1}}
        animate={{ y: 0 }}
        transition={{ ease: "easeIn", duration: 1.5}}
        viewport={{once: true, amount: 0.6}}
        className='max-w-[1200px] mx-auto'>
          <p className='mx-8 mb-5 text-xl break-words text-center text-dark font-garamond'>And just a stone throw from the popular Green market, featuring the most recognizable terrace in the Old Town, this delightful place is set in one of those secluded corners of the town’s enchanting little streets, providing the guests with just an ideal level of privacy whilst still keeping the feeling of belonging to the old urban centre. <br></br>
            Together with exquisite service, its elegance and inspiring ambience encourages return visits since it has been reopened in 2006.</p>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, y: -100}}
        whileInView={{opacity:1}}
        animate={{ y: 0 }}
        transition={{ ease: "easeIn", duration: 0.9}}
        viewport={{once: true, amount: 0.6}}
        className='max-w-[1200px] mx-auto'>
          <p className='mx-6 my-8 text-4xl lg:text-5xl font-extrabold text-center font-tangerine text-dark'>The variety of their menu is fully supported by a wine list out of which a must have is 
            definitely White fish baked in sea salt, famous Mediterranean speciality served with cabbage and potatoes.</p>
        </motion.div>
        <motion.div 
        ref={ref} 
        style={{
          transform: isInView ? "none" : "translateX(-100%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className='mx-8 my-10 flex justify-center'>
          <CarouselComponent img={slike} />
        </motion.div>
      </section>
    </>
  )
}
export default transition(AboutUs);