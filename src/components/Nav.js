import React from 'react';
import { Link } from 'react-router-dom';
import {navData} from '../data'

const Nav = ({onClick}) => {
  return (
  <nav className='w-full h-full'>
    <ul className='flex flex-col items-center justify-center h-full bg-red-800 gap-y-2 md:gap-y-3 rounded-xl'>
        {navData.map((item, index) => {
          return (<li key={index}>
            <Link className='text-xl text-white uppercase font-baskerville transition-all duration-300 hover:text-dark' 
            to={item.href} onClick={() => { 
              onClick();
              setTimeout(() => {window.scroll(0,0);}, 300)  }}>{item.name}</Link>
          </li>
          );
        })}
    </ul>
  </nav>
  );
};

export default Nav;
