import * as React from 'react';

import NextImage from '@/components/NextImage';

import Hashtag from '~/svg/Hashtag.svg';

export default function Subscribe() {
  return (
    <div className='mt-[90px] md:mt-[143px]'>
      <div className='relative flex items-center justify-center'>
        <Hashtag
          className='-z-50 h-[209px] w-[206px] md:h-[282px] md:w-[280px]'
          loading='lazy'
        />
        <NextImage
          className='absolute top-[67px] h-[93px] w-[97px] md:top-[91px] md:h-[126px] md:w-[131px]'
          src='/images/Big_Star.webp'
          alt='Big Star'
          width={131}
          height={126}
        />
      </div>
      <div className='text-center md:mt-[11px]'>
        <p className='bg-gradient3 bg-clip-text text-[32px] font-[600] leading-[39.2px] text-transparent md:text-[44px] md:leading-[57.2px]'>
          Subscribe to our <br className='md:hidden' /> blog updates
        </p>
        <p className='mx-[33px] mt-6 text-[19px] font-[400]  leading-[31px] text-[#A7A7A7]'>
          Clickvote’s latest articles, right in your inbox. Keep in touch with
          our news and updates.
        </p>
        <div className='mx-[23px] mt-[32px] flex flex-col items-center justify-center gap-[16px] md:mt-[60px] md:flex-row md:gap-[18px]'>
          <div className='bg-gradient14 w-full max-w-[330px] rounded-[7px] p-[1px] md:w-full'>
            <input
              className='w-full rounded-[7px] border-[1px] border-none bg-[#361f47] px-[22px] py-4 text-white focus:outline-none'
              placeholder='Your email'
            />
          </div>
          <button className='w-full max-w-[330px] rounded-[7px] border-[1px] border-white bg-white px-[48px] py-[16px] text-[16px] leading-[25.6px] text-black transition-all hover:bg-transparent hover:text-white md:w-fit'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
