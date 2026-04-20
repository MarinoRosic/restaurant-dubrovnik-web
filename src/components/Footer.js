import React from 'react';
import Copyright from './Copyright'
import Socials from './Socials'
import { footerData } from '../data'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Footer = () => {
  const { contact, hours, social } = footerData;
  //const slika = require('../assets/img/about/header-illustration.png'); 
  //const linija = require('../assets/img/footer/footer-top.png')
  return (
    <footer className='bg-dark  w-full top-96  lg:min-h-[620px] lg:bg-center lg:pt-20'>
      {/* <div className=' w-full mx-auto max-h-82 z-10 '>
        <img src={slika} className=' bg-white opacity-5 mx-auto h-72 object-contain justify-center '></img>
        <img src={linija} className=''></img>
      </div> */}
      <div className="-z-30 container h-full mx-auto px-4 py-6">
        <motion.div
          className='bg-dark flex flex-col h-full gap-y-4'>
          <motion.div
            className='flex flex-col lg:flex-row lg:gap-x-12 justify-between gap-y-12 lg:gap-y-0 lg:mb-12'>
            <div className=''>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-white font-baskerville text-xl mb-[22px]'>
                {contact.title}
              </div>
              <div className='capitalize flex flex-row gap-x-2'>
                <span className='font-baskerville'>Address:</span><div className='text-white font-garamond hover:text-red-800'>{contact.address}</div>
              </div>
              <div className='capitalize flex flex-row gap-x-2'>
                <span className='font-baskerville'>Tel.:</span><div className='text-white font-garamond hover:text-red-800'><a href="tel:38520324810">{contact.tel}</a></div>
              </div>
              <div className='capitalize flex flex-row gap-x-2'>
                <span className='font-baskerville'>Mob.:</span><div className='text-white font-garamond hover:text-red-800'><a href="tel:385992585871">{contact.phone}</a></div>
              </div>
              <div className='flex flex-row gap-x-2'>
                <span className='font-baskerville'>Fax:</span><div className='text-white font-garamond hover:text-red-800'><a href="tel:38520324803">{contact.fax}</a></div>
              </div>
              <div className='flex flex-row gap-x-2'>
                <span className='font-baskerville'>E-mail:</span><div className='text-white font-garamond hover:text-red-800'><a href="mailto:restorandubrovnik@gmail.com">restorandubrovnik@gmail.com</a></div>
              </div>
            </div>
            <div className=''>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-white font-baskerville mb-[22px]'>
                {hours.title}
              </div>
              <div className='flex gap-x-[46px]'>
                {hours.program.map((item, index) => {
                  return <div key={index}>
                    <div className='capitalize font-garamond text-xl'>
                      <div>{item.days}</div>
                      <div className='text-[20px] text-red-600'>{item.hours}</div>
                    </div>
                  </div>
                })}</div>
            </div>
            <div className='flex-1 lg:max-w-[280px] mb-8'>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-white font-baskerville mb-[22px]'>
                {social.title}
              </div>
              <Socials />
            </div>
          </motion.div>
          <motion.div
            className=''>
            <h2 className='text-white text-justify font-garamond'>Company: Lokrum d.o.o. | Headquarters: Kliševska 41E, 20 000 Dubrovnik | Registration Court: Commercial Court in Dubrovnik | Registration number (MBS): 090003024 | Bank: OTP BANKA d.d., Split, IBAN: HR9624070001100350223 | Agram Banka d.d., Zagreb, IBAN: HR4024810001129001011 | ERSTE& STEIERMARKISCHE BANK d.d., Rijeka, IBAN: HR8424020061100454107 | Management - Managing Director: Toni Rilović | Capital of the Company: 13,915.76 €, fully paid</h2>
          </motion.div>
          <motion.div
            className='flex flex-row justify-between'>
            <Link className='font-garamond text-lg hover:text-white' to="/privacypolicy" onClick={() => {
              setTimeout(() => { window.scroll(0, 0); }, 300)
            }}>Privacy policy</Link>
            <div className='flex flex-col lg:flex-row text-right'>
              <p className='font-garamond text-lg hover:text-white'><a href="https://www.afdu.dev/" target='_blank' rel='noreferrer'>Powered by <span className='text-red-800'>AFDU&nbsp;</span></a></p>
              {/* <p className='font-garamond text-lg hover:text-white'><a href="https://digidom.hr/" target='_blank' rel='noreferrer'> & <span className='text-red-800'>Digidom</span></a></p> */}
            </div>
          </motion.div>
          <Copyright />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
