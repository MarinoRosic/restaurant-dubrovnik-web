import React from 'react'
import { useRef } from 'react'
import { motion, useInView } from "framer-motion"

const HeaderComponent = (props) => {
    const heading = props.heading;
    const translate = props.translate;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <header className='pt-48 text-5xl font-normal text-red-800 lg:pt-52'>
        <motion.h1 ref={ref} 
          style={{
            transform: isInView ? "none" : translate,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
            className='font-hmApple text-center mx-5'>
            {heading}
        </motion.h1>
    </header>
  )
}

export default HeaderComponent
