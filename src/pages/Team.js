import React, {useRef} from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { teamData } from '../data'
import { motion, useInView } from 'framer-motion'
import TeamMember from '../components/TeamMember'
import WholeTeam from '../components/WholeTeam'
import transition from '../transition'
const Team = () => {
    const {sousChefImg} = teamData;
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  return (
    <>
    <HeaderComponent translate="translateX(-100%)" heading="Our team" />
    <section className='flex flex-col flex-wrap lg:flex-row xl:mx-56'>
        <TeamMember />
        <motion.div
        ref={ref} 
        style={{
            transform: isInView ? "none" : "translateX(100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        className='w-full lg:w-[50%] p-8 flex justify-center'>
            <p className='font-garamond text-xl text-center content-center text-dark md:text-justify'>
            Their nearly ten-year partnership is a testament to their dedication and passion for culinary
            excellence. This long-standing collaboration has allowed them to perfect their craft, bringing a
            refined and innovative approach to every dish they create.
            Their combined expertise and passion for cooking are evident in every bite, promising a dining
            experience that will delight your senses and leave you wanting more.
            </p>
        </motion.div>
        <motion.div 
        ref={ref}
        style={{
            transform: isInView ? "none" : "translateX(-100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        className='lg:w-[50%] text-center flex items-center'>
            <img src={sousChefImg} className='h-[550px] mx-auto' alt='Sous Chef Ivan - Restaurant Dubrovnik - Restoran Dubrovnik' loading="lazy" decoding="async"/>
        </motion.div>
        <WholeTeam />
    </section>
    
    </>
  )
}

export default transition(Team);
