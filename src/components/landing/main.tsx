import Spline from '@splinetool/react-spline';
import * as React from 'react';

export default function Main() {
  return (
    <div className='relative flex flex-col items-center justify-center pt-[32px] md:pt-[23px]'>
      <Spline
        scene='/spline/cube.spline'
        className='absolute top-[-170px] !h-[130%] !w-[135%] scale-[40%] md:top-[-230px] md:h-[100%] md:w-[100%] md:scale-[65%]'
      />
      <div className='mt-[210px] flex flex-col items-center text-white md:mt-[300px]'>
        <div className='flex flex-col items-center text-center text-[32px] font-[600] leading-[39px] md:text-[50px] md:leading-[70px] lg:text-[71.71px] lg:leading-[93px]'>
          <span className='bg-gradient1 hidden bg-clip-text text-transparent md:flex'>
            Like, Upvote And Review{' '}
          </span>
          <span className='hidden md:flex'>Any Context</span>
          <span className='bg-gradient1 bg-clip-text text-transparent md:hidden'>
            Like, Upvote And <br className='md:hidden' /> Review Any Context
          </span>
        </div>
        <span className='mt-[24px] text-center text-[17px] leading-[30px] md:mt-[11px] md:text-[19px]'>
          Seamlessly Integrate Like, Upvote, and <br className='md:hidden' />{' '}
          Review Components into Your App
        </span>
        <button className='bg-gradient2 mt-[24px] rounded-[7px] border-[1px] border-[#AF46FF] px-[65px] py-[16px] text-[18px] transition-all duration-100 ease-in hover:opacity-70 md:mt-[40px]'>
          Get Started
        </button>
      </div>
    </div>
  );
}
