import React from 'react'
import { useLocation } from "react-router-dom";
const DivSpacer = () => {
    const location = useLocation();
  return (
    <>
        {
            location.pathname === '/' && (
            <div className='h-[650px]  md:h-[370px] lg:h-[390px]'></div>
        )
        }
    </>
  )
}

export default DivSpacer
