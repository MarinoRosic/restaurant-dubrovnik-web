import React, { useEffect, useState } from "react";
import top from "../assets/img/top.svg"
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left:0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 800 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-1 right-1 z-20 cursor-pointer">
      {isVisible && (
        <motion.div
          onClick={scrollToTop}
          className="fixed bg-white rounded-lg bottom-2 right-14 lg:right-16"
          initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              ease: "circIn",
              duration: 0.2,
              x: { duration: 0.6, type: "tween" }
            }} 
        >
          <img className="m-5" src={top} alt=""/>
        </motion.div>
      )}
    </div>
  );
}

export default ScrollToTop;
