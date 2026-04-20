import React, { useState, useEffect } from 'react'
import Warning_icon from '../assets/img/alert-icon.png';
import moment from 'moment';

const endOfYearMonthsArray = ['november', 'december'];
const beginningOfYearMonthsArray = ['january', 'february', 'march'];

const ClosedMonths = () => {
  const currentYear = moment().year();
  const [year1, setYear1] = useState();
  const [year2, setYear2] = useState();
  const currentMonth = moment().locale('en').format('MMMM').toLowerCase();

  useEffect(() => {
    if (endOfYearMonthsArray.includes(currentMonth)) {
      setYear1(currentYear);
      setYear2(currentYear + 1);
    } else if (beginningOfYearMonthsArray.includes(currentMonth)) {
      setYear1(currentYear - 1);
      setYear2(currentYear);
    }
  }, [currentMonth, currentYear])

  return (
    <>
        <section className='flex flex-col justify-center m-5'>
            <div className='bg-white/70 justify-evenly items-center mx-auto max-w-[600px] flex flex-row rounded-xl border-2 p-3 border-red-700/70 border-solid gap-x-3'>
                <div className='flex justify-center mx-2'>
                    <img src={Warning_icon} alt="" className='w-[300px] lg:w-[180px]'/>
                </div>
                <p className='font-garamond text-md text-center italic text-dark'>Restaurant Dubrovnik will be closed from November {year1} until April {year2}. We appreciate your understanding and look forward to welcoming you back in the spring!</p>
            </div>
        </section>
    </>
  )
}

export default ClosedMonths
