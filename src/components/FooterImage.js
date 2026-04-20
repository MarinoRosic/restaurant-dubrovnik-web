import React from 'react'

function FooterImage() {
    const slika = require('../assets/img/footer/footer-top-illustration.png'); 
    // const linija = require('../assets/img/footer/footer-top.png')
  return (
    <>
    <div className='relative h-[380px] md:h-[370px] flex flex-col'>
      <div className='mx-auto pt-2'>
        <img src={slika} className='h-[400px] pb-6' alt='' loading="lazy" decoding="async"/>
      </div>
    </div> 
  </>
  )
}

export default FooterImage