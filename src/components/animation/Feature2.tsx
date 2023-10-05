import * as React from 'react';

import NextImage from '@/components/NextImage';
import {
  BackEllipse1,
  BackEllipse2,
  HeartEffect,
  StarEffect,
} from '@/components/svgs/features/2';
import BackgroundSvg from '@/components/svgs/features/Back';

export default function Feature2() {
  return (
    <div className='relative flex w-full items-center'>
      <BackgroundSvg />
      <BackEllipse1 className='absolute bottom-0 left-[50%] -translate-x-[50%]' />
      <BackEllipse2 className='absolute bottom-0 left-[50%] -translate-x-[50%]' />
      <div className='absolute bottom-0 left-[50%] flex -translate-x-[50%] items-end gap-[10px]'>
        <div
          className='bg-gradientRect h-[60px] w-[20px] scale-y-[30%] opacity-0 transition duration-[120ms] ease-in group-hover:scale-y-100 group-hover:opacity-60'
          style={{ transformOrigin: 'bottom' }}
        >
          <NextImage
            className='w-[20.5px] -translate-x-[0.5px] -translate-y-[50%]'
            src='/images/heart.webp'
            alt='Heart'
            width={20.5}
            height={17.26}
          />
        </div>

        <div
          className='relative flex h-[180px] w-[40px] items-end'
          style={{ transformOrigin: 'bottom' }}
        >
          <div className='bg-gradientRect absolute bottom-0 h-[124px] w-[39px] scale-y-[30%] opacity-0 transition duration-[120ms] ease-in group-hover:scale-y-100 group-hover:opacity-100'></div>
          <div className='bg-gradientRect1 absolute bottom-0 mb-[-60px] h-[107px] w-[39px] scale-y-[100%] transition duration-[120ms] ease-in group-hover:scale-y-[130%] group-hover:opacity-0'></div>
          <div className='relative mb-[28px] h-[39px] w-[40px] -translate-x-[1px] transition duration-[120ms] ease-in group-hover:-translate-y-[69px]'>
            <NextImage
              src='/images/star.webp'
              alt='Star'
              width={40}
              height={38.43}
            />
            <StarEffect className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100' />
          </div>
        </div>

        <div
          className='bg-gradientRect h-[111px] w-[20px] scale-y-[30%] opacity-0 transition duration-[160] ease-in group-hover:scale-y-100 group-hover:opacity-60'
          style={{ transformOrigin: 'bottom' }}
        >
          <NextImage
            className='w-[20.5px] -translate-x-[0.5px] -translate-y-[50%]'
            src='/images/heart.webp'
            alt='Heart'
            width={20.5}
            height={17.26}
          />
        </div>

        <div
          className='relative flex h-[180px] w-[40px] items-end'
          style={{ transformOrigin: 'bottom' }}
        >
          <div className='bg-gradientRect absolute bottom-0 h-[151px] w-[39px] scale-y-[30%] opacity-0 transition duration-[120ms] ease-in group-hover:scale-y-100 group-hover:opacity-100'></div>
          <div className='bg-gradientRect1 absolute bottom-0 mb-[-48px] h-[140px] w-[39px] scale-y-[100%] transition duration-[120ms] ease-in group-hover:scale-y-[130%] group-hover:opacity-0'></div>
          <div className='relative mb-[66px] h-[39px] w-[40px] -translate-x-[1px] transition duration-[120ms] ease-in group-hover:-translate-y-[55px]'>
            <NextImage
              src='/images/heart.webp'
              alt='Heart'
              width={40}
              height={34.38}
            />
            <HeartEffect className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100' />
          </div>
        </div>

        <div
          className='bg-gradientRect h-[80px] w-[20px] scale-y-[30%] opacity-0 transition duration-[160] ease-in group-hover:scale-y-100 group-hover:opacity-60'
          style={{ transformOrigin: 'bottom' }}
        >
          <NextImage
            className='w-[21px] -translate-x-[0.5px] -translate-y-[50%]'
            src='/images/star.webp'
            alt='Star'
            width={21}
            height={19.29}
          />
        </div>

        <div
          className='relative flex h-[180px] w-[40px] items-end'
          style={{ transformOrigin: 'bottom' }}
        >
          <div className='bg-gradientRect absolute bottom-0 h-[123px] w-[39px] scale-y-[30%] opacity-0 transition duration-[120ms] ease-in group-hover:scale-y-100 group-hover:opacity-100'></div>
          <div className='bg-gradientRect1 absolute bottom-0 mb-[-37px] h-[90px] w-[39px] scale-y-[100%] transition duration-[120ms] ease-in group-hover:scale-y-[130%] group-hover:opacity-0'></div>
          <div className='relative mb-[25px] h-[39px] w-[40px] -translate-x-[1px] transition duration-[120ms] ease-in group-hover:-translate-y-[70px]'>
            <NextImage
              src='/images/heart.webp'
              alt='Heart'
              width={40}
              height={34.38}
            />
            <HeartEffect className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100' />
          </div>
        </div>

        <div
          className='bg-gradientRect h-[104px] w-[20px] scale-y-[30%] opacity-0 transition duration-[160] ease-in group-hover:scale-y-100 group-hover:opacity-60'
          style={{ transformOrigin: 'bottom' }}
        >
          <NextImage
            className='w-[21px] -translate-x-[0.5px] -translate-y-[50%]'
            src='/images/star.webp'
            alt='Star'
            width={21}
            height={19.29}
          />
        </div>
      </div>
    </div>
  );
}
