import React from 'react';

import {socialData} from '../data'

const Socials = () => {
  return( 
    <div className='flex gap-x-[15px]'>
      {socialData.map((item, index) => {
        return (
        <a className='border border-red-700 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm text-red-700 hover:text-red-900 hover:border-red-700' href={item.href} key={index}>{item.icon}</a>
        ) 
      })}
    </div>
  );
};

export default Socials;
