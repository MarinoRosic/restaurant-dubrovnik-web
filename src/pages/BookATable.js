import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import transition from '../transition'
import ReservationForm from '../components/ReservationForm'
import { motion } from 'framer-motion'
import ClosedMonths from '../components/ClosedMonths'
import moment from 'moment';

const closedMonthArray = ['november', 'december', 'january', 'february', 'march'];

const BookATable = () => {
  const currentMonth = moment().locale('en').format('MMMM').toLowerCase();
  const [closedMonth, setClosedMonth] = useState(false);

  useEffect(() => {
    if (closedMonthArray.includes(currentMonth)) {
      setClosedMonth(true);
    }
  }, [currentMonth])

  return (
    <>
        <HeaderComponent translate="translateX(-100%)" heading="Book a table"/>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1, type: "tween" }
          }}
        >
          { closedMonth && 
            (
              <ClosedMonths />
            )
          }
        </motion.div>
        <section className='flex flex-col justify-center'>
          <div className='flex flex-col lg:flex-row mx-auto my-7 gap-y-2 lg:gap-x-7'>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1, type: "tween" }
              }} 
            >
              <h3 className='text-2xl font-garamond text-dark'>Tel.:<a href="tel:38520324810" >+385 (0) 20 324 810</a></h3>
            </motion.div> 
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{
              ease: "linear",
              duration: 1.3,
              x: { duration: 1.3, type: "tween" }
              }} 
              >
              <h3 className='text-2xl font-garamond text-dark'>Mob.: <a href="tel:385992585871" >+385 (0) 99 258 5871</a></h3>
            </motion.div>
          </div>
            <ReservationForm />
        </section>
    </>
  )
}

export default transition(BookATable)
