import * as React from 'react';

import BackgreoundSvg from '@/components/svgs/features/Back';

import Circle from '~/svg/Feature/Circle.svg';
import CircleEffect from '~/svg/Feature/CircleEffect.svg';
import Graph from '~/svg/Feature/Graph.svg';
import Line from '~/svg/Feature/Line.svg';

export default function Feature1() {
  return (
    <div className='relative flex w-full items-center'>
      <BackgreoundSvg />

      <div
        className='bg-mask absolute left-[50%] top-0 h-[167px] w-[315px] -translate-x-[50%]'
        style={{
          WebkitMaskImage: `url(/svg/Feature/Mask.svg)`,
        }}
      >
        <Graph className='mt-[-44px] w-[581px] transition duration-200 ease-in group-hover:-translate-x-[81px] group-hover:translate-y-[18px]' />
      </div>
      <div className='absolute left-[195px] top-[73px] transition duration-200 ease-in group-hover:-translate-x-[31px] group-hover:-translate-y-[12px]'>
        <Circle className='z-10 w-[20px]' loading='lazy' />
        <CircleEffect
          className='absolute left-[50%] top-[50%] z-[-1] w-[55px] -translate-x-[50%] -translate-y-[50%]'
          loading='lazy'
        />
        <Line
          className='absolute left-[50%] top-[50%] z-[-1] h-[83px] w-[4px] -translate-x-[50%] transition duration-200 ease-in group-hover:scale-y-[117%]'
          loading='lazy'
        />
      </div>
    </div>
  );
}
