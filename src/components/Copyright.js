import React from 'react';
import moment from 'moment';

const Copyright = () => {
  const currentYear = moment().year();
  return (
  <div className='border-t border-white/20 lg:pt-10'>
    <div className='container mx-auto'>
      <div className="py-1 pb-10">
        <p className='text-center text-base font-baskerville'>Copyright &copy; {currentYear} Restoran Dubrovnik</p>
      </div>
    </div>
  </div>
  );
};

export default Copyright;
