import { motion } from "framer-motion";
import slika from '../src/assets/img/wine-header-illustration.png'

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div 
                className="slide-in z-50"
                initial={{scaleX: 0, transition: { duration: 0.6, ease: "circIn" } }}
                animate={{scaleX: 0, transition: { duration: 1, ease: "circIn" } }}
                exit={{scaleX: 1}}
            >
            <div className=" absolute bottom-0">
                <img className="h-[50vh] w-full object-cover" src={slika} alt="" />
            </div>
            </motion.div>
            <motion.div 
            className="slide-out z-50"
            initial={{scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
            animate={{scaleX: 0, transition: { duration: 0.6, ease: "circIn" } }}
            exit={{scaleX: 0}}
            >
             <div className="absolute bottom-0">
                <img className="h-[50vh] w-full object-cover" src={slika} alt="" />
            </div>
            </motion.div> 
        </>
    );
};

export default transition;