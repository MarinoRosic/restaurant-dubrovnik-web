import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
//slika
import map_slika from '../assets/img/find_us/map.png'
//motion
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import transition from '../transition'


const FindUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <>
        <HeaderComponent translate="translateX(100%)" heading="How to find us?" />  
        <section className='flex flex-col'>
            <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              ease: "linear",
              duration: 0.8,
              x: { duration: 1, type: "tween" }
            }} 
            className='mx-auto'>
                <img src={map_slika} className='pt-16' alt='Hand made painting of dubrovnik city showing Restaurants Dubrovnik location' loading="lazy" decoding="async"/>
            </motion.div>
            <motion.div ref={ref} 
            style={{
              transform: isInView ? "none" : "translateX(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            className='px-8 pt-16 pb-10 mx-auto lg:px-16 xl:px-80'>
                <p className='text-xl max-w-[1200px] text-dark lg:text-2xl text-pretty font-garamond'>Our restaurant is located in the old town, <span className='text-red-800 '> near Green Market and Hotel Pucić Palace </span>,
                    it is second street on a left when you pass Hotel Pucić Palace.<span className='text-red-800'><br /> <br /> Address of our restaurant is Marojice Kaboge 5. </span> 
                    In case that you are going to have problems with finding us, feel free to contact
                    us on our phone number: <a className='text-red-800' href='tel:+3859902585871'>+3859902585871</a>
                </p>
            </motion.div>
        </section>
    </>
  )
}

export default transition(FindUs);
