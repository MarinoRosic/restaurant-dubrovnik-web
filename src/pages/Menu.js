import React, {useRef} from 'react'
import HeaderComponent from '../components/HeaderComponent'
import MenuComponent from '../components/MenuComponent'
import { menu } from '../data'
import transition from '../transition'
import { motion, useInView } from 'framer-motion';
import NewMenuSoon from '../components/NewMenuSoon'

const Menu = () => {
    const {menuItems} = menu;
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, {once: true});
    return (
        <> 
            <HeaderComponent translate="translateX(100%)" heading="Our menu"/>
            <section className='relative flex flex-col pt-5'>
                <motion.div 
                ref={ref} 
                style={{
                    transform: isInView ? "none" : "translateX(-100%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                  }}
                className='flex flex-col justify-center my-3 gap-y-7'>
                    { false && 
                        (
                        <NewMenuSoon />
                        )
                    }
                    <h1 className='font-tangerine text-4xl text-dark text-center'>Menu by Chef Dalibor Vidovic</h1>
                </motion.div>
                {menuItems.map((item, index) => {
                    const {headingMax, heading, price, items, price2, price3} = item;
                    return <div key={index}><MenuComponent keys={index} headingMax={headingMax} heading={heading} price={price} items={items} price2={price2} price3={price3}/></div>
                })}
                <motion.div 
                ref={ref2} 
                style={{
                    transform: isInView2 ? "none" : "translateX(-100%)",
                    opacity: isInView2 ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s"
                  }}
                className='flex justify-center mx-8 pt-3'>
                    <p className='font-garamond text-justify text-sm text-dark max-w-[600px] lg:max-w-[850px]'>VAT is included in the price. If you have not
                    received a bill you are not obliged to pay it. Persons under 18 years are prohibited serving and consuming alcoholic beverages. Dear guests, the main ingredients in our food are from Croatia and EU. Also some of our dishes can cause allergic reactions (food containing fish, crabs,
                            shellfish, eggs, milk, nuts, peanuts, celery, sesame, mustard, gluten, and products made of it) so please sign it as soon as possible.</p>
                </motion.div>
            </section>
        </>
    )
}

export default transition(Menu);
