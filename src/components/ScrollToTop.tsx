'use client';

import * as React from 'react';

import ArrowUp from '~/svg/ArrowUp.svg';

export default function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight + 100) setVisible(true);
      else setVisible(false);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`hover:bg-gray-6 fixed bottom-7 right-8 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-600 bg-[linear-gradient(180deg,rgba(26,26,26,0.4)_0%,rgba(26,26,26,0.28)_100%)] text-gray-600 backdrop-blur-[5px] transition-colors duration-200 hover:border-white hover:text-white ${
          !visible && 'opacity-0'
        }`}
        onClick={handleClick}
      >
        <ArrowUp className='w-[14px]' loading='lazy' />
      </div>
    </>
  );
}
