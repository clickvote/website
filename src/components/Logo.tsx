import * as React from 'react';

import { cn } from '@/lib/utils';

import LogoSvg from '~/svg/Logo.svg';

type Props = {
  responsive?: boolean;
};

export default function Logo({ responsive = true }: Props) {
  return (
    <div
      className={cn(
        'z-50 flex cursor-pointer items-center',
        responsive ? 'gap-[8.47px] md:gap-[12px]' : 'gap-[12px]'
      )}
    >
      <LogoSvg
        className={cn(
          responsive
            ? 'h-[24px] w-[24px] md:h-[34px] md:w-[34px]'
            : 'h-[34px] w-[34px]'
        )}
        loading='lazy'
      />
      <div
        className={cn(
          ' font-rubik uppercase text-white',
          responsive
            ? 'text-[13px] leading-[17.44px] md:text-[19px] md:leading-[24.7px]'
            : 'text-[19px] leading-[24.7px]'
        )}
      >
        <span className='text-[#FFFFFFB2]'>Click</span>Vote
      </div>
    </div>
  );
}
