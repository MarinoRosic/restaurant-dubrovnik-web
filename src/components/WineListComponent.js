import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WineListComponent = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  return (
    <>
          <motion.div 
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className='flex flex-col'>
              <p className='pb-5 text-dark pt-8 font-baskerville text-2xl'>{props.type}</p>
              <div className='flex flex-row border-b-2 border-b-dark/20 '>
                  <div className='flex-col  w-2/3'>
                     <p className='pb-2 text-red-800 italic font-garamond text-xl'>{props.name}</p>
                     <p className='pb-2 text-dark font-garamond'>{props.ingredients}</p>
                  </div>
                  <div className='w-1/3 flex flex-col lg:flex-row lg:gap-x-1'>
                    <p className='text-dark text-right lg:w-2/3 font-normal font-garamond'>{props.serving_size}</p>
                    <p className='text-right lg:w-1/3 lg:pt-0 font-extrabold font-garamond'>{props.price}</p>
                    { props.serving_size2 && (<p className='text-dark text-right lg:w-1/3 font-normal font-garamond'>{props.serving_size2}</p>)} 
                    { props.price2 && <p className='text-right lg:w-1/3  lg:pt-0 font-extrabold font-garamond'>{props.price2}</p> } 
                    { props.serving_size3 && (<p className='text-dark text-right lg:w-1/3 font-normal font-garamond'>{props.serving_size3}</p>)} 
                    { props.price3 && <p className='text-right lg:w-1/3  lg:pt-0 font-extrabold font-garamond'>{props.price3}</p> } 
                  </div>
              </div>
          </motion.div>
    </>
  )
}

export default WineListComponent
