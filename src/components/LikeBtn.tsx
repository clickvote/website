import * as React from 'react';

import { cn } from '@/lib/utils';

import Heart from '~/svg/Heart.svg';

type Props = {
  className?: string;
};

export default function LikeBtn({ className }: Props) {
  return (
    <div
      className={cn(
        'flex items-center gap-[8.42px] rounded-full border-[1px] border-transparent bg-[#FFFFFF29] px-[19px] py-[7px] text-[15px] text-white transition-all hover:border-[1px] hover:border-[#FFFFFF1A] hover:bg-transparent',
        className
      )}
    >
      <Heart className='h-[12px] w-[13px]' loading='lazy' />
      <span>Like</span>
      <div className='h-[16px] w-[1px] bg-[#FFFFFF4D]'></div>
      <span>400</span>
    </div>
  );
}
