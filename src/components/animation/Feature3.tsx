import * as React from 'react';

import {
  HeartSvg,
  RectSvg,
  StarSvg,
  UpvoteSvg,
} from '@/components/svgs/features/3';
import BackgroundSvg from '@/components/svgs/features/Back';

export default function Feature3() {
  return (
    <div className='relative flex w-full items-center'>
      <BackgroundSvg />
      <div className='absolute top-[42px] flex w-full flex-col items-center justify-center '>
        <div className='flex flex-row items-center justify-center'>
          <RectSvg lightMode className='group-hover:translate-y-[38px]' />
          <RectSvg />
          <HeartSvg className='group-hover:translate-y-[38px]' />
          <RectSvg lightMode className='group-hover:translate-x-[42px]' />
          <RectSvg className='group-hover:-translate-x-[42px]' />
        </div>
        <div className='flex flex-row items-center justify-center'>
          <UpvoteSvg className='group-hover:translate-x-[42px]' />
          <RectSvg
            lightMode
            className='group-hover:-translate-x-[42px] group-hover:-translate-y-[38px]'
          />
          <RectSvg className='group-hover:-translate-y-[38px]' />
          <RectSvg lightMode className='group-hover:translate-x-[42px]' />
          <RectSvg lightMode className='group-hover:translate-y-[36px]' />
        </div>
        <div className='flex flex-row items-center justify-center'>
          <RectSvg className='group-hover:translate-x-[42px]' />
          <RectSvg className='group-hover:translate-x-[42px]' />
          <RectSvg lightMode className='group-hover:-translate-x-[83px]' />
          <StarSvg className='group-hover:-translate-y-[37px]' />
          <RectSvg className='group-hover:-translate-x-[42px]' />
        </div>
      </div>
    </div>
  );
}
