import React, {useState} from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import transition from '../transition'
import Lightbox from "yet-another-react-lightbox"
import { Zoom } from "yet-another-react-lightbox/plugins"
import { slikeCatering } from "../slikeCatering"
import "yet-another-react-lightbox/styles.css"
import Images from "../components/Images"

const Catering = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const [index, setIndex] = useState(-1)
  return (
    <>
        <HeaderComponent translate="translateX(-100%)" heading="Catering" /> 
        <section className='mx-5 pt-16 pb-2'>
            <motion.div 
            className='text-center max-w-[1200px] mx-auto'
            ref={ref} 
            style={{
                transform: isInView ? "none" : "translateX(100%)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
                <p className='text-xl font-garamond text-center md:text-justify text-dark'>
                Imagine the exquisite flavors and artistic presentations of Restaurant Dubrovnik brought directly to your event.
                 Our talented and innovative Chef Dado and his team's craft personalized menus that highlight the finest local 
                 ingredients and showcase modern Mediterranean cuisine at its best.
                 </p>
                 <br />
                 <p className='text-xl font-garamond text-center md:text-justify text-dark'>
                 Every event is unique, and our catering services reflect that. We work closely with you to understand your vision and tailor our offerings 
                 to meet your specific needs. 
                 From intimate gatherings to grand celebrations, we ensure every detail is perfect, creating an ambiance that is both elegant and inviting.
                 </p>
                 <br />
                 <p className='text-xl font-garamond text-center md:text-justify text-dark'>
                 Contact us to start planning your bespoke catering experience.
                 <br />
                <span className='text-red-800'>E-mail:</span> <span className='hover:underline hover:decoration-red-800'><a href="mailto:restorandubrovnik@gmail.com">restorandubrovnik@gmail.com</a></span>
                 </p>
            </motion.div>
        </section>

        <div className="pt-8 mx-6">
            <Images data={slikeCatering} onClick={currentIndex => setIndex(currentIndex)} />
        </div>

        <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slikeCatering}
        plugins={[Zoom]}
      />
    </>
  )
}

export default transition(Catering);
