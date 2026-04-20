import React, { useEffect, useState} from "react";
import { motion } from "framer-motion";
import {Link, useLocation } from "react-router-dom";
import arrowRight from "../assets/img/arrow-right.png"

const BookATableHelper = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  // Top: 0 takes us all the way back to the top of the page
  const scrollToTop = () => {
    setTimeout(() => {
    window.scrollTo({
        top: 0,
        left:0
        });
    }, 300);
  };

  useEffect(() => {
    // Button is displayed after scrolling for 100 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 90) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-3 left-3 z-20 ">
      {isVisible && location.pathname !== '/bookatable' && location.pathname !== '/confirmreservation' && (
        <motion.div
          onClick={ scrollToTop }
          className="fixed rounded-lg bottom-2 left-3"
          initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{
              ease: "easeIn",
              duration: 1,
              x: { duration: 1.5, type: "spring" }
            }} 
            exit={{
                x: -100,
                opacity: 0
            }}
        >
          <Link to="/bookatable">
            <div className="bg-red-800 rounded-lg px-2 flex flex-row font-secondary font-bold">
                <p className="text-white content-center m-3 text-lg">Book A Table</p>
                <img className=" items-center w-[30px] h-[40px] content-center pt-3" src={arrowRight} alt="" />
            </div>
            </Link>
        </motion.div>
      )}
    </div>
  );
}

export default BookATableHelper;
