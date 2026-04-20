import React, {useRef} from 'react'
import { motion, useInView } from 'framer-motion';

const MenuComponent = (props) => {
    const headingMax = props.headingMax;
    const heading = props.heading;
    const price = props.price;
    const items = props.items;
    const price2 = props.price2;
    const price3 = props.price3;
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
        className='mx-auto overflow-auto max-w-[600px] lg:max-w-[950px]'>
            {headingMax && (<div className='pb-3 pt-5 mx-5'>
                <h1 className='font-garamond text-2xl text-dark text-center'>{headingMax}</h1>
            </div>)}
            {heading && (<div className='pb-8 pt-5 mx-5'>
                <h2 className='font-hmApple text-2xl text-dark text-center'>{heading}</h2>
            </div>)}
            {price && (<p className='font-garamond text-2xl text-center text-dark pb-3'>{price}</p>)}
            {items?.map((item, index) => {
                return  <p key={index} className='font-garamond text-center text-dark pb-3 mx-8'>{item}</p>
            })}
            { price2 && (<p className='font-garamond text-2xl text-center text-dark pb-3'>{price2}</p>)} 
            { price3 && (<p className='font-garamond text-2xl text-center text-dark pb-3'>{price3}</p>)} 
        </motion.div>
    )
}

export default MenuComponent
